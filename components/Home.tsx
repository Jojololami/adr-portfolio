import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import Fill from "@/components/Fill";
import { button, container, displayHeading, eyebrow, label, sectionHeading } from "@/components/ui";
import {
  caseStudies,
  featuredCaseIds,
  homeCardEyebrows,
  homeCardTitles,
  links,
  pillars,
  proofPoints,
  sampleSources,
  site,
} from "@/content/portfolio";

const Home = () => {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Reveal>
        <SelectedWork />
      </Reveal>
      <Reveal>
        <WhatIDo />
      </Reveal>
      <Reveal>
        <WritingSamples />
      </Reveal>
      <FinalCTA />
    </>
  );
};

function Hero() {
  return (
    <section className={`${container} flex flex-col gap-10 py-12 md:flex-row md:items-center md:gap-14 md:py-24`}>
      <div className="min-w-0 md:flex-[3]">
        <p className={`${eyebrow} mb-5`}>SEO · AEO · GEO Strategist</p>
        <h1 className={`${displayHeading} mb-6`}>
          I help tech and AI brands get found on Google and cited by AI.
        </h1>
        <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
          <Fill value={site.yearsOfExperience} /> years writing and managing content for fintech,
          Web3 and AI companies. Co-author of an NLP dataset recognised at Deep Learning Indaba 2026.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/work" className={button()}>
            View my work
          </Link>
          {site.cvPath ? (
            <a href={site.cvPath} download className={button({ variant: "outline" })}>
              Download CV
            </a>
          ) : (
            <Link href="/contact" className={button({ variant: "outline" })}>
              Get in touch
            </Link>
          )}
        </div>
      </div>

      <div className="min-w-0 md:flex-[2]">
        <Image
          src="/images/ADR.jpeg"
          alt={`Portrait of ${site.name}`}
          width={720}
          height={1080}
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="aspect-[4/5] max-h-[440px] w-full rounded-2xl border border-border object-cover object-top"
        />
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section aria-label="Current roles and recognition" className="border-y border-border bg-surface">
      <div className={`${container} grid gap-5 py-7 sm:grid-cols-3 sm:gap-10`}>
        {proofPoints.map((p) => (
          <div key={p.value}>
            <p className={label}>{p.label}</p>
            <p className="mt-1 font-semibold">{p.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SelectedWork() {
  const featured = featuredCaseIds
    .map((id) => caseStudies.find((c) => c.id === id))
    .filter((c) => c !== undefined);

  return (
    <section className={`${container} py-16 md:py-24`}>
      <div className="mb-9 flex flex-wrap items-baseline justify-between gap-4">
        <h2 className={sectionHeading}>Selected work</h2>
        <Link href="/work" className="font-semibold text-brand hover:text-brand-dark">
          All case studies →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((c) => (
          <article
            key={c.id}
            className="flex flex-col gap-3.5 rounded-2xl border border-border bg-surface p-6 md:p-7"
          >
            <p className={eyebrow}>{homeCardEyebrows[c.id]}</p>
            <h3 className="font-display text-2xl font-bold leading-tight">{homeCardTitles[c.id]}</h3>
            <p className="text-muted-foreground">
              {c.summary.map((s, i) => (
                <span key={i}>
                  {i > 0 && " "}
                  <Fill value={s} />
                </span>
              ))}
            </p>
            <Link
              href={`/work#${c.id}`}
              className="mt-auto inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-dark"
            >
              Read case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className={`${container} pb-16 md:pb-24`}>
      <h2 className={`${sectionHeading} mb-9`}>What I do</h2>
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {pillars.map((p) => (
          <div key={p.title} className="border-t-2 border-foreground pt-5">
            <h3 className="mb-2.5 text-xl font-semibold">{p.title}</h3>
            <p className="text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WritingSamples() {
  return (
    <section className={`${container} pb-16 md:pb-24`}>
      <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">Writing samples</h2>
      <div className="flex flex-wrap gap-3">
        {sampleSources.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-5 py-3 font-medium text-brand hover:border-brand"
          >
            {s.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className={`${container} flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-20`}>
        <div>
          <h2 className={`${sectionHeading} mb-3`}>Hiring for SEO, content or AI-search roles?</h2>
          <p className="text-lg text-primary-foreground/80">I&apos;d like to hear about it.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className={button({ variant: "light" })}>
            Email me
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={button({ variant: "outlineLight" })}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
