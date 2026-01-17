import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibestatus.app"),
  title: "VibeStatus - Claude Code Status for macOS Menu Bar",
  description: "A tiny macOS widget that shows Claude Code's real-time status. Never miss a prompt again. Free and open source.",
  keywords: ["Claude", "Claude Code", "macOS", "menu bar", "status", "vibe coding", "AI coding assistant"],
  authors: [{ name: "VibeStatus" }],
  openGraph: {
    title: "VibeStatus - Know When Claude Needs You",
    description: "A tiny macOS widget for Claude Code status. Free forever.",
    url: "https://vibestatus.app",
    siteName: "VibeStatus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeStatus - Claude Code Status Widget",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeStatus - Claude Code Status for macOS",
    description: "Never miss a Claude prompt again.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
