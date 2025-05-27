
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Trophy, Rocket } from "lucide-react";

const ArtForYoung = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Artist Residency",
      description: "3-month intensive program for emerging artists aged 18-30",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      participants: "20 artists per cycle",
      duration: "3 months",
      benefits: "Mentorship, Studio Space, Exhibition"
    },
    {
      title: "Young Art Exhibition",
      description: "Annual showcase platform for artists under 25",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      participants: "50+ young artists",
      duration: "2 months display",
      benefits: "Recognition, Sales, Networking"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-teal to-santaran-gold">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Art for <span className="text-santaran-terracotta">Young</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Nurturing the next generation of artists through mentorship, opportunities, and platforms for creative expression.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Youth Programs
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Dedicated programs designed to support young artists in developing their skills and launching their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-santaran-charcoal">{program.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-6">{program.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-santaran-cream rounded-lg">
                      <div className="font-bold text-santaran-teal">{program.participants}</div>
                      <div className="text-sm text-santaran-charcoal/60">Participants</div>
                    </div>
                    <div className="text-center p-4 bg-santaran-cream rounded-lg">
                      <div className="font-bold text-santaran-teal">{program.duration}</div>
                      <div className="text-sm text-santaran-charcoal/60">Duration</div>
                    </div>
                    <div className="text-center p-4 bg-santaran-cream rounded-lg">
                      <div className="font-bold text-santaran-teal">{program.benefits}</div>
                      <div className="text-sm text-santaran-charcoal/60">Benefits</div>
                    </div>
                  </div>

                  <Button className="w-full bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-santaran-charcoal">
            Why Choose Our Youth Programs?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-santaran-teal/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-santaran-teal" />
              </div>
              <h3 className="text-xl font-bold text-santaran-charcoal mb-3">Innovation Focus</h3>
              <p className="text-santaran-charcoal/70">Encouraging experimental approaches and creative risk-taking</p>
            </div>
            <div className="text-center">
              <div className="bg-santaran-gold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-santaran-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-santaran-charcoal mb-3">Peer Network</h3>
              <p className="text-santaran-charcoal/70">Connect with like-minded young artists and collaborators</p>
            </div>
            <div className="text-center">
              <div className="bg-santaran-terracotta/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-santaran-terracotta" />
              </div>
              <h3 className="text-xl font-bold text-santaran-charcoal mb-3">Recognition</h3>
              <p className="text-santaran-charcoal/70">Showcase your work and gain recognition in the art community</p>
            </div>
            <div className="text-center">
              <div className="bg-santaran-teal/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-10 w-10 text-santaran-teal" />
              </div>
              <h3 className="text-xl font-bold text-santaran-charcoal mb-3">Career Launch</h3>
              <p className="text-santaran-charcoal/70">Professional development and career guidance</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ArtForYoung;
