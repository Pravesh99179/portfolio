import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Contact from "../components/Contact";
import Sequence from "../components/Sequence";
import { featured, findCaseStudy, type Block } from "../content/caseStudies";
import NotFound from "./NotFound";

function renderBlock(block: Block, i: number) {
  if (block.type === "image") {
    return (
      <figure key={i} className="cs-figure">
        <img src={block.src} alt={block.alt} loading="lazy" decoding="async" />
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    );
  }
  return (
    <section key={i} className="cs-section">
      <h2>{block.heading}</h2>
      <div className="cs-body">
        {block.type === "text" && block.body.map((p) => <p key={p}>{p}</p>)}
        {block.type !== "text" && block.intro && <p>{block.intro}</p>}
        {block.type === "sequence" && <Sequence steps={block.steps} />}
        {block.type === "list" && (
          <dl className="cs-list">
            {block.items.map((it) => (
              <div key={it.title}>
                <dt>{it.title}</dt>
                <dd>{it.body}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = findCaseStudy(slug);

  useEffect(() => {
    if (study) document.title = `${study.project}, Pravesh Agrawal`;
  }, [study]);

  if (!study) return <NotFound />;

  const next = featured[(featured.indexOf(study) + 1) % featured.length];

  return (
    <article>
      <header className="cs-header">
        <Link to="/work" className="back">← All work</Link>
        <div className="cs-title">
          <p className="meta">{study.project} · {study.company} · {study.period}</p>
          <h1 className="display">{study.title}</h1>
        </div>
        <p className="lede">{study.summary}</p>
        <dl className="cs-facts">
          {study.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>
                {f.label === "Status" && study.href ? (
                  <a href={study.href} target="_blank" rel="noreferrer">{f.value}</a>
                ) : (
                  f.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {study.blocks?.map(renderBlock)}

      {next !== study && (
        <nav className="cs-next" aria-label="Next case study">
          <span className="meta">Next case study</span>
          <Link to={`/work/${next.slug}`}>{next.title} →</Link>
        </nav>
      )}

      <Contact />
    </article>
  );
}
