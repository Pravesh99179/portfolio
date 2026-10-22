import { profile } from "../content/site";

export default function AsideRight() {
  return (
    <aside className="aside aside-right" aria-label="Profile">
      <div className="profile-top" data-photo={profile.photo ? "" : undefined}>
        <p className="availability">
          <span className="diamond" aria-hidden="true">◆</span> {profile.availability}
        </p>
        {profile.photo && <img className="portrait" src={profile.photo} alt={`Portrait of ${profile.name}`} />}
        <dl className="profile-facts">
          <dt className="visually-hidden">Role</dt>
          <dd>{profile.title}</dd>
          <dt className="visually-hidden">Company</dt>
          <dd>{profile.company}</dd>
          <dt className="visually-hidden">Location</dt>
          <dd>Based in {profile.location}</dd>
          <dt className="visually-hidden">Experience</dt>
          <dd className="muted">Designing since {profile.since}</dd>
        </dl>
      </div>
      <div className="profile-contact">
        <a href={`mailto:${profile.email}`} className="profile-email">{profile.email}</a>
        <p className="muted">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </aside>
  );
}
