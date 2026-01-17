export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-orange/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
              </span>
              For Claude Code in Terminal
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]">
              Claude Status at a Glance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-accent-green">
                Without Tabbing Out
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-4 max-w-2xl">
              A tiny macOS widget that shows Claude Code&apos;s status in real-time.
              Never miss a prompt again.
            </p>
            <p className="text-text-muted mb-10">
              macOS 13+ &bull; Free Forever
            </p>

            <a
              href="https://github.com/Vladimirbabic/vibestatus/releases/latest/download/VibeStatus.zip"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent-orange to-accent-orange/80 text-white rounded-xl font-semibold text-base hover:shadow-lg hover:shadow-accent-orange/25 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download for macOS — It&apos;s Free
            </a>

            {/* Social proof */}
            <div className="mt-8 pt-8 border-t border-border-subtle flex items-center gap-6 text-sm text-text-muted justify-center lg:justify-start flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20">
                  <svg className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Vibe Coded</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20">
                  <svg className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>100% Local</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20">
                  <svg className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>No Tracking</span>
              </div>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="lg:flex-[1.4] w-full">
            <div className="relative lg:scale-[1.4] lg:origin-left">
              {/* Video container */}
              <div className="relative bg-gradient-to-br from-bg-card via-bg-card to-bg-secondary border border-border-subtle rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Background glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-accent-orange/20 via-transparent to-accent-green/20 blur-3xl -z-10 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
