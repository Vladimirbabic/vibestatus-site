export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-accent-orange" />
            </div>
            <span className="font-semibold text-text-primary">VibeStatus</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="https://github.com/AmbientRun/VibeStatus/releases/latest"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Download
            </a>
            <a
              href="https://github.com/AmbientRun/VibeStatus"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/AmbientRun/VibeStatus/blob/main/CHANGELOG.md"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Changelog
            </a>
            <a
              href="https://github.com/AmbientRun/VibeStatus/issues"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Report Issue
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border-subtle text-center">
          <p className="text-text-muted text-sm mb-2">
            Stay focused. Ship faster. Vibe harder.
          </p>
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} VibeStatus &bull; Not affiliated with Anthropic
          </p>
        </div>
      </div>
    </footer>
  );
}
