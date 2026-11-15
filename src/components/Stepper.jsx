import { Link, useLocation } from "react-router-dom";

const STEPS = [
  { path: "/check", label: "Check your Mac" },
  { path: "/tools", label: "Choose a tool" },
  { path: "/models", label: "Pick a model" },
  { path: "/install", label: "Install" },
  { path: "/run", label: "Run it" },
  { path: "/chat", label: "Chat & API" },
];

export default function Stepper() {
  const location = useLocation();
  const currentIdx = STEPS.findIndex((s) => location.pathname === s.path);

  return (
    <nav className="stepper">
      <div className="stepper-inner">
        {STEPS.map((s, i) => {
          const active = location.pathname === s.path;
          const done = currentIdx > i;
          const className = "stepper-link" + (active ? " active" : "") + (done ? " done" : "");
          return (
            <Link key={s.path} to={s.path} className={className}>
              <span className="dot">{done ? "\u2713" : i + 1}</span>
              <span>{s.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
