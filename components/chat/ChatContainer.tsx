'use client'

import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { Message } from "./types";

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedResponse, setStreamedResponse] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change or during streaming
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, streamedResponse]);

  const handleSendMessage = async (content: string) => {
    // Add user message to chat
    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    setIsStreaming(true);
    setStreamedResponse("");
    
    try {
      // Send to API with streaming
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get response: ${response.status}`);
      }
      
      if (!response.body) {
        throw new Error('ReadableStream not supported');
      }
      
      // Handle the streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedResponse = "";
      
      try {
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) {
            break;
          }
          
          // Decode the chunk
          const chunk = decoder.decode(value, { stream: true });
          
          // Process SSE data chunks
          const lines = chunk.split('\n\n');
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.substring(6);
              
              if (data === '[DONE]') {
                // Stream complete, finalize the message
                const assistantMessage: Message = { 
                  role: 'assistant', 
                  content: accumulatedResponse 
                };
                setMessages(prev => [...prev, assistantMessage]);
                setStreamedResponse("");
                setIsStreaming(false);
                setIsLoading(false);
                return; // Exit early once we're done
              }
              
              try {
                const parsedData = JSON.parse(data);
                if (parsedData.content) {
                  accumulatedResponse += parsedData.content;
                  setStreamedResponse(accumulatedResponse);
                } else if (parsedData.error) {
                  console.error('Stream error:', parsedData.error);
                  throw new Error(parsedData.error);
                }
              } catch (e) {
                console.error('Error parsing SSE data:', e);
              }
            }
          }
        }
      } catch (streamError) {
        console.error('Stream processing error:', streamError);
        // If we have partial content, still show it to the user
        if (accumulatedResponse) {
          const assistantMessage: Message = { 
            role: 'assistant', 
            content: accumulatedResponse + "\n\n[Connection interrupted. Message may be incomplete.]"
          };
          setMessages(prev => [...prev, assistantMessage]);
        } else {
          throw streamError; // Re-throw if we have no content to show
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      // Set all states to their initial values in case the above resets didn't trigger
      setIsLoading(false);
      setIsStreaming(false);
      setStreamedResponse("");
    }
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <ScrollArea ref={scrollAreaRef} className="flex-1 rounded-md border p-4">
        {messages.length === 0 && !streamedResponse ? (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <p>Start a conversation with the AI assistant</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <ChatMessage 
                key={index} 
                message={message} 
                isUser={message.role === 'user'} 
              />
            ))}
            {isStreaming && streamedResponse && (
              <ChatMessage 
                message={{ content: streamedResponse }} 
                isUser={false}
                isStreaming={true}
              />
            )}
          </div>
        )}
      </ScrollArea>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}
