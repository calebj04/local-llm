import { TOOL_LIST } from "../data/tools";
import { useGuide } from "../context/GuideContext";
import CodeBlock from "../components/CodeBlock";
import Callout from "../components/Callout";
import { Link } from "react-router-dom";

export default function Tools() {
  const { tool, setTool } = useGuide();
  const active = TOOL_LIST.find((t) => t.id === tool);

  return (
    <div className="page">
      <h2>2. Choose your tool</h2>
      <p className="lede">You only need one. Pick the one that matches your comfort level — I defaulted to Ollama since you&rsquo;re CLI-comfortable.</p>

      <div className="tool-grid">
        {TOOL_LIST.map((t) => (
          <button
            key={t.id}
            className={"tool-card" + (t.id === tool ? " selected" : "")}
            onClick={() => setTool(t.id)}
          >
            <h4>{t.name}</h4>
            <p>{t.tagline}</p>
            {t.id === tool && <div className="pick">Selected &rarr;</div>}
          </button>
        ))}
      </div>

      <div className="panel">
        <h3>What you&rsquo;ll run</h3>
        <CodeBlock code={active.install} label="bash" />
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "12px 0 0" }}>
          {active.installNote}
        </p>
      </div>

      <Callout variant="warn">
        <b>On Apple Silicon with llama.cpp / Metal:</b> make sure the Xcode Command Line Tools are installed first —{" "}
        <code className="inline">xcode-select --install</code> may pop a dialog; accept it, then continue.
      </Callout>

      <div className="btn-row">
        <Link className="btn" to="/models">Back</Link>
        <Link className="btn primary" to="/install">Next: Install</Link>
      </div>
    </div>
  );
}
