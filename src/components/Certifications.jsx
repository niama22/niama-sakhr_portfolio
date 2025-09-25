const CERTIFICATIONS = [
  {
    title: "AWS Academy Cloud Foundations",
    certificate: "/aws-cloud-foundations.pdf"
  },
  {
    title: "AWS Developer – Associate",
    certificate: "/aws-cloud-developer.pdf"
  },
  {
    title: "AWS Solutions Architect – Associate",
    certificate: "/aws-cloud-architect.pdf"
  },
  {
    title: "International Journal Publication",
    certificate: "https://www.ijceds.com/ijceds/article/view/89",
    label: "View Article"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2>
        My <span className="accent">Certifications</span>
      </h2>
      <p className="lead">Quick links to the credentials and publications I actively maintain.</p>

      <div className="grid cards" style={{ marginTop: 24 }}>
        {CERTIFICATIONS.map(({ title, certificate, label }) => (
          <article className="card cert-card" key={title}>
            <h3>{title}</h3>
            <div className="cert-card-footer">
              <a className="btn small" href={certificate} target="_blank" rel="noreferrer">
                {label || "View Certificate"}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
