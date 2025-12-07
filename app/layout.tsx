import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ValidContext - You Can Build Anything. Now Know What to Build.",
  description:
    "Professional customer discovery, accessible to every builder. Validate ideas through structured interviews, then build with AI coding tools using those insights.",
  keywords: ["customer discovery", "product validation", "jobs to be done", "JTBD", "customer interviews", "MCP", "AI coding", "vibe coding"],
  authors: [{ name: "ValidContext" }],
  creator: "ValidContext",
  openGraph: {
    title: "ValidContext - You Can Build Anything. Now Know What to Build.",
    description:
      "Professional customer discovery, accessible to every builder. Context flows to your AI tools automatically.",
    type: "website",
    siteName: "ValidContext",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValidContext - You Can Build Anything. Now Know What to Build.",
    description:
      "Professional customer discovery, accessible to every builder. Context flows to your AI tools automatically.",
  },
  alternates: {
    canonical: "https://validcontext.com",
  },
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://validcontext.com/#organization",
                  name: "ValidContext",
                  url: "https://validcontext.com",
                  logo: "https://validcontext.com/favicon.ico",
                  description: "Professional customer discovery, accessible to every builder.",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://validcontext.com/#website",
                  url: "https://validcontext.com",
                  name: "ValidContext",
                  publisher: { "@id": "https://validcontext.com/#organization" },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://validcontext.com/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Do I need to know Jobs-to-be-Done methodology?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Nope. The platform teaches you while you work. You'll learn by doing.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How accurate are the landing page tests?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "70%+ correlation with real conversion rates in our validation study.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What AI coding tools does this work with?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Any tool that supports MCP (Model Context Protocol) - Claude Code, Cursor, Windsurf, and more.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What if I don't have customers to interview yet?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Test with people who have your target problem. We show you how to find them.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How is this different from UserTesting or Maze?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We connect validation to building. UserTesting costs $26K/year and stops at insights. We take you from interview to launched product.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                      <span className="text-accent-foreground font-bold text-sm">V</span>
                    </div>
                    <span className="font-semibold text-foreground tracking-tight">
                      ValidContext
                    </span>
                  </Link>

                  {/* Center Nav Links */}
                  <div className="hidden md:flex items-center gap-8">
                    <Link
                      href="#how-it-works"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      How It Works
                    </Link>
                    <Link
                      href="#features"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Features
                    </Link>
                    <Link
                      href="/blog"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Blog
                    </Link>
                    <Link
                      href="#faq"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      FAQ
                    </Link>
                  </div>

                  {/* Right side - CTA + Theme */}
                  <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    <Link
                      href="#waitlist"
                      className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                    >
                      Join Waitlist
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 pt-16">{children}</main>

            {/* Footer */}
            <footer className="border-t border-border/40 bg-muted/30">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Brand */}
                  <div className="md:col-span-2">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                        <span className="text-accent-foreground font-bold text-sm">V</span>
                      </div>
                      <span className="font-semibold text-foreground tracking-tight">
                        ValidContext
                      </span>
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      The AI PM Copilot for vibe coders. Validate ideas before you build,
                      then build with Claude Code using those insights.
                    </p>
                  </div>

                  {/* Links */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#how-it-works"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          How It Works
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#features"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#faq"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* More Links */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/blog"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <span className="text-sm text-muted-foreground/60">
                          Documentation (Coming Soon)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} ValidContext. All rights reserved.
                  </p>
                  <a
                    href="mailto:hello@fullstackproduct.build"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hello@fullstackproduct.build
                  </a>
                  <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
