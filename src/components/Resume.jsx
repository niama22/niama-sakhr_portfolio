const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Groupe GMD - Tangier",
    period: "Summer 2025",
    bullets: [
      "Conceived StageLink, an AI-assisted internship matchmaking platform with NLP screening and a conversational assistant for candidates.",
      "Built secure REST APIs, dashboards, and automated workflows that reduced manual placement effort for the HR team."
    ],
    stack: ["React", "Spring Boot", "MySQL", "Python (NLP)", "Rasa"]
  },
  {
    role: "Web Developer Intern",
    company: "Groupe GMD - Tangier",
    period: "Summer 2024",
    bullets: [
      "Designed and built an inventory management platform that centralizes tracking of items, zones, racks, and bins.",
      "Enabled real-time stock visibility with structured organization and intuitive dashboards.",
    
    ],
    stack: ["React", "C# .NET", "SQL Server"]
  }
];

export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <p className="lead">Download a detailed CV or skim the highlights of my recent experience.</p>

      <div className="resume-actions">
        <a className="btn" href="/CV_SAKHR_Niama.pdf" target="_blank" rel="noreferrer">
          Open CV
        </a>
        <a className="btn ghost" href="/CV_SAKHR_Niama.pdf" download>
          Download CV
        </a>
      </div>

      <div className="resume-timeline">
        {experiences.map(({ role, company, period, bullets, stack }) => (
          <article className="card resume-card" key={`${role}-${period}`}>
            <header className="resume-card__header">
              <div>
                <h3 className="resume-card__title">{role}</h3>
                <p className="resume-meta">{company}</p>
              </div>
              <span className="resume-period">{period}</span>
            </header>

            <ul className="resume-points">
              {bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="resume-stack">
              {stack.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}




