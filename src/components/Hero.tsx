
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-santaran-cream">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-santaran-charcoal/70 via-santaran-charcoal/50 to-transparent"></div>

      {/* Animated circles */}
      <div className={cn(
        "absolute w-96 h-96 rounded-full bg-santaran-teal/20 blur-3xl -top-20 -left-20 transition-all duration-1000 ease-in-out",
        loaded ? "opacity-70" : "opacity-0 -translate-x-10"
      )}></div>
      <div className={cn(
        "absolute w-96 h-96 rounded-full bg-santaran-terracotta/20 blur-3xl -bottom-20 right-40 transition-all duration-1000 ease-in-out delay-300",
        loaded ? "opacity-70" : "opacity-0 translate-y-10"
      )}></div>

      <div className="container relative z-10 mx-auto px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-700 ease-out",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="text-santaran-gold">Art</span> that Speaks to the Soul
          </h1>
          <p className={cn(
            "text-lg md:text-xl text-white/90 mb-8 max-w-2xl transition-all duration-700 delay-200 ease-out",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Santaran Art Organization fosters creativity through contemporary, 
            environmental, and community art projects that inspire change and celebrate culture.
          </p>
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ease-out",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <Button 
              className="bg-santaran-teal hover:bg-santaran-teal/90 text-white px-8 py-6 rounded-md font-medium text-lg"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-md font-medium text-lg"
            >
              Upcoming Events
            </Button>
          </div>
        </div>
      </div>

      {/* Creative flourish */}
      <div className={cn(
        "absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-santaran-cream to-transparent transition-all duration-1000 ease-in-out delay-500",
        loaded ? "opacity-100" : "opacity-0"
      )}></div>
    </div>
  );
}
