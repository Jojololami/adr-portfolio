import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies in SEO, AI search and NLP: the Eng-PidginEdu translation dataset, fintech SEO content at Ridima, and Web3 launch content.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Work />
      </main>
      <Footer />
    </>
  );
}
