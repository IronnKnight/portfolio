# Nikola Stefanovic — Portfolio

A single-page portfolio website for a Senior Frontend Engineer, built with a Swiss Minimal design philosophy featuring dark/light mode, scroll-reveal animations, and a working contact form.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Typography:** Geist Sans + Geist Mono
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light toggle + system preference)
- **Contact Form:** React Hook Form + Zod + Resend
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory:

```
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=nikola.stef07@gmail.com
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              Root layout (fonts, theme provider)
│   ├── page.tsx                Home page (assembles all sections)
│   ├── globals.css             Tailwind + CSS variables for theming
│   └── api/contact/route.ts    Contact form API (validation, rate limiting, email)
├── components/
│   ├── layout/                 Header, Footer
│   ├── sections/               Hero, Experience, Approach, TechStack, Contact
│   ├── ui/                     Button, Badge, Card, Container, ScrollReveal, etc.
│   └── providers/              ThemeProvider
├── lib/
│   ├── data.ts                 All portfolio content (single source of truth)
│   ├── validators.ts           Zod schemas
│   ├── resend.ts               Email client
│   └── rate-limit.ts           In-memory rate limiter
└── types/
    └── index.ts                Shared TypeScript interfaces
```

## Deployment

Deploy to Vercel:

1. Connect your GitHub repository
2. Set environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL`)
3. Deploy
