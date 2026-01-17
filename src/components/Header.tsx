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
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-accent-orange" />
          </div>
          <span className="font-semibold text-lg text-text-primary">VibeStatus</span>
        </div>
        <a
          href="https://github.com/AmbientRun/VibeStatus/releases/latest"
          className="px-4 py-2 bg-text-primary text-bg-primary rounded-lg font-medium text-sm hover:bg-text-secondary transition-colors"
        >
          Download
        </a>
      </div>
    </header>
  );
}
