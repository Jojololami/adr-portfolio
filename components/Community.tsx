"use client";

import { ArrowRight, Check } from "lucide-react";
import { useForm } from "@formspree/react";

const perks = [
  "Founding-member pricing",
  "First access to new services",
  "Free exclusive resources",
  "Priority support and updates",
];

export default function CommunityPage() {
  const [state, handleSubmit] = useForm("mbdveogk");

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
          Community
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Join the <span className="text-gradient">community.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Join my mailing list to receive updates, exclusive resources, and be
          the first to know when new services, programs, or opportunities become
          available.
        </p>

        <div className="mt-10 flex justify-center">
          {state.succeeded ? (
            <div className="flex max-w-md items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground">
              <Check className="h-5 w-5 text-accent2" />
              <span>
                You&apos;re on the list! I&apos;ll email you whenever there&apos;s a new
                opportunity, resource, or update.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="h-12 flex-1 rounded-xl border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state.submitting ? "Joining..." : "Join Community"}

                {!state.submitting && (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </form>
          )}
        </div>

        <ul className="mx-auto mt-12 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
          {perks.map((perk) => (
            <li
              key={perk}
              className="surface-card flex items-center gap-3 p-4 text-sm"
            >
              <Check className="h-5 w-5 shrink-0 text-accent2" />
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}