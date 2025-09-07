import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, Users } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial Operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Powered by people,{" "}
              <span className="text-primary-light">driven by impact</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Transcont Global Limited delivers end-to-end engineering, marine, and integrated solutions 
              that power Nigeria and Africa's industrial growth and global competitiveness.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Shield className="h-8 w-8 text-primary-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-gray-300">Safety Compliance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Globe className="h-8 w-8 text-primary-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">Africa</div>
              <div className="text-gray-300">Wide Coverage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="h-8 w-8 text-primary-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">EPC+F</div>
              <div className="text-gray-300">Integrated Solutions</div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg shadow-elegant group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-industrial-gray px-8 py-4 text-lg"
            >
              Download Company Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;