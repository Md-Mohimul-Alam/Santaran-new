
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Compass, Binoculars, Camera, TreePine, Fish, Bird, Flower2, Star, Clock, Users, Award } from "lucide-react";

const DharitriEcoTourism = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ecoTours = [
    {
      title: "Mangrove Art Journey",
      location: "Sundarbans UNESCO Site",
      duration: "3 Days / 2 Nights",
      difficulty: "Easy",
      groupSize: "8-12 people",
      price: "BDT 18,500",
      image: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg",
      description: "Explore the mystical mangrove forests while creating art inspired by this unique ecosystem",
      highlights: ["Royal Bengal Tiger spotting", "Traditional boat rides", "Mangrove sketching", "Local community visit"],
      includes: ["Accommodation", "All meals", "Art supplies", "Expert guide"],
      bestTime: "November - March"
    },
    {
      title: "Hill Station Art Retreat",
      location: "Bandarban Hills",
      duration: "5 Days / 4 Nights",
      difficulty: "Moderate",
      groupSize: "10-15 people",
      price: "BDT 25,000",
      image: "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg",
      description: "Mountain landscapes meet indigenous culture in this immersive art and eco-tourism experience",
      highlights: ["Tribal village visits", "Waterfall painting", "Traditional craft learning", "Mountain hiking"],
      includes: ["Lodge stay", "Cultural meals", "Art workshops", "Local transport"],
      bestTime: "October - April"
    },
    {
      title: "Coastal Conservation Tour",
      location: "Saint Martin's Island",
      duration: "4 Days / 3 Nights",
      difficulty: "Easy",
      groupSize: "12-18 people",
      price: "BDT 22,000",
      image: "https://images.pexels.com/photos/1422290/pexels-photo-1422290.jpeg",
      description: "Marine conservation meets artistic expression in Bangladesh's only coral island",
      highlights: ["Coral reef snorkeling", "Beach art creation", "Turtle conservation", "Sunset photography"],
      includes: ["Beach resort", "Marine guides", "Equipment", "Boat transfers"],
      bestTime: "November - February"
    }
  ];

  const activities = [
    { icon: Camera, title: "Nature Photography", description: "Capture the beauty of untouched landscapes" },
    { icon: TreePine, title: "Forest Immersion", description: "Deep connection with pristine forest ecosystems" },
    { icon: Fish, title: "Aquatic Exploration", description: "Discover rivers, lakes, and marine life" },
    { icon: Bird, title: "Bird Watching", description: "Spot rare and migratory bird species" },
    { icon: Flower2, title: "Botanical Studies", description: "Learn about native flora and medicinal plants" },
    { icon: Star, title: "Night Sky Art", description: "Create art under unpolluted starry skies" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-blue-800/60 to-teal-800/80" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 opacity-30 floating-animation">
          <TreePine className="h-24 w-24 text-green-300" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-30 floating-animation-delayed">
          <Fish className="h-20 w-20 text-blue-300" />
        </div>
        <div className="absolute top-1/2 right-20 opacity-20 floating-animation">
          <Bird className="h-16 w-16 text-teal-300" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`mb-8 transition-all duration-1500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="relative inline-block">
              <Map className="h-24 w-24 text-green-400 mx-auto mb-6 pulse-glow" />
              <div className="absolute -top-2 -right-2">
                <Compass className="h-8 w-8 text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
            </div>
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold text-white mb-8 transition-all duration-1500 delay-300 font-playfair text-shadow-artistic ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <span className="block gradient-text shimmer-text">Dharitri</span>
            <span className="text-3xl md:text-4xl elegant-text italic">Eco-Tourism Project</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-white/90 max-w-4xl mx-auto transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            Where sustainable tourism meets artistic expression in Bangladesh's most pristine natural environments
          </p>

          <div className={`mt-12 transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 hover:from-green-600 hover:via-blue-600 hover:to-teal-600 text-white px-16 py-6 text-xl font-bold rounded-full shadow-3xl hover:shadow-glow-lg transform hover:scale-105 transition-all duration-500 animate-bounce-gentle"
            >
              <Binoculars className="mr-3 h-6 w-6" />
              Explore Tours
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Tours */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-santaran-charcoal font-playfair">
              Sustainable <span className="gradient-text italic">Adventures</span>
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Experience Bangladesh's natural wonders through responsible tourism that supports local communities and conservation efforts
            </p>
          </div>

          <div className="space-y-20">
            {ecoTours.map((tour, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 cursor-pointer hover-lift glass-morphism ${
                  selectedTour === index ? 'ring-4 ring-green-400 scale-105' : ''
                }`}
                onClick={() => setSelectedTour(selectedTour === index ? null : index)}
              >
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} aspect-[4/3] lg:aspect-auto overflow-hidden relative group`}>
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Tour Stats Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="grid grid-cols-2 gap-4 text-sm glass-morphism p-4 rounded-lg">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-green-400" />
                          {tour.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-blue-400" />
                          {tour.groupSize}
                        </div>
                      </div>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-glow">
                      {tour.price}
                    </div>

                    {/* Difficulty Badge */}
                    <div className={`absolute top-6 left-6 px-4 py-2 rounded-full font-bold text-sm ${
                      tour.difficulty === 'Easy' ? 'bg-green-500' :
                      tour.difficulty === 'Moderate' ? 'bg-yellow-500' : 'bg-red-500'
                    } text-white`}>
                      {tour.difficulty}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-green-50`}>
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl md:text-4xl font-bold text-santaran-charcoal font-playfair mb-3">
                        {tour.title}
                      </CardTitle>
                      <CardDescription className="flex items-center text-green-600 font-medium text-xl">
                        <Map className="h-6 w-6 mr-3" />
                        {tour.location}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-santaran-charcoal/80 leading-relaxed mb-6 text-lg">
                        {tour.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-bold text-santaran-charcoal mb-3 flex items-center">
                            <Star className="h-5 w-5 mr-2 text-yellow-500" />
                            Highlights
                          </h4>
                          <ul className="space-y-2">
                            {tour.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-santaran-charcoal mb-3 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-blue-500" />
                            Includes
                          </h4>
                          <ul className="space-y-2">
                            {tour.includes.map((include, iIndex) => (
                              <li key={iIndex} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                {include}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-lg mb-6 morphing-border">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-green-700">Best Time to Visit:</span>
                          <span className="text-santaran-charcoal/80 font-medium">{tour.bestTime}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white transition-all duration-500 font-bold shadow-glow hover:shadow-glow-lg"
                        >
                          Book Adventure
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-2 border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300 gradient-border"
                        >
                          View Itinerary
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="py-20 bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute floating-animation"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <TreePine className="h-12 w-12" />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair shimmer-text">
              Eco <span className="text-green-400 italic">Activities</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Engage with nature through sustainable activities that promote conservation and artistic expression
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-500 group hover-lift glass-morphism"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-white/20 to-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 pulse-glow">
                    <activity.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 font-playfair">
                    {activity.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-12 py-4 text-xl font-bold rounded-full shadow-3xl hover:shadow-glow-lg transform hover:scale-105 transition-all duration-500"
            >
              <Camera className="mr-3 h-6 w-6" />
              View Activity Gallery
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default DharitriEcoTourism;
