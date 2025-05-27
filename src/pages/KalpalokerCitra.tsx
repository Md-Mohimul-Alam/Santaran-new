
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Image, Video, Monitor, Eye, Zap } from "lucide-react";

const KalpalokerCitra = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workshops = [
    {
      title: "Photography Fundamentals",
      description: "Master the basics of composition, lighting, and storytelling through images",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      duration: "8 weeks",
      skill: "Beginner",
      sessions: "16 sessions"
    },
    {
      title: "Digital Art Creation",
      description: "Explore digital painting, photo manipulation, and graphic design",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      duration: "10 weeks",
      skill: "Intermediate",
      sessions: "20 sessions"
    },
    {
      title: "Visual Storytelling",
      description: "Combine photography and visual arts to create compelling narratives",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      duration: "12 weeks",
      skill: "Advanced",
      sessions: "24 sessions"
    }
  ];

  const facilities = [
    { icon: Camera, title: "Professional Studio", description: "Fully equipped photography studio" },
    { icon: Monitor, title: "Digital Lab", description: "Latest software and hardware" },
    { icon: Image, title: "Gallery Space", description: "Exhibition opportunities" },
    { icon: Video, title: "Video Production", description: "Motion graphics and editing" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-teal to-santaran-gold">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-dancing-script font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Kalpaloker Citra
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Visual arts and photography workshops that capture the imagination and transform creative vision into reality.
          </p>
        </div>
      </div>

      {/* Workshops Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Workshop Programs
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              From photography fundamentals to advanced digital art, our workshops cater to every level of visual artist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-santaran-charcoal font-cormorant text-xl">{workshop.title}</CardTitle>
                  <CardDescription className="text-santaran-charcoal/70">{workshop.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                    <div className="p-3 bg-santaran-teal/10 rounded-lg">
                      <div className="text-sm font-bold text-santaran-teal">{workshop.duration}</div>
                      <div className="text-xs text-santaran-charcoal/60">Duration</div>
                    </div>
                    <div className="p-3 bg-santaran-terracotta/10 rounded-lg">
                      <div className="text-sm font-bold text-santaran-terracotta">{workshop.skill}</div>
                      <div className="text-xs text-santaran-charcoal/60">Level</div>
                    </div>
                    <div className="p-3 bg-santaran-gold/20 rounded-lg">
                      <div className="text-sm font-bold text-santaran-charcoal">{workshop.sessions}</div>
                      <div className="text-xs text-santaran-charcoal/60">Sessions</div>
                    </div>
                  </div>
                  <Button className="w-full bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white pulse-glow">
                    Join Workshop
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-center mb-16 text-santaran-charcoal">
            Our Facilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-santaran-teal to-santaran-terracotta w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <facility.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-cormorant font-bold text-santaran-charcoal mb-3">{facility.title}</h3>
                <p className="text-santaran-charcoal/70">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default KalpalokerCitra;
