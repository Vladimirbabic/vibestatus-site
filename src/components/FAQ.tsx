"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does VibeStatus work with Claude in the browser?",
    answer:
      "No, VibeStatus is specifically designed for Claude Code (the CLI/terminal version). It uses Claude Code's hook system to receive status updates.",
  },
  {
    question: "Does VibeStatus impact Mac performance?",
    answer:
      "Not at all. VibeStatus is extremely lightweight (~2MB) and uses virtually no CPU. It simply reads status files that Claude Code writes — no heavy background processes.",
  },
  {
    question: "Can I customize when and how I get notified?",
    answer:
      "Yes! Click the gear icon in the menu bar dropdown to access settings. You can choose different sounds for each status change, adjust volumes, or disable sounds entirely.",
  },
  {
    question: "Is VibeStatus secure and private?",
    answer:
      "Absolutely. VibeStatus is 100% local — no analytics, no tracking, no network requests. Your data never leaves your Mac. The source code is open on GitHub for full transparency.",
  },
  {
    question: "How does VibeStatus handle multiple Claude sessions?",
    answer:
      'It tracks all sessions automatically and shows an aggregated status with the count (e.g., "Working (3)"). If any session needs input, that takes priority so you never miss a prompt.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-bg-secondary/50 transition-colors"
              >
                <span className="text-text-primary font-medium pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-text-secondary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
