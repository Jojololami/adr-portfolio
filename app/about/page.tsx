import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { pageMetadata } from "@/lib/metadata";

// No "use client" here: this page has no client-side state, and being a
// server component is what lets it export metadata.
export const metadata = pageMetadata({
  title: "About",
  description:
    "SEO, AEO and GEO strategist with experience across fintech, Web3 and AI content, and hands-on NLP research on the Eng-PidginEdu dataset.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </>
  );
}
