"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border-subtle" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/vibestatus.png" alt="VibeStatus" className="w-8 h-8" />
          <span className="font-semibold text-lg text-text-primary">VibeStatus</span>
        </a>
        <div className="flex items-center gap-6">
          <a
            href="/changelog"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Changelog
          </a>
          <a
            href="https://github.com/Vladimirbabic/vibestatus/releases/latest/download/VibeStatus.zip"
            className="px-4 py-2 bg-text-primary text-bg-primary rounded-lg font-medium text-sm hover:bg-text-secondary transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
