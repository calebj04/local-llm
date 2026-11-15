import { TOOLS } from "../data/tools";
import { getModel } from "../data/models";
import { useGuide } from "../context/GuideContext";
import CodeBlock from "../components/CodeBlock";

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
          <ol className="steps-list">
            <li>
              Get the GGUF weights — e.g. <code className="inline">llama-3.2-3b-instruct-q4_k_m.gguf</code> — into the{" "}
              <code className="inline">models/</code> folder.
            </li>
            <li>Make sure you&rsquo;ve built llama.cpp (<code className="inline">make -j4</code>).</li>
          </ol>
          <CodeBlock code={`./llama-server -m models/${model.hf} -c 2048 -ngl 999`} label="bash" />
          <p style={{ color: "var(--muted)", fontSize: 13, margin: "12px 0 0" }}>
            The <code className="inline">-ngl 999</code> flag offloads all layers to the GPU (Apple Metal). The{" "}
            <code className="inline">-c 2048</code> keeps context small for tight-memory Macs.
          </p>
        </div>
      )}

      {tool === "llama" && (
        <div className="panel">
          <h3>What the flags actually do</h3>
          <ol className="steps-list">
            <li>
              <code className="inline">-m models/...</code> — path to the GGUF weights file. This is the file you downloaded.
            </li>
            <li>
              <code className="inline">-c 2048</code> — context window in tokens. Bigger means smarter conversations, but each token occupies memory.
            </li>
            <li>
              <code className="inline">-ngl 999</code> — how many layers to shove onto the GPU via Apple Metal. <b>999 means all of them.</b>
            </li>
            <li>
              Add <code className="inline">--threads N</code> to cap CPU threads if you want to share the chip.
            </li>
          </ol>
        </div>
      )}

      {tool === "ollama" && (
        <div className="panel">
          <h3>What just happened</h3>
          <ol className="steps-list">
            <li>
              <code className="inline">ollama run llama3.2:3b</code> — Ollama pulled the model from its registry, applied a
              default quantization, started the server, and opened a chat loop. You never touched a weight file.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}
