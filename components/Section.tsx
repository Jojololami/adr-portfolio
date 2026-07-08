import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  align = "left",
}: SectionProps) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || subtitle) && (
          <div
            className={`mb-12 max-w-2xl ${
              align === "center" ? "mx-auto text-center" : ""
            }`}
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;