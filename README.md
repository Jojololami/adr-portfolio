# ADR Portfolio

**[Live Site → adr-portfolio-omega.vercel.app](https://adr-portfolio-omega.vercel.app)**

Personal brand and portfolio site for **Aleem Aduragbemi (ADR Hub)** — built to showcase his work in AI integration, SEO/GEO/AEO, content marketing, and career coaching, and to convert visitors into clients, community members, and coaching leads.

## Features

- **Home** — Positioning hero, current roles, selected work, what I do, writing samples, hiring CTA, Person JSON-LD
- **Work** — Case studies (Eng-PidginEdu, Ridima, Web3) and writing samples
- **About** — Bio, experience timeline, skills, education, certifications, "Partner With Us" link
- **Contact** — Contact form (Formspree), WhatsApp discovery call, social links, FAQ
- **Services** — Offerings (Learn More → Contact), waitlist signup (Formspree), FAQ accordion. Linked from the footer.
- **Community** — Mailing list signup (Formspree). Linked from the footer.
- Per-page titles, descriptions, canonical URLs and Open Graph tags
- Scroll-triggered reveal animations (Framer Motion)
- Fully responsive layout with a mobile nav drawer
- Design tokens in `app/globals.css` on Tailwind CSS v4 (light theme, deep green accent)

## Editing content

All portfolio copy lives in **`content/portfolio.ts`**. Unfinished items are written as `todo("…")` and show as yellow highlights on the site.

```bash
npm run check:content   # lists anything still to fill in; exits 1 until it's all done
```

To add the CV: put the file at `public/cv.pdf`, then set `cvPath: "/cv.pdf"` in `content/portfolio.ts`. Every "Download CV" button stays hidden until then, so no link can 404.

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
| Fonts | Bricolage Grotesque, Instrument Sans & JetBrains Mono (via `next/font/google`) |
| Linting | ESLint 9 (`eslint-config-next`) |

## Project Structure

```
adr-portfolio/
├── app/
│   ├── about/page.tsx
│   ├── community/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── work/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Community.tsx
│   ├── Contacts.tsx
│   ├── Faq.tsx
│   ├── Fill.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Home.tsx
│   ├── MediumBlog.tsx
│   ├── Reveal.tsx
│   ├── Section.tsx
│   ├── Services.tsx
│   ├── WaitlistForm.tsx
│   ├── Work.tsx
│   └── ui.ts
├── content/portfolio.ts
├── lib/metadata.ts
├── scripts/check-content.mjs
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

The Community, Services and Contact pages submit through Formspree endpoints. If you fork this project, swap in your own Formspree form IDs in `components/Community.tsx`, `components/WaitlistForm.tsx`, and `components/Contacts.tsx`.

## Deployment

Deployed on [Vercel](https://vercel.com/), which is the recommended platform for Next.js apps and handles builds and previews automatically on push.

## Author

Built by [Jojololami](https://github.com/Jojololami) for Aleem Aduragbemi (ADR Hub).