import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const linkClass = "nav-link";

  return (
    <header className="nav">
      <div className="nav-container">
        {/* Brand */}
        <Link to="/" className="brand" onClick={close}>
          Niama<span className="dot">.</span>
        </Link>

        {/* Desktop links */}
        <nav className="links desktop" aria-label="Primary">
          <Link to="/" className={linkClass} onClick={close}>Home</Link>
          <Link to="/about" className={linkClass} onClick={close}>About</Link>
          <Link to="/skills" className={linkClass} onClick={close}>Skills</Link>
          <Link to="/certifications" className={linkClass} onClick={close}>Certifications</Link>
          <Link to="/projects" className={linkClass} onClick={close}>Projects</Link>
          <Link to="/resume" className={linkClass} onClick={close}>Resume</Link>
          <Link to="/contact" className={linkClass} onClick={close}>Contact</Link>
        </nav>

        {/* Actions */}
        <div className="actions">
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
            title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
          >
            {theme === 'dark' ? <FaSun/> : <FaMoon/>}
          </button>
          <a href="https://github.com/niama22" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/niama-sakhr-4672572a2/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin/></a>
          <button className="burger" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <nav className={`links mobile ${open ? "open" : ""}`} aria-label="Mobile">
        <Link to="/" onClick={close} className={linkClass}>Home</Link>
        <Link to="/about" onClick={close} className={linkClass}>About</Link>
        <Link to="/skills" onClick={close} className={linkClass}>Skills</Link>
        <Link to="/certifications" onClick={close} className={linkClass}>Certifications</Link>
        <Link to="/projects" onClick={close} className={linkClass}>Projects</Link>
        <Link to="/resume" onClick={close} className={linkClass}>Resume</Link>
        <Link to="/contact" onClick={close} className={linkClass}>Contact</Link>
      </nav>
    </header>
  );
}
