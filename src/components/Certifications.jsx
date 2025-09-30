import { FaAws } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const CERTIFICATIONS = [
  {
    title: "AWS Academy Cloud Foundations",
    certificate: "/aws-cloud-foundations.pdf",
    icon: FaAws,
    description:
      "AWS fundamentals: core services, security, and billing.",
    skills: ["AWS", "Cloud Architecture", "DevOps", "Security"]
  },
  {
    title: "AWS Developer - Associate",
    certificate: "/aws-cloud-developer.pdf",
    icon: FaAws,
    description:
      "Building serverless and event-driven applications on AWS.",
    skills: ["AWS", "Cloud Development", "API Development", "Serverless"]
  },
  {
    title: "AWS Solutions Architect - Associate",
    certificate: "/aws-cloud-architect.pdf",
    icon: FaAws,
    description:
      "Designing available, secure, and cost-optimized architectures.",
    skills: ["AWS", "Cloud Fundamentals", "EC2", "S3"]
  },
  {
    title: "International Journal Publication",
    certificate: "https://www.ijceds.com/ijceds/article/view/89",
    label: "View Article",
    icon: HiOutlineDocumentText,
    description:
      "Peer-reviewed paper: methodology, results, and discussion."
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
        {CERTIFICATIONS.map(({ title, certificate, label, description, skills, icon: Icon }) => (
          <article className="card cert-card" key={title}>
            <h3 className="cert-title">
              {Icon && (
                <span className="cert-icon" aria-hidden="true">
                  <Icon />
                </span>
              )}
              <span>{title}</span>
            </h3>

            {description && <p className="muted" style={{ marginTop: 8 }}>{description}</p>}

            {Array.isArray(skills) && skills.length > 0 && (
              <ul className="skills" style={{ marginTop: 12 }}>
                {skills.map((s) => (
                  <li key={s} className="skill">
                    {s}
                  </li>
                ))}
              </ul>
            )}

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
