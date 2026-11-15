import { TOOLS } from "../data/tools";
import { useGuide } from "../context/GuideContext";
import CodeBlock from "../components/CodeBlock";
import Callout from "../components/Callout";
import { Link } from "react-router-dom";

export default function Install() {
  const { tool } = useGuide();
  const active = TOOLS[tool];

  return (
    <div className="page">
      <h2>4. Install the tool</h2>
      <p className="lede">Pick your tool above and the right install command appears here.</p>

      <div className="panel">
        <h3>{tool === "ollama" ? "Install via Ollama" : tool === "lmstudio" ? "Install LM Studio" : "Install llama.cpp"}</h3>
        <CodeBlock code={active.install} label="bash" />
      </div>

      <Callout variant="warn">
        <b>On Apple Silicon with llama.cpp / Metal:</b> make sure the Xcode Command Line Tools are installed
        first — <code className="inline">xcode-select --install</code> may pop a dialog; accept it, then continue.
      </Callout>

      <div className="btn-row">
        <Link className="btn" to="/models">Back</Link>
        <Link className="btn primary" to="/run">Next: Download &amp; run</Link>
      </div>
    </div>
  );
}
