
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Palette, Hammer, Sparkles, Users, Trophy } from "lucide-react";

const KalpapuriSchool = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Traditional Crafts",
      description: "Learn age-old techniques of pottery, weaving, and textile arts",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      duration: "1 Year",
      students: "25 per batch",
      certification: "Diploma"
    },
    {
      title: "Modern Crafts",
      description: "Contemporary approaches to jewelry making, woodworking, and metalwork",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      duration: "8 Months",
      students: "20 per batch",
      certification: "Certificate"
    },
    {
      title: "Mixed Media Arts",
      description: "Innovative combination of traditional and modern artistic techniques",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      duration: "6 Months",
      students: "15 per batch",
      certification: "Advanced Certificate"
    }
  ];

  const achievements = [
    { number: "500+", label: "Graduates", icon: Users },
    { number: "50+", label: "Awards Won", icon: Trophy },
    { number: "25", label: "Master Craftsmen", icon: Sparkles },
    { number: "15", label: "Years of Excellence", icon: Palette }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-terracotta to-santaran-gold">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-cormorant font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Kalpapuri School of 
            <span className="block text-santaran-cream">Arts & Crafts</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Master the timeless art of craftsmanship through our comprehensive school programs that blend tradition with innovation.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Specialized Programs
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our school offers comprehensive training in various craft disciplines, preserving traditional techniques while embracing modern innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 morphing-border">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-santaran-charcoal font-cormorant text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-santaran-charcoal/70 text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-santaran-charcoal/60">Duration:</span>
                      <span className="text-santaran-teal font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-santaran-charcoal/60">Batch Size:</span>
                      <span className="text-santaran-teal font-semibold">{program.students}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-santaran-charcoal/60">Certification:</span>
                      <span className="text-santaran-terracotta font-semibold">{program.certification}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-santaran-teal to-santaran-terracotta hover:from-santaran-teal/90 hover:to-santaran-terracotta/90 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-center mb-16 text-santaran-charcoal">
            Our Achievements
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                <div className="bg-gradient-to-br from-santaran-teal via-santaran-terracotta to-santaran-gold w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-12 w-12 text-white" />
                </div>
                <div className="text-4xl font-bold text-santaran-terracotta mb-2 gradient-text">{achievement.number}</div>
                <div className="text-santaran-charcoal/70 font-medium">{achievement.label}</div>
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

export default KalpapuriSchool;
