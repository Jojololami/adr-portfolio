import { cva } from "class-variance-authority";

/** Shared button/link styles for the portfolio pages. */
export const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg border-[1.5px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-brand text-brand-foreground hover:bg-brand-dark",
        dark: "border-transparent bg-primary text-primary-foreground hover:bg-brand-dark",
        outline: "border-foreground text-foreground hover:bg-foreground hover:text-background",
        light: "border-transparent bg-white text-foreground hover:bg-border",
        outlineLight: "border-white text-white hover:bg-white hover:text-foreground",
      },
      size: {
        md: "h-11 px-5 text-[15px]",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

/** Page-width container used by the redesigned pages. */
export const container = "mx-auto w-full max-w-6xl px-6";

export const eyebrow = "font-mono text-xs uppercase tracking-[0.07em] text-brand";
export const label = "font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground";
export const displayHeading =
  "font-display text-[clamp(2.5rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-tight";
export const sectionHeading =
  "font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight";
