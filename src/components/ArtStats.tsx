
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: 250, label: "Art Exhibitions", suffix: "+" },
  { value: 60, label: "Partner Organizations", suffix: "+" },
  { value: 5000, label: "Artists Supported", suffix: "+" },
  { value: 15, label: "Years of Impact", suffix: "+" },
];

export default function ArtStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (!countersStarted.current) {
            animateCounters();
            countersStarted.current = true;
          }
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

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.floor(progress * stat.value);
          return newCounts;
        });
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-santaran-teal text-white relative overflow-hidden"
    >
      {/* Abstract pattern background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white/5 to-transparent"></div>
        <div className="absolute left-0 h-full w-20 bg-gradient-to-r from-white/5 to-transparent"></div>
        <div className="absolute right-0 h-full w-20 bg-gradient-to-l from-white/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Our <span className="text-santaran-gold">Impact</span> in Numbers
          </h2>
          <p className={cn(
            "text-lg text-white/90 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            For over a decade, Santaran Art Organization has been at the forefront of 
            promoting artistic excellence and cultural exchange through our diverse programs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white/10 backdrop-blur-sm rounded-lg p-8 transition-all duration-700",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-santaran-gold mb-2">
                {stat.prefix || ''}{counts[index]}{stat.suffix || ''}
              </div>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
