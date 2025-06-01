
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AlaaNEXT transformed my career. The preparation tools helped me ace my interviews, and I landed my dream job at a Fortune 500 company.",
      author: "Sarah Chen",
      role: "Senior Full Stack Developer",
      company: "TechCorp"
    },
    {
      quote: "We've hired 15+ developers through AlaaNEXT. The vetting process is thorough, and every candidate has been exceptional.",
      author: "Michael Rodriguez",
      role: "VP of Engineering", 
      company: "InnovateLabs"
    },
    {
      quote: "The platform's matching algorithm is incredibly accurate. It connected me with companies that perfectly aligned with my values and goals.",
      author: "David Kim",
      role: "DevOps Engineer",
      company: "CloudFirst"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from talent and companies who've found success through AlaaNEXT
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="text-brand-purple text-4xl leading-none">"</div>
                </div>
                <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-brand-purple font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
