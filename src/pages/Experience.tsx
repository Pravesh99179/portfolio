import CareerTimeline from "../components/CareerTimeline";
import Contact from "../components/Contact";
import PageIntro from "../components/PageIntro";
import { certifications, education, experience } from "../content/site";

const range = (start: string, end: string | null) => {
  const fmt = (ym: string) =>
    new Date(`${ym}-01T00:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${fmt(start)} to ${end ? fmt(end) : "Present"}`;
};

export default function Experience() {
  return (
    <>
      <PageIntro
        docTitle="Experience"
        title="Experience"
        lede="Five years across product design, brand, and frontend, most recently three years at Aftershoot taking Galleries from kickoff to launch."
      />

      <section className="block" aria-labelledby="timeline-title">
        <h2 id="timeline-title" className="visually-hidden">Timeline</h2>
        <CareerTimeline />
      </section>

      <section className="block" aria-labelledby="roles-title">
        <h2 id="roles-title">Roles</h2>
        <ol className="roles">
          {experience.map((r) => (
            <li key={r.title + r.start} className="role">
              <div className="role-head">
                <h3>{r.title}</h3>
                <p className="meta">{r.company} · {r.place} · {range(r.start, r.end)}</p>
              </div>
              <ul className="role-highlights">
                {r.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="block" aria-labelledby="edu-title">
        <h2 id="edu-title">Education and certification</h2>
        <dl className="credentials">
          <div>
            <dt>Education</dt>
            <dd>{education.school}, {education.degree}, {education.years}</dd>
          </div>
          <div>
            <dt>Certification</dt>
            <dd>{certifications.join(", ")}</dd>
          </div>
        </dl>
      </section>

      <Contact />
    </>
  );
}
