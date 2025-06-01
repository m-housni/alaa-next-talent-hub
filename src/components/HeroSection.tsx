
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Connect Elite 
              <span className="bg-gradient-brand bg-clip-text text-transparent"> IT Talent</span> 
              with Leading Companies
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our comprehensive vetting process and preparation tools ensure only the highest quality developers, engineers, and tech professionals join our network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Join as Talent
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                <Briefcase className="mr-2 h-5 w-5" />
                Hire Talent
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Rigorous Vetting Process
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Preparation Tools Included
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Direct Company Matching
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-hero rounded-lg">
                  <span className="font-semibold text-gray-900">Active Talent</span>
                  <span className="text-2xl font-bold text-brand-purple">50,000+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-hero rounded-lg">
                  <span className="font-semibold text-gray-900">Partner Companies</span>
                  <span className="text-2xl font-bold text-brand-blue">2,500+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-hero rounded-lg">
                  <span className="font-semibold text-gray-900">Successful Matches</span>
                  <span className="text-2xl font-bold text-brand-cyan">15,000+</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-brand rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
