import Faq from "../components/Faq";
import { Link } from "react-router-dom";

export default function FaqPage() {
  return (
    <div className="page">
      <h2>Troubleshooting &amp; FAQ</h2>
      <p className="lede">Quick fixes for the most common local-LLM-on-Mac issues.</p>
      <Faq />
      <div className="btn-row">
        <Link className="btn" to="/chat">Back to Chat</Link>
      </div>
    </div>
  );
}
