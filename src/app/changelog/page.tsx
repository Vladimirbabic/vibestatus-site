import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog - VibeStatus",
  description: "See what's new in VibeStatus. Release notes and updates.",
};

interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  prerelease: boolean;
  draft: boolean;
}

async function getReleases(): Promise<GitHubRelease[]> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/Vladimirbabic/vibestatus/releases",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      return [];
    }

    const releases: GitHubRelease[] = await res.json();
    return releases.filter((r) => !r.draft);
  } catch {
    return [];
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

function parseMarkdown(text: string): string {
  if (!text) return "";

  return text
    .replace(/^### (.+)$/gm, '<h4 class="text-base font-semibold text-text-primary mt-5 mb-2 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>$1</h4>')
    .replace(/^## (.+)$/gm, '<h3 class="text-lg font-semibold text-text-primary mt-5 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-medium text-text-primary">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/```[\s\S]*?```/g, (match) => {
      const code = match.slice(3, -3).trim();
      return `<pre class="bg-bg-primary/50 border border-border-subtle rounded-lg p-3 my-3 overflow-x-auto text-sm font-mono"><code>${code}</code></pre>`;
    })
    .replace(/`([^`]+)`/g, '<code class="bg-bg-primary/50 border border-border-subtle px-1.5 py-0.5 rounded text-sm font-mono text-accent-orange">$1</code>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 py-1"><span class="w-1.5 h-1.5 rounded-full bg-text-muted mt-2 flex-shrink-0"></span><span>$1</span></li>')
    .replace(/^\* (.+)$/gm, '<li class="flex items-start gap-2 py-1"><span class="w-1.5 h-1.5 rounded-full bg-text-muted mt-2 flex-shrink-0"></span><span>$1</span></li>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent-orange hover:text-accent-orange/80 underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n\n/g, '</p><p class="mb-3">')
    .replace(/\n/g, "<br />");
}

export default async function ChangelogPage() {
  const releases = await getReleases();
  const latestRelease = releases[0];

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-orange/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-orange/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 pt-8 pb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
                </span>
                Actively Maintained
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
                Changelog
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">
                New updates and improvements to VibeStatus. Follow along as we build the best Claude Code companion for macOS.
              </p>
            </div>

            {/* Latest release highlight */}
            {latestRelease && (
              <div className="bg-gradient-to-br from-accent-orange/10 via-bg-card to-bg-card border border-accent-orange/20 rounded-2xl p-6 md:p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-accent-orange text-bg-primary text-sm font-semibold rounded-lg">
                      Latest
                    </span>
                    <h2 className="text-2xl font-bold text-text-primary">
                      {latestRelease.name || latestRelease.tag_name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span>{formatDate(latestRelease.published_at)}</span>
                    <a
                      href={latestRelease.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent-orange hover:underline"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div
                  className="text-text-secondary leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: `<p class="mb-3">${parseMarkdown(latestRelease.body)}</p>`,
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Previous releases */}
        {releases.length > 1 && (
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-border-subtle"></span>
              Previous Releases
              <span className="flex-1 h-px bg-border-subtle"></span>
            </h2>

            <div className="space-y-4">
              {releases.slice(1).map((release, index) => (
                <article
                  key={release.id}
                  className="group bg-bg-card border border-border-subtle rounded-xl p-6 hover:border-border-subtle/80 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 bg-bg-secondary border border-border-subtle text-text-secondary text-sm font-mono rounded-md">
                        {release.tag_name}
                      </span>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {release.name || release.tag_name}
                      </h3>
                      {release.prerelease && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20">
                          Pre-release
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-muted">
                      <span title={formatDate(release.published_at)}>
                        {getRelativeTime(release.published_at)}
                      </span>
                      <a
                        href={release.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-text-muted hover:text-accent-orange"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div
                    className="text-text-secondary text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `<p class="mb-3">${parseMarkdown(release.body)}</p>`,
                    }}
                  />
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {releases.length === 0 && (
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center py-20 bg-bg-card border border-border-subtle rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">No releases yet</h3>
              <p className="text-text-secondary">
                Check back soon for updates!
              </p>
            </div>
          </div>
        )}

        {/* Subscribe CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="text-center py-12 border-t border-border-subtle">
            <p className="text-text-muted text-sm mb-4">
              Want to stay updated?
            </p>
            <a
              href="https://github.com/Vladimirbabic/vibestatus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-card border border-border-subtle rounded-lg text-text-primary font-medium hover:border-accent-orange/30 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
