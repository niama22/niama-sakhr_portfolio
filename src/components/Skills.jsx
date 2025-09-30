import { useState } from "react";
import * as SI from "react-icons/si";

const SKILLS = [
  // Languages
  { name: "Java", iconKey: "SiOpenjdk", desc: "Backend, OOP" },
  { name: "Python", iconKey: "SiPython", desc: "Scripting, NLP" },
  { name: "C#", iconKey: "SiDotnet", desc: "Backend, Desktop" },
  { name: "JavaScript", iconKey: "SiJavascript", desc: "Frontend/Node" },
  { name: "SQL", iconKey: null, desc: "Queries, modeling" },
  // Development
  { name: "ReactJS", iconKey: "SiReact", desc: "SPA, hooks, state" },
  { name: "Next.js", iconKey: "SiNextdotjs", desc: "SSR/SSG, routing" },
  { name: "React Native", iconKey: "SiReact", desc: "Mobile cross-platform" },
  { name: "Android (Java/Kotlin)", iconKey: "SiAndroid", desc: "Native apps" },
  { name: "Spring Boot", iconKey: "SiSpring", desc: "REST APIs, Security" },
  // Databases
  { name: "MySQL", iconKey: "SiMysql", desc: "Schema & queries" },
  { name: "MongoDB", iconKey: "SiMongodb", desc: "Document DB" },
  { name: "Cassandra", iconKey: "SiApachecassandra", desc: "Wide-column" },
  { name: "SQL Server", iconKey: "SiMicrosoftsqlserver", desc: "RDBMS" },
  // Data / BI
  { name: "Power BI", iconKey: "SiPowerbi", desc: "Dashboards" },
  { name: "Talend", iconKey: "SiTalend", desc: "ETL" },
  { name: "Pentaho", iconKey: null, desc: "ETL & BI" },
  { name: "Qlik", iconKey: "SiQlik", desc: "Analytics" },
  { name: "Superset", iconKey: null, desc: "Data viz" },
  // Big Data
  { name: "Hadoop", iconKey: "SiApachehadoop", desc: "HDFS, MapReduce" },
  { name: "Spark", iconKey: "SiApachespark", desc: "Batch/Streaming" },
  { name: "Kafka", iconKey: "SiApachekafka", desc: "Event streaming" },
  // DevOps / CI/CD
  { name: "Git", iconKey: "SiGit", desc: "Versioning" },
  { name: "GitHub", iconKey: "SiGithub", desc: "Repos, Actions" },
  { name: "Jenkins", iconKey: "SiJenkins", desc: "CI/CD" },
  { name: "Ansible", iconKey: "SiAnsible", desc: "Config mgmt" },
  { name: "Terraform", iconKey: "SiTerraform", desc: "IaC" },
  // Cloud
  { name: "AWS", iconKey: "SiAmazonwebservices", desc: "Cloud" },
  { name: "Azure", iconKey: "SiMicrosoftazure", desc: "Cloud" },
  // Containers
  { name: "Docker", iconKey: "SiDocker", desc: "Containers" },
  { name: "Kubernetes", iconKey: "SiKubernetes", desc: "Orchestration" },
];

const PAGE_SIZE = 10;

export default function Skills() {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(SKILLS.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visibleSkills = SKILLS.slice(start, start + PAGE_SIZE);

  const goto = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <section id="skills" className="section">
      <h2>
        Professional <span className="accent">Skillset</span>
      </h2>
      <div className="grid skills">
        {visibleSkills.map(({ name, iconKey, desc }) => {
          const Icon = iconKey && SI[iconKey] ? SI[iconKey] : null;
          return (
            <div className="card skill-card" key={name}>
              <div className="skill-icon" aria-hidden="true">
                {Icon ? (
                  <Icon size={28} />
                ) : (
                  <span style={{ fontWeight: 800 }}>{name[0]}</span>
                )}
              </div>
              <div className="skill-name">{name}</div>
              <div className="skill-desc">{desc}</div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="pagination" style={{ marginTop: 24 }}>
          <button
            className="page-btn"
            onClick={() => goto(page - 1)}
            disabled={page === 1}
            aria-label="Previous"
          >
            &#8249;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={"page-btn" + (page === i + 1 ? " active" : "")}
              onClick={() => goto(i + 1)}
              aria-label={"Page " + (i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="page-btn"
            onClick={() => goto(page + 1)}
            disabled={page === totalPages}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
