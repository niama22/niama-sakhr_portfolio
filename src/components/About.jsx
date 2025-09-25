export default function About() {
  return (
    <section id="about" className="section">
      <h2>
        About <span className="accent">Me</span>
      </h2>
      <div className="about-grid">
        <article className="card about-card">
          <p className="about-intro">
            Passionate engineering student building end-to-end solutions across full-stack development,
            DevOps automation, and data engineering pipelines.
          </p>
          <div className="about-chips">
            <span className="about-chip">Full-Stack</span>
            <span className="about-chip">DevOps</span>
            <span className="about-chip">Data Engineering</span>
          </div>
          <ul className="bullets about-list">
            <li>ENSA El Jadida &mdash; Ingenierie Informatique et Technologies Emergentes (2023&nbsp;&ndash;&nbsp;Present)</li>
            <li>CPGE Moulay Al Hassan &mdash; Maths/Physics (2021&nbsp;&ndash;&nbsp;2023)</li>
            <li>Focus areas: Big Data, Full-Stack delivery, DevOps automation</li>
          </ul>
          <p className="muted about-tools">
            Daily toolbox: React/Next.js, Spring Boot, Docker, Kubernetes, Jenkins, AWS, Hadoop/Spark/Kafka,
            plus BI workflows with Power BI, Talend, Pentaho and Qlik.
          </p>
        </article>

        <aside className="about-photo card">
          <img src="/niama_pink.jpg" alt="Niama Sakhr portrait" />
          <div className="about-photo-caption">
            <span className="label">Based in Morocco</span>
            <span className="value">Open to global collaborations</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
