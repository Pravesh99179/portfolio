import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Link to="/contact" className="closing">
      <span className="closing-label">Hiring for a senior product designer or product manager?</span>
      <span className="closing-title">Let's talk <span className="arrow" aria-hidden="true">→</span></span>
    </Link>
  );
}
