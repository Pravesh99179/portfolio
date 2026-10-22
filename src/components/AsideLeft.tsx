import { focus, profile } from "../content/site";

export default function AsideLeft() {
  return (
    <aside className="aside aside-left" aria-label="Introduction">
      <p className="hello">
        Hello!
        <br />
        I'm {profile.firstName}.
      </p>
      <ul className="aside-links">
        {profile.links.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
          </li>
        ))}
      </ul>
      <ul className="focus-list" aria-label="Focus areas">
        {focus.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </aside>
  );
}
