"use client";

import { useState } from "react";
import type { Metadata } from "next";
import {
  Calendar,
  Send,
  Check,
} from "lucide-react";
import Section from "@/components/Section";
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact | Aleem Aduragbemi",
  description:
    "Let's discuss your project, career goals, or business needs.",
  openGraph: {
    title: "Contact Aleem Aduragbemi",
    description: "Get in touch for collaborations, consulting, or coaching.",
  },
};

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "I usually respond within 24–48 business hours.",
  },
  {
    q: "Who can work with you?",
    a: "I work with businesses, founders, creators, professionals, and anyone looking to grow through AI, content, SEO, or career coaching.",
  },
  {
    q: "Do you offer one-on-one coaching?",
    a: "Yes. I provide personalized coaching sessions for professionals looking to improve their digital skills or career direction.",
  },
  {
    q: "Can we collaborate on a project?",
    a: "Absolutely. I'm open to collaborations, consulting, speaking engagements, and strategic partnerships.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
            Contact
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Let&apos;s <span className="text-gradient">work together.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Whether you need AI integration, content strategy, SEO support,
            career coaching, or simply want to discuss an idea, I &apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="surface-card flex flex-col gap-4 p-8"
          >
            <h2 className="font-display text-xl font-bold">
              Send a Message
            </h2>

            <Field label="Name">
              <input
                required
                className="input"
                placeholder="Your name"
              />
            </Field>

            <Field label="Email">
              <input
                required
                type="email"
                className="input"
                placeholder="your@email.com"
              />
            </Field>

            <Field label="Service">
              <select className="input">
                <option>General Inquiry</option>
                <option>AI Human Integration</option>
                <option>SEO / GEO / AEO</option>
                <option>Content Marketing</option>
                <option>Career Coaching</option>
                <option>Collaboration</option>
              </select>
            </Field>

            <Field label="Message">
              <textarea
                required
                rows={5}
                className="input resize-y"
                placeholder="Tell me about your project or goals..."
              />
            </Field>

            {submitted ? (
              <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-accent2" />
                Thanks! Your message has been received.
              </div>
            ) : (
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 text-sm font-semibold text-brand-foreground shadow-glow">
                Send Message
                <Send className="h-4 w-4" />
              </button>
            )}
          </form>

          <div className="space-y-6">
            <div className="surface-card p-8">
              <Calendar className="h-6 w-6 text-accent2" />

              <h2 className="mt-4 font-display text-xl font-bold">
                Book a Discovery Call
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Schedule a one-on-one session to discuss your business,
                career goals, or digital strategy.
              </p>

              <button className="mt-5 inline-flex h-12 items-center justify-center rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-foreground hover:bg-surface-elevated">
                Book a Call
              </button>
            </div>

            <div className="surface-card p-8">
              <h2 className="font-display text-xl font-bold">
                Connect With Me
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                    { icon: FaTwitter, label: "Twitter / X" , href: "#",},
        
                  {
                    icon: FaLinkedin,
                    label: "LinkedIn",
                    href: "#",
                  },
                  {
                    icon: FaInstagram,
                    label: "Instagram",
                    href: "#",
                  },

                   { icon: FaYoutube, label: "YouTube", href: "#", },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-foreground hover:bg-surface-elevated"
                  >
                    <social.icon className="h-4 w-4 text-accent2" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface/40">
          {faqs.map((faq) => (
            <div key={faq.q} className="px-6 py-5">
              <p className="font-display text-base font-semibold">
                {faq.q}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <style jsx>{`
        .input {
          height: 44px;
          width: 100%;
          border-radius: 12px;
          border: 1px solid var(--color-border);
          background: var(--surface);
          padding: 0 14px;
          color: var(--color-foreground);
          font-size: 14px;
        }

        textarea.input {
          height: auto;
        }

        .input::placeholder {
          color: var(--color-muted-foreground);
        }

        .input:focus {
          outline: none;
          border-color: var(--brand);
          box-shadow: 0 0 0 3px oklch(0.78 0.12 75 / 0.35);
        }
      `}</style>
    </>
  );
}

type FieldProps = {
  label: string;
  children: React.ReactNode;
};

function Field({ label, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}