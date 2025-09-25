import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ROUTE_ORDER = ["/", "/about", "/skills", "/projects", "/resume", "/contact"];

export default function RouteScroll() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cooldownRef = useRef(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const idx = ROUTE_ORDER.indexOf(pathname);
    const prev = idx > 0 ? ROUTE_ORDER[idx - 1] : null;
    const next = idx >= 0 && idx < ROUTE_ORDER.length - 1 ? ROUTE_ORDER[idx + 1] : null;

    const atTop = () => window.scrollY <= 0;
    const atBottom = () => {
      const doc = document.documentElement;
      const scrollBottom = Math.ceil(window.scrollY + window.innerHeight);
      return scrollBottom >= doc.scrollHeight - 80;
    };

    const armCooldown = () => {
      cooldownRef.current = true;
      setTimeout(() => (cooldownRef.current = false), 400);
    };

    const onWheel = (e) => {
      if (cooldownRef.current) return;
      const dy = e.deltaY;
      if (dy > 20 && next && atBottom()) {
        armCooldown();
        navigate(next);
      } else if (dy < -20 && prev && atTop()) {
        armCooldown();
        navigate(prev);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [pathname, navigate]);

  return null;
}