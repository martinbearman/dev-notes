import { hookNotes } from "../../../data/react-hooks";

export default function HooksPage() {
  return (
    <section className="stack">
      <div className="panel">
        <p className="eyebrow">React / Hooks</p>
        <h1>Hook Reference</h1>
        <p className="muted">
          Write short, practical summaries in your own words so you can revisit
          quickly while coding.
        </p>
      </div>

      <div className="stack">
        {hookNotes.map((note) => (
          <article key={note.name} className="panel note">
            <h2>{note.name}</h2>
            <p className="muted">{note.summary}</p>
            <p className="snippet">{note.signature}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
