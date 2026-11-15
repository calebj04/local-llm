import { MODELS, getModel } from "../data/models";
import { useGuide } from "../context/GuideContext";
import RamPicker from "../components/RamPicker";
import { Link } from "react-router-dom";

export default function Models() {
  const { ram, setRam, modelId, setModelId } = useGuide();
  const model = getModel(modelId);

  const fits = (m) => (typeof m.fits === "function" ? m.fits(ram) : m.size + 2 <= ram);

  return (
    <div className="page">
      <h2>3. Pick a model</h2>
      <p className="lede">
        Models ship as quantized GGUF files (smaller file → less quality, less memory). Your{" "}
        <b>{ram}GB</b> of unified memory drives the choices below.
      </p>

      <div className="panel">
        <h3>Available RAM</h3>
        <RamPicker />
      </div>

      <div className="model-grid">
        {MODELS.map((m) => {
          const ok = fits(m);
          return (
            <button
              key={m.id}
              className={"model-card" + (m.id === modelId ? " selected" : "")}
              onClick={() => setModelId(m.id)}
            >
              <div className="name">
                {m.name} {m.recommended && <span className="badge rec">Great first pick</span>}
              </div>
              <div className="meta">
                {m.params} params · {m.quant} · ~{m.size}GB
              </div>
              <p className="blurb">{m.blurb}</p>
              <span className={ok ? "badge fits" : "badge tight"}>
                {ok ? `Fits in your ${ram}GB` : `Needs ~${Math.ceil(m.size + 2)}GB+`}
              </span>
            </button>
          );
        })}
      </div>

      <div className="callout green">
        <b>Recommended for experimenting:</b> start with{" "}
        <code className="inline">{model.tag}</code> — it&rsquo;s quantized to Q4_K_M and only ~2GB.
      </div>

      <div className="btn-row">
        <Link className="btn" to="/tools">Back</Link>
        <Link className="btn primary" to="/install">Next: Install</Link>
      </div>
    </div>
  );
}
