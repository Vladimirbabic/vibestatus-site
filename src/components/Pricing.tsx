export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Free. Open Source. Forever.
        </h2>
        <p className="text-text-secondary mb-12">
          No subscriptions. No hidden costs. No catch.
        </p>

        <div className="inline-block bg-bg-card border border-border-subtle rounded-2xl p-8 max-w-sm mx-auto">
          <div className="text-6xl font-bold text-text-primary mb-6">$0</div>

          <ul className="space-y-3 text-left mb-8">
            <li className="flex items-center gap-3 text-text-secondary">
              <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>All features included</span>
            </li>
            <li className="flex items-center gap-3 text-text-secondary">
              <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Unlimited use</span>
            </li>
            <li className="flex items-center gap-3 text-text-secondary">
              <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No data collection</span>
            </li>
            <li className="flex items-center gap-3 text-text-secondary">
              <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Open source on GitHub</span>
            </li>
          </ul>

          <a
            href="https://github.com/AmbientRun/VibeStatus/releases/latest"
            className="block w-full py-3 bg-text-primary text-bg-primary rounded-xl font-semibold hover:bg-text-secondary transition-colors"
          >
            Download Now
          </a>
        </div>

        <p className="text-text-muted mt-8 text-sm">
          Built with love for the vibe coding community
        </p>
      </div>
    </section>
  );
}
