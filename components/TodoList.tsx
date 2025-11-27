'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Separator } from './ui/separator';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface Todo {
  id: string;
  content: string;
  completed: boolean;
  created_at: string;
  user_id: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Get the current user ID when component mounts
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
      }
    };
    
    getCurrentUser();
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Check if Supabase client is available
      if (!supabase) {
        throw new Error('Supabase client is not available. Please check your environment variables.');
      }
      
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTodos(data || []);
    } catch (error: any) {
      console.error('Error fetching todos:', error);
      setError(error.message);
      toast.error('Failed to load todos: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (content: string) => {
    console.log(`adding todo: ${content}`);
    try {
      // Debug toast that will appear in UI
      toast.info('Starting addTodo operation...');
      
      // Check if Supabase client is available
      if (!supabase) {
        throw new Error('Supabase client is not available. Please check your environment variables.');
      }
      
      // Check if we have a user ID
      if (!userId) {
        throw new Error('User is not authenticated. Please sign in.');
      }
      
      // Show authentication info in UI
      const session = await supabase.auth.getSession();
      const hasSession = !!session.data.session;
      const sessionUserId = session.data.session?.user?.id;
      
      toast.info(`Auth debug: Session exists: ${hasSession}, User ID match: ${sessionUserId === userId}`);
      
      // Create the request with debug tracing
      toast.info(`Attempting to insert todo with content: "${content}"`);
      
      try {
        const { data, error } = await supabase
          .from('todos')
          .insert([{ content, user_id: userId }])
          .select()
          .single();

        if (error) {
          // Show error in UI
          toast.error(`Supabase error: ${error.code || ''} - ${error.message || 'No message'}`);
          throw error;
        }
        
        toast.success('Todo added successfully!');
        setTodos([data, ...todos]);
        return data;
      } catch (insertError: any) {
        // Create a visible UI message with the error details
        toast.error(`Insert error: ${insertError.code || 'No code'}`);
        toast.error(`Message: ${insertError.message || 'No message'}`);
        toast.error(`Details: ${insertError.details || 'No details'}`);
        
        // Also try to directly inspect the error object
        toast.error(`Error type: ${typeof insertError}`);
        
        if (insertError.status) {
          toast.error(`HTTP Status: ${insertError.status}`);
        }
        
        throw insertError;
      }
    } catch (error: any) {
      // Catch-all error handler with visible UI feedback
      toast.error(`Failed to add todo: ${error.message || error.details || 'Unknown error'}`);
      throw error;
    }
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    try {
      // Check if Supabase client is available
      if (!supabase) {
        throw new Error('Supabase client is not available. Please check your environment variables.');
      }
      
      const { error } = await supabase
        .from('todos')
        .update({ completed })
        .eq('id', id);

      if (error) throw error;
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed } : todo
      ));
    } catch (error: any) {
      console.error('Error toggling todo:', error);
      toast.error('Failed to update todo: ' + error.message);
      throw error;
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      // Check if Supabase client is available
      if (!supabase) {
        throw new Error('Supabase client is not available. Please check your environment variables.');
      }
      
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error: any) {
      console.error('Error deleting todo:', error);
      toast.error('Failed to delete todo: ' + error.message);
      throw error;
    }
  };

  // Show error state if there's an issue with Supabase connection
  if (error && !isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Error</CardTitle>
          <CardDescription>There was a problem connecting to the database</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">{error}</p>
          <button 
            onClick={fetchTodos} 
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Try Again
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
        <CardDescription>Manage your daily tasks efficiently</CardDescription>
      </CardHeader>
      <CardContent>
        <TodoForm onAddTodo={addTodo} />
        
        <Separator className="my-4" />
        
        {isLoading ? (
          <p className="text-center py-4 text-muted-foreground">Loading todos...</p>
        ) : todos.length === 0 ? (
          <p className="text-center py-4 text-muted-foreground">No todos yet. Add one above!</p>
        ) : (
          <div className="space-y-1">
            {todos.map((todo) => (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
