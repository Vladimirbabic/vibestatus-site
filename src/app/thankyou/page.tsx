import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You! - VibeStatus",
  description: "Thank you for purchasing VibeStatus!",
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-green/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-green/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative max-w-2xl mx-auto px-6 pt-8 pb-16 text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-green/20 border border-accent-green/30">
                <svg
                  className="w-10 h-10 text-accent-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
              Thank You!
            </h1>
            <p className="text-text-secondary text-lg mb-8">
              Your purchase was successful. You&apos;re awesome!
            </p>

            {/* Info Card */}
            <div className="bg-gradient-to-br from-bg-card via-bg-card to-bg-secondary border border-border-subtle rounded-2xl p-6 md:p-8 text-left mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Check your email
              </h2>
              <p className="text-text-secondary mb-4">
                We&apos;ve sent you an email with a link to your <span className="text-text-primary font-medium">Customer Portal</span>. There you&apos;ll find your license key.
              </p>

              <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-4 mb-4">
                <h3 className="text-sm font-medium text-text-primary mb-2">To activate VibeStatus:</h3>
                <ol className="text-sm text-text-secondary space-y-2">
                  <li className="flex gap-2">
                    <span className="text-accent-orange font-medium">1.</span>
                    Open the Customer Portal from your email
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-orange font-medium">2.</span>
                    Copy your license key
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-orange font-medium">3.</span>
                    Open VibeStatus → Preferences → License
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-orange font-medium">4.</span>
                    Paste your key and click Activate
                  </li>
                </ol>
              </div>

              <p className="text-text-muted text-sm">
                Can&apos;t find the email? Check your spam folder or{" "}
                <Link href="/license" className="text-accent-orange hover:underline">
                  validate your license here
                </Link>
                .
              </p>
            </div>

            {/* Personal Note */}
            <div className="bg-gradient-to-br from-accent-orange/10 via-bg-card to-bg-card border border-accent-orange/20 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent-orange"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    You just made a vibe coder very happy!
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Your purchase brings me one step closer to my goal of earning <span className="text-accent-orange font-semibold">$1,000</span> from building small but useful products. Every sale means the world to me and motivates me to keep building tools that make developers&apos; lives better. Thank you for believing in indie software!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/download-latest/VibeStatus.zip"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-orange to-accent-orange/80 hover:from-accent-orange hover:to-accent-green text-white font-semibold rounded-xl transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download VibeStatus
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bg-card border border-border-subtle hover:border-accent-orange/30 text-text-primary font-medium rounded-xl transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
