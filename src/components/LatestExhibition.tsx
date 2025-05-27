
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function LatestExhibition() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-santaran-cream relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-santaran-terracotta rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 border-2 border-santaran-gold rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-santaran-teal rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-santaran-charcoal font-playfair">
              Latest <span className="text-santaran-terracotta">Exhibition</span>
            </h2>
            <div className="w-20 h-1 bg-santaran-gold mb-6"></div>
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-santaran-teal">
              Environmental Metamorphosis: A Journey Through Sustainable Art
            </h3>
            <div className="flex items-center mb-6 text-santaran-charcoal/70">
              <Calendar className="h-5 w-5 mr-2" />
              <span>May 15 - June 30, 2025</span>
            </div>
            <p className="text-lg text-santaran-charcoal/80 mb-6">
              Explore the intersection of art and environmental consciousness in this 
              groundbreaking exhibition featuring works that challenge our relationship 
              with the natural world and propose creative solutions for a sustainable future.
            </p>
            <p className="text-lg text-santaran-charcoal/80 mb-8">
              Featuring installations, sculptures, and multimedia presentations from 
              renowned environmental artists and emerging talents alike, this exhibition 
              invites viewers to contemplate the beauty, fragility, and resilience of our planet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-santaran-teal hover:bg-santaran-teal/90 text-white px-6 py-5 rounded-md font-medium">
                View Exhibition Details
              </Button>
              <Button variant="outline" className="border-2 border-santaran-teal text-santaran-teal hover:bg-santaran-teal/10 px-6 py-5 rounded-md font-medium">
                Browse All Exhibitions
              </Button>
            </div>
          </div>

          <div className={cn(
            "relative transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg" 
                alt="Latest Exhibition" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-santaran-gold/20 rounded-full blur-md"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-santaran-teal/20 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
