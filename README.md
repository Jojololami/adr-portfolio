# ADR Portfolio

**[Live Site → adr-portfolio-omega.vercel.app](https://adr-portfolio-omega.vercel.app)**

Personal brand and portfolio site for **Aleem Aduragbemi (ADR Hub)** — built to showcase his work in AI integration, SEO/GEO/AEO, content marketing, and career coaching, and to convert visitors into clients, community members, and coaching leads.

## Features

- **Home** — Hero intro, program highlights (AI Human Integrator, SEO/GEO/AEO Manager, Content Marketer, Career Coach), "Why ADR" section, community callout, Medium blog feed link, FAQ, and final CTA
- **About** — Background and story
- **Services** — Breakdown of offerings
- **Community** — Mailing list waitlist signup (Formspree)
- **Contact** — Contact form (Formspree) with FAQ and social links
- Scroll-triggered reveal animations (Framer Motion)
- Fully responsive layout with a mobile nav drawer
- Custom design system built on Tailwind CSS v4 (gradient brand accents, glow effects, custom fonts)

## Tech Stack

| Category | Tools |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v4, `tailwind-merge`, `class-variance-authority`, `tw-animate-css` |
| Animation | Framer Motion |
| Icons | `lucide-react`, `react-icons` |
| Forms | [Formspree](https://formspree.io/) (`@formspree/react`) |
| Fonts | Inter & Inter Tight (via `next/font/google`) |
| Linting | ESLint 9 (`eslint-config-next`) |

## Project Structure

```
adr-portfolio/
├── app/
│   ├── about/page.tsx
│   ├── community/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Community.tsx
│   ├── Contacts.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Home.tsx
│   ├── MediumBlog.tsx
│   ├── Reveal.tsx
│   ├── Section.tsx
│   ├── Services.tsx
│   └── WaitlistForm.tsx
└── public/images/
```

## Getting Started

**Prerequisites:** Node.js 18.18+ and npm

1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/Jojololami/adr-portfolio.git
   cd adr-portfolio
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # production build
npm run start   # start production server
npm run lint    # run ESLint
```

## Forms

The Community and Contact pages submit through Formspree endpoints. If you fork this project, swap in your own Formspree form IDs in `components/Community.tsx`, `components/WaitlistForm.tsx`, and `app/contact/page.tsx`.

## Deployment

Deployed on [Vercel](https://vercel.com/), which is the recommended platform for Next.js apps and handles builds and previews automatically on push.

## Author

Built by [Jojololami](https://github.com/Jojololami) for Aleem Aduragbemi (ADR Hub).