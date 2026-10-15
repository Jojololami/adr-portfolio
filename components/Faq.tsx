"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "@/components/Section";

export type FaqItem = { q: string; a: string };

/**
 * Accordion FAQ. Moved unchanged in behaviour from the old Home page:
 * one item open at a time, first item open by default.
 */
export default function Faq({
  items,
  eyebrow = "FAQ",
  title = "Questions, answered.",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section eyebrow={eyebrow} title={title} align="center">
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
        {items.map((faq, index) => {
          const isOpen = open === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div key={faq.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold">{faq.q}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p id={panelId} className="px-6 pb-5 text-sm text-muted-foreground">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
