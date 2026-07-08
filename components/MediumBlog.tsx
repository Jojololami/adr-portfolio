import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/Section";

function MediumBlog() {
  return (
    <Section>
      <div className="surface-card relative overflow-hidden p-10 md:p-16">
        <div className="absolute inset-0 bg-hero-glow opacity-60" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
              Blog
            </p>

            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Read My Articles on Medium
            </h2>

            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Catch up with the latest tips on AI, content marketing, seo tips and tricks, and career guidance.
            </p>
          </div>

          <Link
            href="https://medium.com/@ADR-HUB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 self-start rounded-xl bg-gradient-brand px-6 text-sm font-semibold text-brand-foreground shadow-glow"
          >
            Read on Medium

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default MediumBlog;