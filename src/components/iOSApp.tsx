export default function IOSApp() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              iOS Companion App
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
              Go AFK.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-green">
                Stay in Control.
              </span>
            </h2>

            <p className="text-lg text-text-secondary mb-8">
              Step away from your desk — grab coffee, take a walk, touch grass. When Claude needs you, you&apos;ll get a push notification with the full message. Reply from your phone and it goes straight to your local terminal session.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  ),
                  title: "AFK Push Notifications",
                  description: "Step away while Claude works. Get notified instantly when it needs you.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  ),
                  title: "Full Message Preview",
                  description: "Read Claude's complete latest message right on your phone",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  ),
                  title: "Reply to Your Terminal",
                  description: "Respond from your phone — it appears in your local terminal session",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">{item.title}</h3>
                    <p className="text-text-secondary text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border-subtle rounded-xl text-text-muted text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Coming Soon to App Store
              </span>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[280px] h-[580px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Inner bezel */}
                <div className="relative w-full h-full bg-bg-primary rounded-[2.5rem] overflow-hidden border border-border-subtle">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-zinc-900 rounded-b-2xl z-10" />

                  {/* Screen content */}
                  <div className="h-full pt-10 px-4 pb-8 flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-accent-orange to-accent-orange/80 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-text-primary font-semibold text-sm">VibeStatus</h3>
                    </div>

                    {/* Session cards */}
                    <div className="space-y-3 flex-1">
                      {/* Active session */}
                      <div className="bg-bg-card border border-accent-green/30 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-accent-green" />
                          <span className="text-text-primary text-xs font-medium">Project A</span>
                          <span className="text-text-muted text-xs ml-auto">Ready</span>
                        </div>
                        <p className="text-text-secondary text-xs line-clamp-2">
                          Done! I&apos;ve updated the API endpoint and added error handling...
                        </p>
                      </div>

                      {/* Working session */}
                      <div className="bg-bg-card border border-accent-orange/30 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
                          <span className="text-text-primary text-xs font-medium">Project B</span>
                          <span className="text-text-muted text-xs ml-auto">Working</span>
                        </div>
                        <p className="text-text-secondary text-xs line-clamp-2">
                          Running tests for the new authentication module...
                        </p>
                      </div>

                      {/* Reply box */}
                      <div className="mt-auto pt-4">
                        <div className="bg-bg-secondary border border-border-subtle rounded-xl p-3 flex items-center gap-2">
                          <span className="text-text-muted text-xs flex-1">Reply to Claude...</span>
                          <div className="w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification popup */}
              <div className="absolute -top-4 -right-4 z-20 bg-bg-card border border-border-subtle rounded-2xl p-3 shadow-xl max-w-[200px] animate-bounce-slow">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-orange flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-primary text-xs font-medium">Claude finished</p>
                    <p className="text-text-muted text-xs">Project A is ready for review</p>
                  </div>
                </div>
              </div>

              {/* Background glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-accent-blue/20 via-transparent to-accent-orange/20 blur-3xl -z-10 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
