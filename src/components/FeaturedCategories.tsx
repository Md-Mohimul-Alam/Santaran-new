
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CategoryCard {
  title: string;
  image: string;
  description: string;
  link: string;
}

const categories: CategoryCard[] = [
  {
    title: "Contemporary Art",
    image: "https://images.pexels.com/photos/3109816/pexels-photo-3109816.jpeg",
    description: "Discover our annual art shows featuring cutting-edge contemporary artists from around the world.",
    link: "/contemporary-art"
  },
  {
    title: "Environmental Art",
    image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
    description: "Art that engages with environmental issues and promotes ecological awareness through creativity.",
    link: "/environmental-art"
  },
  {
    title: "Folk & Community Art",
    image: "https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg",
    description: "Celebrating traditional art forms and supporting community-based artistic practices.",
    link: "/folk-community-art"
  },
  {
    title: "Art Education",
    image: "https://images.pexels.com/photos/159862/art-workshop-artist-draw-159862.jpeg",
    description: "Educational programs and workshops designed to nurture the next generation of artists.",
    link: "/art-education"
  },
  {
    title: "Art for Young",
    image: "https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg",
    description: "Initiatives aimed at inspiring young artists through residencies and exhibitions.",
    link: "/art-for-young"
  },
  {
    title: "Publications",
    image: "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg",
    description: "Explore our collection of art publications documenting our programs and artistic research.",
    link: "/publication"
  }
];

export default function FeaturedCategories() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setVisibleCards([0, 1, 2, 3, 4, 5]);
          }, 200);
          return () => clearTimeout(timer);
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-santaran-charcoal font-playfair">
          Explore Our <span className="text-santaran-teal">Art Programs</span>
        </h2>
        <p className="text-lg text-santaran-charcoal/70 mb-12 max-w-3xl">
          Discover the diverse range of artistic initiatives at Santaran Art Organization, 
          where traditional meets contemporary in a vibrant celebration of creativity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className={cn(
                "art-card transition-all duration-700 ease-out",
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="relative h-[350px] rounded-lg overflow-hidden group">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-santaran-charcoal via-santaran-charcoal/30 to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/80 mb-4">{category.description}</p>
                  <a 
                    href={category.link}
                    className="inline-flex items-center text-santaran-gold hover:text-white transition-colors text-sm font-medium"
                  >
                    Explore more <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
