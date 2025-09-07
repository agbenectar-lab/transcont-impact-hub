import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Transcont Global Limited | Multidisciplinary Engineering Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transcont Global Limited is a multidisciplinary engineering, marine, and integrated solutions company committed to powering Nigeria and Africa\'s industrial growth.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;