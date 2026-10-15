import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Aduragbemi Aleem about SEO, content strategy and AI-search roles, projects or collaborations.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
