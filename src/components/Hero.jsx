import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div>
        <p className="eyebrow">Hi there!</p>
        <h1>I'm <span className="accent">Niama Sakhr</span></h1>
        <h2>Software & Data Engineer</h2>
        <p className="muted">
          Passionate engineering student with strong skills in <b>Full-Stack Development</b>,
          <b> DevOps</b> and <b>Data Engineering</b>. Experienced in modern apps, microservices,
          CI/CD automation and Big Data pipelines.
        </p>
        <div className="cta">
          <Link className="btn" to="/projects">View Projects</Link>
          <Link className="btn ghost" to="/resume">Download CV</Link>
        </div>
      </div>
      <div className="hero-illus" aria-hidden />
    </section>
  );
}

