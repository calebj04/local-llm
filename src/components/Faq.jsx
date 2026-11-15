const ITEMS = [
  {
    q: "Model fails to load or the Mac restarts",
    a: "You’re likely out of unified memory. Switch to a smaller model (e.g. Llama 3.2 3B or smaller) or a lower quant. On 8GB RAM, avoid anything over ~3B parameters.",
  },
  {
    q: "Replies are extremely slow",
    a: "Small context windows (512–2048 tokens) and small models are expected on 8GB Macs. Expect roughly 10–40 tokens/sec on Apple Silicon for a 3B Q4 model. Reduce context with -c 1024.",
  },
  {
    q: "ollama: command not found",
    a: "Restart your terminal (or reopen the shell). If it persists, reinstall: curl -fsSL https://ollama.com/install.sh | sh",
  },
  {
    q: "Port 11434 already in use",
    a: "Stop the old server or change the port: OLLAMA_HOST=0.0.0.0:8080 ollama serve",
  },
];

export default function Faq() {
  return (
    <div className="faq-list">
      {ITEMS.map((f, i) => (
        <details className="faq" key={i}>
          <summary>{f.q}</summary>
          <div className="faq-body">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
