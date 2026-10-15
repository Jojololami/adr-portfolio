import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import Fill from "@/components/Fill";
import { button, container, displayHeading, sectionHeading } from "@/components/ui";
import {
  certifications,
  education,
  experience,
  languages,
  links,
  site,
  skills,
} from "@/content/portfolio";

const About = () => {
  return (
    <>
      <section className={`${container} flex flex-col gap-10 py-12 md:flex-row md:gap-14 md:py-20`}>
        <div className="min-w-0 md:flex-[3]">
          <h1 className={`${displayHeading} mb-7`}>About me</h1>
          <div className="space-y-4">
            <p className="text-lg md:text-[19px]">
              Most tech products don&apos;t struggle because they lack innovation. They struggle
              because people don&apos;t understand them, and increasingly, because AI tools like
              ChatGPT and Google AI Overviews don&apos;t understand them either.
            </p>
            <p className="text-muted-foreground">
              I&apos;m an SEO, AEO and GEO strategist. For <Fill value={site.yearsOfExperience} />{" "}
              years I&apos;ve written and managed content for fintech, Web3 and AI companies, with
              one goal: making sure the right people find the product, whether they search on
              Google or ask a chatbot.
            </p>
            <p className="text-muted-foreground">
              I&apos;ve also worked on the other side of AI. As a co-author of Eng-PidginEdu, I
              helped build the data pipeline behind an English–Nigerian Pidgin translation dataset,
              from scraping and cleaning text in Python to reviewing model output by hand. That
              work showed me how language models process text, which is what AEO and GEO depend on.
            </p>
          </div>
        </div>
        <div className="min-w-0 md:flex-[2]">
          <Image
            src="/images/ADR.jpeg"
            alt={`Portrait of ${site.name}`}
            width={720}
            height={1080}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[4/5] max-h-[440px] w-full rounded-2xl border border-border object-cover object-top"
          />
        </div>
      </section>

      <Reveal>
        <section className={`${container} py-8 md:py-12`}>
          <h2 className={`${sectionHeading} mb-6`}>Experience</h2>
          <ol className="border-t border-border">
            {experience.map((e) => (
              <li
                key={`${e.org}-${e.dates}`}
                className="flex flex-col gap-1 border-b border-border py-5 md:flex-row md:gap-8"
              >
                <span className="pt-0.5 font-mono text-sm text-muted-foreground md:w-52 md:shrink-0">
                  {e.dates}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">
                    <Fill value={e.role} /> · {e.org}
                  </p>
                  <p className="mt-0.5 text-muted-foreground">{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section className={`${container} py-8 md:py-12`}>
          <h2 className={`${sectionHeading} mb-7`}>Skills</h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title} className="border-t-2 border-foreground pt-4">
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={`${container} grid gap-10 py-8 md:grid-cols-3 md:py-12`}>
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold md:text-[1.75rem]">Education</h2>
            <p className="font-semibold">{education.degree}</p>
            <p className="text-muted-foreground">{education.school}</p>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold md:text-[1.75rem]">Certifications</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold md:text-[1.75rem]">Languages</h2>
            <p className="text-muted-foreground">
              {languages.map((l, i) => (
                <Fill key={i} value={l} />
              ))}
            </p>
          </div>
        </section>
      </Reveal>

      {/* Kept from the previous About page at the owner's request. */}
      <Reveal>
        <section className={`${container} pb-16 pt-8 md:pb-24 md:pt-12`}>
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold">Partner With Us</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Support what we do by making a donation. Thank you for being part of the journey.
              </p>
            </div>
            <a
              href={links.whatsappSupport}
              target="_blank"
              rel="noopener noreferrer"
              className={`${button({ variant: "outline", size: "md" })} shrink-0`}
            >
              Be a Part of Our Growth <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </Reveal>
    </>
  );
};

export default About;
