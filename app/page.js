import Link from "next/link";

const sections = [
  {
    title: "React",
    description: "Document concepts, hooks, and patterns in your own words.",
    href: "/react"
  }
];

export default function HomePage() {
  return (
    <section className="stack">
      <div className="panel hero">
        <p className="eyebrow">Developer Workspace</p>
        <h1>Your Personal Dev Notes</h1>
        <p className="muted">
          A lightweight, mint-themed knowledge base for summarizing tools,
          functions, and framework ideas as you learn.
        </p>
      </div>

      <div className="grid">
        {sections.map((section) => (
          <article key={section.title} className="panel card">
            <h2>{section.title}</h2>
            <p className="muted">{section.description}</p>
            <Link className="button" href={section.href}>
              Open Section
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
