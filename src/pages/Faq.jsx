import Faq from "../components/Faq";

export default function FaqPage() {
  return (
    <div className="page">
      <h2>Troubleshooting &amp; FAQ</h2>
      <p className="lede">Quick fixes for the most common local-LLM-on-Mac issues.</p>
      <Faq />
    </div>
  );
}
