import { useState } from "react";

export default function CodeBlock({ code, label = "bash" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <pre className="codeblock">
      <div className="codeblock-bar">
        <span>{label}</span>
        <button className={"copy-btn" + (copied ? " copied" : "")} onClick={copy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <code>{code}</code>
    </pre>
  );
}
