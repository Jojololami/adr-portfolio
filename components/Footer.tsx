import Link from "next/link";
import { links, site } from "@/content/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{site.role}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm font-medium text-brand hover:text-brand-dark"
          >
            {site.email}
          </a>
        </div>

        <FooterCol title="Portfolio">
          <FooterLink href="/work">Work</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterCol>

        {/* Kept live at the owner's request; linked from the footer only. */}
        <FooterCol title="More">
          <FooterLink href="/services">Services</FooterLink>
          <FooterLink href="/community">Community</FooterLink>
          <ExternalLink href={links.medium}>Medium</ExternalLink>
        </FooterCol>

        <FooterCol title="Social">
          <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={links.tiktok}>TikTok</ExternalLink>
          <ExternalLink href={links.instagram}>Instagram</ExternalLink>
          <ExternalLink href={links.x}>Twitter/X</ExternalLink>
        </FooterCol>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6 py-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
};

type FooterColProps = {
  title: string;
  children: React.ReactNode;
};

const FooterCol = ({ title, children }: FooterColProps) => {
  return (
    <div>
      <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      <div className="flex flex-col items-start gap-2">{children}</div>
    </div>
  );
};

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const linkClass = "text-sm text-foreground transition-colors hover:text-brand";

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
};

const ExternalLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
};

export default Footer;
