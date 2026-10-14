import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import { links, site } from "@/content/portfolio";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Structured data so search engines and AI assistants can identify the person behind the site.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  image: `${site.url}/images/ADR.jpeg`,
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Obafemi Awolowo University" },
  knowsAbout: [
    "Search Engine Optimization",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Content Strategy",
    "Natural Language Processing",
  ],
  sameAs: [links.linkedin, links.medium],
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default page;
