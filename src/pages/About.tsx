import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import PageIntro from "../components/PageIntro";
import { bio, experience, principles, skills, tools } from "../content/site";

const companies = [...new Set(experience.map((r) => r.company))];

const range = (start: string, end: string | null) => {
  const fmt = (ym: string) =>
    new Date(`${ym}-01T00:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${fmt(start)} to ${end ? fmt(end) : "Present"}`;
};

export default function About() {
  return (
    <>
      <PageIntro docTitle="About" title="About" />

      <section className="block" aria-label="Bio">
        <div className="about-bio">
          {bio.map((p, i) => <p key={i} className={i === 0 ? "about-lead" : undefined}>{p}</p>)}
        </div>
        <div className="about-skills">
          <h2 className="subhead-plain">Specialties</h2>
          <ul>
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>

      <section className="about-strip" aria-label="Companies">
        <ul>
          {companies.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>

      <section className="block" aria-labelledby="how-title">
        <h2 id="how-title" className="about-head">How I work</h2>
        <ol className="about-numbered">
          {principles.map((p, i) => (
            <li key={p.title}>
              <h3>{i + 1}. {p.title}</h3>
              <p>{p.body}</p>
              <p className="principle-proof">{p.proof}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="block" aria-labelledby="tools-title">
        <h2 id="tools-title" className="about-head about-head-plain">Toolkit</h2>
        <ul className="tools">
          {tools.map((t) => (
            <li key={t.name}>
              <h3>{t.name}</h3>
              <p className="meta">{t.use}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="exp-title">
        <div className="about-head list-head">
          <h2 id="exp-title">Experience</h2>
          <Link to="/experience" className="muted-link">Full experience <span aria-hidden="true">→</span></Link>
        </div>
        <ol className="about-roles">
          {experience.map((r) => (
            <li key={r.title + r.start}>
              <div className="role-head">
                <h3>{r.title}</h3>
                <p className="meta">{r.company}, {r.place}</p>
                <p className="meta">{range(r.start, r.end)}</p>
              </div>
              <p className="about-role-summary">{r.highlights[0]}</p>
            </li>
          ))}
        </ol>
      </section>

      <Contact />
    </>
  );
}
