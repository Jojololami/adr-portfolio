import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import WaitlistForm from "@/components/WaitlistForm";
import MediumBlog from "@/components/MediumBlog";
import Reveal from "@/components/Reveal";
import Faq, { type FaqItem } from "@/components/Faq";

// Page metadata now lives in app/services/page.tsx (Next.js ignored it here).

// Moved from the old Home page. These questions are about services, so they live here now.
const faqs: FaqItem[] = [
  {
    q: "Who is Aduragbemi Aleem?",
    a: "I am a digital professional with expertise in content management, digital marketing, and AI integration. I am passionate about helping businesses and individuals thrive in the digital age.",
  },
  {
    q: "What services do I offer?",
    a: "I offer a range of services including AI integration, SEO/GEO/AEO management, and content marketing. Each service is designed to help your business gain visibility, drive growth, and thrive in the digital age. Based on your business needs, I can provide tailored solutions to help you achieve your goals.",
  },
  {
    q: "How much do my services cost?",
    a: "My pricing varies depending on the scope and complexity of the project. I offer competitive rates and can provide a detailed quote after discussing your specific needs and requirements.",
  },
  {
    q: "Why should you trust me?",
    a: "I come with a proven track record of delivering results for clients across various industries. My expertise, dedication, and commitment to your success make me a reliable partner for your digital needs.",
  },
  {
    q: "Can you provide proof of your work and results?",
    a: "Yes, I can provide case studies, testimonials, and examples of my previous work to demonstrate the results I have achieved for clients. I am happy to share this information upon request.",
  },
];

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

                {/* Previously a <button> with no handler; now goes to the contact page. */}
                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Learn More
                  <span className="sr-only"> about {service.title}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
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

      <Reveal>
        <Faq items={faqs} />
      </Reveal>
    </>
  );
}