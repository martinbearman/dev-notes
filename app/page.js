export default function HomePage() {
  return (
    <section className="dashboard-content">
      <div className="hero-card">
        <p className="eyebrow">Personal Learning Dashboard</p>
        <h1>Welcome</h1>
        <p className="muted hero-copy">
          This is a simple holding page for now. Use it as your intro area and a
          place to keep track of topics you want to learn or focus on next.
        </p>
      </div>

      <section className="deep-dive">
        <h2>Pinned Topics</h2>
        <div className="insight-grid">
          <article className="insight-card">
            <h3>Current Focus</h3>
            <ul>
              <li>React hooks and state management</li>
              <li>Next.js routing and layouts</li>
              <li>Testing basics (unit + integration)</li>
            </ul>
          </article>
        </div>
      </section>
    </section>
  );
}
