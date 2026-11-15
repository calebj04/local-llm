const ICONS = { warn: "⚠️", green: "✅", plain: "💡" };

export default function Callout({ variant, children }) {
  const cls = "callout" + (variant ? " " + variant : "");
  const icon = ICONS[variant] || "💡";
  return (
    <div className={cls}>
      <span className="callout-icon">{icon}</span>
      <div>{children}</div>
    </div>
  );
}
