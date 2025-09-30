import { useState } from "react";
import { projects } from "../data/projects";

const PAGE_SIZE = 3;
const FILTERS = ["Tous", "Web", "Mobile", "DevOps", "BI", "ML"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [page, setPage] = useState(1);

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((project) => project.categories?.includes(activeFilter));

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const goto = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setPage(1);
  };

  return (
    <section id="projects" className="section">
      <h2>Mes <span className="accent">Projets</span></h2>
      <p className="lead">Découvrez mes réalisations par domaine.</p>

      <div className="filters" role="tablist" aria-label="Filtrer les projets">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => handleFilter(filter)}
            role="tab"
            aria-selected={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid cards">
        {visible.map((project) => {
          const badge = (project.badge || project.categories?.[0] || "").toUpperCase();

          return (
            <article className="card project-card" key={project.title}>
              {project.image && (
                <div className="project-thumb">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  {badge && <span className="project-badge">{badge}</span>}
                </div>
              )}

              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tags">
                {project.stack.split(",").map((tag) => (
                  <span key={tag} className="tag">{tag.trim()}</span>
                ))}
              </div>

              <div className="row">
                {project.links.github && (
                  <a className="btn small" href={project.links.github} target="_blank" rel="noreferrer">Code</a>
                )}
                {project.links.demo && (
                  <a className="btn small ghost" href={project.links.demo} target="_blank" rel="noreferrer">Demo</a>
                )}
                {project.links.article && (
                  <a className="btn small ghost" href={project.links.article} target="_blank" rel="noreferrer">Publication</a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="muted">Aucun projet pour cette catégorie pour l'instant.</p>
      )}

      <div className="pagination">
        <button className="page-btn" onClick={() => goto(safePage - 1)} disabled={safePage === 1} aria-label="Précédent">&#8249;</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-btn ${safePage === i + 1 ? "active" : ""}`}
            onClick={() => goto(i + 1)}
            aria-label={`Page ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
        <button className="page-btn" onClick={() => goto(safePage + 1)} disabled={safePage === totalPages} aria-label="Suivant">&#8250;</button>
      </div>
    </section>
  );
}
