import { TOOLS } from "../data/tools";
import { getModel } from "../data/models";
import { useGuide } from "../context/GuideContext";
import CodeBlock from "../components/CodeBlock";
import Callout from "../components/Callout";
import { Link } from "react-router-dom";

export default function Chat() {
  const { tool, modelId } = useGuide();
  const toolData = TOOLS[tool];
  const model = getModel(modelId);

  return (
    <div className="page">
      <h2>6. Chat &amp; call the API</h2>
      <p className="lede">Once the model is running, you can chat through the terminal or hit it via an OpenAI-compatible API.</p>

      <div className="panel">
        <h3>Option A — chat in the terminal {tool === "ollama" ? "(Ollama)" : ""}</h3>
        {tool === "ollama" ? (
          <CodeBlock code={toolData.apiCmd(model)} label="bash" />
        ) : (
          <p style={{ color: "var(--muted)", fontSize: 14 }}>
            For interactive use with {toolData.name}: just run <code className="inline">{toolData.runCmd(model)}</code> and chat.
          </p>
        )}
      </div>

      <div className="panel">
        <h3>Option B — OpenAI-compatible endpoint</h3>
        {toolData.apiCmd ? (
          <CodeBlock code={toolData.apiCmd(model)} label="bash" />
        ) : (
          <p style={{ color: "var(--muted)", fontSize: 14 }}>
            {toolData.name} users: click <b>Start Server</b> in the app (default port 1234) and use{" "}
            <code className="inline">http://localhost:1234/v1/chat/completions</code>.
          </p>
        )}
      </div>

      <Callout variant="green">
        <b>Tip:</b> Apple Silicon runs LLMs via Metal automatically. For llama.cpp, keep{" "}
        <code className="inline">-ngl 999</code> to offload to GPU for speed.
      </Callout>

      <div className="btn-row">
        <Link className="btn" to="/run">Back</Link>
        <Link className="btn primary" to="/faq">Troubleshooting &amp; FAQ</Link>
      </div>
    </div>
  );
}
