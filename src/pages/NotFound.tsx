import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="block">
      <h1>This page doesn't exist</h1>
      <p><Link to="/">Back to the home page</Link></p>
    </section>
  );
}
