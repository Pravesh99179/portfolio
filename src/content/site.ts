export const profile = {
  name: "Pravesh Agrawal",
  firstName: "Pravesh",
  title: "Product Designer 2",
  company: "Aftershoot",
  role: "Product Designer 2 at Aftershoot",
  location: "Delhi, India",
  timeZone: "Asia/Kolkata",
  since: "2021",
  availability: "Open to senior design and PM roles",
  photo: "/me.jpg" as string | undefined,
  email: "agrawalpravesh2018@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pravesh-ag" },
    { label: "Behance", href: "https://www.behance.net/Pravesh" },
  ],
};

export const focus = ["Product design", "Workflow UX", "Design systems", "0→1 products"];

export const facts = [
  { label: "Now", value: "Product Designer 2, Aftershoot" },
  { label: "Before", value: "Razorpay, Avalara" },
  { label: "Focus", value: "Product, workflow UX, design systems, 0→1" },
  { label: "Also", value: "Specs, PRDs, and React prototypes" },
];

export const principles = [
  {
    title: "Fix the workflow before the screen",
    body: "I map the job end to end before touching the interface, so new features land in a workflow that already makes sense to the people using it.",
    proof: "Galleries reframed delivery as a way to get paid, not just a hand-off.",
  },
  {
    title: "Let research move the scope",
    body: "Competitor teardowns, photographer interviews, and surveys are how I decide what to build, not only how to build it.",
    proof: "Research reset Galleries' scope twice before public launch.",
  },
  {
    title: "Prototype in code",
    body: "With a computer science degree and a frontend background, I prototype in React, scope what is technically realistic, and keep handoffs few.",
    proof: "Specs, PRDs, and decision docs that align engineering, leadership, and go-to-market.",
  },
];

export type Role = {
  company: string;
  title: string;
  start: string; // YYYY-MM
  end: string | null; // null means present
  place: string;
  primary?: boolean;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Aftershoot",
    title: "Product Designer 2",
    start: "2026-06",
    end: null,
    place: "Delhi",
    primary: true,
    highlights: [
      "Own product design for Aftershoot Galleries post-launch: the gallery editor, AI face detection for client photo access, and the WHCC print lab integration.",
      "Write product specs, PRDs, and decision documents that align engineering, leadership, and go-to-market on delivery and monetization features.",
      "Promoted from Product Designer 1 after leading Galleries from 0→1 through its Founders beta and public launch.",
    ],
  },
  {
    company: "Aftershoot",
    title: "Product Designer 1",
    start: "2023-09",
    end: "2026-05",
    place: "Delhi",
    primary: true,
    highlights: [
      "Led product design and de facto PM work on Aftershoot Galleries from kickoff, a 0→1 gallery delivery and print monetization platform now live at aftershoot.com.",
      "Ran competitor teardowns, photographer interviews, and surveys that drove two scope resets, from a basic gallery editor to a full print monetization platform.",
      "Designed profile versioning, an in-app feature, in close partnership with engineering and product.",
      "Designed and shipped high-converting marketing landing pages that grew signups, plus pitch decks, in-app banners, and launch creative.",
    ],
  },
  {
    company: "Razorpay",
    title: "Communication and Product Designer",
    start: "2023-03",
    end: "2023-09",
    place: "Haldwani",
    highlights: [
      "Designed the new Razorpay website UI in Figma and built landing pages in Unbounce.",
      "Wrote and designed the monthly newsletter using MoEngage and Adobe Creative Cloud.",
      "Created five brand case studies and supporting assets used across marketing and sales, plus video and motion graphics for campaigns.",
    ],
  },
  {
    company: "Avalara India",
    title: "UX Design Intern",
    start: "2022-09",
    end: "2022-12",
    place: "Remote",
    highlights: [
      "Audited site accessibility against WCAG 2.0 and delivered actionable recommendations for people with disabilities.",
      "Facilitated empathy mapping workshops that pushed existing products toward more user-centered design.",
      "Ran cross-browser QA across Chrome, Safari, Firefox, and Edge before launch.",
    ],
  },
  {
    company: "Technotix BU",
    title: "Social Media and Design Head",
    start: "2022-03",
    end: "2022-09",
    place: "Remote",
    highlights: ["Set strategy for upcoming events, created videos and GIFs, and coordinated messaging with other team heads."],
  },
  {
    company: "The Language Network",
    title: "Graphic Designer",
    start: "2021-03",
    end: "2022-04",
    place: "India",
    highlights: ["Studied briefs, presented concepts and drafts, and delivered on-brand graphics tested across media."],
  },
];

export const bio = [
  "Most SaaS teams bolt features onto a broken workflow and hope the UI fixes it. I redesign the workflow first.",
  "I'm a product designer at Aftershoot, where I design the tools photographers use to turn a shoot into delivered, paid work. I designed and defined Aftershoot Galleries from 0→1 as sole designer and de facto PM: I ran the research, reset scope twice based on what photographers told us, and shipped the print lab integration that turned delivery into a way to get paid.",
  "My background spans product design, frontend development, and brand design at Razorpay and Avalara. I can prototype in code, scope what's technically realistic, and still obsess over the pixel. Fewer handoffs, faster ships.",
  "Outside work: photowalks with the design team, a slowly growing Medium habit, and strong opinions about Ant Design defaults.",
];

export const skills = [
  "Product design",
  "Workflow UX",
  "Design systems",
  "0→1 products",
  "User research",
  "Specs and PRDs",
  "React prototyping",
  "B2B SaaS",
  "Accessibility",
  "Cross-functional collaboration",
];

export const education = {
  school: "Bennett University",
  degree: "Undergraduate, Computer Science and Engineering",
  years: "2019 to 2023",
};

export const certifications = ["Microsoft Certified: Azure AI Fundamentals"];

export const tools = [
  { name: "Figma", use: "Product and UI design" },
  { name: "React", use: "Prototyping in code" },
  { name: "Adobe Creative Cloud", use: "Brand, motion, and video" },
  { name: "Unbounce", use: "Landing pages" },
  { name: "MoEngage", use: "Newsletters and campaigns" },
];
