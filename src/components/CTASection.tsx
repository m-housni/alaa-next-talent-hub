
import { Button } from "@/components/ui/button";
import { Users, Briefcase } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Career or Team?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join thousands of IT professionals and companies who've already discovered the power of AlaaNEXT. 
            Whether you're looking to advance your career or hire exceptional talent, we're here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-purple hover:bg-white/90 text-lg px-8 py-4 font-semibold"
            >
              <Users className="mr-2 h-5 w-5" />
              Join as Talent - Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-purple text-lg px-8 py-4 font-semibold"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Start Hiring Today
            </Button>
          </div>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-white/80">Vetted Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2.5K+</div>
              <div className="text-white/80">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
