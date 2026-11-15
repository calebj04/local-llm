export const MODELS = [
  {
    id: "llama3.2:3b",
    tag: "llama3.2:3b",
    name: "Llama 3.2 3B",
    params: "3B",
    quant: "Q4_K_M",
    size: 2.0,
    fits: (r) => r >= 8,
    blurb: "Best all-rounder for a first local model. Great general chat and instruction following.",
    recommended: true,
    hf: "llama-3.2-3b-instruct-q4_k_m.gguf",
  },
  {
    id: "qwen2.5:3b",
    tag: "qwen2.5:3b",
    name: "Qwen2.5 3B",
    params: "3B",
    quant: "Q4_K_M",
    size: 2.0,
    fits: (r) => r >= 8,
    blurb: "Strong multilingual base model with solid instruction tuning.",
    recommended: false,
    hf: "qwen2.5-3b-instruct-q4_k_m.gguf",
  },
  {
    id: "gemma3:1b",
    tag: "gemma3:1b",
    name: "Gemma 3 1B",
    params: "1B",
    quant: "Q4_K_M",
    size: 0.6,
    fits: (r) => r >= 8,
    blurb: "Ultra-lightweight. Blazing fast, good for experimenting / simple tasks.",
    recommended: false,
    hf: "gemma-3-1b-it-q4_k_m.gguf",
  },
  {
    id: "mistral:7b",
    tag: "mistral:7b",
    name: "Mistral 7B",
    params: "7B",
    quant: "Q4_K_M",
    size: 3.8,
    fits: (r) => r >= 12,
    blurb: "Bigger model. Tight on 8GB — use a small context window.",
    recommended: false,
    hf: "mistral-7b-instruct-q4_k_m.gguf",
  },
];

export function getModel(id) {
  return MODELS.find((m) => m.id === id);
}
