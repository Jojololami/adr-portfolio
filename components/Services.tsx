import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import WaitlistForm from "@/components/WaitlistForm";
import MediumBlog from "@/components/MediumBlog";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services | ADR Hub",
  description:
    "Helping businesses and professionals grow through AI integration, SEO, content marketing, and career coaching.",
  openGraph: {
    title: "Services | ADR Hub",
    description:
      "Explore the digital services I offer to help you grow your business and career.",
  },
};

const services = [
  {
    title: "AI Human Integrator",
    description:
      "Learn how to integrate AI into your business workflows, content creation, and daily operations to improve productivity and drive better results.",
  },
  {
    title: "SEO / GEO / AEO Manager",
    description:
      "Improve your visibility across search engines and AI-powered platforms with modern SEO, GEO, and Answer Engine Optimization strategies.",
  },
  {
    title: "Content Marketing",
    description:
      "Create content that attracts the right audience, builds trust, and turns visitors into loyal customers through strategic storytelling.",
  },
  {
    title: "Career Coaching",
    description:
      "Get personalized guidance on building your portfolio, positioning your skills, and landing opportunities that align with your career goals.",
  },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-32">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
            Services
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Helping you grow with{" "}
            <span className="text-gradient">AI, strategy, and execution.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you&apos;re building a business, growing your personal
            brand, or advancing your career, I provide practical solutions
            designed to help you achieve measurable results.
          </p>
        </div>
      </section>

      <Section
        eyebrow="What I Do"
        title="Services designed for real impact."
        subtitle="Every service is tailored to help individuals and businesses leverage technology, improve visibility, and achieve sustainable growth."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.15}>
              <div className="surface-card flex flex-col rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-brand/50">
                <h3 className="font-display text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-muted-foreground">
                  {service.description}
                </p>

                <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="surface-card relative overflow-hidden p-10 md:p-14">
          <div className="absolute inset-0 bg-hero-glow opacity-60" />

          <div className="relative grid gap-8 md:grid-cols-[2fr_3fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                Stay Connected
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
                Get practical insights delivered to your inbox.
              </h2>

              <p className="mt-4 text-muted-foreground">
                Join my community to receive actionable tips on AI, digital
                marketing, career growth, and productivity, along with updates
                on new services and opportunities.
              </p>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </Section>

      <MediumBlog />
    </>
  );
}