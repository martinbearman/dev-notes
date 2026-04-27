import Link from "next/link";
import { reactCategories } from "../../data/react-categories";

export default function ReactPage() {
  return (
    <section className="stack">
      <div className="panel">
        <p className="eyebrow">Category</p>
        <h1>React Notes</h1>
        <p className="muted">
          Organize React ideas as concise references. Start with hooks, then add
          patterns, APIs, and performance notes.
        </p>
      </div>

      <div className="grid">
        {reactCategories.map((category) => (
          <article key={category.slug} className="panel card">
            <h2>{category.title}</h2>
            <p className="muted">{category.description}</p>
            <Link className="button" href={category.href}>
              View Notes
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
