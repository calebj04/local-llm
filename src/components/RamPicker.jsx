import { useGuide } from "../context/GuideContext";

const OPTIONS = [
  { v: 8, label: "8 GB", desc: "Tiny models only" },
  { v: 16, label: "16 GB", desc: "Small / 1-3B models" },
  { v: 32, label: "32 GB", desc: "Up to 7B models" },
  { v: 64, label: "64 GB", desc: "Up to ~13B models" },
  { v: 128, label: "128 GB", desc: "Big models" },
];

export default function RamPicker() {
  const { ram, setRam } = useGuide();
  return (
    <div className="ram-row">
      {OPTIONS.map((o) => (
        <button
          key={o.v}
          className={"ram-chip" + (o.v === ram ? " selected" : "")}
          onClick={() => setRam(o.v)}
        >
          <span>{o.label}</span>
          <small>{o.desc}</small>
        </button>
      ))}
    </div>
  );
}
