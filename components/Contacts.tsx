"use client";

import { useEffect, useRef } from "react";
import { useForm } from "@formspree/react";
import { Calendar, Send, Check } from "lucide-react";
import Section from "@/components/Section";
import { FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa6";
import { button, container, displayHeading, label } from "@/components/ui";
import { links, site } from "@/content/portfolio";

// Page metadata now lives in app/contact/page.tsx. Next.js ignored it here,
// because metadata is only read from page and layout files.

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

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: links.linkedin },
  { icon: FaInstagram, label: "Instagram", href: links.instagram },
  { icon: FaTiktok, label: "TikTok", href: links.tiktok },
  { icon: FaTwitter, label: "Twitter / X", href: links.x },
];

export default function ContactPage() {
  // Unchanged: same Formspree form ID, same field names, same states.
  const [state, handleSubmit] = useForm("xaqrejbv");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <>
      <section className={`${container} grid gap-12 py-12 md:grid-cols-2 md:gap-16 md:py-20`}>
        <div className="min-w-0">
          <h1 className={`${displayHeading} mb-5`}>Let&apos;s talk</h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-[19px]">
            I&apos;m open to SEO, content strategy and AI-search roles at tech and AI companies.
            I&apos;m also available for selected freelance projects, collaborations and coaching.
          </p>

          <dl className="mb-8 flex flex-col gap-4">
            <div>
              <dt className={label}>Email</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-lg font-semibold text-brand hover:text-brand-dark"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className={label}>Location</dt>
              <dd className="text-lg font-semibold">{site.location} · open to remote</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-3">
            <a
              href={links.whatsappCall}
              target="_blank"
              rel="noopener noreferrer"
              className={button({ variant: "outline", size: "md" })}
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Book a discovery call
            </a>
            {site.cvPath && (
              <a href={site.cvPath} download className={button({ variant: "dark", size: "md" })}>
                Download CV
              </a>
            )}
          </div>

          <h2 className="mb-3 mt-10 font-display text-lg font-bold">Connect with me</h2>
          <ul className="grid grid-cols-2 gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                {/* target/rel were defined but never applied before; now they are. */}
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium hover:border-brand"
                >
                  <social.icon className="h-4 w-4 text-brand" aria-hidden="true" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex min-w-0 flex-col gap-4 self-start rounded-2xl border border-border bg-surface p-6 md:p-9"
        >
          <h2 className="font-display text-2xl font-bold">Send a message</h2>

          <Field label="Name">
            <input required type="text" name="name" autoComplete="name" className="input" placeholder="Your name" />
          </Field>

          <Field label="Email">
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="input"
              placeholder="your@email.com"
            />
          </Field>

          {/* Field name stays "service" so Formspree submissions keep the same shape. */}
          <Field label="Topic">
            <select className="input" name="service" required defaultValue="">
              <option value="" disabled>
                Select a topic
              </option>
              <option>Job opportunity</option>
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
              name="message"
              className="input resize-y"
              placeholder="Tell me about the role, project or goal..."
            />
          </Field>

          {state.succeeded ? (
            <div
              role="status"
              className="flex items-center gap-2 rounded-xl border border-border bg-brand-soft px-4 py-3 text-sm text-accent-foreground"
            >
              <Check className="h-5 w-5" aria-hidden="true" />
              Thanks! Your message has been received.
            </div>
          ) : (
            <button
              type="submit"
              disabled={state.submitting}
              className={`${button({ variant: "primary" })} self-start`}
            >
              {state.submitting ? "Sending..." : "Send message"}
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </form>
      </section>

      <Section eyebrow="FAQ" title="Frequently asked questions" align="center">
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
          {faqs.map((faq) => (
            <div key={faq.q} className="px-6 py-5">
              <p className="font-display text-base font-semibold">{faq.q}</p>
              <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

type FieldProps = {
  label: string;
  children: React.ReactNode;
};

function Field({ label: text, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold">{text}</span>
      {children}
    </label>
  );
}
