
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, TreePine, Sprout, Globe, Users, Award, Camera, MapPin } from "lucide-react";

const Harith = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const greenProjects = [
    {
      title: "Vertical Garden Symphony",
      location: "Dhaka University Campus",
      area: "500 sq meters",
      plants: "150+ species",
      image: "https://images.pexels.com/photos/1445444/pexels-photo-1445444.jpeg",
      description: "Living wall installation that creates music through plant bio-electrical signals",
      impact: "Improved air quality for 2000+ students daily",
      status: "Completed"
    },
    {
      title: "Floating Gardens",
      location: "Buriganga River",
      area: "200 sq meters",
      plants: "80+ aquatic species",
      image: "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg",
      description: "Floating art installations that purify water while creating beautiful landscapes",
      impact: "Filtered 50,000 liters of water monthly",
      status: "Ongoing"
    },
    {
      title: "Urban Canopy Project",
      location: "Dhanmondi Area",
      area: "2 kilometers",
      plants: "300+ trees",
      image: "https://images.pexels.com/photos/1422290/pexels-photo-1422290.jpeg",
      description: "Community-driven tree planting with artistic markers and interactive elements",
      impact: "Reduced local temperature by 3°C",
      status: "Expanding"
    }
  ];

  const workshops = [
    {
      title: "Eco-Art Creation",
      date: "Every Saturday",
      participants: "25 per session",
      materials: "Recycled & natural",
      icon: Leaf
    },
    {
      title: "Green Space Design",
      date: "Monthly",
      participants: "15 per session",
      materials: "Living plants",
      icon: TreePine
    },
    {
      title: "Seed Bomb Making",
      date: "Bi-weekly",
      participants: "50 per session",
      materials: "Seeds & clay",
      icon: Sprout
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1445444/pexels-photo-1445444.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-emerald-800/60 to-teal-800/80" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Leaf className="h-20 w-20 text-green-400 mx-auto mb-6 animate-pulse" />
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold text-white mb-8 transition-all duration-1000 delay-200 font-playfair ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <span className="block text-green-400 italic">Harith</span>
            <span className="text-4xl md:text-5xl">Green Art Initiative</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-white/90 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            Transforming urban spaces through living art installations that celebrate and protect our green heritage
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Green Installations", icon: TreePine, color: "text-green-600" },
              { number: "15,000+", label: "Plants Installed", icon: Leaf, color: "text-emerald-600" },
              { number: "50", label: "Community Gardens", icon: Sprout, color: "text-teal-600" },
              { number: "100K+", label: "People Reached", icon: Users, color: "text-green-700" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold mb-2 font-playfair ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-santaran-charcoal/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-santaran-charcoal font-playfair">
              Living <span className="text-green-600 italic">Masterpieces</span>
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our green art installations breathe life into urban spaces while creating sustainable ecosystems
            </p>
          </div>

          <div className="space-y-12">
            {greenProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  selectedProject === index ? 'ring-4 ring-green-400' : ''
                }`}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${
                      project.status === 'Completed' ? 'bg-green-500 text-white' :
                      project.status === 'Ongoing' ? 'bg-yellow-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {project.status}
                    </div>

                    {/* Photo Gallery Icon */}
                    <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full">
                      <Camera className="h-5 w-5 text-santaran-charcoal" />
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl font-bold text-santaran-charcoal font-playfair mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="flex items-center text-green-600 font-medium text-lg">
                        <MapPin className="h-5 w-5 mr-2" />
                        {project.location}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-santaran-charcoal/80 leading-relaxed mb-6 text-lg">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="font-bold text-green-700">Coverage Area</div>
                          <div className="text-santaran-charcoal/70">{project.area}</div>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <div className="font-bold text-emerald-700">Plant Species</div>
                          <div className="text-santaran-charcoal/70">{project.plants}</div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg mb-6">
                        <div className="flex items-center mb-2">
                          <Award className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-bold text-green-700">Environmental Impact</span>
                        </div>
                        <p className="text-santaran-charcoal/80">{project.impact}</p>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white transition-all duration-300">
                          Visit Project
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300"
                        >
                          View Gallery
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

      {/* Workshops Section */}
      <div className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Green <span className="text-green-400 italic">Workshops</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Learn to create art that nurtures both creativity and the environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="bg-green-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <workshop.icon className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white font-playfair group-hover:text-green-400 transition-colors duration-300">
                    {workshop.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-white/80">
                      <span>Schedule:</span>
                      <span className="font-medium text-green-400">{workshop.date}</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Participants:</span>
                      <span className="font-medium">{workshop.participants}</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Materials:</span>
                      <span className="font-medium">{workshop.materials}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300"
                  >
                    Join Workshop
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

export default Harith;
