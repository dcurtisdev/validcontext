import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

async function verifyTurnstile(token: string): Promise<boolean> {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
      }),
    }
  );
  const data = await response.json();
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const { email, turnstileToken } = await request.json();

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Captcha verification required" },
        { status: 400 }
      );
    }

    const isValidCaptcha = await verifyTurnstile(turnstileToken);
    if (!isValidCaptcha) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    await prisma.waitlistEntry.create({
      data: {
        email: email.toLowerCase().trim(),
        source: "landing_page",
      },
    });

    return NextResponse.json(
      { message: "Successfully joined the waitlist" },
      { status: 201 }
    );
  } catch (error: unknown) {
    // Handle duplicate email (Prisma unique constraint error)
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
