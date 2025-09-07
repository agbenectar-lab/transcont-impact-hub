import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Our Services - Transcont Global Limited | EPC, Marine & Asset Management";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive engineering services including EPC + Financing, Asset Lifecycle Management, Marine Services & Logistics, and Supply Chain Management.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;