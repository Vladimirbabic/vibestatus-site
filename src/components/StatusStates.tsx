const states = [
  {
    name: "Working",
    description: "Claude is thinking",
    color: "bg-accent-orange",
    pulseClass: "animate-pulse-orange",
    borderColor: "border-accent-orange/30",
    glowColor: "bg-accent-orange/20",
  },
  {
    name: "Ready",
    description: "Done, check results",
    color: "bg-accent-green",
    pulseClass: "animate-pulse-green",
    borderColor: "border-accent-green/30",
    glowColor: "bg-accent-green/20",
  },
  {
    name: "Needs Input",
    description: "Claude has a question",
    color: "bg-accent-blue",
    pulseClass: "animate-pulse-blue",
    borderColor: "border-accent-blue/30",
    glowColor: "bg-accent-blue/20",
  },
  {
    name: "Not Running",
    description: "Claude isn&apos;t active",
    color: "bg-accent-gray",
    pulseClass: "",
    borderColor: "border-border-subtle",
    glowColor: "bg-accent-gray/10",
  },
];

export default function StatusStates() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg-secondary to-bg-primary pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-card border border-border-subtle text-text-muted text-sm font-medium mb-6">
            Status Indicators
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Four States. Zero Guessing.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Always know exactly what Claude is doing at a glance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {states.map((state, index) => (
            <div
              key={state.name}
              className={`group relative bg-gradient-to-br from-bg-card via-bg-card to-bg-secondary/30 border ${state.borderColor} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 ${state.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

              <div className="relative">
                {/* Status indicator with ring */}
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full ${state.glowColor} flex items-center justify-center`}>
                      <div
                        className={`w-6 h-6 rounded-full ${state.color} ${state.pulseClass}`}
                      />
                    </div>
                    {/* Outer ring on hover */}
                    <div className={`absolute inset-0 rounded-full border-2 ${state.borderColor} scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                  </div>
                </div>

                <h3 className="text-text-primary font-semibold text-lg mb-1">
                  {state.name}
                </h3>
                <p className="text-text-muted text-sm">{state.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-bg-card border border-border-subtle">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <svg className="w-4 h-4 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
              <span>Sound notifications</span>
            </div>
            <div className="w-px h-4 bg-border-subtle" />
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <div className="w-3 h-3 rounded-full bg-accent-orange animate-pulse" />
              <span>Pulsing animations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
