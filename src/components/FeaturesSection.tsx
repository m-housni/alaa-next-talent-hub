
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Book, Briefcase } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Rigorous Vetting",
      description: "Multi-stage technical assessments, coding challenges, and behavioral interviews ensure only top-tier talent joins our platform.",
      gradient: "from-brand-purple to-brand-indigo"
    },
    {
      icon: Book,
      title: "Preparation Tools",
      description: "Comprehensive resources including coding practice, system design courses, and interview preparation to help talent excel.",
      gradient: "from-brand-blue to-brand-cyan"
    },
    {
      icon: Briefcase,
      title: "Company Matching",
      description: "Smart algorithms match talent with companies based on technical skills, culture fit, and career goals for perfect partnerships.",
      gradient: "from-brand-indigo to-brand-purple"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AlaaNEXT?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between exceptional IT talent and innovative companies through our comprehensive platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in border-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <CardHeader className="relative">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
