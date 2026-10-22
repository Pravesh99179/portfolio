import Contact from "../components/Contact";
import PageIntro from "../components/PageIntro";
import { FeaturedWork, MoreWork, WorkHeading } from "../components/WorkList";
import { featured, moreWork } from "../content/caseStudies";

export default function Work() {
  return (
    <>
      <PageIntro
        docTitle="Work"
        title="Work"
        lede="Case studies on product, workflow, and monetization, followed by shorter projects across product, marketing, and brand."
      />
      <section className="block" aria-labelledby="cs-title">
        <WorkHeading id="cs-title" label="Case studies" count={featured.length} />
        <FeaturedWork />
      </section>
      <section className="block" aria-labelledby="more-title">
        <WorkHeading id="more-title" label="More work" count={moreWork.length} />
        <MoreWork />
      </section>
      <Contact />
    </>
  );
}
