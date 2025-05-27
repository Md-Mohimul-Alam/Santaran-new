
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Award, Eye, Heart, Share2 } from "lucide-react";

const YearlyOutcomeArtShow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [likedArtworks, setLikedArtworks] = useState<number[]>([]);
  const [viewCounts, setViewCounts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    setIsVisible(true);
    // Initialize view counts
    const initialCounts: { [key: number]: number } = {};
    artworks.forEach((_, index) => {
      initialCounts[index] = Math.floor(Math.random() * 500) + 100;
    });
    setViewCounts(initialCounts);
  }, []);

  const handleLike = (index: number) => {
    if (likedArtworks.includes(index)) {
      setLikedArtworks(likedArtworks.filter(id => id !== index));
    } else {
      setLikedArtworks([...likedArtworks, index]);
    }
  };

  const handleView = (index: number) => {
    setViewCounts(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1
    }));
  };

  const artworks = [
    {
      title: "Urban Metamorphosis",
      artist: "Rashida Ahmed",
      medium: "Mixed Media on Canvas",
      dimensions: "120 x 90 cm",
      price: "BDT 85,000",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
      description: "A powerful exploration of urbanization's impact on traditional life"
    },
    {
      title: "Digital Dreams",
      artist: "Kamal Hassan",
      medium: "Digital Art Installation",
      dimensions: "Variable",
      price: "BDT 120,000",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      description: "Interactive digital piece exploring technology and humanity"
    },
    {
      title: "Memory Fragments",
      artist: "Fatima Begum",
      medium: "Photography Series",
      dimensions: "60 x 40 cm each",
      price: "BDT 45,000",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      description: "Nostalgic journey through forgotten spaces and moments"
    },
    {
      title: "Contemporary Rhythms",
      artist: "Nasir Uddin",
      medium: "Acrylic on Canvas",
      dimensions: "150 x 100 cm",
      price: "BDT 95,000",
      image: "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg",
      description: "Abstract interpretation of modern life's complexities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-santaran-cream via-white to-santaran-cream">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-santaran-charcoal/90 via-santaran-charcoal/70 to-transparent" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-8 transition-all duration-1000 font-playfair ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            Yearly Outcome
            <span className="block text-santaran-gold italic">Art Show 2025</span>
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            Celebrating a year of artistic excellence and creative innovation
          </p>
          
          <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Calendar className="h-5 w-5 mr-3 text-santaran-gold" />
              <span className="text-white font-medium">March 15 - April 30, 2025</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <MapPin className="h-5 w-5 mr-3 text-santaran-gold" />
              <span className="text-white font-medium">Santaran Main Gallery</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="h-5 w-5 mr-3 text-santaran-gold" />
              <span className="text-white font-medium">45+ Featured Artists</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Artworks */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-santaran-charcoal font-playfair">
              Featured <span className="text-santaran-terracotta italic">Artworks</span>
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Discover the most compelling pieces from this year's exhibition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {artworks.map((artwork, index) => (
              <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                    onClick={() => handleView(index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Interactive Overlay */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={() => handleLike(index)}
                      className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                    >
                      <Heart className={`h-5 w-5 ${likedArtworks.includes(index) ? 'text-red-500 fill-current' : 'text-santaran-charcoal'}`} />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                      <Share2 className="h-5 w-5 text-santaran-charcoal" />
                    </button>
                  </div>

                  {/* View Counter */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Eye className="h-4 w-4 text-white mr-2" />
                    <span className="text-white text-sm">{viewCounts[index] || 0}</span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-santaran-charcoal font-playfair">
                    {artwork.title}
                  </CardTitle>
                  <CardDescription className="text-santaran-teal font-medium text-lg">
                    by {artwork.artist}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-santaran-charcoal/80 leading-relaxed">
                    {artwork.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-santaran-charcoal">Medium:</span>
                      <p className="text-santaran-charcoal/70">{artwork.medium}</p>
                    </div>
                    <div>
                      <span className="font-medium text-santaran-charcoal">Dimensions:</span>
                      <p className="text-santaran-charcoal/70">{artwork.dimensions}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-santaran-cream">
                    <span className="text-2xl font-bold text-santaran-terracotta font-playfair">
                      {artwork.price}
                    </span>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-santaran-teal text-santaran-teal hover:bg-santaran-teal hover:text-white transition-all duration-300"
                      >
                        View Details
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white transition-all duration-300"
                      >
                        Inquire
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Event Information */}
      <div className="py-20 bg-santaran-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 font-playfair">
                Exhibition <span className="text-santaran-gold italic">Details</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-santaran-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Curatorial Excellence</h4>
                    <p className="text-white/80">Carefully curated selection representing the finest contemporary works from established and emerging artists.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-santaran-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Artist Talks</h4>
                    <p className="text-white/80">Join intimate conversations with featured artists every weekend during the exhibition period.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-santaran-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Special Events</h4>
                    <p className="text-white/80">Opening reception, collectors' preview, and closing ceremony with live performances.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg"
                alt="Gallery Space"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-santaran-gold/30 w-32 h-32 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default YearlyOutcomeArtShow;
