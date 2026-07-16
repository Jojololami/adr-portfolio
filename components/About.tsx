import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Compass, BookOpen, Users } from "lucide-react";
import Section from "./Section";

const philosophy = [
  {
    icon: Target,
    title: "Professional excellence",
    desc: "Every lesson leads to something you can ship, share, or sell.",
  },
  {
    icon: Compass,
    title: "Premium Services",
    desc: "(Free content review, seo audit, career mentorship.) AI is woven into every program — not an elective.",
  },
  {
    icon: BookOpen,
    title: "News and education",
    desc: "Learn alongside peers with real human feedback.",
  },
  {
    icon: Users,
    title: "Accountability and guidance",
    desc: "Accountability and opportunities come from the people around you.",
  },
];

const roadmap = [
  {
    q: "1",
    title: "Contact Us",
    detail: "AI Content Creation begins. Waitlist opens.",
  },
  {
    q: "2",
    title: "Free Audit",
    detail: "Second wave of cohorts launches.",
  },
  {
    q: "3",
    title: "Deliver technical strategy for your brand",
    detail:
      "Student dashboards, lessons, certificates, and progress tracking.",
  },
  {
    q: "4",
    title: "Execution",
    detail:
      "Open instructor applications, native community, and paid plans.",
  },
  {
    q: "5",
    title: "Reports",
    detail:
      "Open instructor applications, native community, and paid plans.",
  },
];

const About = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-32">

          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Meet {" "}
            <span className="text-gradient">Aduragemi Aleem</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Adura is a Africa&apos;s next generation of digital professionals by
            making world-class, practical digital skills accessible,
            structured, and career-ready.
          </p>
        </div>
      </section>

      <Section eyebrow="ME" title="How I Got Here.">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_2fr]">
          <Image
            src="/images/ADR.jpeg"
            alt="Adetayo, founder"
            width={768}
            height={896}
            className="aspect-[4/5] w-full rounded-2xl border border-border object-cover"
          />

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Hi, I&apos;m{" "}
              <span className="font-semibold text-foreground">
                Adetayo (ADR)
              </span>{" "}
              — an AI Content Integrator and the founder of ADR Hub.
            </p>

            <p>
              I&apos;ve spent the last few years inside the AI content stack —
              building, integrating, and teaching the workflows that creators
              and brands use to ship at speed.
            </p>

            <p>
              Everywhere I looked, I saw the same gap: schools weren&apos;t
              teaching digital skills, and online courses weren&apos;t built for
              African realities. So I&apos;m building the academy I wish existed
              — practical, AI-first, mentor-led, and structured for real
              careers.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Commitment" title="The things I do.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((item) => (
            <div key={item.title} className="surface-card p-6">
              <item.icon className="h-6 w-6 text-accent2" />

              <h3 className="mt-4 font-display text-base font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Roadmap" title="Move From Here to There.">
        <ol className="relative space-y-6 border-l border-border pl-8">
          {roadmap.map((item) => (
            <li key={item.q} className="surface-card relative p-6">
              <span className="absolute -left-[2.6rem] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-brand-foreground shadow-glow">
                {item.q}
              </span>

              <h3 className="font-display text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Financial Box"
        title="Partner With Us"
        subtitle="ADR Hub will host curated instructors—vetted for craft, communication, and a deep commitment to learner outcomes."
      >
        <Link
          href="https://wa.me/2348109656603?text=Hi%20Aduragbemi%20Aleem,%20I'd%20like%20to%20book%20a%20discovery%20call."
  target="_blank"
  rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 text-sm font-semibold text-brand-foreground shadow-glow"
        >
          Be a Part of Our Growth
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      
    </>
  );
};

export default About;