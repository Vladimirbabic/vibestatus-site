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
        next: { revalidate: 300 }, // Revalidate every 5 minutes
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
    month: "long",
    day: "numeric",
  });
}

function parseMarkdown(text: string): string {
  if (!text) return "";

  return text
    // Headers
    .replace(/^### (.+)$/gm, '<h4 class="text-lg font-semibold text-text-primary mt-4 mb-2">$1</h4>')
    .replace(/^## (.+)$/gm, '<h3 class="text-xl font-semibold text-text-primary mt-4 mb-2">$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-text-primary">$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```[\s\S]*?```/g, (match) => {
      const code = match.slice(3, -3).trim();
      return `<pre class="bg-bg-secondary rounded-lg p-3 my-2 overflow-x-auto text-sm"><code>${code}</code></pre>`;
    })
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-bg-secondary px-1.5 py-0.5 rounded text-sm">$1</code>')
    // Lists
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc list-inside">$1</li>')
    .replace(/^\* (.+)$/gm, '<li class="ml-4 list-disc list-inside">$1</li>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent-orange hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // Line breaks
    .replace(/\n\n/g, '</p><p class="mb-3">')
    .replace(/\n/g, '<br />');
}

export default async function ChangelogPage() {
  const releases = await getReleases();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Changelog
            </h1>
            <p className="text-text-secondary text-lg">
              All the latest updates and improvements to VibeStatus.
            </p>
          </div>

          {releases.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-secondary">
                No releases found. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {releases.map((release) => (
                <article
                  key={release.id}
                  className="border-l-2 border-border-subtle pl-6 pb-8 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-orange" />

                  <header className="mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-2xl font-semibold text-text-primary">
                        {release.name || release.tag_name}
                      </h2>
                      {release.prerelease && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-accent-orange/20 text-accent-orange rounded-full">
                          Pre-release
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-text-muted">
                      <time dateTime={release.published_at}>
                        {formatDate(release.published_at)}
                      </time>
                      <a
                        href={release.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent-orange transition-colors"
                      >
                        View on GitHub →
                      </a>
                    </div>
                  </header>

                  <div
                    className="prose prose-invert max-w-none text-text-secondary"
                    dangerouslySetInnerHTML={{
                      __html: `<p class="mb-3">${parseMarkdown(release.body)}</p>`,
                    }}
                  />
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
