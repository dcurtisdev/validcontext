'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

interface TodoFormProps {
  onAddTodo: (content: string) => Promise<void>;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      setIsLoading(true);
      await onAddTodo(content);
      setContent('');
      toast.success('Todo added successfully');
    } catch (error) {
      toast.error('Failed to add todo!');
      console.error('Error adding todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full space-x-2">
      <Input
        type="text"
        placeholder="Add a new todo..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
        className="flex-1"
      />
      <Button type="submit" disabled={isLoading || !content.trim()}>
        Add
      </Button>
    </form>
  );
}
