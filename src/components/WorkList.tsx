import { Link } from "react-router-dom";
import { featured, moreWork, type CaseStudy } from "../content/caseStudies";

const shortYear = (period: string) => {
  const y = period.match(/\d{4}/)?.[0];
  return y ? `'${y.slice(2)}` : "";
};

function Cover({ study }: { study: CaseStudy }) {
  if (study.cover) {
    return <img className="cover" src={study.cover} alt="" loading="lazy" decoding="async" />;
  }
  return (
    <div className="cover cover-type" aria-hidden="true">
      <span className="cover-company">{study.company}</span>
      <span className="cover-title">{study.title}</span>
      <span className="cover-facts">{study.facts.map((f) => f.value).join("  ·  ")}</span>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <ul className="cards">
      {featured.map((c) => (
        <li key={c.slug}>
          <Link to={`/work/${c.slug}`} className="card">
            <Cover study={c} />
            <span className="card-caption">
              <span>
                <span className="card-name">{c.project}</span>
                <span className="muted"> · {c.company}</span>
              </span>
              <span className="muted">{shortYear(c.period)}</span>
            </span>
            <span className="visually-hidden">{c.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function MoreWork() {
  return (
    <ul className="rows">
      {moreWork.map((c) => (
        <li key={c.slug} className="row">
          <span className="row-title">{c.title}</span>
          <span className="row-meta">{c.company} · {shortYear(c.period)}</span>
          <span className="row-summary">{c.summary}</span>
        </li>
      ))}
    </ul>
  );
}

export function WorkHeading({ id, label, count }: { id: string; label: string; count: number }) {
  return (
    <div className="list-head">
      <h2 id={id}>{label}</h2>
      <span className="muted">({count})</span>
    </div>
  );
}
