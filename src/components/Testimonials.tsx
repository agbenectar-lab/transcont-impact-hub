import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import marineImage from "@/assets/marine-operations.jpg";

const Testimonials = () => {
  return (
    <section className="py-20 bg-industrial-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <img
                src={marineImage}
                alt="Marine Operations"
                className="w-full h-96 object-cover rounded-2xl shadow-industrial"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-gray/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Testimonial Side */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-industrial-gray mb-6">
                  What People Say About Us
                </h2>
                <div className="w-24 h-1 bg-gradient-primary mb-6"></div>
              </div>

              <Card className="shadow-card border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <div className="flex space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                      "This is a Premium expert from our oil energy offering company are extremely professional, knowledgeable, and exceptionally responsive."
                    </blockquote>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="font-bold text-industrial-gray">John Adebayo</div>
                    <div className="text-sm text-muted-foreground">Project Director, Energy Solutions Ltd</div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional stats or badges could go here */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;