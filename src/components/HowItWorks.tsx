const steps = [
  {
    number: "1",
    title: "Download",
    description: "Get the app from GitHub releases",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Click Setup",
    description: "One button configures everything",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Start Coding",
    description: "Claude status appears in your menu bar",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
          Up and Running in Seconds
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          No complex configuration. No manual setup. Just works.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border-subtle" />
              )}

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-bg-card border border-border-subtle text-accent-orange mb-4 relative z-10">
                {step.icon}
              </div>
              <div className="text-text-muted text-sm mb-2">Step {step.number}</div>
              <h3 className="text-text-primary font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-text-muted text-sm max-w-xl mx-auto">
            Uses Claude Code&apos;s hook system to receive status updates.
            <br />
            No polling. No performance impact. Just works.
          </p>
        </div>
      </div>
    </section>
  );
}
