import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

// Helper function to validate if an email is allowed
const isEmailAllowed = (email: string): boolean => {
  const allowedEmail = process.env.ALLOWED_EMAIL;
  // If the environment variable is not set, allow all emails (for development purposes)
  if (!allowedEmail) {
    console.warn('ALLOWED_EMAIL is not set. All emails are allowed.');
    return true;
  }
  return email.toLowerCase() === allowedEmail.toLowerCase();
};

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();
  const checkAllowedEmail = requestUrl.searchParams.get("check_allowed_email") === "true";

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
    
    // Check if we need to validate the email after OAuth sign-in
    if (checkAllowedEmail) {
      const { data: { user } } = await supabase.auth.getUser();
      
      // If the user's email is not allowed, sign them out and redirect to sign-in page with error
      if (user && !isEmailAllowed(user.email || '')) {
        await supabase.auth.signOut();
        return NextResponse.redirect(`${origin}/sign-in?error=${encodeURIComponent("Sign-in is not allowed for this email address")}`);
      }
    }
  }

  if (redirectTo) {
    return NextResponse.redirect(`${origin}${redirectTo}`);
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/protected`);
}
