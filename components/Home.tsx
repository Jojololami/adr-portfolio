"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MediumBlog from "@/components/MediumBlog"
import {
  ArrowRight,
  Sparkles,
  Code2,
  // Palette,
  Megaphone,
  Briefcase,
  Users,
  Zap,
  Globe2,
  Bot,
  ChevronDown,
} from "lucide-react";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";


const Home = () => {
  return (
    <>
    <Hero />      

<Reveal>
  <Programs />
</Reveal>

<Reveal>
  <WhyADR />
</Reveal>

<Reveal>
  <Community />
</Reveal>

<Reveal>
  <MediumBlog />
</Reveal>

<Reveal>
  <FAQ />
</Reveal>

<Reveal>
  <FinalCTA />
</Reveal>
    </>
  );
};

const programs = [
  {
    slug: "ai-human-integrator",
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI Human Integrator",
    tagline: "Learn to integrate AI into your workflows, projects, and career for maximum impact.",
  },
  {
    slug: "SEO-GEO-AEO-manager",
    icon: <Code2 className="h-6 w-6" />,
    title: "SEO/GEO/AEO Manager",
    tagline: "Master search engine optimization, growth, and analytics for global reach. ",
  },
  {
    slug: "content-marketer",
    icon: <Megaphone className="h-6 w-6" />,
    title: "Content Marketer",
    tagline: "Create compelling content that drives engagement and conversions.",
  },
  {
    slug: "career-coach",
    icon: <Briefcase className="h-6 w-6" />,
    title: "Career Coach",
    tagline: "Navigate your career path with confidence and clarity.",
  },
 
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
        <div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
           Meet Aduragbemi{" "}
            <span className="text-gradient">Aleem.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Aduragbemi Aleem is a digital professional with a passion for creating innovative solutions that leverage technology to solve real-world problems. With expertise in content management, digital marketing, and AI integration, Aduragbemi is dedicated to helping businesses and individuals thrive in the digital age.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />

          <Image
            src="/images/ADR.jpeg"
            alt="AI-powered learning visualization"
            width={1024}
            height={1024}
            className="relative aspect-square w-full rounded-3xl border border-border object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <Section
  eyebrow="Services"
  title="What Aduragbemi Does"
  subtitle="Each service focuses on helping your business gain visibility, drive growth, and thrive in the digital age."
>
  <div className="grid gap-6 md:grid-cols-2">
    {programs.map((program) => (
      <div
        key={program.slug}
        className="surface-card flex flex-col p-8 transition-all hover:-translate-y-1 hover:border-brand/50"
      >
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-xl text-brand-foreground shadow-glow">
          {program.icon}
        </div>

        <h3 className="font-display text-xl font-semibold">
          {program.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {program.tagline}
        </p>
      </div>
    ))}
  </div>
</Section>
  );
}

const reasons = [
  {
    icon: Bot,
    title: "AI-Driven Solutions",
    desc: "I help businesses integrate AI into their workflows to improve productivity, automate repetitive tasks, and create better digital experiences.",
  },
  {
    icon: Zap,
    title: "Visibility That Converts",
    desc: "From SEO to GEO and AEO, I build strategies that help brands get discovered by both search engines and AI-powered platforms.",
  },
  {
    icon: Users,
    title: "Strategy Meets Execution",
    desc: "I don't just create plans. I execute them, delivering content, systems, and digital solutions that produce measurable results.",
  },
  {
    icon: Globe2,
    title: "Career Growth Guidance",
    desc: "Whether you're breaking into tech, switching careers, or positioning yourself for new opportunities, I provide practical guidance to help you build a clear path forward.",
  },
];

function WhyADR() {
  return (
    <Section
      title="Why Aduragbemi Aleem?"
      subtitle="I combine technical expertise, strategic thinking, and practical execution to deliver solutions that create real business impact."
     
>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <div key={reason.title} className="surface-card p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-accent2">
              <reason.icon className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-display text-lg font-semibold">
              {reason.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}


function Community() {
  return (
    <Section>
      <div className="surface-card relative overflow-hidden p-10 md:p-16">
        <div className="absolute inset-0 bg-hero-glow opacity-60" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
              Newsletter
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Subscribe to my Newsletter
            </h2>

            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Be the first to know about the latest insights, tips, and updates on digital marketing, AI integration, and content management.
            </p>
          </div>

          <Link
            href="/community"
            className="inline-flex h-12 items-center justify-center gap-2 self-start rounded-xl bg-gradient-brand px-6 text-sm font-semibold text-brand-foreground shadow-glow"
          >
            Subscribe

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}


const faqs = [
  {
    q: "Who is Aduragbemi Aleem?",
    a: "I am a digital professional with expertise in content management, digital marketing, and AI integration. I am passionate about helping businesses and individuals thrive in the digital age.",
  },
  {
    q: "What services do I offer?",
    a: "I offer a range of services including AI integration, SEO/GEO/AEO management, and content marketing. Each service is designed to help your business gain visibility, drive growth, and thrive in the digital age. Based on your business needs, I can provide tailored solutions to help you achieve your goals.",
  },
  {
    q: "How much do my services cost",
    a: "My pricing varies depending on the scope and complexity of the project. I offer competitive rates and can provide a detailed quote after discussing your specific needs and requirements.",
  },
  {
    q: "Why should your trust me?",
    a: "I come with a proven track record of delivering results for clients across various industries. My expertise, dedication, and commitment to your success make me a reliable partner for your digital needs.",
  },
  {
    q: "Can you provide proof of your work and results?",
    a: "Yes, I can provide case studies, testimonials, and examples of my previous work to demonstrate the results I have achieved for clients. I am happy to share this information upon request.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section eyebrow="FAQ" title="Questions, answered." align="center">
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface/40">
        {faqs.map((faq, index) => (
          <button
            key={faq.q}
            onClick={() => setOpen(open === index ? null : index)}
            className="flex w-full flex-col px-6 py-5 text-left"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-display text-base font-semibold">
                {faq.q}
              </span>

              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === index && (
              <p className="mt-3 text-sm text-muted-foreground">
                {faq.a}
              </p>
            )}
          </button>
        ))}
      </div>
    </Section>
  );
};

const FinalCTA = () => {
  return (
    <Section>
      <div className="surface-card relative overflow-hidden p-12 text-center md:p-20">
        <div className="absolute inset-0 bg-hero-glow" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Your digital future{" "}
            <span className="text-gradient">starts here.</span>
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-foreground hover:bg-surface-elevated"
            >
              Talk to me at no cost  <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;