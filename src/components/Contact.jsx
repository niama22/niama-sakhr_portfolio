import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Let’s discuss a project or an internship opportunity.</p>
      <div className="grid contact-grid">
        <a className="card contact-item" href="mailto:niamasakhr@gmail.com">
          <span className="icon" aria-hidden><FaEnvelope /></span>
          <div>
            <div className="title">Email</div>
            <div className="muted">niamasakhr@gmail.com</div>
          </div>
        </a>
        <div className="card contact-item">
          <span className="icon" aria-hidden><FaPhone /></span>
          <div>
            <div className="title">Phone</div>
            <div className="muted">+212 6 16 56 95 99</div>
          </div>
        </div>
        <a className="card contact-item" href="https://github.com/niama22" target="_blank" rel="noreferrer">
          <span className="icon" aria-hidden><FaGithub /></span>
          <div>
            <div className="title">GitHub</div>
            <div className="muted">github.com/niama22</div>
          </div>
        </a>
        <a className="card contact-item" href="https://www.linkedin.com/in/niama-sakhr-4672572a2/" target="_blank" rel="noreferrer">
          <span className="icon" aria-hidden><FaLinkedin /></span>
          <div>
            <div className="title">LinkedIn</div>
            <div className="muted">niama-sakhr-4672572a2</div>
          </div>
        </a>
      </div>
    </section>
  );
}

