import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  Lightbulb, 
  Leaf, 
  Users,
  CheckCircle,
  Star,
  Globe
} from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: <Award className="h-10 w-10" />,
      title: "Excellence",
      description: "Setting industry standards with high-quality project delivery.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Integrity", 
      description: "Building trust through transparency and accountability.",
      color: "text-engineering-blue",
      bgColor: "bg-engineering-blue/10"
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovation",
      description: "Deploying advanced tools, technology, and ideas to solve tomorrow's challenges.",
      color: "text-marine-blue",
      bgColor: "bg-marine-blue/10"
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Sustainability",
      description: "Prioritizing environmental protection and local content.",
      color: "text-primary-dark",
      bgColor: "bg-primary-dark/10"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Collaboration",
      description: "Driving partnerships that foster progress and shared value.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const advantages = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Integrated Expertise",
      description: "Engineering, asset management, marine, and supply chain services under one roof."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Financial Strength",
      description: "EPC + Financing models that enable projects to move from vision to reality."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety & Compliance", 
      description: "Every operation meets international safety, environmental, and regulatory standards."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Digital technologies including predictive analytics and digital twin models."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainability & Local Content",
      description: "Local workforce development and environmentally responsible practices."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Delivery",
      description: "Multidisciplinary team with track record across diverse industries."
    }
  ];

  return (
    <section id="values" className="py-20 bg-industrial-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-industrial-gray mb-6">
                Our Values
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our decisions, drive our actions, and define our character.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card hover:shadow-industrial transition-all duration-300 group border-0">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex p-4 rounded-2xl ${value.bgColor} ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-industrial-gray mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-industrial-gray mb-6">
                Why Choose Transcont Global Limited?
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {advantage.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-industrial-gray mb-2 group-hover:text-primary transition-colors">
                          {advantage.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
              <Globe className="h-12 w-12 text-primary-light mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Power Your Next Project?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Join industry leaders who trust Transcont Global Limited for complex, 
                mission-critical projects across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="text-white border-white hover:bg-white hover:text-industrial-gray px-6 py-2 text-lg font-medium">
                  ISO Certified
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;