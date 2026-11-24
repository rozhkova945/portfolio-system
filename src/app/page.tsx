import { Button } from "@/components/Button/Button";
import { Navigation } from "@/components/Navigation/Navigation";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "CV ↗", href: "#cv" },
];
const projects = ["WellBite", "Love App", "MindfullMood", "FlowMetrics"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas text-ink">
      <div className="mx-auto flex w-full max-w-page flex-1 flex-col px-6 pb-8 lg:px-8">
        <Navigation
          logo="Yaroslava Rozhkova"
          items={navItems}
          ctaLabel="Let’s talk ↗"
          ctaHref="#contact"
        />
        <hr className="border-line" />

        <header className="flex flex-1 flex-col pt-8">
          <div className="flex justify-between">
            <span className="text-label">UX/UI DESIGNER</span>
            <span className="text-caption text-ink-muted">PORTFOLIO / 2026</span>
          </div>
          <h1 className="mt-8 text-display">
            I design mobile apps <br className="hidden lg:inline" />
            and web platforms <br className="hidden lg:inline" />
            for <em className="not-italic text-accent">everyday</em> use.
          </h1>
          <p className="mt-6 text-lead text-ink-muted">
            Tracking. Recommendations. Small rituals.
          </p>
          <div className="mt-auto flex flex-wrap items-start justify-between gap-6 pt-8">
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="#work">View selected work ↓</Button>
              <Button size="lg" variant="secondary" href="#contact">Get in touch ↗</Button>
            </div>
            <div className="flex flex-col gap-3 text-button">
              <p>
                <span className="text-accent">•</span>&nbsp; Open to project &amp; full-time roles
              </p>
              <p className="text-ink-muted">Remote &amp; on-site opportunities</p>
            </div>
          </div>
        </header>

        <hr id="work" className="mt-8 border-line" />
        <section className="flex flex-wrap justify-between gap-6 pt-8">
          <div className="flex flex-col gap-4">
            <p className="text-label">SELECTED WORK</p>
            <p className="text-button text-ink-muted">Four concepts. Mobile, web &amp; data.</p>
          </div>
          <ul className="flex flex-wrap gap-6 text-heading lg:gap-8">
            {projects.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
