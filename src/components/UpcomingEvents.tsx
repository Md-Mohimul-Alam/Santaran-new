
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, MapPin } from "lucide-react";

interface Event {
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  image: string;
  link: string;
}

const events: Event[] = [
  {
    title: "Contemporary Voices: New Media Art Exhibition",
    type: "Exhibition",
    date: "July 12-25, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Santaran Main Gallery, Kolkata",
    image: "https://images.pexels.com/photos/2275299/pexels-photo-2275299.jpeg",
    link: "/events/contemporary-voices"
  },
  {
    title: "Eco-Art Workshop: Creating with Sustainable Materials",
    type: "Workshop",
    date: "June 28, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "Dharitri Art Center, Sundarbans",
    image: "https://images.pexels.com/photos/6942326/pexels-photo-6942326.jpeg",
    link: "/events/eco-art-workshop"
  },
  {
    title: "Folk Art Preservation: Documentary Screening & Discussion",
    type: "Seminar",
    date: "June 15, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Kalpapuri Arts Center, Shantiniketan",
    image: "https://images.pexels.com/photos/7011550/pexels-photo-7011550.jpeg",
    link: "/events/folk-art-preservation"
  },
  {
    title: "Young Artists Showcase: Emerging Talents 2025",
    type: "Exhibition",
    date: "August 5-20, 2025",
    time: "11:00 AM - 8:00 PM",
    location: "Santaran Youth Gallery, Kolkata",
    image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg",
    link: "/events/young-artists-showcase"
  }
];

export default function UpcomingEvents() {
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
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-3 text-santaran-charcoal font-playfair transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Upcoming <span className="text-santaran-terracotta">Events</span>
          </h2>
          <div className={cn(
            "w-20 h-1 bg-santaran-gold mx-auto mb-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0"
          )}></div>
          <p className={cn(
            "text-lg text-santaran-charcoal/70 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Stay informed about our exhibitions, workshops, artist talks, and community events. 
            Join us to experience art in all its forms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <a 
              href={event.link}
              key={event.title}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-santaran-teal/10 text-santaran-teal mb-3">
                  {event.type}
                </span>
                <h3 className="text-lg font-bold mb-3 text-santaran-charcoal group-hover:text-santaran-teal transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-santaran-charcoal/70">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-santaran-terracotta" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-santaran-terracotta" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-santaran-terracotta" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/events" 
            className={cn(
              "inline-block px-8 py-3 bg-santaran-terracotta text-white rounded-md hover:bg-santaran-terracotta/90 transition-all duration-300 font-medium",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${150 * events.length}ms` }}
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}
