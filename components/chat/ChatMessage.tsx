import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ChatMessageProps } from "./types";

export function ChatMessage({ message, isUser, isStreaming = false }: ChatMessageProps) {
  return (
    <div className={cn("flex w-full items-start gap-4 p-4", 
      isUser ? "justify-end" : "justify-start")}>
      
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn("flex max-w-[80%] flex-col gap-2 rounded-lg p-4",
        isUser 
          ? "bg-primary text-primary-foreground" 
          : "bg-muted"
      )}>
        <p className="text-sm">{message.content}</p>
        {isStreaming && (
          <span className="ml-1 inline-block h-4 w-1.5 animate-blink bg-current opacity-70"></span>
        )}
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
