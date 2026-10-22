/*
 * Case studies are plain data. Add `blocks` to give an entry its own page;
 * entries without blocks show as short rows under "More work".
 * Covers and images go in /public/work/<slug>/ and are referenced as "/work/<slug>/file.webp".
 */

export type Fact = { label: string; value: string };

export type Block =
  | { type: "text"; heading: string; body: string[] }
  | { type: "list"; heading: string; intro?: string; items: { title: string; body: string }[] }
  | { type: "sequence"; heading: string; intro?: string; steps: { label: string; title: string; body: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; poster?: string; label: string; caption?: string };

export type CaseStudy = {
  slug: string;
  project: string;
  company: string;
  period: string;
  title: string;
  summary: string;
  facts: Fact[];
  href?: string;
  // Optional cover image for the work card, for example "/work/aftershoot-galleries/cover.webp".
  cover?: string;
  blocks?: Block[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aftershoot-galleries",
    project: "Aftershoot Galleries",
    company: "Aftershoot",
    period: "2023 to now",
    title: "Turning photo delivery into a way to get paid",
    summary:
      "I designed and defined Aftershoot Galleries from 0→1, a gallery delivery and print monetization platform for photographers, as sole designer and de facto PM.",
    facts: [
      { label: "Role", value: "Sole designer, de facto PM" },
      { label: "Scope", value: "Reset twice by research" },
      { label: "Status", value: "Live at aftershoot.com" },
    ],
    href: "https://aftershoot.com",
    blocks: [
      {
        type: "video",
        src: "/work/aftershoot-galleries/galleries-overview.webm",
        poster: "/work/aftershoot-galleries/galleries-overview-poster.jpg",
        label: "Aftershoot Galleries product overview",
        caption: "A product overview of Aftershoot Galleries.",
      },
      {
        type: "text",
        heading: "The problem",
        body: [
          "Aftershoot helps photographers turn a shoot into finished work. Delivering that work to clients was treated as a hand-off: the job ended when the gallery link was sent.",
          "The question I set out to answer was whether delivery could become part of how photographers get paid, rather than the last step before they move on.",
        ],
      },
      {
        type: "text",
        heading: "My role",
        body: [
          "I was the only designer on Galleries from kickoff, and I also did the product management work: I ran the research, set and reset scope, and wrote the specs, PRDs, and decision documents that aligned engineering, leadership, and go-to-market.",
        ],
      },
      {
        type: "sequence",
        heading: "How the scope changed",
        intro: "The plan we launched was not the plan we started with. Each change came from what photographers told us.",
        steps: [
          { label: "Kickoff", title: "A basic gallery editor", body: "The first brief was a place to assemble and share galleries." },
          { label: "Research", title: "Teardowns, interviews, surveys", body: "Competitor teardowns, photographer interviews, and surveys showed what photographers actually needed from delivery." },
          { label: "Two resets", title: "From editor to monetization platform", body: "Findings reset scope twice, moving Galleries from a basic editor to a full print monetization platform." },
          { label: "Founders beta", title: "Tested with early photographers", body: "A Founders beta put the product in real workflows before public launch." },
          { label: "Launch", title: "Public launch, then ownership", body: "Galleries launched publicly. I was promoted to Product Designer 2 and now own its design post-launch." },
        ],
      },
      {
        type: "list",
        heading: "What shipped",
        items: [
          { title: "Gallery editor", body: "Where photographers assemble, arrange, and publish client galleries." },
          { title: "Face detection photo access", body: "AI face detection lets clients find the photos they appear in, instead of scrolling a whole event." },
          { title: "WHCC print lab integration", body: "Clients can order prints directly from a gallery, which turns delivery into revenue for the photographer." },
        ],
      },
      {
        type: "text",
        heading: "Outcome",
        body: [
          "Galleries is live at aftershoot.com. The print lab integration is what changed its role: delivery became a way to get paid, not just a hand-off.",
          "Leading Galleries from 0→1 through its Founders beta and public launch led to my promotion from Product Designer 1 to Product Designer 2.",
        ],
      },
    ],
  },
  {
    slug: "profile-versioning",
    project: "Profile versioning",
    company: "Aftershoot",
    period: "2023 to 2026",
    title: "Profile versioning",
    summary: "An in-app feature designed in close partnership with engineering and product stakeholders.",
    facts: [],
  },
  {
    slug: "aftershoot-landing-pages",
    project: "Marketing landing pages",
    company: "Aftershoot",
    period: "2023 to 2026",
    title: "Marketing landing pages",
    summary: "High-converting landing pages, pitch decks, in-app banners, and launch creative that grew signups.",
    facts: [],
  },
  {
    slug: "razorpay-website",
    project: "Razorpay website",
    company: "Razorpay",
    period: "2023",
    title: "Razorpay website and brand",
    summary: "New website UI in Figma, landing pages in Unbounce, the monthly newsletter, and five brand case studies.",
    facts: [],
  },
  {
    slug: "avalara-accessibility",
    project: "Accessibility audit",
    company: "Avalara",
    period: "2022",
    title: "WCAG accessibility audit",
    summary: "Audited the site against WCAG 2.0, ran empathy mapping workshops, and cross-browser QA before launch.",
    facts: [],
  },
];

export const featured = caseStudies.filter((c) => c.blocks);
export const moreWork = caseStudies.filter((c) => !c.blocks);
export const findCaseStudy = (slug?: string) => featured.find((c) => c.slug === slug);
