import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "What does Transcont specialise in?",
      answer: "Transcont Global Limited specializes in multidisciplinary engineering, marine services, asset lifecycle management, and supply chain solutions across Africa and globally."
    },
    {
      question: "How can Transcont be used with oil and gas operations?", 
      answer: "We provide comprehensive EPC services, marine logistics support, asset management, and specialized supply chain solutions tailored for oil and gas operations, ensuring safety and regulatory compliance."
    },
    {
      question: "Does Transcont support renewable energy projects?",
      answer: "Yes, we support renewable energy projects through our engineering and project delivery services, bringing the same level of expertise and integrated solutions to sustainable energy initiatives."
    },
    {
      question: "How can Transcont help with environmental compliance?",
      answer: "Our sustainability focus includes environmental protection, regulatory compliance, and implementing environmentally responsible practices across all project phases and operations."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-industrial-gray mb-6">
              Questions From People
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-card border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-industrial-gray hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
            >
              More Question?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;