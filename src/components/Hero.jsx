export default function Hero() {
  return (
    <section id="home" className="hero">
      <div>
        <p className="eyebrow">Hi there!</p>
        <h1>
          I'm <span className="name-animate" style={{ "--chars": 14, "--type-speed": "2s", "--start-delay": ".20s" }}><span className="accent">SAKHR Niamaa </span></span>
        </h1>
        <h2>Software & Data Engineer</h2>
        <p className="muted">
          Passionate engineering student with strong skills in <b>Full-Stack Development</b>,
          <b> DevOps</b> and <b>Data Engineering</b>. Experienced in modern apps, microservices,
          CI/CD automation and Big Data pipelines.
        </p>
        <div className="cta">
          <a className="btn" href="#projects">
            View Projects
          </a>
          <a className="btn ghost" href="#resume">
            Download CV
          </a>
        </div>
      </div>
      <div className="hero-illus" aria-hidden />
    </section>
  );
}




