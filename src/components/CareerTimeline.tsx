import { experience, type Role } from "../content/site";

const toMonths = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
};
const now = new Date();
const nowMonths = now.getFullYear() * 12 + now.getMonth();
const endOf = (r: Role) => (r.end ? toMonths(r.end) : nowMonths);

const start = Math.min(...experience.map((r) => toMonths(r.start)));
const span = nowMonths + 1 - start;
const firstYear = Math.ceil(start / 12);
const lastYear = Math.floor(nowMonths / 12);
const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);
const pct = (m: number) => `${((m - start) / span) * 100}%`;

const duration = (r: Role) => {
  const months = endOf(r) - toMonths(r.start) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr`, m && `${m} mo`].filter(Boolean).join(" ");
};

const label = (ym: string | null) =>
  ym ? new Date(`${ym}-01T00:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Present";

export default function CareerTimeline() {
  return (
    <figure className="timeline">
      <div className="timeline-row timeline-axis" aria-hidden="true">
        <span />
        <span className="timeline-plot">
          {years.map((y) => (
            <span key={y} className="timeline-tick" style={{ left: pct(y * 12) }}>{y}</span>
          ))}
        </span>
        <span />
      </div>
      <ol className="timeline-list">
        {experience.map((r) => (
          <li key={r.title + r.start} className="timeline-row" data-primary={r.primary || undefined}>
            <span className="timeline-label">
              <span className="timeline-company">{r.company}</span>
              <span className="timeline-title">{r.title}</span>
            </span>
            <span className="timeline-plot" aria-hidden="true">
              {years.map((y) => (
                <span key={y} className="timeline-grid" style={{ left: pct(y * 12) }} />
              ))}
              <span
                className="timeline-bar"
                style={{ left: pct(toMonths(r.start)), width: `${((endOf(r) + 1 - toMonths(r.start)) / span) * 100}%` }}
              />
            </span>
            <span className="timeline-value">
              <span>{duration(r)}</span>
              <span className="timeline-dates">{label(r.start)} to {label(r.end)}</span>
            </span>
          </li>
        ))}
      </ol>
      <figcaption>
        Every role on one time scale, from 2021 to today. Bar length is time in role; Aftershoot roles are shown darker.
      </figcaption>
    </figure>
  );
}
