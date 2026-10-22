import PageIntro from "../components/PageIntro";
import { profile } from "../content/site";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        docTitle="Contact"
        title="Let's talk"
        lede="I'm interested in senior product designer and mid-level product manager roles, especially on workflow-heavy B2B and 0→1 products."
      />
      <section className="block" aria-label="Contact details">
        <dl className="contact-list">
          <div>
            <dt>Email</dt>
            <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
          </div>
          {profile.links.map((l) => (
            <div key={l.href}>
              <dt>{l.label}</dt>
              <dd><a href={l.href} target="_blank" rel="noreferrer">{l.href.replace("https://www.", "")}</a></dd>
            </div>
          ))}
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </section>
    </>
  );
}
