
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX, Maximize, Calendar, MapPin } from "lucide-react";

const MultidisciplinaryArtShow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMedia, setActiveMedia] = useState<{ [key: number]: boolean }>({});
  const [isMuted, setIsMuted] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMedia = (index: number) => {
    setActiveMedia(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleMute = (index: number) => {
    setIsMuted(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const installations = [
    {
      title: "Digital Weaving",
      artist: "Aminul Islam",
      type: "Interactive Digital Installation",
      description: "Traditional weaving patterns reimagined through AI and projected onto moving fabrics",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      mediaType: "video"
    },
    {
      title: "Sound of Memory",
      artist: "Shireen Aktar",
      type: "Audio-Visual Performance",
      description: "Childhood lullabies transformed into immersive soundscapes with responsive visuals",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      mediaType: "audio"
    },
    {
      title: "Virtual Monsoon",
      artist: "Rafiq Rahman",
      type: "VR Experience",
      description: "Experience the emotional intensity of monsoon through virtual reality",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      mediaType: "vr"
    },
    {
      title: "Data Portraits",
      artist: "Nusrat Jahan",
      type: "Generative Art",
      description: "Personal data transformed into abstract portraits using machine learning",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      mediaType: "interactive"
    }
  ];

  const workshops = [
    {
      title: "Digital Art Creation",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      instructor: "Aminul Islam",
      spots: 15
    },
    {
      title: "Sound Design Basics",
      date: "June 22, 2025",
      time: "2:00 PM - 6:00 PM",
      instructor: "Shireen Aktar",
      spots: 12
    },
    {
      title: "VR Art Workshop",
      date: "June 29, 2025",
      time: "11:00 AM - 5:00 PM",
      instructor: "Rafiq Rahman",
      spots: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-santaran-charcoal via-santaran-teal to-santaran-charcoal">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-santaran-charcoal/90 to-santaran-teal/80" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-8 transition-all duration-1000 font-playfair ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <span className="block text-santaran-gold italic">Multidisciplinary</span>
            Art Show
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            Where technology meets tradition in revolutionary artistic expressions
          </p>
          
          <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Calendar className="h-5 w-5 mr-3 text-santaran-gold" />
              <span className="text-white font-medium">June 10 - July 25, 2025</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <MapPin className="h-5 w-5 mr-3 text-santaran-gold" />
              <span className="text-white font-medium">Contemporary Wing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Installations */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-playfair">
              Interactive <span className="text-santaran-gold italic">Installations</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Immerse yourself in groundbreaking artworks that respond to your presence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {installations.map((installation, index) => (
              <Card key={index} className="group overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={installation.image} 
                    alt={installation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Media Controls Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button 
                        onClick={() => toggleMedia(index)}
                        className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                      >
                        {activeMedia[index] ? 
                          <Pause className="h-6 w-6 text-santaran-charcoal" /> : 
                          <Play className="h-6 w-6 text-santaran-charcoal" />
                        }
                      </button>
                      
                      {installation.mediaType === 'audio' && (
                        <button 
                          onClick={() => toggleMute(index)}
                          className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                        >
                          {isMuted[index] ? 
                            <VolumeX className="h-6 w-6 text-santaran-charcoal" /> : 
                            <Volume2 className="h-6 w-6 text-santaran-charcoal" />
                          }
                        </button>
                      )}
                      
                      <button className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                        <Maximize className="h-6 w-6 text-santaran-charcoal" />
                      </button>
                    </div>
                  </div>

                  {/* Media Type Badge */}
                  <div className="absolute top-4 right-4 bg-santaran-gold/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-santaran-charcoal text-sm font-bold uppercase">
                      {installation.mediaType}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white font-playfair">
                    {installation.title}
                  </CardTitle>
                  <CardDescription className="text-santaran-gold font-medium text-lg">
                    by {installation.artist}
                  </CardDescription>
                  <div className="text-white/70 font-medium">
                    {installation.type}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {installation.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-santaran-gold hover:bg-santaran-gold/90 text-santaran-charcoal font-bold transition-all duration-300"
                    >
                      Experience Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Workshops Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-playfair">
              Creative <span className="text-santaran-gold italic">Workshops</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Learn from masters and create your own multidisciplinary artworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white font-playfair group-hover:text-santaran-gold transition-colors duration-300">
                    {workshop.title}
                  </CardTitle>
                  <CardDescription className="text-santaran-gold font-medium">
                    with {workshop.instructor}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-white/80">
                      <span>Date:</span>
                      <span className="font-medium">{workshop.date}</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Time:</span>
                      <span className="font-medium">{workshop.time}</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Available Spots:</span>
                      <span className="font-bold text-santaran-gold">{workshop.spots}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white transition-all duration-300"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default MultidisciplinaryArtShow;
