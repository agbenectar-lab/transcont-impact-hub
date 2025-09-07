import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-industrial-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-industrial-gray mb-6">
              About Transcont Global Limited
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A multidisciplinary engineering, marine, and integrated solutions company committed to 
              powering Nigeria and Africa's industrial growth and global competitiveness.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Description */}
            <div>
              <h3 className="text-2xl font-bold text-industrial-gray mb-6">
                Engineering Excellence Across Africa
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  We deliver end-to-end solutions that span Engineering, Procurement, and Construction (EPC) 
                  with financing, asset lifecycle management, marine services, and supply chain management.
                </p>
                <p>
                  Headquartered in Nigeria, with reach across Africa and strategic global partnerships, 
                  we are trusted by clients to execute complex projects under stringent timelines, 
                  demanding environments, and evolving regulatory landscapes.
                </p>
                <p>
                  At the heart of our work is our belief that sustainable growth comes from people and 
                  the impact they create. We combine technical expertise, industry experience, innovative 
                  financing models, and a relentless focus on safety to deliver projects that matter.
                </p>
              </div>
            </div>

            {/* Right Column - Key Points */}
            <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Building2 className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-industrial-gray mb-2">
                        Integrated Solutions
                      </h4>
                      <p className="text-muted-foreground">
                        Complete EPC services with innovative financing structures 
                        for capital-intensive projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Globe className="h-8 w-8 text-marine-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-industrial-gray mb-2">
                        Strategic Reach
                      </h4>
                      <p className="text-muted-foreground">
                        Nigeria headquarters with Africa-wide operations and 
                        global strategic partnerships.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Award className="h-8 w-8 text-engineering-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-industrial-gray mb-2">
                        Proven Expertise
                      </h4>
                      <p className="text-muted-foreground">
                        Trusted execution of complex projects under demanding 
                        environments and regulatory landscapes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="text-center bg-gradient-hero text-white rounded-2xl p-12">
            <Target className="h-12 w-12 text-primary-light mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-2xl font-light italic">
              "Powered by people, driven by impact."
            </p>
            <div className="mt-6 max-w-2xl mx-auto">
              <p className="text-lg opacity-90">
                To our clients, our communities, and the future through sustainable 
                growth that comes from people and the impact they create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;