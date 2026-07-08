"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface WaitlistFormProps {
  program?: string;
  compact?: boolean;
}

const WaitlistForm = ({
  program,
  compact = false,
}: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@")) return;

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mbdveogk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          source: "Website Waitlist",
          program: program ?? "General Waitlist",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to submit. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground ${
          compact ? "" : "max-w-md"
        }`}
      >
        <Check className="h-5 w-5 text-accent2" />

        <span>
           You&apos;re on the list! I&apos;ll email you whenever there&apos;s a new
                opportunity, resource, or update.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col gap-3 sm:flex-row ${
        compact ? "" : "max-w-md"
      }`}
    >
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="h-12 flex-1 rounded-xl border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Joining..." : "Join Waitlist"}

        {!loading && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
};

export default WaitlistForm;