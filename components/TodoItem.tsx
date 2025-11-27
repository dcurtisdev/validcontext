'use client';

import { useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => Promise<void>;
  onToggle: (id: string, completed: boolean) => Promise<void>;
}

export default function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleToggle = async () => {
    try {
      setIsLoading(true);
      await onToggle(todo.id, !todo.completed);
    } catch (error) {
      toast.error('Failed to update todo');
      console.error('Error toggling todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await onDelete(todo.id);
    } catch (error) {
      toast.error('Failed to delete todo');
      console.error('Error deleting todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <Checkbox 
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={handleToggle}
          disabled={isLoading}
        />
        <label 
          htmlFor={`todo-${todo.id}`}
          className={`text-sm ${todo.completed ? 'line-through text-muted-foreground' : ''}`}
        >
          {todo.content}
        </label>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={handleDelete}
        disabled={isLoading}
      >
        Delete
      </Button>
    </div>
  );
}
