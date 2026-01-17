"use client";

import { useState } from "react";

const screenshots = [
  {
    id: "working",
    name: "Working",
    color: "bg-accent-orange",
  },
  {
    id: "ready",
    name: "Ready",
    color: "bg-accent-green",
  },
  {
    id: "input",
    name: "Needs Input",
    color: "bg-accent-blue",
  },
  {
    id: "setup",
    name: "Menu Bar",
    color: "bg-accent-gray",
  },
];

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
          See It in Action
        </h2>

        {/* Main Screenshot Area */}
        <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 mb-8">
          <div className="aspect-video bg-bg-primary rounded-xl flex items-center justify-center border border-border-subtle">
            {/* Placeholder for actual screenshot/gif */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-2xl ${screenshots[activeIndex].color} flex items-center justify-center`}>
                  <div className="w-8 h-8 rounded-full bg-white/20" />
                </div>
              </div>
              <p className="text-text-secondary mb-2">
                {screenshots[activeIndex].name} State
              </p>
              <p className="text-text-muted text-sm">
                Screenshot placeholder - Add actual app screenshots here
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.id}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                activeIndex === index
                  ? "bg-bg-card border border-border-subtle"
                  : "hover:bg-bg-card/50"
              }`}
            >
              <div className={`w-4 h-4 rounded-full ${screenshot.color}`} />
              <span className="text-xs text-text-secondary">
                {screenshot.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
