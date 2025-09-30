import { useEffect, useState, useCallback } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return (
      window.localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleNavigate = useCallback(
    (href) => (event) => {
      if (typeof window === "undefined") return;
      event.preventDefault();
      close();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", href);
      }
    },
    [close]
  );

  const renderLinks = (linkClass) =>
    NAV_LINKS.map(({ href, label }) => (
      <a key={href} href={href} className={linkClass} onClick={handleNavigate(href)}>
        {label}
      </a>
    ));

  return (
    <header className="nav">
      <div className="nav-container">
        <a href="#home" className="brand" onClick={handleNavigate("#home")}>
          Niama<span className="dot">.</span>
        </a>

        <nav className="links desktop" aria-label="Primary">
          {renderLinks("nav-link")}
        </nav>

        <div className="actions">
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <a href="https://github.com/niama22" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/niama-sakhr-4672572a2/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <button className="burger" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <nav className={`links mobile ${open ? "open" : ""}`} aria-label="Mobile">
        {renderLinks("nav-link")}
      </nav>
    </header>
  );
}
