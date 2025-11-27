import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ChatContainer } from "@/components/chat/ChatContainer";

export const metadata = {
  title: "AI Chat",
  description: "Chat with an AI assistant powered by OpenAI",
};

export default async function ProtectedChatPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <main className="container mx-auto flex min-h-screen flex-col gap-8 py-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">AI Chat Assistant</h1>
          <p className="text-muted-foreground">
            Chat with an AI assistant powered by OpenAI
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/protected">
            <Button variant="outline">Back to Protected</Button>
          </Link>
        </div>
      </div>
      
      <div className="flex h-[70vh] flex-col rounded-lg border">
        <ChatContainer />
      </div>
    </main>
  );
}
