import Checklist from "../components/Checklist";
import RamPicker from "../components/RamPicker";
import Callout from "../components/Callout";
import CodeBlock from "../components/CodeBlock";
import { useGuide } from "../context/GuideContext";

export default function CheckMac() {
  const { ram, setRam, checks, toggleCheck } = useGuide();

  const pct = (Object.values(checks).filter(Boolean).length / Object.keys(checks).length) * 100;

  return (
    <div className="page">
      <h2>1. Check your Mac</h2>
      <p className="lede">Local LLMs run on your hardware&rsquo;s unified memory. Knowing what you have tells us what models are possible.</p>

      <div className="panel">
        <h3>What you need</h3>
        <Checklist />
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "12px 0 0" }}>
          {Math.round(pct)}% checked
        </p>
      </div>

      <div className="panel">
        <h3>How to check your specs</h3>
        <CodeBlock code={"About This Mac -> Memory   # or\nsystem_profiler SPHardwareDataType | grep Memory"} label="macOS" />
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "12px 0 0" }}>
          Tap <code className="inline">About This Mac</code> in the Apple menu, or run the command in Terminal.
        </p>
      </div>

      <div className="panel">
        <h3>Your RAM determines what fits</h3>
        <RamPicker />
        {ram < 12 ? (
          <Callout variant="warn">
            <b>Advice for {ram}GB:</b> stick to tiny/3B quantized models and keep context under 2048 tokens. Expect modest
            speed (~10–30 tok/s).
          </Callout>
        ) : (
          <Callout variant="green">
            <b>Advice for {ram}GB:</b> comfortable for small and medium quantized models.
          </Callout>
        )}
      </div>
    </div>
  );
}
