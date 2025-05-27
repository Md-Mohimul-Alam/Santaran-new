
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Palette, Users, Calendar, Award, Lightbulb } from "lucide-react";

const ArtistResidency = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const residencyPrograms = [
    {
      title: "Emerging Artist Residency",
      description: "3-month intensive program for artists aged 18-25 with studio space and mentorship",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      duration: "3 Months",
      stipend: "$500/month",
      spots: "8 artists per cycle"
    },
    {
      title: "Mid-Career Development",
      description: "6-month program for artists aged 26-35 focusing on professional growth",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      duration: "6 Months",
      stipend: "$750/month",
      spots: "6 artists per cycle"
    },
    {
      title: "International Exchange",
      description: "Cultural exchange program connecting Bangladeshi artists with international peers",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      duration: "4 Months",
      stipend: "$1000/month",
      spots: "4 artists per year"
    }
  ];

  const benefits = [
    { icon: Home, title: "Studio Space", description: "Fully equipped private studio with 24/7 access" },
    { icon: Users, title: "Mentorship", description: "One-on-one guidance from established artists" },
    { icon: Palette, title: "Art Supplies", description: "Monthly allowance for materials and tools" },
    { icon: Calendar, title: "Exhibition", description: "Solo exhibition at the end of residency" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-teal via-santaran-gold to-santaran-terracotta">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <Lightbulb className="h-16 w-16 text-santaran-cream mx-auto mb-4 floating-animation pulse-glow" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-cormorant font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-shadow-artistic`}>
            Artist Residency
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Immersive programs designed to nurture emerging artistic talent through dedicated studio time, mentorship, and professional development opportunities.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Residency Programs
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our residency programs are tailored to different career stages, providing the right support and resources for artistic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {residencyPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden glass-morphism">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-santaran-charcoal font-cormorant text-xl group-hover:text-santaran-teal transition-colors duration-300">{program.title}</CardTitle>
                  <CardDescription className="text-santaran-charcoal/70">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-santaran-teal/10 rounded-lg">
                      <span className="text-santaran-charcoal/60">Duration:</span>
                      <span className="text-santaran-teal font-bold">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-santaran-terracotta/10 rounded-lg">
                      <span className="text-santaran-charcoal/60">Stipend:</span>
                      <span className="text-santaran-terracotta font-bold">{program.stipend}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-santaran-gold/20 rounded-lg">
                      <span className="text-santaran-charcoal/60">Available Spots:</span>
                      <span className="text-santaran-charcoal font-bold">{program.spots}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-santaran-teal to-santaran-terracotta hover:from-santaran-teal/90 hover:to-santaran-terracotta/90 text-white group-hover:scale-105 transition-transform duration-300">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Residency Benefits
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive support system ensures artists have everything they need to focus on their creative development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-santaran-teal to-santaran-terracotta w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 floating-animation" style={{ animationDelay: `${index * 0.3}s` }}>
                  <benefit.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-cormorant font-bold text-santaran-charcoal mb-3">{benefit.title}</h3>
                <p className="text-santaran-charcoal/70">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-r from-santaran-cream to-white rounded-2xl p-12">
            <h3 className="text-3xl font-cormorant font-bold text-center mb-8 text-santaran-charcoal">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-santaran-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-santaran-terracotta mb-2">45</div>
                <div className="text-santaran-charcoal/70">Artists Completed Residency</div>
              </div>
              <div className="text-center">
                <Palette className="h-12 w-12 text-santaran-teal mx-auto mb-4" />
                <div className="text-3xl font-bold text-santaran-terracotta mb-2">120+</div>
                <div className="text-santaran-charcoal/70">Artworks Created</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-santaran-terracotta mx-auto mb-4" />
                <div className="text-3xl font-bold text-santaran-terracotta mb-2">85%</div>
                <div className="text-santaran-charcoal/70">Career Advancement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ArtistResidency;
