import Reveal from "@/components/Reveal";
import Fill from "@/components/Fill";
import { button, container, displayHeading, eyebrow, sectionHeading } from "@/components/ui";
import { caseStudies, isTodo, writingSamples, type CaseStudy } from "@/content/portfolio";

export default function Work() {
  return (
    <>
      <section className={`${container} pb-8 pt-12 md:pb-12 md:pt-20`}>
        <h1 className={`${displayHeading} mb-4`}>Selected work</h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Each case study covers the problem, what I did, and what came of it.
        </p>
      </section>

      <div className={`${container} flex flex-col gap-8 md:gap-12`}>
        {caseStudies.map((c, i) => (
          <Reveal key={c.id}>
            <CaseStudyCard study={c} index={i + 1} />
          </Reveal>
        ))}
      </div>

      <section className={`${container} py-16 md:py-24`}>
        <h2 className={`${sectionHeading} mb-6`}>Writing samples</h2>
        <ul className="border-t border-border">
          {writingSamples.map((s, i) => (
            <li
              key={i}
              className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-border py-4"
            >
              {isTodo(s.href) ? (
                <span className="font-semibold">
                  <Fill value={s.title} />
                </span>
              ) : (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand hover:text-brand-dark"
                >
                  <Fill value={s.title} />
                </a>
              )}
              <span className="text-muted-foreground">{s.source}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function CaseStudyCard({ study: c, index }: { study: CaseStudy; index: number }) {
  const num = String(index).padStart(2, "0");

  if (c.pending) {
    return (
      <article
        id={c.id}
        className="scroll-mt-24 rounded-2xl border-2 border-dashed border-input p-6 md:p-10"
      >
        <p className={`${eyebrow} mb-3`}>
          {num} · {c.eyebrow}
        </p>
        <h2 className="mb-3 font-display text-2xl font-bold md:text-3xl">{c.title}</h2>
        <p className="text-muted-foreground">
          <Fill value={c.context} />
        </p>
      </article>
    );
  }

  return (
    <article
      id={c.id}
      className="flex scroll-mt-24 flex-col gap-8 rounded-2xl border border-border bg-surface p-6 md:p-12"
    >
      <div>
        <p className={`${eyebrow} mb-3`}>
          {num} · {c.eyebrow}
        </p>
        <h2 className="mb-3 font-display text-[clamp(1.75rem,3.5vw,2.375rem)] font-bold leading-tight">
          {c.title}
        </h2>
        <p className="max-w-3xl text-muted-foreground">
          <Fill value={c.context} />
        </p>
      </div>

      {c.stats && (
        <dl className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {c.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-brand-soft p-4 md:p-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold leading-tight md:text-[2.125rem]">
                {s.value}
              </dd>
              <dd className="text-[15px] text-accent-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="grid gap-8 md:grid-cols-[3fr_2fr] md:gap-10">
        <div>
          <h3 className="mb-3 text-xl font-semibold">What I did</h3>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-muted-foreground">
            {c.did.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-semibold">{c.sideTitle}</h3>
          <ul className="mb-6 flex flex-col gap-2 text-muted-foreground">
            {c.side.map((s, i) => (
              <li key={i}>
                <Fill value={s} />
              </li>
            ))}
          </ul>
          {c.extraTitle && (
            <>
              <h3 className="mb-3 text-xl font-semibold">{c.extraTitle}</h3>
              <p className="text-muted-foreground">{c.extra}</p>
            </>
          )}
        </div>
      </div>

      {c.links && c.links.length > 0 && (
        <div className="flex flex-wrap gap-3 border-t border-border pt-6">
          {c.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={button({ variant: l.primary ? "primary" : "outline", size: "md" })}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
