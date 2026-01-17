export default function Problem() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
          The Vibe Coding Problem
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Without VibeStatus */}
          <div className="bg-bg-card border border-border-subtle rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <h3 className="text-lg font-semibold text-text-secondary">
                Without VibeStatus
              </h3>
            </div>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Constantly tab back and forth to check</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Interrupt your flow to monitor terminal</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Miss prompts while doing other work</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Waste time waiting when Claude is done</span>
              </li>
            </ul>
          </div>

          {/* With VibeStatus */}
          <div className="bg-bg-card border border-accent-green/30 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-accent-green" />
              <h3 className="text-lg font-semibold text-text-primary">
                With VibeStatus
              </h3>
            </div>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Glance at widget from any app</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>See status instantly in menu bar</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hear notification when input needed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Stay in flow while Claude works</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
