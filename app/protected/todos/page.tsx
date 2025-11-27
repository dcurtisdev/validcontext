import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import TodoList from "@/components/TodoList";

export default async function ProtectedTodosPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-8 items-center">
      <div className="w-full max-w-4xl px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Todos</h1>
          <div className="flex gap-2">
            <Link href="/protected">
              <Button variant="outline">Back to Protected</Button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto">
          <TodoList />
        </div>
      </div>
    </div>
  );
}
