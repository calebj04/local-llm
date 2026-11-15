import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { path: "/", label: "Overview", hint: "Where to start", num: null },
  { path: "/check", label: "Check your Mac", hint: "RAM, chip, storage", num: 1 },
  { path: "/tools", label: "Choose a tool", hint: "Ollama, LM Studio, llama.cpp", num: 2 },
  { path: "/models", label: "Pick a model", hint: "Right size for your RAM", num: 3 },
  { path: "/install", label: "Install", hint: "One command — or a GUI", num: 4 },
  { path: "/run", label: "Run it", hint: "Download + launch", num: 5 },
  { path: "/chat", label: "Chat & API", hint: "Talk to it or call it", num: 6 },
  { path: "/faq", label: "Troubleshooting & FAQ", hint: null, num: null },
];

export default function Stepper() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("llm-theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("llm-theme", theme);
  }, [theme]);

  const currentIdx = NAV.findIndex((n) => n.path === location.pathname);

  return (
    <nav className="stepper">
      <div className="stepper-top">
        <span className="side-title">Local LLM Guide</span>
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? "☀️" : "☾"}
        </button>
      </div>
      <div className="stepper-inner">
        {NAV.map((n, i) => {
          const active = location.pathname === n.path;
          const done = !active && currentIdx > i;
          const cls = "stepper-link" + (active ? " active" : "") + (done ? " done" : "");
          return (
            <Link key={n.path} to={n.path} className={cls}>
              <span className="idx">{n.num ?? "\u00B7"}</span>
              <span className="lbl">{n.label}</span>
              {n.hint ? <span className="hint">{n.hint}</span> : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
