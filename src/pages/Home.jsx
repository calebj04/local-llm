import { Link } from "react-router-dom";

const CAPS = [
  { icon: "💬", title: "Personal assistant", desc: "A private chat assistant that runs entirely on your hardware." },
  { icon: "💻", title: "Coding copilot", desc: "Local autocomplete, chat, and refactoring for your codebase." },
  { icon: "📄", title: "Long context", desc: "Chat with long documents via big context windows." },
  { icon: "🔒", title: "Private & offline", desc: "Your prompts never leave the Mac. No cloud dependency." },
  { icon: "⚡", title: "Fast experiments", desc: "Small quantized models, quick iterations, instant feedback." },
  { icon: "🧪", title: "General play", desc: "Just see what an LLM feels like running locally." },
];

const PATH = [
  { to: "/check", n: "01", t: "Check your Mac", d: "RAM, chip, storage." },
  { to: "/tools", n: "02", t: "Choose a tool", d: "Ollama, LM Studio, or llama.cpp." },
  { to: "/models", n: "03", t: "Pick a model", d: "Find the right size for your RAM." },
  { to: "/install", n: "04", t: "Install", d: "One command — or a GUI." },
  { to: "/run", n: "05", t: "Run it", d: "Download + launch." },
  { to: "/chat", n: "06", t: "Chat & API", d: "Talk to it or call it." },
];

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <span className="kicker">Local LLMs &middot; Apple Silicon &middot; macOS</span>
        <h1>
          Your own <span className="grad">LLM</span>, running on your Mac
        </h1>
        <p className="lede">
          Meet your own personal assistant. A chatbot that runs entirely on your Mac — no cloud, no waiting, no
          leaking your secrets. Just you and your silicon.
        </p>
        <div className="btn-row" style={{ justifyContent: "center", marginTop: 26 }}>
          <Link className="btn primary" to="/check">Let&rsquo;s go: check your Mac</Link>
          <Link className="btn" to="/models">Skip to a model</Link>
        </div>
      </section>

      <section>
        <h2>What can you do with a local LLM?</h2>
        <p className="lede">Everything you&rsquo;d normally outsource to a cloud API, but with your own hardware underneath.</p>
        <div className="cap-grid">
          {CAPS.map((c) => (
            <div className="cap-card" key={c.title}>
              <div className="icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>The path</h2>
        <p className="lede">Six steps. Pick your own pace — each one links to its own page.</p>
        <ol className="path-list">
          {PATH.map((s) => (
            <li key={s.to}>
              <Link to={s.to}>
                <span className="n">{s.n}</span>
                <span className="t">{s.t}</span>
                <span className="d">{s.d}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="panel">
          <h3>Why local?</h3>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 14.5 }}>
            Private by default. No data leaving your machine. One-time hardware cost, forever-running
            assistant. And for the tinkerer: quantized models that fit in unified memory, Metal-accelerated,
            fully yours.
          </p>
        </div>
      </section>
    </div>
  );
}
