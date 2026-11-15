export default function Explain({ children }) {
  return (
    <div className="explain">
      <span className="explain-icon">💡</span>
      <div>{children}</div>
    </div>
  );
}
