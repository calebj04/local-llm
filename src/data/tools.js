export const TOOLS = {
  ollama: {
    id: "ollama",
    name: "Ollama",
    tagline: "The friendly CLI + API. Best on-ramp for experimenting.",
    install: "curl -fsSL https://ollama.com/install.sh | sh",
    installNote: "Prefer Homebrew? Run: brew install ollama",
    runTitle: "Run with Ollama",
    runCmd: (m) => `ollama run ${m.tag}`,
    apiTitle: "Chat / API via Ollama",
    apiCmd: (m) =>
      `ollama serve\n\ncurl http://localhost:11434/v1/chat/completions -H "Content-Type: application/json" -d '{"model":"${m.tag}","messages":[{"role":"user","content":"Write a haiku about a MacBook."}]}'`,
  },
  lmstudio: {
    id: "lmstudio",
    name: "LM Studio",
    tagline: "GUI-first. Great for chatting without touching the terminal.",
    install: "Download the app from lmstudio.ai (Apple Silicon build).",
    installNote: "Or: brew install --cask lmstudio",
    runTitle: "Run with LM Studio",
    runCmd: null,
    apiTitle: "Chat / API via LM Studio",
    apiCmd: null,
  },
  llama: {
    id: "llama",
    name: "llama.cpp",
    tagline: "Build from source — full control, Metal acceleration.",
    install: "xcode-select --install\ncd ~/code && git clone https://github.com/ggml-org/llama.cpp.git && cd llama.cpp\nmake -j4",
    installNote: "Requires Xcode Command Line Tools.",
    runTitle: "Run with llama.cpp",
    runCmd: (m) => `./llama-server -m models/${m.hf} -c 2048 -ngl 999`,
    apiTitle: "Chat / API via llama.cpp",
    apiCmd: (m) =>
      `curl http://localhost:8080/v1/chat/completions -H "Content-Type: application/json" -d '{"model":"${m.hf}","messages":[{"role":"user","content":"Hello!"}]}'`,
  },
};

export const TOOL_LIST = Object.values(TOOLS);
