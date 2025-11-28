"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import {
  MessageSquare,
  BarChart3,
  TestTube2,
  Terminal,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export interface LandingPageProps {
  variant: "a" | "b" | "c" | "d" | "e" | "f";
  headline: React.ReactNode;
  subheadline: string;
}

export default function LandingPage({ variant, headline, subheadline }: LandingPageProps) {
  return (
    <div className="grain-overlay">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 dotted-grid opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Launching January 2026</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/25"
            >
              Join the Waitlist
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl border border-border hover:bg-muted/50 transition-colors"
            >
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <p className="animate-fade-in-up delay-400 text-sm text-muted-foreground">
            Be first to know when we launch
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              The Problem You Know Too Well
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You can build an MVP in a weekend with AI coding tools. But
              you spend months building the wrong thing.
            </p>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without */}
            <div className="p-8 rounded-2xl border border-destructive/20 bg-destructive/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <span className="text-destructive text-xl">✕</span>
                </div>
                <h3 className="font-semibold text-foreground">Without ValidContext</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  Build for 2 months → Launch → 0 users → Start over
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  &ldquo;Let me ask my friends&rdquo; → Biased feedback → Build wrong thing
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  Generic Claude output → Landing page converts at 15%
                </li>
              </ul>
            </div>

            {/* With */}
            <div className="p-8 rounded-2xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xl">✓</span>
                </div>
                <h3 className="font-semibold text-foreground">With ValidContext</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  Interview 10 people in 3 days → Know exactly what to build
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  Structured methodology → Unbiased insights → Build right thing
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  Context-aware Claude → Landing page converts at 65%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From idea to validated product in days, not months.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute top-8 left-[calc(50%+48px)] hidden lg:block w-[calc(100%-96px)] h-px bg-gradient-to-r from-accent/50 to-transparent" />
                <span className="text-xs font-semibold text-accent mb-2">STEP 1</span>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Interview Customers the Right Way
                </h3>
                <p className="text-muted-foreground text-sm">
                  Get the perfect questions for your idea based on Jobs-to-be-Done
                  methodology. Learn the framework while you work. Know what to
                  build in days, not weeks.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <TestTube2 className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute top-8 left-[calc(50%+48px)] hidden lg:block w-[calc(100%-96px)] h-px bg-gradient-to-r from-accent/50 to-transparent" />
                <span className="text-xs font-semibold text-accent mb-2">STEP 2</span>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Optimize Every Stage of Buying
                </h3>
                <p className="text-muted-foreground text-sm">
                  Test your landing page, emails, and messaging against personas
                  built from your interviews. See what moves them forward at each
                  stage - and what&apos;s holding them back.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <Terminal className="w-8 h-8 text-accent" />
                </div>
                <span className="text-xs font-semibold text-accent mb-2">STEP 3</span>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Build With Context
                </h3>
                <p className="text-muted-foreground text-sm">
                  Connect to our MCP server with one command. Now your AI coding
                  assistant reads your validated customer insights while you build. Every feature
                  matches real customer needs.
                </p>
              </div>
            </div>
          </div>

          {/* Code snippet */}
          <div className="mt-16 p-6 rounded-2xl bg-foreground/5 border border-border font-mono text-sm">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs">Terminal</span>
            </div>
            <code className="text-muted-foreground">
              <span className="text-accent">$</span> claude mcp add validcontext
              <br />
              <span className="text-muted-foreground">? Select transport type:</span> Streamable HTTP
              <br />
              <span className="text-muted-foreground">? Enter server URL:</span> https://validcontext.com/mcp
              <br />
              <span className="text-green-500">✓</span> Opened browser for authentication
              <br />
              <span className="text-green-500">✓</span> Connected to ValidContext
              <br />
              <span className="text-green-500">✓</span> Your AI assistant can now access your validated insights
            </code>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              What You Get
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to validate ideas and build products people
              actually want.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Customer Interview Generator
              </h3>
              <p className="text-muted-foreground text-sm">
                Get the perfect questions for any idea. Learn Jobs-to-be-Done
                while you work.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Interview Analysis
              </h3>
              <p className="text-muted-foreground text-sm">
                Paste your interview notes. Get force profiles, struggling
                moments, customer language patterns. Know if you should build.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <TestTube2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Buying Journey Optimization
              </h3>
              <p className="text-muted-foreground text-sm">
                See how your page performs at each stage of the buying journey.
                Identify what&apos;s pushing visitors forward and what&apos;s holding
                them back - from first thought to decision.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Terminal className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                MCP Integration
              </h3>
              <p className="text-muted-foreground text-sm">
                One command: <code className="px-1.5 py-0.5 rounded bg-muted text-xs">claude mcp add validcontext</code>
                <br />
                Now your AI assistant reads your customer data while you build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent mb-6">
              <Target className="w-4 h-4" />
              <span>Join 200+ Builders</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
              What Builders Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-2xl border border-border bg-card">
              <p className="text-foreground mb-6 italic">
                &ldquo;I validated 3 ideas in one week. Built the one with strongest
                signal. Made first dollar in 10 days.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">A</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Alex</p>
                  <p className="text-xs text-muted-foreground">Solo Founder</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 rounded-2xl border border-border bg-card">
              <p className="text-foreground mb-6 italic">
                &ldquo;The MCP integration is genius. Claude now writes copy using
                actual customer language from my interviews.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">S</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Sarah</p>
                  <p className="text-xs text-muted-foreground">Technical Founder</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 rounded-2xl border border-border bg-card">
              <p className="text-foreground mb-6 italic">
                &ldquo;73% predicted conversion, 68% actual. This thing works.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">M</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Mike</p>
                  <p className="text-xs text-muted-foreground">Indie Hacker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-muted/30 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="Do I need to know Jobs-to-be-Done methodology?"
              answer="Nope. The platform teaches you while you work. You'll learn by doing."
            />
            <FAQItem
              question="How accurate are the landing page tests?"
              answer="70%+ correlation with real conversion rates in our validation study."
            />
            <FAQItem
              question="What AI coding tools does this work with?"
              answer="Any tool that supports MCP (Model Context Protocol) - Claude Code, Cursor, Windsurf, and more."
            />
            <FAQItem
              question="What if I don't have customers to interview yet?"
              answer="Test with people who have your target problem. We show you how to find them."
            />
            <FAQItem
              question="How is this different from UserTesting or Maze?"
              answer="We connect validation to building. UserTesting costs $26K/year and stops at insights. We take you from interview to launched product."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="waitlist" className="py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent mb-8">
            <Zap className="w-4 h-4" />
            <span>Launching January 2026</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Build Products
            <br />
            <span className="text-accent">People Actually Want?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Be first to know when we launch.
          </p>

          {/* Waitlist Form */}
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}

// FAQ Item Component
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl bg-background overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  );
}

// Waitlist Form Component
function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  // Reset Turnstile widget
  const resetTurnstile = () => {
    if (typeof window !== "undefined" && (window as any).turnstile && turnstileRef.current) {
      (window as any).turnstile.reset(turnstileRef.current);
    }
    setTurnstileToken(null);
  };

  // Set up Turnstile callback - just store the token
  useEffect(() => {
    (window as any).onTurnstileCallback = (token: string) => {
      setTurnstileToken(token);
    };
    (window as any).onTurnstileError = () => {
      setErrorMessage("Verification failed. Please refresh and try again.");
      setStatus("error");
    };
    return () => {
      delete (window as any).onTurnstileCallback;
      delete (window as any).onTurnstileError;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!turnstileToken) {
      setErrorMessage("Please wait for verification to complete");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, turnstileToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          setErrorMessage("You're already on the list!");
          setStatus("success");
          setEmail("");
          return;
        }
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Waitlist signup error:", error);
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
      setStatus("error");
      resetTurnstile();
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 rounded-2xl border border-accent/20 bg-accent/5 max-w-md mx-auto">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-accent text-2xl">✓</span>
        </div>
        <h3 className="font-semibold text-lg text-foreground mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-sm text-muted-foreground">
          We&apos;ll email you when we launch. Thanks for your interest!
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                Joining...
              </>
            ) : (
              <>
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
        {/* Cloudflare Turnstile - only shows if challenge needed */}
        <div
          ref={turnstileRef}
          className="cf-turnstile mt-3 flex justify-center"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          data-callback="onTurnstileCallback"
          data-error-callback="onTurnstileError"
          data-size="flexible"
          data-appearance="interaction-only"
        />
        {status === "error" && errorMessage && (
          <p className="text-sm text-destructive mt-3">{errorMessage}</p>
        )}
        <p className="text-xs text-muted-foreground mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </>
  );
}
