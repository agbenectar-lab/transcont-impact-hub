import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Values from "@/components/Values";
import { useEffect } from "react";

const ValuesPage = () => {
  useEffect(() => {
    document.title = "Our Values - Transcont Global Limited | Excellence, Integrity & Innovation";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Our core values drive everything we do: Excellence, Integrity, Innovation, Sustainability, and Collaboration in engineering and marine services.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Values />
      </main>
      <Footer />
    </div>
  );
};

export default ValuesPage;