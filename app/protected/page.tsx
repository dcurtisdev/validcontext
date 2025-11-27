import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-4">Example Applications</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/protected/todos" 
            className="flex-1 p-6 bg-accent hover:bg-accent/80 rounded-lg transition-all shadow-sm border border-muted"
          >
            <h3 className="font-bold text-lg mb-2">Todo App</h3>
            <p className="text-sm text-foreground/80">
              A simple todo application to manage your tasks with Supabase storage.
            </p>
          </a>
          <a 
            href="/protected/chat" 
            className="flex-1 p-6 bg-accent hover:bg-accent/80 rounded-lg transition-all shadow-sm border border-muted"
          >
            <h3 className="font-bold text-lg mb-2">Chat App</h3>
            <p className="text-sm text-foreground/80">
              Real-time chat application powered by Supabase realtime subscriptions.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
