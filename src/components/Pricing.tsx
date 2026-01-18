import PolarCheckout from "./PolarCheckout";

export default function Pricing() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-sm font-medium mb-6">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          One-Time Purchase
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          One-time purchase. No subscription.
        </h2>
        <p className="text-text-secondary mb-12 max-w-xl mx-auto">
          Pay once, own forever. No recurring fees. No hidden costs. Built by developers, for developers.
        </p>

        {/* Pricing card */}
        <div className="relative inline-block">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-orange via-accent-green to-accent-blue rounded-3xl blur-lg opacity-20" />

          <div className="relative bg-gradient-to-br from-bg-card via-bg-card to-bg-secondary border border-border-subtle rounded-2xl p-8 max-w-sm mx-auto">
            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-6xl font-bold text-text-primary">$4.99</span>
                <span className="text-text-muted">/one-time</span>
              </div>
            </div>

            {/* Features list */}
            <ul className="space-y-4 text-left mb-8">
              {[
                "All features unlocked",
                "Lifetime license",
                "No data collection",
                "License key via email",
                "Future updates included",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-green/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - Polar Checkout */}
            <PolarCheckout />
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-text-muted mt-10 text-sm flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            Built with love
          </span>
          <span>for the vibe coding community</span>
        </p>
      </div>
    </section>
  );
}
