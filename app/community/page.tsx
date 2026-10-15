import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Community from "@/components/Community";
import { pageMetadata } from "@/lib/metadata";

// Kept live at the owner's request; linked from the footer, not the main nav.
export const metadata = pageMetadata({
  title: "Community",
  description:
    "Join Aduragbemi Aleem's mailing list for practical insights on AI, SEO, content and careers.",
  path: "/community",
});

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Community />
      </main>
      <Footer />
    </>
  );
}
