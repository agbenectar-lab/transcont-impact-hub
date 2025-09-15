import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const services = [
    "EPC + Financing",
    "Asset Lifecycle Management", 
    "Marine Services",
    "Supply Chain Management"
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Company Profile",
    "Safety & Quality",
    "Careers",
    "Contact"
  ];

  return (
    <footer className="bg-industrial-gray text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/e09a277b-dae9-40f2-9d74-3b026dad247c.png"
                  alt="Transcont Global Limited"
                  className="h-8 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-gray-300 leading-relaxed">
                  Multidisciplinary engineering, marine, and integrated solutions 
                  company powering Africa's industrial growth.
                </p>
              </div>
              <h4 className="text-lg font-bold mb-6">Nigerian Office</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-light flex-shrink-0" />
                  <span className="text-sm text-gray-300">10 Bosun Adekoya Street, Lekki, Lagos, NG</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-light flex-shrink-0" />
                  <span className="text-sm text-gray-300">(+234) 809 1888 990</span>
                </div>
                <h4 className="text-lg font-bold mb-6">Houston Office</h4>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-light flex-shrink-0" />
                  <span className="text-sm text-gray-300">5850 San Felipe, Suite 500 Houston, TX 77057</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-light flex-shrink-0" />
                  <span className="text-sm text-gray-300">+1 (346)-464-6120</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-light flex-shrink-0" />
                  <span className="text-sm text-gray-300">info@transcontllc.com</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services" 
                      className="text-gray-300 hover:text-primary-light transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      <span className="text-sm">{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-primary-light transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      <span className="text-sm">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & CTA */}
            <div>
              <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Ready to discuss your next project? Our team of experts is 
                standing by to provide tailored solutions.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-gray-600" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Transcont Global Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-light transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-light transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-light transition-colors duration-200">
                HSE Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
