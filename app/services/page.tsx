import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { pageMetadata } from "@/lib/metadata";

// Kept live at the owner's request; linked from the footer, not the main nav.
export const metadata = pageMetadata({
  title: "Services",
  description:
    "AI integration, SEO, AEO and GEO, content marketing and career coaching services from Aduragbemi Aleem.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Services />
      </main>
      <Footer />
    </>
  );
}
