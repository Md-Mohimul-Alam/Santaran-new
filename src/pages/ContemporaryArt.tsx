
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Palette } from "lucide-react";

const ContemporaryArt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const exhibitions = [
    {
      title: "Yearly Outcome Art Show 2025",
      description: "Annual showcase featuring contemporary works from emerging and established artists",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
      date: "March 15 - April 30, 2025",
      location: "Main Gallery",
      artists: "45+ Artists"
    },
    {
      title: "Multidisciplinary Art Show",
      description: "Exploring the boundaries between traditional and digital art forms",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      date: "June 10 - July 25, 2025",
      location: "Contemporary Wing",
      artists: "32 Artists"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-charcoal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Contemporary <span className="text-santaran-gold">Art</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Exploring the cutting edge of artistic expression through innovative exhibitions and collaborative projects that challenge conventional boundaries.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Pushing Artistic Boundaries
            </h2>
            <p className="text-lg text-santaran-charcoal/80 mb-8">
              Our Contemporary Art program is dedicated to showcasing groundbreaking works that reflect 
              the complexities of modern life. We provide a platform for artists to experiment with new 
              mediums, technologies, and concepts while fostering dialogue between traditional techniques 
              and contemporary innovation.
            </p>
          </div>

          {/* Exhibitions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {exhibitions.map((exhibition, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={exhibition.image} 
                    alt={exhibition.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-santaran-charcoal">{exhibition.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-6">{exhibition.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-santaran-teal">
                      <Calendar className="h-5 w-5 mr-3" />
                      <span>{exhibition.date}</span>
                    </div>
                    <div className="flex items-center text-santaran-teal">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>{exhibition.location}</span>
                    </div>
                    <div className="flex items-center text-santaran-teal">
                      <Users className="h-5 w-5 mr-3" />
                      <span>{exhibition.artists}</span>
                    </div>
                  </div>

                  <Button className="bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                    View Exhibition Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-santaran-teal rounded-lg p-12 text-white">
            <Palette className="h-16 w-16 mx-auto mb-6 text-santaran-gold" />
            <h3 className="text-3xl font-bold mb-6">Join Our Contemporary Art Community</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're an artist, collector, or art enthusiast, discover opportunities to engage with cutting-edge contemporary art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-santaran-gold hover:bg-santaran-gold/90 text-santaran-charcoal">
                Submit Your Work
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Become a Member
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ContemporaryArt;
