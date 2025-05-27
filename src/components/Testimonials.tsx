
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  
  {
    quote: "Participating in the Karnaphuli Folk Triennial changed my perspective on traditional art forms. The community engagement and cultural preservation work done by Santaran is unparalleled.",
    author: "Monjur Ahmed",
    role: "Contemporary Artist",
    image: "https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-9/134111152_10221803379926570_1866122462184759224_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ie14oFMCh7MQ7kNvwEbL30N&_nc_oc=Adlw-1jHddxDtmD2d4TSR-oAOuZW_zhJaBpjCCmxkZxVNALP67Wjn5ldFZJoVTNP1uU&_nc_zt=23&_nc_ht=scontent.fcgp17-1.fna&_nc_gid=iLgKJnNDSf83g4wiExBC2Q&oh=00_AfIQSeP-FsYOrS6S1o4nLDQ-kV3-fC3tKpF632ixwrC7CA&oe=685CE874"
  },
  {
    quote: "Santaran Art Organization has been instrumental in bringing diverse artistic voices to the forefront. Their commitment to environmental art has inspired a new generation of conscious creatives.",
    author: "Tanjil Fatema Tushi",
    role: "Art Historian & Curator",
    image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg"
  },
  {
    quote: "The Dharitri eco-tourism project brilliantly merges art with sustainable practices. This innovative approach to environmental consciousness through creativity sets Santaran apart.",
    author: "Satabdi Shome Pampa",
    role: "Environmental Activist",
    image: "https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/491687853_9549167525174629_8588026110835934223_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OaOc9lXTHJ0Q7kNvwFTFf3m&_nc_oc=Adnf7u8IPUVqh247pg5nKjWWepcJxjTFy71FOK9bdWeeMkk_imzdqx1EAqxoY4fqWjQ&_nc_zt=23&_nc_ht=scontent.fcgp17-1.fna&_nc_gid=5IuiqCVSorCTp3EtomQtKw&oh=00_AfKpFKlGbFxlcPJwtPjy7TryawsOVUga90N7_0M8-qfyBg&oe=683B1CEC"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          
          // Start auto-rotation when in view
          intervalRef.current = window.setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
          }, 6000);
        } else {
          // Clear interval when not in view
          if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
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
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-3 text-santaran-charcoal font-playfair transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            What People <span className="text-santaran-teal">Say</span> About Us
          </h2>
          <div className={cn(
            "w-20 h-1 bg-santaran-gold mx-auto mb-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}></div>
          <p className={cn(
            "text-lg text-santaran-charcoal/70 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Discover what artists, critics, and community members have to say about 
            their experiences with Santaran Art Organization.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "absolute inset-0 transition-all duration-700 flex flex-col md:flex-row items-center gap-8",
                index === activeIndex 
                  ? "opacity-100 translate-x-0 z-10" 
                  : "opacity-0 translate-x-20 -z-10"
              )}
            >
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="aspect-square rounded-full overflow-hidden border-4 border-santaran-gold">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-santaran-teal/20 rounded-full blur-md -z-10"></div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="relative">
                  <div className="text-6xl text-santaran-gold font-serif absolute -top-10 -left-8">"</div>
                  <blockquote className="text-lg md:text-xl text-santaran-charcoal/90 mb-6 italic">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-6xl text-santaran-gold font-serif absolute -bottom-16 -right-8">"</div>
                </div>
                <div className="mt-6">
                  <p className="font-bold text-santaran-teal text-lg">{testimonial.author}</p>
                  <p className="text-santaran-charcoal/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Ensure the container has proper height */}
          <div className="invisible">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <div className="aspect-square"></div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="mb-6">
                  {testimonials[0].quote}
                </div>
                <div className="mt-6">
                  <p>{testimonials[0].author}</p>
                  <p>{testimonials[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-santaran-gold w-6" : "bg-santaran-charcoal/20"
              )}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
