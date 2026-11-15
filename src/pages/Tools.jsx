import { TOOL_LIST } from "../data/tools";
import { useGuide } from "../context/GuideContext";
import CodeBlock from "../components/CodeBlock";
import Callout from "../components/Callout";

const TIERS = [
  {
    id: "barebones",
    emoji: "🧰",
    name: "Barebones",
    tool: "llama",
    tag: "You are the toolchain",
    desc: "Download the weights yourself, pick the quantization, set the context window and GPU offload by hand, then launch the server. Nothing is automated — you control exactly how the weights are used.",
    cmd: "./llama-server -m models/llama-3.2-3b-instruct-q4_k_m.gguf -c 2048 -ngl 999",
  },
  {
    id: "gui",
    emoji: "🖥️",
    name: "Graphical",
    tool: "lmstudio",
    tag: "Automation in a GUI",
    desc: "LM Studio handles the download, the quantization pick and the load for you. The useful knobs — GPU layers, context length — live in the app UI. Point, click, load.",
  },
  {
    id: "automatic",
    emoji: "⚡",
    name: "Automatic",
    tool: "ollama",
    tag: "One command, sane defaults",
    desc: "The install script and `ollama run` do the pulling, quantizing and serving behind a single command. Tune via model tags and env vars, but the default path is just one line.",
    cmd: "ollama run llama3.2:3b",
  },
];

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

      <div className="panel">
        <h3>The whole spectrum</h3>
        <p className="lede">
          Every way of running a local LLM on this page lives somewhere on a spectrum of control. From literally
          hand-managing the weights yourself to handing all the work to a one-line installer — the middle is a GUI.
        </p>
        <div className="tier-grid">
          {TIERS.map((t) => (
            <div className="tier" key={t.id}>
              <h4>
                {t.emoji} {t.name} <span className="tier-tag">{t.tag}</span>
              </h4>
              <p>{t.desc}</p>
              {t.cmd && <code className="tier-cmd">{t.cmd}</code>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
