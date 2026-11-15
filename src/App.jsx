import { Routes, Route, Navigate } from "react-router-dom";
import { GuideProvider } from "./context/GuideContext";
import Stepper from "./components/Stepper";
import Home from "./pages/Home";
import CheckMac from "./pages/CheckMac";
import Tools from "./pages/Tools";
import Models from "./pages/Models";
import Install from "./pages/Install";
import Run from "./pages/Run";
import Chat from "./pages/Chat";
import FaqPage from "./pages/Faq";

export default function App() {
  return (
    <GuideProvider>
      <div className="app">
        <Stepper />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check" element={<CheckMac />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/models" element={<Models />} />
            <Route path="/install" element={<Install />} />
            <Route path="/run" element={<Run />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>
              Tools &middot; Models: <code>Ollama</code> &middot; <code>LM Studio</code> &middot;{" "}
              <code>llama.cpp</code> &nbsp;&middot;&nbsp; Models: <code>Llama 3.2</code>,{" "}
              <code>Qwen2.5</code>, <code>Gemma 3</code>, <code>Mistral</code>
            </p>
            <p>Run them locally. Your prompts never leave your Mac.</p>
          </div>
        </footer>
      </div>
    </GuideProvider>
  );
}
