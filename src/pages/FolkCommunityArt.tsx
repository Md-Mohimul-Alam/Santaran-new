
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Music, Users, Crown, Heart } from "lucide-react";

const FolkCommunityArt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Shikar",
      description: "Traditional hunting songs and folklore preservation project",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      icon: Music,
      participants: "25+ Folk Artists",
      focus: "Traditional Music"
    },
    {
      title: "Karnaphuli Folk Triennial",
      description: "Three-year celebration of regional folk traditions",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      icon: Crown,
      participants: "100+ Communities",
      focus: "Cultural Heritage"
    },
    {
      title: "Kandrabindu",
      description: "Community art workshops and traditional craft revival",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      icon: Heart,
      participants: "50+ Artisans",
      focus: "Craft Revival"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-terracotta">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Folk & <span className="text-santaran-gold">Community Art</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Preserving and celebrating the rich tapestry of Bangladesh's folk traditions through community engagement and cultural revival.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Cultural Programs
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our folk and community art initiatives connect generations through traditional arts, crafts, and storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                    <program.icon className="h-6 w-6 text-santaran-terracotta" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-santaran-charcoal">{program.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4">{program.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-santaran-terracotta font-medium">{program.participants}</span>
                    <span className="text-sm text-santaran-teal font-medium">{program.focus}</span>
                  </div>
                  <Button className="w-full bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white">
                    Join Program
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Impact */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
                Preserving <span className="text-santaran-terracotta">Heritage</span>
              </h2>
              <p className="text-lg text-santaran-charcoal/80 mb-6">
                Our folk and community art programs have documented over 200 traditional songs, 
                preserved 50 endangered craft techniques, and engaged 1,000+ community members 
                in cultural preservation activities.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-santaran-terracotta mb-2">200+</div>
                  <div className="text-santaran-charcoal/70">Folk Songs Documented</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-santaran-terracotta mb-2">50</div>
                  <div className="text-santaran-charcoal/70">Craft Techniques</div>
                </div>
              </div>
              <Button className="bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                View Our Archive
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg"
                alt="Folk Art Heritage"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-santaran-terracotta/20 w-32 h-32 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default FolkCommunityArt;
