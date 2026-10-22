import { useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { FeaturedWork, MoreWork, WorkHeading } from "../components/WorkList";
import { featured, moreWork } from "../content/caseStudies";
import { principles, profile } from "../content/site";

export default function Home() {
  useEffect(() => {
    document.title = `${profile.name}, Product Designer`;
  }, []);

  return (
    <>
      <h1 className="statement">
        A product designer who redesigns the workflow first.{" "}
        <span className="muted">
          I took Aftershoot Galleries from 0→1 as sole designer and de facto PM, turning photo delivery into a way for
          photographers to get paid.
        </span>
      </h1>

      <section className="block" aria-labelledby="work-title">
        <WorkHeading id="work-title" label="Selected work" count={featured.length} />
        <FeaturedWork />
      </section>

      <section className="block" aria-labelledby="more-title">
        <WorkHeading id="more-title" label="More work" count={moreWork.length} />
        <MoreWork />
      </section>

      <section className="block" aria-labelledby="how-title">
        <div className="list-head">
          <h2 id="how-title">How I work</h2>
          <Link to="/about" className="muted-link">About me →</Link>
        </div>
        <ol className="principles">
          {principles.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <p className="principle-proof">{p.proof}</p>
            </li>
          ))}
        </ol>
      </section>

      <Contact />
    </>
  );
}
