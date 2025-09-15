import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Building2,
  Users,
  Globe
} from "lucide-react";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us - Transcont Global Limited | Get in Touch";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Transcont Global Limited for engineering, marine services, and integrated solutions. Headquartered in Lagos, Nigeria with global reach.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Ready to discuss your next project? Our team is here to help you achieve your engineering and marine service goals.
              </p>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                <Globe className="w-4 h-4 mr-2" />
                Global Reach, Local Expertise
              </Badge>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-industrial-gray mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Reach out to us through any of these channels. We're committed to responding promptly to all inquiries.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Nigeria Office</h3>
                          <p className="text-muted-foreground">
                            10 Bosun Adekoya Street, Lekki, Lagos, NG<br />
                            <span className="text-sm">Phone: 08091888990</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-engineering-blue">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-engineering-blue/10 rounded-lg">
                          <Building2 className="w-6 h-6 text-engineering-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">USA Office</h3>
                          <p className="text-muted-foreground">
                            5850 San Felipe, Suite 500 Houston, TX 77057<br />
                            <span className="text-sm">Phone: 346-464-6120</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-engineering-blue">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-engineering-blue/10 rounded-lg">
                          <Mail className="w-6 h-6 text-engineering-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            info@transcontllc.com<br />
                            <span className="text-sm">We typically respond within 24 hours</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary-dark">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary-dark/10 rounded-lg">
                          <Clock className="w-6 h-6 text-primary-dark" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 8:00 AM - 5:00 PM WAT<br />
                            <span className="text-sm">Emergency response available 24/7</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-industrial">
                  <CardHeader>
                    <CardTitle className="text-2xl text-industrial-gray">
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and our team will get back to you promptly.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your.email@company.com" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input placeholder="Your company name" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service Interest</label>
                      <select className="w-full p-3 border border-border rounded-md bg-background">
                        <option value="">Select a service</option>
                        <option value="epc">Engineering & Project Delivery (EPC)</option>
                        <option value="asset">Asset Lifecycle Management</option>
                        <option value="marine">Marine Services & Logistics</option>
                        <option value="supply">Supply Chain Management</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea 
                        placeholder="Tell us about your project requirements, timeline, and how we can help..."
                        rows={5}
                      />
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Send Message
                      <Mail className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Based in Nigeria with operations across Africa and strategic global partnerships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Nigeria</h3>
                  <p className="text-muted-foreground">Headquarters and primary operations</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="p-3 bg-engineering-blue/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-engineering-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Africa</h3>
                  <p className="text-muted-foreground">Regional projects and partnerships</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="p-3 bg-marine-blue/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-marine-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Global</h3>
                  <p className="text-muted-foreground">Strategic partnerships worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
