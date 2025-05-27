
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Tent, Camera, Compass, Users, Calendar, Clock, Award } from "lucide-react";

const EnvironmentalArtCamp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const camps = [
    {
      title: "Sundarbans Art Expedition",
      location: "Sundarbans National Park",
      duration: "7 days",
      dates: "March 15-22, 2025",
      participants: "15 artists max",
      image: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg",
      description: "Immersive art creation in the world's largest mangrove forest",
      activities: ["Wildlife sketching", "Mangrove painting", "Sound recording", "Photography"],
      accommodation: "Eco-lodge",
      price: "BDT 45,000"
    },
    {
      title: "Hill Tracts Creative Retreat",
      location: "Bandarban Hills",
      duration: "5 days",
      dates: "April 10-15, 2025",
      participants: "20 artists max",
      image: "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg",
      description: "Mountain landscapes meet indigenous culture in artistic expression",
      activities: ["Landscape painting", "Cultural exchange", "Textile art", "Nature installation"],
      accommodation: "Mountain resort",
      price: "BDT 35,000"
    },
    {
      title: "Coastal Art Workshop",
      location: "Cox's Bazar",
      duration: "4 days",
      dates: "May 5-9, 2025",
      participants: "25 artists max",
      image: "https://images.pexels.com/photos/1422290/pexels-photo-1422290.jpeg",
      description: "Where the ocean meets creativity in sustainable art practices",
      activities: ["Beach sculpture", "Wave painting", "Marine life study", "Sand art"],
      accommodation: "Beachfront hotel",
      price: "BDT 28,000"
    }
  ];

  const equipment = [
    { item: "Professional easels", icon: Mountain },
    { item: "Weather-resistant materials", icon: Tent },
    { item: "Documentation cameras", icon: Camera },
    { item: "GPS navigation tools", icon: Compass }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-green-800/60 to-teal-800/70" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Mountain className="h-32 w-32 text-white animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Tent className="h-28 w-28 text-white animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-6xl md:text-8xl font-bold text-white mb-8 transition-all duration-1200 font-playfair ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-3'}`}>
            <span className="block text-blue-300 italic">Environmental</span>
            <span className="block text-green-300">Art Camp</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-white/90 max-w-4xl mx-auto transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            Immerse yourself in nature's studio and create art that speaks to environmental consciousness
          </p>

          <div className={`mt-12 transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Join Next Expedition
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Camps */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-santaran-charcoal font-playfair">
              Wilderness <span className="text-blue-600 italic">Expeditions</span>
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Journey to Bangladesh's most pristine natural locations for transformative artistic experiences
            </p>
          </div>

          <div className="space-y-16">
            {camps.map((camp, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 cursor-pointer transform hover:-translate-y-2 ${
                  selectedCamp === index ? 'ring-4 ring-blue-400 scale-105' : ''
                }`}
                onClick={() => setSelectedCamp(selectedCamp === index ? null : index)}
              >
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} aspect-[4/3] lg:aspect-auto overflow-hidden relative group`}>
                    <img 
                      src={camp.image} 
                      alt={camp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    {/* Overlay with camp info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {camp.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {camp.participants}
                        </div>
                      </div>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full font-bold">
                      {camp.price}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50`}>
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl md:text-4xl font-bold text-santaran-charcoal font-playfair mb-3">
                        {camp.title}
                      </CardTitle>
                      <CardDescription className="flex items-center text-blue-600 font-medium text-xl">
                        <Mountain className="h-6 w-6 mr-3" />
                        {camp.location}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-santaran-charcoal/80 leading-relaxed mb-6 text-lg">
                        {camp.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                            <div>
                              <div className="font-bold text-santaran-charcoal">Dates</div>
                              <div className="text-santaran-charcoal/70">{camp.dates}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-green-600 mr-3" />
                            <div>
                              <div className="font-bold text-santaran-charcoal">Duration</div>
                              <div className="text-santaran-charcoal/70">{camp.duration}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Tent className="h-5 w-5 text-teal-600 mr-3" />
                            <div>
                              <div className="font-bold text-santaran-charcoal">Stay</div>
                              <div className="text-santaran-charcoal/70">{camp.accommodation}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-purple-600 mr-3" />
                            <div>
                              <div className="font-bold text-santaran-charcoal">Group Size</div>
                              <div className="text-santaran-charcoal/70">{camp.participants}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-bold text-santaran-charcoal mb-3 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-yellow-600" />
                          Activities Included
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {camp.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="bg-white rounded-lg px-3 py-2 text-sm font-medium text-santaran-charcoal border border-blue-200">
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white transition-all duration-300 font-bold"
                        >
                          Book Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                        >
                          Learn More
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

      {/* Equipment & Facilities */}
      <div className="py-20 bg-gradient-to-br from-blue-900 via-green-800 to-teal-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Mountain className="h-40 w-40" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Tent className="h-32 w-32" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Camera className="h-60 w-60" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Professional <span className="text-yellow-400 italic">Equipment</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We provide all necessary equipment for your wilderness art adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {item.item}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              View Full Equipment List
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default EnvironmentalArtCamp;
