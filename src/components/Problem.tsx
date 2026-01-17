export default function Problem() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-secondary border border-border-subtle text-text-muted text-sm font-medium mb-6">
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The Vibe Coding Problem
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            You know the drill. Claude is working, and you&apos;re stuck wondering when to check back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Without VibeStatus */}
          <div className="group relative bg-gradient-to-br from-bg-card to-bg-card/50 border border-border-subtle rounded-2xl p-8 hover:border-red-500/20 transition-all duration-300">
            {/* Subtle red glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Without VibeStatus
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Constantly tab back and forth to check",
                  "Interrupt your flow to monitor terminal",
                  "Miss prompts while doing other work",
                  "Waste time waiting when Claude is done",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-red-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* With VibeStatus */}
          <div className="group relative bg-gradient-to-br from-bg-card to-bg-card/50 border border-accent-green/30 rounded-2xl p-8 hover:border-accent-green/50 transition-all duration-300">
            {/* Green glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent rounded-2xl" />
            <div className="absolute -inset-px bg-gradient-to-br from-accent-green/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20">
                  <div className="w-3 h-3 rounded-full bg-accent-green animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  With VibeStatus
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Glance at widget from any app",
                  "See status instantly in menu bar",
                  "Hear notification when input needed",
                  "Stay in flow while Claude works",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
