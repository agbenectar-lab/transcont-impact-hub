import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Settings, Zap } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Engineering & EPC",
      description: "Complete engineering, procurement, and construction services with innovative financing structures for complex industrial projects.",
      bgColor: "bg-primary",
      textColor: "text-white"
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Asset Management",
      description: "Comprehensive asset lifecycle management including operations, maintenance, pre-commissioning and decommissioning services.",
      bgColor: "bg-white",
      textColor: "text-industrial-gray",
      border: true
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Marine & Supply Chain",
      description: "Integrated marine logistics, offshore support services and global supply chain management solutions.",
      bgColor: "bg-primary",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-industrial-gray mb-6">
              What We Do About Industrial Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`${service.bgColor} ${service.border ? 'border-2 border-gray-200' : 'border-0'} shadow-card hover:shadow-industrial transition-all duration-300 group`}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className={`inline-flex p-4 rounded-2xl ${service.textColor === 'text-white' ? 'bg-white/20' : 'bg-primary/10'} mb-6 mx-auto`}>
                    <div className={service.textColor === 'text-white' ? 'text-white' : 'text-primary'}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${service.textColor}`}>
                    {service.title}
                  </h3>
                  <p className={`${service.textColor === 'text-white' ? 'text-white/90' : 'text-muted-foreground'} leading-relaxed flex-1`}>
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <span className={`text-sm font-semibold ${service.textColor} hover:opacity-80 cursor-pointer transition-opacity`}>
                      Learn More →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;