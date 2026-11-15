export default function Callout({ variant, children }) {
  const cls = "callout" + (variant ? " " + variant : "");
  return <div className={cls}>{children}</div>;
}
