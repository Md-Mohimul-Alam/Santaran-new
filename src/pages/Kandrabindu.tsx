
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Palette, Users, Gift, Sparkles, HandHeart } from "lucide-react";

const KandrabinduCommunity = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Community Art Workshops",
      description: "Hands-on sessions teaching traditional craft techniques to local communities",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      frequency: "Weekly",
      participants: "25-30 people",
      duration: "3 hours"
    },
    {
      title: "Artisan Revival Program",
      description: "Supporting elderly craftspeople in passing their skills to younger generations",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      frequency: "Monthly",
      participants: "15-20 artisans",
      duration: "Full day"
    },
    {
      title: "Youth Engagement Initiative",
      description: "Engaging school children and young adults in traditional art forms",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      frequency: "Bi-weekly",
      participants: "40-50 youth",
      duration: "2 hours"
    }
  ];

  const impacts = [
    { icon: Users, number: "1,200+", label: "Community Members Engaged" },
    { icon: Palette, number: "85", label: "Traditional Crafts Revived" },
    { icon: Gift, number: "500+", label: "Artisan Products Created" },
    { icon: Heart, number: "15", label: "Villages Reached" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-gold via-santaran-terracotta to-santaran-teal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <Heart className="h-16 w-16 text-santaran-cream mx-auto mb-4 floating-animation pulse-glow" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-dancing-script font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-shadow-artistic`}>
            Kandrabindu
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Community art workshops and traditional craft revival program that brings people together to preserve and celebrate our cultural heritage through hands-on learning.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Community Programs
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our community-centered programs focus on skill transfer, cultural preservation, and building stronger artistic communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-santaran-charcoal font-cormorant text-xl group-hover:text-santaran-teal transition-colors duration-300">{program.title}</CardTitle>
                  <CardDescription className="text-santaran-charcoal/70">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-santaran-charcoal/60">Frequency:</span>
                      <span className="text-santaran-teal font-semibold">{program.frequency}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-santaran-charcoal/60">Participants:</span>
                      <span className="text-santaran-terracotta font-semibold">{program.participants}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-santaran-charcoal/60">Duration:</span>
                      <span className="text-santaran-charcoal font-semibold">{program.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white group-hover:bg-gradient-to-r group-hover:from-santaran-terracotta group-hover:to-santaran-gold transition-all duration-300">
                    Join Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Community Impact
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Through our dedicated efforts, we've created lasting positive change in communities across Bangladesh.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-santaran-teal via-santaran-terracotta to-santaran-gold w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                  <impact.icon className="h-12 w-12 text-white" />
                </div>
                <div className="text-4xl font-bold text-santaran-terracotta mb-2 gradient-text">{impact.number}</div>
                <div className="text-santaran-charcoal/70 font-medium">{impact.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-santaran-teal to-santaran-terracotta rounded-2xl p-12 text-white">
            <HandHeart className="h-16 w-16 mx-auto mb-6 floating-animation" />
            <h3 className="text-3xl font-cormorant font-bold mb-4">Join Our Community</h3>
            <p className="text-xl mb-8 opacity-90">Be part of our mission to preserve traditional crafts and strengthen communities through art.</p>
            <Button className="bg-white text-santaran-teal hover:bg-santaran-cream hover:text-santaran-charcoal px-8 py-3 text-lg font-semibold">
              Get Involved Today
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default KandrabinduCommunity;
