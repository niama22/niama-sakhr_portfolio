import { useState } from "react";
import { projects } from "../data/projects";

const PAGE_SIZE = 3;

export default function Projects() {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = projects.slice(start, start + PAGE_SIZE);

  const goto = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <section id="projects" className="section">
      <h2>My Recent <span className="accent">Works</span></h2>
      <p className="lead">Here are a few recent projects.</p>

      <div className="grid cards">
        {visible.map((p) => (
          <article className="card project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.stack.split(",").map((tag) => (
                <span key={tag} className="tag">{tag.trim()}</span>
              ))}
            </div>
            <div className="row">
              {p.links.github && (
                <a className="btn small" href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {p.links.demo && (
                <a className="btn small ghost" href={p.links.demo} target="_blank" rel="noreferrer">Demo</a>
              )}
              {p.links.article && (
                <a className="btn small ghost" href={p.links.article} target="_blank" rel="noreferrer">Publication</a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn" onClick={() => goto(page - 1)} disabled={page === 1} aria-label="Previous">&#8249;</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-btn ${page === i + 1 ? "active" : ""}`}
            onClick={() => goto(i + 1)}
            aria-label={`Page ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
        <button className="page-btn" onClick={() => goto(page + 1)} disabled={page === totalPages} aria-label="Next">&#8250;</button>
      </div>
    </section>
  );
}
