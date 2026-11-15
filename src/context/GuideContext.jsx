import { createContext, useContext, useEffect, useState } from "react";

const GuideContext = createContext(null);

export function GuideProvider({ children }) {
  const [ram, setRamState] = useState(() => parseInt(localStorage.getItem("llm-ram") || "8", 10));
  const [tool, setToolState] = useState(() => localStorage.getItem("llm-tool") || "ollama");
  const [modelId, setModelId] = useState(() => localStorage.getItem("llm-model") || "llama3.2:3b");
  const [checks, setChecks] = useState({ c1: false, c2: false, c3: false });

  useEffect(() => { localStorage.setItem("llm-ram", String(ram)); }, [ram]);
  useEffect(() => { localStorage.setItem("llm-tool", tool); }, [tool]);
  useEffect(() => { localStorage.setItem("llm-model", modelId); }, [modelId]);

  const toggleCheck = (id) => setChecks((prev) => ({ ...prev, [id]: !prev[id] }));

  const value = {
    ram, setRam: setRamState,
    tool, setTool: setToolState,
    modelId, setModelId,
    checks, toggleCheck,
  };

  return <GuideContext.Provider value={value}>{children}</GuideContext.Provider>;
}

export function useGuide() {
  const ctx = useContext(GuideContext);
  if (!ctx) throw new Error("useGuide must be used within GuideProvider");
  return ctx;
}
