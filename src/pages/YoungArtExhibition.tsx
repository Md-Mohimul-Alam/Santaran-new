
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Eye, Heart, Star, Calendar, MapPin } from "lucide-react";

const YoungArtExhibition = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const exhibitions = [
    {
      title: "Young Visions 2024",
      description: "Annual showcase featuring breakthrough works by artists under 25",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      date: "March 15 - May 15, 2024",
      artists: "42 young artists",
      venue: "Santaran Main Gallery"
    },
    {
      title: "Emerging Voices 2023",
      description: "Celebrated exhibition highlighting innovative contemporary expressions",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      date: "October 10 - December 10, 2023",
      artists: "38 artists featured",
      venue: "Santaran Cultural Center"
    },
    {
      title: "Fresh Perspectives 2023",
      description: "Mid-year exhibition focusing on social themes and community issues",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      date: "June 20 - August 20, 2023",
      artists: "35 participating artists",
      venue: "Community Art Space"
    }
  ];

  const categories = [
    { title: "Painting & Drawing", count: "120+ works", icon: "🎨" },
    { title: "Digital Art", count: "85+ pieces", icon: "💻" },
    { title: "Photography", count: "95+ images", icon: "📸" },
    { title: "Mixed Media", count: "60+ installations", icon: "🎭" },
    { title: "Sculpture", count: "40+ pieces", icon: "🗿" },
    { title: "Video Art", count: "25+ videos", icon: "🎬" }
  ];

  const stats = [
    { icon: Eye, number: "15,000+", label: "Visitors Annually" },
    { icon: Heart, number: "200+", label: "Artworks Sold" },
    { icon: Star, number: "50+", label: "Awards Given" },
    { icon: Trophy, number: "90%", label: "Artist Career Growth" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-terracotta via-santaran-gold to-santaran-teal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <Star className="h-16 w-16 text-santaran-cream mx-auto mb-4 floating-animation pulse-glow" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-cormorant font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-shadow-artistic`}>
            Young Art Exhibition
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Annual platform celebrating the creativity and innovation of young artists, providing recognition, sales opportunities, and career advancement.
          </p>
        </div>
      </div>

      {/* Recent Exhibitions */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Recent Exhibitions
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our exhibitions have showcased hundreds of young artists, helping launch successful careers in the contemporary art world.
            </p>
          </div>

          <div className="space-y-8">
            {exhibitions.map((exhibition, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex group`}>
                <div className="lg:w-1/2 aspect-[16/9] lg:aspect-auto overflow-hidden">
                  <img 
                    src={exhibition.image} 
                    alt={exhibition.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-cormorant text-santaran-charcoal mb-3 group-hover:text-santaran-teal transition-colors duration-300">{exhibition.title}</CardTitle>
                    <CardDescription className="text-lg text-santaran-charcoal/70">{exhibition.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-santaran-teal" />
                        <span className="text-santaran-charcoal">{exhibition.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Eye className="h-5 w-5 text-santaran-terracotta" />
                        <span className="text-santaran-charcoal">{exhibition.artists}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-santaran-gold" />
                        <span className="text-santaran-charcoal">{exhibition.venue}</span>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-santaran-teal to-santaran-terracotta hover:from-santaran-teal/90 hover:to-santaran-terracotta/90 text-white">
                      View Gallery
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Exhibition Categories
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our exhibitions encompass a wide range of artistic disciplines, providing platforms for diverse creative expressions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 flex items-center gap-5">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-medium text-santaran-charcoal group-hover:text-santaran-teal transition-colors duration-300">{category.title}</h3>
                    <p className="text-santaran-charcoal/70">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-gradient-to-r from-santaran-teal to-santaran-terracotta">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-white">
              Exhibition Impact
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our exhibitions create tangible outcomes for participating artists and the wider community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/20 backdrop-blur-md w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                  <stat.icon className="h-12 w-12 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
            Submit Your Work
          </h2>
          <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto mb-8">
            Are you an emerging artist under 25? Submit your work for consideration in our next exhibition.
          </p>
          <Button size="lg" className="bg-santaran-teal hover:bg-santaran-teal/90 text-white px-8 py-6 text-lg">
            Apply for Exhibition
          </Button>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default YoungArtExhibition;
