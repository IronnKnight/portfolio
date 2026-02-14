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
    "Building scalable web applications for enterprise clients with 7+ years of experience delivering high-impact solutions across e-commerce and SaaS platforms.",
  socials: [
    { label: "GitHub", url: "https://github.com/nikolastef" },
    { label: "LinkedIn", url: "https://linkedin.com/in/nikolastef" },
    { label: "Email", url: "mailto:nikola.stef07@gmail.com" },
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    company: "Macy's",
    role: "Senior Frontend Engineer",
    period: "2023 — Present",
    context:
      "Internal platform team supporting one of the largest US department store retailers.",
    problem:
      "Fragmented frontend tooling across teams led to inconsistent UX, slow feature delivery, and duplicated effort across multiple product squads.",
    decisions: [
      "Architected a shared React component library used across 4 product teams",
      "Established CI/CD pipelines reducing build times by 40%",
      "Led migration from legacy jQuery modules to React with TypeScript",
      "Introduced automated visual regression testing with Chromatic",
    ],
    impact:
      "Reduced cross-team UI inconsistencies by 60% and cut average feature delivery time from 3 weeks to 1.5 weeks.",
    techStack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Material UI",
      "Jenkins",
      "Docker",
    ],
  },
  {
    company: "PetSmart",
    role: "Frontend Engineer",
    period: "2022 — 2023",
    context:
      "High-traffic retail e-commerce platform serving millions of monthly visitors.",
    problem:
      "Deployment reliability issues and slow page loads were impacting conversion rates during peak traffic events.",
    decisions: [
      "Migrated key pages to Next.js for server-side rendering and improved SEO",
      "Implemented performance monitoring and Core Web Vitals tracking",
      "Built feature flag system for safer production deployments",
      "Optimized critical rendering path reducing LCP by 35%",
    ],
    impact:
      "Achieved 99.9% deployment success rate and improved Lighthouse performance scores from 62 to 91.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ArgoCD",
      "Vercel",
    ],
  },
  {
    company: "SBandCO",
    role: "Frontend Engineer",
    period: "2021 — 2022",
    context:
      "Greenfield build for a boutique e-commerce brand launching their first digital storefront.",
    problem:
      "No existing codebase or technical infrastructure — needed to make foundational architecture decisions that would scale.",
    decisions: [
      "Chose Next.js with App Router for SEO-critical product pages",
      "Designed component architecture with atomic design principles",
      "Set up headless CMS integration for content management",
      "Implemented responsive design system with Tailwind CSS",
    ],
    impact:
      "Delivered production-ready storefront in 4 months, handling 10K+ daily visitors from launch day.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
    ],
  },
  {
    company: "American Eagle",
    role: "Frontend Engineer",
    period: "2019 — 2021",
    context:
      "Large-scale e-commerce platform for a global fashion retailer with complex product catalog and checkout flows.",
    problem:
      "Legacy Ember codebase was difficult to maintain, and the team needed to modernize while keeping the storefront running.",
    decisions: [
      "Led incremental migration strategy from Ember to TypeScript-first patterns",
      "Refactored checkout flow reducing cart abandonment by 15%",
      "Built reusable component patterns adopted across 3 feature teams",
      "Mentored junior developers on TypeScript best practices",
    ],
    impact:
      "Maintained 2+ years of zero-downtime deployments while progressively modernizing the frontend stack.",
    techStack: ["Ember", "TypeScript", "SCSS", "Redux", "Webpack", "Jest"],
  },
  {
    company: "Coligo / Summa Communications",
    role: "Frontend Developer",
    period: "2017 — 2019",
    context:
      "Desktop and web application development for enterprise communication platforms.",
    problem:
      "Clients needed both a desktop app and web interface with shared business logic and consistent UX.",
    decisions: [
      "Built cross-platform desktop app using Angular and Electron",
      "Designed shared service layer consumed by both desktop and web clients",
      "Implemented real-time communication features with WebSocket integration",
      "Established testing practices with unit and integration test coverage",
    ],
    impact:
      "Delivered unified desktop and web experience used by 500+ enterprise users daily.",
    techStack: ["Angular", "Electron", "TypeScript", "RxJS", "Node.js"],
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
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "Material UI",
    ],
  },
  {
    name: "Previously Used",
    items: ["Ember", "Angular", "Electron"],
  },
  {
    name: "Testing",
    items: ["Vitest", "Jest"],
  },
  {
    name: "Tools & Infrastructure",
    items: ["Git", "Docker", "Jenkins", "ArgoCD", "Vercel", "Webpack"],
  },
  {
    name: "Backend Awareness",
    items: ["Node.js", "MongoDB"],
  },
];
