import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/portfolio";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Variable names are read by the @theme block in globals.css
// (--font-sans, --font-display and --font-mono point at these).
const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const heading = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});

const code = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    url: "/",
    images: [{ url: "/images/ADR.jpeg", alt: site.name }],
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${heading.variable} ${code.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
