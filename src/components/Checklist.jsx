import { useGuide } from "../context/GuideContext";

const ITEMS = [
  { id: "c1", label: "Apple Silicon (M1 chip or newer) — Intel Macs need 32GB+ RAM to be practical." },
  { id: "c2", label: "At least 8GB of unified memory (16GB+ recommended for anything beyond tiny models)." },
  { id: "c3", label: "Roughly 10–20GB free disk space for the model and tooling." },
];

export default function Checklist() {
  const { checks, toggleCheck } = useGuide();
  return (
    <ul className="check">
      {ITEMS.map((it) => (
        <li key={it.id}>
          <input
            id={it.id}
            type="checkbox"
            checked={checks[it.id]}
            onChange={() => toggleCheck(it.id)}
          />
          <label htmlFor={it.id}>{it.label}</label>
        </li>
      ))}
    </ul>
  );
}
