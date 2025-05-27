
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, Presentation, Search, Globe } from "lucide-react";

const OtherActivities = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activities = [
    {
      title: "Art Exchange",
      description: "International artist exchange programs fostering global connections",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      icon: ArrowRightLeft,
      scope: "International",
      participants: "40+ Countries"
    },
    {
      title: "Seminar & Presentation",
      description: "Educational seminars and artist presentations for knowledge sharing",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      icon: Presentation,
      scope: "Educational",
      participants: "500+ Attendees"
    },
    {
      title: "Research Program",
      description: "Academic research initiatives exploring art history and contemporary trends",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      icon: Search,
      scope: "Academic",
      participants: "25+ Researchers"
    }
  ];

  const achievements = [
    { number: "150+", label: "Exchange Programs" },
    { number: "75", label: "Seminars Hosted" },
    { number: "30", label: "Research Projects" },
    { number: "40", label: "Countries Connected" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-charcoal to-santaran-teal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Other <span className="text-santaran-gold">Activities</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Expanding horizons through international exchanges, educational seminars, and cutting-edge research in the arts.
          </p>
        </div>
      </div>

      {/* Activities Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Diverse Initiatives
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Beyond exhibitions and education, we engage in various activities that strengthen the global art community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                    <activity.icon className="h-6 w-6 text-santaran-teal" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-santaran-charcoal">{activity.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4">{activity.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-santaran-teal font-medium">{activity.scope}</span>
                    <span className="text-sm text-santaran-charcoal/60">{activity.participants}</span>
                  </div>
                  <Button className="w-full bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Our <span className="text-santaran-terracotta">Impact</span>
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Through our diverse activities, we've built bridges across cultures and contributed to the global art discourse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-santaran-cream rounded-lg p-8 group-hover:bg-santaran-teal transition-colors duration-300">
                  <div className="text-4xl font-bold text-santaran-teal group-hover:text-white mb-2 transition-colors duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-santaran-charcoal group-hover:text-white/90 transition-colors duration-300">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-santaran-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6 text-santaran-gold" />
          <h3 className="text-3xl font-bold mb-6">Join Our Global Network</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Be part of our international community of artists, researchers, and cultural enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-santaran-gold hover:bg-santaran-gold/90 text-santaran-charcoal">
              Become a Partner
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Join Research Program
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default OtherActivities;
