import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cog, 
  Ship, 
  Settings, 
  Package,
  ArrowRight,
  Wrench,
  Anchor,
  TrendingUp,
  Truck
} from "lucide-react";
import marineImage from "@/assets/marine-operations.jpg";
import engineeringImage from "@/assets/engineering-epc.jpg";
import assetManagementImage from "@/assets/asset-management.jpg";
import supplyChainImage from "@/assets/supply-chain.jpg";

const Services = () => {
  const services = [
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Engineering & Project Delivery (EPC + Financing)",
      description: "Turnkey projects from concept to commissioning, backed by innovative financing structures.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: engineeringImage,
      offerings: [
        "Concept & Feasibility Studies",
        "Front-End Engineering/Detailed Design (FEED)",
        "Procurement & Vendor Management",
        "Construction Management",
        "Commissioning & Handover",
        "EPC + Financing Models (PPP, BOT, BOOT)"
      ],
      edge: "Unlike traditional EPC providers, we integrate financing solutions directly into project execution."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Asset Lifecycle Management",
      description: "Comprehensive services across operational life from start-up to decommissioning.",
      color: "text-engineering-blue",
      bgColor: "bg-engineering-blue/10",
      image: assetManagementImage,
      offerings: [
        "Operations & Maintenance (O&M)",
        "Preventive & Predictive Maintenance",
        "Pre-Commissioning Services",
        "Pipeline Testing & Certification",
        "Safe Decommissioning",
        "Environmental Remediation"
      ],
      edge: "Advanced analytics, digital twin technology, and skilled manpower to extend asset life."
    },
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Marine Services & Logistics",
      description: "Comprehensive marine logistics and offshore support services for safe, timely operations.",
      color: "text-marine-blue",
      bgColor: "bg-marine-blue/10",
      image: marineImage,
      offerings: [
        "Offshore Support Vessels",
        "Cargo & Personnel Transport",
        "Emergency Response Operations",
        "Base Operations & Port Management",
        "Customs Clearance",
        "Integrated Logistics Planning"
      ],
      edge: "Safe, reliable, and efficient marine solutions ensuring uninterrupted offshore operations."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Supply Chain Management",
      description: "Integrated procurement solutions with global reach and local expertise.",
      color: "text-primary-dark",
      bgColor: "bg-primary-dark/10",
      image: supplyChainImage,
      offerings: [
        "Strategic Procurement & Sourcing",
        "Warehousing & Inventory Control",
        "Freight Forwarding & Customs",
        "Supplier Qualification & Audits",
        "Local Content Development",
        "E-procurement Systems"
      ],
      edge: "Reduced lead times and local content compliance with full supply chain visibility."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-industrial-gray mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-spectrum services ensuring projects are delivered on time, on budget, 
              and at world-class standards.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-industrial hover:shadow-elegant transition-all duration-300 group border-0 overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-xl ${service.bgColor} ${service.color} backdrop-blur-sm bg-white/90`}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-industrial-gray group-hover:text-primary transition-colors mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-industrial-gray mb-3">Key Offerings:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.offerings.map((offering, idx) => (
                        <Badge key={idx} variant="outline" className="justify-start h-auto p-2 text-sm">
                          <ArrowRight className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                          {offering}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${service.bgColor} border-l-4 border-l-primary`}>
                    <h5 className="font-semibold text-industrial-gray mb-2">Our Edge:</h5>
                    <p className="text-muted-foreground text-sm">
                      {service.edge}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Marine Services Highlight */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Anchor className="h-8 w-8 text-primary-light" />
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Marine Excellence
                  </h3>
                </div>
                <p className="text-lg mb-6 opacity-90">
                  With robust offshore operations expertise, we provide comprehensive marine 
                  logistics that keep your operations safe, timely, and cost-effective.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Wrench className="h-5 w-5 text-primary-light" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary-light" />
                    <span className="text-sm">Cost Effective</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Ship className="h-5 w-5 text-primary-light" />
                    <span className="text-sm">Modern Fleet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-primary-light" />
                    <span className="text-sm">Full Logistics</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={marineImage}
                  alt="Marine Operations"
                  className="rounded-xl w-full h-64 object-cover shadow-industrial"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
