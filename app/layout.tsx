import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ValidContext - Stop Building Products Nobody Wants",
  description:
    "Validate ideas through customer interviews, then build with Claude Code using those insights. The AI PM Copilot for vibe coders.",
  openGraph: {
    title: "ValidContext - Stop Building Products Nobody Wants",
    description:
      "Validate ideas through customer interviews, then build with Claude Code using those insights.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValidContext - Stop Building Products Nobody Wants",
    description:
      "Validate ideas through customer interviews, then build with Claude Code using those insights.",
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
                      href="#faq"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      FAQ
                    </Link>
                  </div>

                  {/* Right side - CTA + Theme */}
                  <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    <button
                      data-tally-open={process.env.NEXT_PUBLIC_TALLY_FORM_ID}
                      data-tally-width="400"
                      data-tally-emoji-animation="none"
                      className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                    >
                      Join Waitlist
                    </button>
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
                        <span className="text-sm text-muted-foreground/60">
                          Blog (Coming Soon)
                        </span>
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
                  <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
