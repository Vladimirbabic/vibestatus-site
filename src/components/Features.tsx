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
              Always Visible Widget
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Floating widget stays on top of all windows. Drag it anywhere on your screen. Never loses focus while you work.
            </p>
          </div>

          {/* Menu Bar Icon */}
          <div className="group bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-accent-orange/30 transition-all">
            <div className="bg-bg-secondary border border-border-subtle rounded-xl h-40 mb-6 flex items-center justify-center">
              <span className="text-text-muted text-sm">Menu bar graphic</span>
            </div>
            <h3 className="text-text-primary font-semibold text-xl mb-2">
              Menu Bar Icon
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Minimal footprint in your menu bar. Color-coded status at a glance. Click for quick actions and settings.
            </p>
          </div>

          {/* Sound Notifications */}
          <div className="group bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-accent-orange/30 transition-all">
            <div className="bg-bg-secondary border border-border-subtle rounded-xl h-40 mb-6 flex items-center justify-center">
              <span className="text-text-muted text-sm">Sound graphic</span>
            </div>
            <h3 className="text-text-primary font-semibold text-xl mb-2">
              Sound Notifications
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Customizable audio cues when status changes. Never miss when Claude needs you.
            </p>
          </div>

          {/* Multi-Terminal Support */}
          <div className="group bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-accent-orange/30 transition-all">
            <div className="bg-bg-secondary border border-border-subtle rounded-xl h-40 mb-6 flex items-center justify-center">
              <span className="text-text-muted text-sm">Terminal graphic</span>
            </div>
            <h3 className="text-text-primary font-semibold text-xl mb-2">
              Multi-Terminal Support
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Track multiple Claude sessions at once. Aggregated status with session count.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
