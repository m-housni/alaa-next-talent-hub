
import { Button } from "@/components/ui/button";
import { Check, Users, Book, Briefcase } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How AlaaNEXT Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, effective process to connect talent with opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Talent */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Users className="h-6 w-6 text-brand-purple mr-3" />
              For IT Talent
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Apply & Get Vetted",
                  description: "Submit your application and go through our comprehensive technical and behavioral assessment process."
                },
                {
                  step: "2", 
                  title: "Prepare & Improve",
                  description: "Access our extensive library of preparation tools, practice coding challenges, and system design courses."
                },
                {
                  step: "3",
                  title: "Get Matched",
                  description: "Our algorithm matches you with companies that align with your skills, experience, and career goals."
                },
                {
                  step: "4",
                  title: "Land Your Dream Job",
                  description: "Interview with matched companies and secure your next career opportunity with our support."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in">
                  <div className="w-8 h-8 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-brand-purple hover:bg-brand-purple/90 w-full sm:w-auto">
              <Users className="mr-2 h-4 w-4" />
              Join as Talent
            </Button>
          </div>
          
          {/* For Companies */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Briefcase className="h-6 w-6 text-brand-blue mr-3" />
              For Companies
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Define Your Needs",
                  description: "Tell us about your technical requirements, team culture, and the type of talent you're looking for."
                },
                {
                  step: "2",
                  title: "Review Vetted Candidates",
                  description: "Access pre-screened, high-quality candidates who have passed our rigorous vetting process."
                },
                {
                  step: "3", 
                  title: "Interview & Evaluate",
                  description: "Conduct focused interviews with candidates who already meet your technical and cultural requirements."
                },
                {
                  step: "4",
                  title: "Hire Top Talent",
                  description: "Make offers to exceptional candidates and build your dream team with confidence."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in">
                  <div className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-brand-blue hover:bg-brand-blue/90 w-full sm:w-auto">
              <Briefcase className="mr-2 h-4 w-4" />
              Hire Talent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
