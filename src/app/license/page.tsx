import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LicenseChecker from "@/components/LicenseChecker";
import Link from "next/link";

export const metadata: Metadata = {
  title: "License Validation - VibeStatus",
  description: "Validate and check the status of your VibeStatus license key.",
};

export default function LicensePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-green/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-green/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 pt-8 pb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
                License Management
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
                Validate Your License
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">
                Enter your license key to check its status, view activation count, and verify your purchase.
              </p>
            </div>

            {/* License Checker Card */}
            <div className="bg-gradient-to-br from-bg-card via-bg-card to-bg-secondary border border-border-subtle rounded-2xl p-6 md:p-8">
              <LicenseChecker />
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Where to find license key */}
            <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center">
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
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Where&apos;s my license key?
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                After purchasing VibeStatus, you&apos;ll receive an email from Polar with your license key. Check your inbox (and spam folder) for an email with the subject containing &quot;VibeStatus&quot;.
              </p>
            </div>

            {/* How to activate */}
            <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-accent-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  How to activate
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Open VibeStatus on your Mac, go to Preferences, and enter your license key in the License tab. Click &quot;Activate&quot; and you&apos;re all set!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="text-center py-12 border-t border-border-subtle">
            <p className="text-text-muted text-sm mb-4">
              Don&apos;t have a license yet?
            </p>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-orange to-accent-orange/80 rounded-lg text-white font-medium hover:from-accent-orange hover:to-accent-green transition-all"
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Buy VibeStatus — $4.99
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
