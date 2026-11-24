import styles from "./page.module.css";

const projects = ["WellBite", "Love App", "MindfullMood", "FlowMetrics"];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <nav className={styles.nav}>
          <a className={styles.logo} href="#">
            YAROSLAVA
            <br />
            ROZHKOVA
          </a>
          <div className={styles.links}>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#cv">CV ↗</a>
            <a className={styles.primary} href="#contact">
              Let’s talk ↗
            </a>
          </div>
        </nav>
        <hr className={styles.rule} />

        <header className={styles.hero}>
          <div className={styles.meta}>
            <span className={styles.label}>UX/UI DESIGNER</span>
            <span className={styles.muted}>PORTFOLIO / 2026</span>
          </div>
          <h1 className={styles.title}>
            I design mobile apps <br className={styles.br} />
            and web platforms <br className={styles.br} />
            for <em>everyday</em> use.
          </h1>
          <p className={styles.tagline}>Tracking. Recommendations. Small rituals.</p>
          <div className={styles.row}>
            <div className={styles.actions}>
              <a className={styles.primary} href="#work">
                View selected work ↓
              </a>
              <a className={styles.ghost} href="#contact">
                Get in touch ↗
              </a>
            </div>
            <div className={styles.availability}>
              <p>
                <span className={styles.dot}>•</span>&nbsp; Open to project &amp; full-time roles
              </p>
              <p className={styles.muted}>Remote &amp; on-site opportunities</p>
            </div>
          </div>
        </header>

        <hr className={styles.rule} id="work" />
        <section className={styles.work}>
          <div>
            <p className={styles.label}>SELECTED WORK</p>
            <p className={styles.muted}>Four concepts. Mobile, web &amp; data.</p>
          </div>
          <ul className={styles.index}>
            {projects.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
