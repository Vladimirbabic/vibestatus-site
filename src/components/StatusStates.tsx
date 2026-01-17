const states = [
  {
    name: "Working",
    description: "Claude is thinking",
    color: "bg-accent-orange",
    pulseClass: "animate-pulse-orange",
    borderColor: "border-accent-orange/30",
  },
  {
    name: "Ready",
    description: "Done, check results",
    color: "bg-accent-green",
    pulseClass: "animate-pulse-green",
    borderColor: "border-accent-green/30",
  },
  {
    name: "Needs Input",
    description: "Claude asked you a question",
    color: "bg-accent-blue",
    pulseClass: "animate-pulse-blue",
    borderColor: "border-accent-blue/30",
  },
  {
    name: "Not Running",
    description: "Claude isn&apos;t running",
    color: "bg-accent-gray",
    pulseClass: "",
    borderColor: "border-border-subtle",
  },
];

export default function StatusStates() {
  return (
    <section className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
          Four States. Zero Guessing.
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Always know exactly what Claude is doing at a glance
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {states.map((state) => (
            <div
              key={state.name}
              className={`bg-bg-card border ${state.borderColor} rounded-xl p-6 text-center hover:scale-105 transition-transform`}
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`w-6 h-6 rounded-full ${state.color} ${state.pulseClass}`}
                />
              </div>
              <h3 className="text-text-primary font-semibold mb-2">
                {state.name}
              </h3>
              <p className="text-text-muted text-sm">{state.description}</p>
            </div>
          ))}
        </div>

        <p className="text-text-muted text-center mt-8 text-sm">
          Sound notifications &bull; Pulsing animations
        </p>
      </div>
    </section>
  );
}
