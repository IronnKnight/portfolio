import type {
  PersonalInfo,
  CaseStudy,
  Principle,
  TechCategory,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Nikola Stefanovic",
  title: "Senior Frontend Engineer",
  statement:
    "Frontend Software Engineer with 7+ years of experience building scalable web applications for large e-commerce and enterprise clients. Specialized in React, Next.js, TypeScript, and modern frontend architecture, with a focus on performance and code quality. Collaborates closely with design and backend teams to deliver cohesive, production-ready solutions.",
  socials: [
    { label: "GitHub", url: "https://github.com/nikolastef" },
    { label: "LinkedIn", url: "https://linkedin.com/in/nikolastef" },
    { label: "Email", url: "mailto:nikola.stef07@gmail.com" },
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    project: "Macy's",
    position: "Software Engineer at Grid Dynamics",
    period: "May 2025 — Feb 2026",
    highlights: [
      "Built reusable React components for internal platform, improving development speed and UI consistency",
      "Optimized frontend performance and reduced build issues through improved CI/CD workflows",
      "Collaborated with UX, QA, and backend teams to deliver production-ready features",
      "Maintained high code quality through testing, code reviews, and architectural improvements",
    ],
    techStack: [
      "TypeScript",
      "React",
      "RTK",
      "RTK Query",
      "Material UI",
      "HTML",
      "CSS",
      "Vitest",
    ],
  },
  {
    project: "PetSmart",
    url: "https://www.petsmart.com/",
    position: "Software Engineer at Grid Dynamics",
    period: "Feb 2024 — Apr 2025",
    highlights: [
      "Implemented customer-facing features using React and Next.js for a high-traffic retail platform",
      "Improved deployment reliability by coordinating with QA and DevOps across multiple environments",
      "Strengthened test coverage using Jest and CI pipelines",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit",
      "RTK Query",
      "Jenkins",
      "Edgio",
      "Jest",
    ],
  },
  {
    project: "SBandCO",
    url: "https://www.sbandco.com/",
    position: "Software Engineer at Grid Dynamics",
    period: "Nov 2023 — Jan 2024",
    highlights: [
      "Helped build a new React/Next.js application from the ground up",
      "Contributed to early architecture decisions and core UI components",
      "Supported deployment workflows in a small, fast-moving team",
    ],
    techStack: ["TypeScript", "React", "Next.js", "Netlify", "Jest"],
  },
  {
    project: "American Eagle",
    url: "https://www.ae.com/intl/en",
    position: "Software Engineer at Grid Dynamics",
    period: "Aug 2021 — Oct 2023",
    highlights: [
      "Implemented features across a large-scale e-commerce platform using Ember and TypeScript",
      "Maintained and enhanced existing web client functionality for high-traffic pages",
      "Participated in sprint planning, demos, and backlog refinement with cross-functional teams",
    ],
    techStack: ["TypeScript", "HTML", "CSS", "Ember", "MirageJS"],
  },
  {
    project: "Coligo",
    url: "https://desktop.coligo.com/",
    position: "Frontend Developer at Summa Communications",
    period: "Jul 2018 — Jul 2021",
    highlights: [
      "Developed and maintained desktop and web client using Angular and Electron",
      "Implemented new UI features and resolved production defects",
      "Collaborated with senior engineers to translate requirements into functional components",
      "Strengthened core frontend skills across JavaScript, HTML, CSS, and TypeScript",
    ],
    techStack: ["TypeScript", "HTML", "CSS", "Angular", "Electron"],
  },
];

export const engineeringPrinciples: Principle[] = [
  {
    title: "Performance-First Mindset",
    description:
      "Every architectural decision starts with performance implications. I measure Core Web Vitals, optimize critical rendering paths, and treat bundle size as a feature.",
  },
  {
    title: "Clean Separation of Concerns",
    description:
      "UI components stay presentational. Business logic lives in hooks and services. Data fetching is decoupled from rendering. This makes code testable and refactorable.",
  },
  {
    title: "Testing as a First-Class Citizen",
    description:
      "Tests aren't an afterthought. I write unit tests for logic, integration tests for flows, and visual regression tests for UI consistency across releases.",
  },
  {
    title: "Deployment Awareness",
    description:
      "Code that can't be shipped safely isn't done. I build with CI/CD in mind, use feature flags for gradual rollouts, and design for zero-downtime deployments.",
  },
  {
    title: "Developer Experience Focus",
    description:
      "Good DX compounds. I invest in shared component libraries, clear documentation, consistent patterns, and tooling that makes the team faster over time.",
  },
];

export const techStack: TechCategory[] = [
  {
    name: "Languages:",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    name: "Frontend:",
    items: [
      "React",
      "Next.js",
      "RTK",
      "RTK Query",
      "TanStack Query",
      "Material UI",
      "Ember",
      "Angular",
    ],
  },
  {
    name: "Styling & Build Tools:",
    items: ["SCSS", "CSS Modules", "Webpack"],
  },
  {
    name: "Testing:",
    items: ["Vitest", "Jest"],
  },
  {
    name: "Backend & Desktop:",
    items: ["Node.js", "MongoDB", "Electron"],
  },
  {
    name: "DevOps & Tooling:",
    items: [
      "Git",
      "Bitbucket",
      "Jira",
      "Docker",
      "Jenkins",
      "Bamboo",
      "ArgoCD",
      "Netlify",
      "Edgio",
    ],
  },
];
