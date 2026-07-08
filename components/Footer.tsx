import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 text-center md:grid-cols-3">
        <FooterCol title="Learn">
          <FooterLink href="/services">Services</FooterLink>
          <FooterLink href="/community">Community</FooterLink>
        </FooterCol>

        <FooterCol title="Aduragbemi Aleem">
          <FooterLink href="/about">About Me</FooterLink>
          <FooterLink href="/contact">Contact Me</FooterLink>
        </FooterCol>

        <FooterCol title="Social">
          <a
            href="https://www.linkedin.com/in/aduragbemialeem" target="_blank" rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>

          <a
            href="https://www.tiktok.com/@the_beanie_guy" target="_blank" rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            TikTok
          </a>

          <a
            href="https://www.instagram.com/a_aduragbemi/" target="_blank" rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Instagram
          </a>

          <a
            href="https://x.com/Aduragbemi_AE" target="_blank" rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Twitter/X
          </a>
        </FooterCol>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl justify-center px-6 py-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aduragbemi Aleem. All rights reserved.</p>
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
    <div className="flex flex-col items-center">
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h4>

      <div className="flex flex-col items-center gap-2">
        {children}
      </div>
    </div>
  );
};

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
};

export default Footer;