import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calculator,
  FileText,
  Clock,
  CheckCircle,
  Zap,
  Shield,
  Handshake,
  DollarSign
} from "lucide-react";
import { useEffect } from "react";

const GetQuotePage = () => {
  useEffect(() => {
    document.title = "Get Quote - Transcont Global Limited | Request Project Proposal";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Request a detailed quote for engineering, marine services, or integrated solutions. Fast turnaround with competitive pricing from Transcont Global Limited.');
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
              <div className="p-4 bg-white/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Calculator className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Your Project Quote
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Receive a detailed, competitive quote for your engineering, marine, or integrated solutions project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Clock className="w-4 h-4 mr-2" />
                  48-Hour Response
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Competitive Pricing
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <FileText className="w-4 h-4 mr-2" />
                  Detailed Proposals
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-industrial-gray mb-4">
                Our Quote Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a structured approach to ensure you receive the most accurate and competitive quote.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">1. Submit Request</h3>
                  <p className="text-muted-foreground text-sm">Complete our detailed quote form with your project requirements</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-t-4 border-t-engineering-blue">
                <CardContent className="p-6">
                  <div className="p-3 bg-engineering-blue/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-engineering-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">2. Quick Review</h3>
                  <p className="text-muted-foreground text-sm">Our experts analyze your requirements within 24 hours</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-t-4 border-t-marine-blue">
                <CardContent className="p-6">
                  <div className="p-3 bg-marine-blue/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Handshake className="w-8 h-8 text-marine-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">3. Consultation</h3>
                  <p className="text-muted-foreground text-sm">We may schedule a call to clarify details and optimize solutions</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-t-4 border-t-primary-dark">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary-dark/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary-dark" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">4. Deliver Quote</h3>
                  <p className="text-muted-foreground text-sm">Receive a comprehensive quote with timeline and terms</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-industrial">
                  <CardHeader>
                    <CardTitle className="text-2xl text-industrial-gray">
                      Project Quote Request
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Please provide as much detail as possible to help us prepare an accurate quote.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-industrial-gray">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Full Name *</label>
                          <Input placeholder="Your full name" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Job Title</label>
                          <Input placeholder="Your position" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email *</label>
                          <Input type="email" placeholder="your.email@company.com" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Phone</label>
                          <Input placeholder="+234 XXX XXX XXXX" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-sm font-medium mb-2 block">Company Name *</label>
                          <Input placeholder="Your company name" required />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-industrial-gray">Project Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Service Required *</label>
                          <select className="w-full p-3 border border-border rounded-md bg-background" required>
                            <option value="">Select primary service</option>
                            <option value="epc">Engineering & Project Delivery (EPC + Financing)</option>
                            <option value="asset">Asset Lifecycle Management</option>
                            <option value="marine">Marine Services & Logistics</option>
                            <option value="supply">Supply Chain Management</option>
                            <option value="integrated">Integrated Multi-Service Solution</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Project Type</label>
                          <select className="w-full p-3 border border-border rounded-md bg-background">
                            <option value="">Select project type</option>
                            <option value="new">New Construction/Installation</option>
                            <option value="expansion">Facility Expansion</option>
                            <option value="maintenance">Maintenance/Upgrade</option>
                            <option value="decommissioning">Decommissioning</option>
                            <option value="consultation">Consultation/Study</option>
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Estimated Budget Range</label>
                            <select className="w-full p-3 border border-border rounded-md bg-background">
                              <option value="">Select range</option>
                              <option value="under-1m">Under $1M</option>
                              <option value="1m-5m">$1M - $5M</option>
                              <option value="5m-10m">$5M - $10M</option>
                              <option value="10m-25m">$10M - $25M</option>
                              <option value="25m-50m">$25M - $50M</option>
                              <option value="over-50m">Over $50M</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Project Location</label>
                            <Input placeholder="City, State/Region, Country" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Preferred Start Date</label>
                            <Input type="date" />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Expected Duration</label>
                            <select className="w-full p-3 border border-border rounded-md bg-background">
                              <option value="">Select duration</option>
                              <option value="under-3m">Under 3 months</option>
                              <option value="3m-6m">3-6 months</option>
                              <option value="6m-12m">6-12 months</option>
                              <option value="1y-2y">1-2 years</option>
                              <option value="over-2y">Over 2 years</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-industrial-gray">Project Description</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Detailed Project Description *</label>
                          <Textarea 
                            placeholder="Please describe your project in detail including scope, technical requirements, deliverables, and any specific challenges or constraints..."
                            rows={6}
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Technical Specifications</label>
                          <Textarea 
                            placeholder="Any technical specifications, standards, or requirements that should be considered..."
                            rows={4}
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Additional Requirements</label>
                          <Textarea 
                            placeholder="Regulatory compliance, environmental considerations, local content requirements, financing needs, etc..."
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      Submit Quote Request
                      <FileText className="w-4 h-4 ml-2" />
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields. We'll respond within 48 hours with either your quote or a request for additional information.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Information */}
              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Quote Guarantee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        48-hour response time guaranteed
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        No obligation quotes
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        Detailed breakdown included
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        Valid for 30 days
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our project specialists are available to help you define your requirements and ensure you get the most accurate quote.
                    </p>
                    <Button variant="outline" className="w-full">
                      Schedule a Consultation
                      <Handshake className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</div>
                        <p className="text-muted-foreground">We review your requirements and may reach out for clarification</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</div>
                        <p className="text-muted-foreground">You receive a detailed quote with terms and timeline</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</div>
                        <p className="text-muted-foreground">We schedule a discussion to finalize details</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetQuotePage;