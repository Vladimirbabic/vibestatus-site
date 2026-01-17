const features = [
  {
    title: "See Claude Status Instantly",
    description:
      "Real-time updates keep you informed without switching windows. Floating widget stays on top and goes wherever you need it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "accent-orange",
    preview: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-accent-orange/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-accent-orange animate-pulse-orange" />
          </div>
          <div className="absolute -top-2 -right-2 px-2 py-1 bg-bg-primary border border-border-subtle rounded-md text-xs text-text-secondary">
            Working
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Minimal Menu Bar Icon",
    description:
      "Get status at a glance without distraction. Color-coded indicator lives quietly in your menu bar until you need it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    color: "accent-green",
    preview: (
      <div className="flex items-center justify-center h-full">
        <div className="bg-bg-primary/80 backdrop-blur border border-border-subtle rounded-lg px-4 py-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-green" />
            <span className="text-sm text-text-primary font-medium">VibeStatus</span>
          </div>
          <div className="w-px h-4 bg-border-subtle" />
          <span className="text-xs text-text-muted">Ready</span>
        </div>
      </div>
    ),
  },
  {
    title: "Custom Alerts",
    description:
      "Know immediately when Claude needs you, even if you're focused in another app. Customizable sounds for each status change.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    color: "accent-blue",
    preview: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="bg-bg-primary border border-accent-blue/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg shadow-accent-blue/10">
            <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-accent-blue animate-pulse" />
            </div>
            <div>
              <div className="text-sm font-medium text-text-primary">Needs Input</div>
              <div className="text-xs text-text-muted">Claude has a question</div>
            </div>
          </div>
          {/* Sound wave effect */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex gap-0.5">
            <div className="w-0.5 h-3 bg-accent-blue/60 rounded-full animate-pulse" />
            <div className="w-0.5 h-5 bg-accent-blue/40 rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
            <div className="w-0.5 h-4 bg-accent-blue/20 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Run Multiple Sessions",
    description:
      "Stay productive across all your projects. Track multiple Claude sessions at once with aggregated status and counts.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    color: "accent-orange",
    preview: (
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col gap-2">
          {[
            { name: "Project A", status: "Working", color: "bg-accent-orange" },
            { name: "Project B", status: "Ready", color: "bg-accent-green" },
            { name: "Project C", status: "Working", color: "bg-accent-orange" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-bg-primary border border-border-subtle rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs"
            >
              <div className={`w-2 h-2 rounded-full ${item.color} ${item.status === "Working" ? "animate-pulse" : ""}`} />
              <span className="text-text-secondary">{item.name}</span>
              <span className="text-text-muted ml-auto">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-secondary border border-border-subtle text-text-muted text-sm font-medium mb-6">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Everything You Need
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            If you&apos;re running Claude in terminal, this is the app for you
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-bg-card via-bg-card to-bg-secondary/50 border border-border-subtle rounded-2xl p-6 hover:border-accent-orange/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Preview area */}
                <div className="bg-bg-secondary/50 border border-border-subtle rounded-xl h-40 mb-6 overflow-hidden">
                  {feature.preview}
                </div>

                {/* Icon and title */}
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-${feature.color}/10 border border-${feature.color}/20 flex items-center justify-center text-${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
