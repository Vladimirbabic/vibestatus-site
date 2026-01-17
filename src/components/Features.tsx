export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
          Everything You Need
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          If you&apos;re running Claude in terminal, this is the app for you
        </p>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Always Visible Widget */}
          <div className="group bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-accent-orange/30 transition-all">
            <div className="bg-bg-secondary border border-border-subtle rounded-xl h-40 mb-6 flex items-center justify-center">
              <span className="text-text-muted text-sm">Widget graphic</span>
            </div>
            <h3 className="text-text-primary font-semibold text-xl mb-2">
              See Claude Status Instantly
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Real-time updates keep you informed without switching windows. Floating widget stays on top and goes wherever you need it.
            </p>
          </div>

          {/* Menu Bar Icon */}
          <div className="group bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-accent-orange/30 transition-all">
            <div className="bg-bg-secondary border border-border-subtle rounded-xl h-40 mb-6 flex items-center justify-center">
              <span className="text-text-muted text-sm">Menu bar graphic</span>
            </div>
            <h3 className="text-text-primary font-semibold text-xl mb-2">
              Minimal Menu Bar Icon
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Get status at a glance without distraction. Color-coded indicator lives quietly in your menu bar until you need it.
            </p>
          </div>

          {/* Sound Notifications */}
          <div className="group bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-accent-orange/30 transition-all">
            <div className="bg-bg-secondary border border-border-subtle rounded-xl h-40 mb-6 flex items-center justify-center">
              <span className="text-text-muted text-sm">Sound graphic</span>
            </div>
            <h3 className="text-text-primary font-semibold text-xl mb-2">
              Custom Alerts
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Know immediately when Claude needs you, even if you&apos;re focused in another app. Customizable sounds for each status change.
            </p>
          </div>

          {/* Multi-Terminal Support */}
          <div className="group bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-accent-orange/30 transition-all">
            <div className="bg-bg-secondary border border-border-subtle rounded-xl h-40 mb-6 flex items-center justify-center">
              <span className="text-text-muted text-sm">Terminal graphic</span>
            </div>
            <h3 className="text-text-primary font-semibold text-xl mb-2">
              Run Multiple Sessions
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Stay productive across all your projects. Track multiple Claude sessions at once with aggregated status and counts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
