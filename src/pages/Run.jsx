import { TOOLS } from "../data/tools";
import { getModel } from "../data/models";
import { useGuide } from "../context/GuideContext";
import CodeBlock from "../components/CodeBlock";
import { Link } from "react-router-dom";

export default function Run() {
  const { tool, modelId } = useGuide();
  const toolData = TOOLS[tool];
  const model = getModel(modelId);

  return (
    <div className="page">
      <h2>5. Download &amp; run the model</h2>
      <p className="lede">This is the moment. With small quantized models, downloads land at ~1–4GB.</p>

      <div className="panel">
        <h3>{toolData.runTitle}</h3>
        {toolData.runCmd ? (
          <>
            <CodeBlock code={toolData.runCmd(model)} label="bash" />
            <p style={{ color: "var(--muted)", fontSize: 13, margin: "12px 0 0" }}>
              First run downloads the model (~2GB) and drops you into an interactive chat. Type your prompt, then{" "}
              <code className="inline">/exit</code> to quit.
            </p>
          </>
        ) : (
          <ol className="steps-list">
            <li>Open LM Studio and go to the <b>Search</b> tab.</li>
            <li>Search for <b>{model.tag}</b> and download a GGUF file (Q4_K_M quant).</li>
            <li>Go to the <b>Chat</b> tab, select the model from the dropdown, and hit <b>Load Model</b>.</li>
            <li>Start chatting. LM Studio runs on Apple Metal automatically.</li>
          </ol>
        )}
      </div>

      {tool === "llama" && (
        <div className="panel">
          <h3>Run with llama.cpp</h3>
          <CodeBlock code={`./llama-server -m models/${model.hf} -c 2048 -ngl 999`} label="bash" />
          <p style={{ color: "var(--muted)", fontSize: 13, margin: "12px 0 0" }}>
            The <code className="inline">-ngl 999</code> flag offloads all layers to the GPU (Apple Metal). The{" "}
            <code className="inline">-c 2048</code> keeps context small for tight-memory Macs.
          </p>
        </div>
      )}

      <div className="btn-row">
        <Link className="btn" to="/install">Back</Link>
        <Link className="btn primary" to="/chat">Next: Chat &amp; API</Link>
      </div>
    </div>
  );
}
