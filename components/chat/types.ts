export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export interface ChatMessageProps {
  message: Message | { content: string };
  isUser: boolean;
  isStreaming?: boolean;
}

export interface ChatContainerProps {
  // Add any props you might need
}
