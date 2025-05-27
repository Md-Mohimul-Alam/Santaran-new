
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Mic, FileText, Users, Calendar, MapPin } from "lucide-react";

const Shikar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const collections = [
    {
      title: "Traditional Hunting Songs",
      description: "Ancient melodies sung during tribal hunting expeditions",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      songs: "45 recordings",
      region: "Chittagong Hill Tracts",
      year: "2020-2023"
    },
    {
      title: "Folklore Narratives",
      description: "Oral traditions and stories passed down through generations",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      songs: "62 stories",
      region: "Sylhet Region",
      year: "2019-2022"
    },
    {
      title: "Ritual Chants",
      description: "Sacred songs performed during traditional ceremonies",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      songs: "38 chants",
      region: "Mymensingh",
      year: "2021-2023"
    }
  ];

  const activities = [
    { icon: Mic, title: "Field Recording", description: "Documenting authentic performances" },
    { icon: FileText, title: "Documentation", description: "Preserving lyrics and contexts" },
    { icon: Users, title: "Community Workshops", description: "Teaching traditional songs" },
    { icon: Calendar, title: "Cultural Events", description: "Organizing folk festivals" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-charcoal to-santaran-teal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-dancing-script font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-shadow-artistic`}>
            Shikar
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Preserving the ancient hunting songs and folklore traditions of Bangladesh through comprehensive documentation and community engagement.
          </p>
        </div>
      </div>

      {/* Collections Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-santaran-charcoal">
              Our Collections
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Discover the rich musical heritage of Bangladesh through our carefully curated collection of traditional songs and stories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover-lift glass-morphism">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-santaran-charcoal font-cormorant text-xl">{collection.title}</CardTitle>
                  <CardDescription className="text-santaran-charcoal/70">{collection.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4 text-santaran-teal" />
                      <span className="text-santaran-charcoal font-medium">{collection.songs}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-santaran-terracotta" />
                      <span className="text-santaran-charcoal/70">{collection.region}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-santaran-gold" />
                      <span className="text-santaran-charcoal/70">{collection.year}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-santaran-teal hover:bg-santaran-teal/90 text-white shimmer-text">
                    Explore Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-center mb-16 text-santaran-charcoal">
            Our Activities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="text-center group floating-animation-delayed" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="bg-gradient-to-br from-santaran-teal to-santaran-terracotta w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <activity.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-cormorant font-bold text-santaran-charcoal mb-3">{activity.title}</h3>
                <p className="text-santaran-charcoal/70">{activity.description}</p>
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

export default Shikar;
