import { Link, useLocation } from "react-router-dom";

const ORDER = [
  { path: "/", label: "Overview" },
  { path: "/check", label: "Check your Mac" },
  { path: "/tools", label: "Choose a tool" },
  { path: "/models", label: "Pick a model" },
  { path: "/install", label: "Install" },
  { path: "/run", label: "Run it" },
  { path: "/chat", label: "Chat & API" },
  { path: "/faq", label: "Troubleshooting & FAQ" },
];

export default function Pager() {
  const { pathname } = useLocation();
  const idx = ORDER.findIndex((o) => o.path === pathname);
  if (idx <= 0) return null;

  const prev = ORDER[idx - 1];
  const next = idx < ORDER.length - 1 ? ORDER[idx + 1] : null;
  const stepNum = idx - 1;
  const isStep = stepNum >= 0 && stepNum < 6;

  return (
    <nav className="pager">
      {isStep && <p className="pager-status">Step {stepNum + 1} of 6 &middot; {ORDER[idx].label}</p>}
      <div className="pager-nav">
        {prev ? (
          <Link className="btn" to={prev.path}>
            <span aria-hidden="true">&larr;</span> {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className="btn primary" to={next.path}>
            {next.label} <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
