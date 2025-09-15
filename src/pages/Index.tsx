import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const headerHeight = 80; // Account for fixed header
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Transcont Global Limited",
          "alternateName": "TGL",
          "description": "Multidisciplinary engineering, marine, and integrated solutions company committed to powering Nigeria and Africa's industrial growth and global competitiveness.",
          "url": "https://transcontglobal.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lagos",
            "addressCountry": "Nigeria"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@transcontglobal.com"
          },
          "service": [
            {
              "@type": "Service",
              "name": "Engineering & Project Delivery (EPC + Financing)",
              "description": "Turnkey projects from concept to commissioning with innovative financing structures"
            },
            {
              "@type": "Service", 
              "name": "Asset Lifecycle Management",
              "description": "Operations, maintenance, pre-commissioning and decommissioning services"
            },
            {
              "@type": "Service",
              "name": "Marine Services & Logistics", 
              "description": "Comprehensive marine logistics and offshore support services"
            },
            {
              "@type": "Service",
              "name": "Supply Chain Management",
              "description": "Integrated procurement and supply chain solutions with global reach"
            }
          ]
        })}
      </script>
      
      <Header />
      <main>
        <Hero />
        <Values />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
