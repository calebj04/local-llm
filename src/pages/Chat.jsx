import { TOOLS } from "../data/tools";
import { getModel } from "../data/models";
import { useGuide } from "../context/GuideContext";
import CodeBlock from "../components/CodeBlock";
import Callout from "../components/Callout";

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
          <>
            <CodeBlock code={`ollama run ${model.tag}`} label="bash" />
            <p style={{ color: "var(--muted)", fontSize: 13, margin: "12px 0 0" }}>
              This starts the server and drops you into an interactive chat. Type your prompt, then{" "}
              <code className="inline">/exit</code> to quit.
            </p>
          </>
        ) : (
          <p style={{ color: "var(--muted)", fontSize: 14, margin: 0 }}>
            {tool === "lmstudio" ? (
              <>
                In LM Studio: open the <b>Chat</b> tab, pick the model from the dropdown, hit <b>Load Model</b>, and
                start typing. No terminal required.
              </>
            ) : (
              <>
                With {toolData.name}, interactive chatting happens through the OpenAI-compatible endpoint — start the
                server, then use <code className="inline">Option B</code> below.
              </>
            )}
          </p>
        )}
      </div>

      <div className="panel">
        <h3>Option B — OpenAI-compatible endpoint</h3>
        {toolData.apiCmd ? (
          <>
            <CodeBlock code={toolData.apiCmd(model)} label="bash" />
            <p style={{ color: "var(--muted)", fontSize: 13, margin: "12px 0 0" }}>
              The server listens locally and exposes an OpenAI-style <code className="inline">/v1/chat/completions</code>{" "}
              endpoint. Anything that speaks the OpenAI API can point at it.
            </p>
          </>
        ) : (
          <p style={{ color: "var(--muted)", fontSize: 14, margin: 0 }}>
            {toolData.name} users: click <b>Start Server</b> in the app (default port 1234) and use{" "}
            <code className="inline">http://localhost:1234/v1/chat/completions</code>.
          </p>
        )}
      </div>

      <Callout variant="green">
        <b>Tip:</b> Apple Silicon runs LLMs via Metal automatically. For llama.cpp, keep{" "}
        <code className="inline">-ngl 999</code> to offload to GPU for speed.
      </Callout>
    </div>
  );
}
