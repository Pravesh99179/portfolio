import { Link, NavLink } from "react-router-dom";
import { profile } from "../content/site";
import Clock from "./Clock";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="topbar">
      <div className="topbar-start">
        <Link to="/" className="identity">
          <span className="diamond" aria-hidden="true">◆</span> {profile.name}
        </Link>
      </div>
      <nav aria-label="Primary" className="nav">
        {links.map((l, i) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"}>
            {l.label}{i < links.length - 1 && <span aria-hidden="true">,</span>}
          </NavLink>
        ))}
      </nav>
      <div className="topbar-end">
        <Clock />
        <div className="topbar-actions">
          <ThemeToggle />
          <a className="topbar-cta" href={`mailto:${profile.email}`}>Email me</a>
        </div>
      </div>
    </header>
  );
}
