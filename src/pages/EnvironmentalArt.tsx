
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Leaf, TreePine, Mountain, Waves } from "lucide-react";

const EnvironmentalArt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Harith",
      description: "Art installations that celebrate and protect green spaces",
      image: "https://images.pexels.com/photos/1445444/pexels-photo-1445444.jpeg",
      icon: TreePine,
      focus: "Urban Green Spaces"
    },
    {
      title: "Environmental Art Camp",
      description: "Immersive workshops connecting artists with nature",
      image: "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg",
      icon: Mountain,
      focus: "Wilderness Conservation"
    },
    {
      title: "Dharitri Eco-tourism Project",
      description: "Sustainable art practices in natural environments",
      image: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg",
      icon: Waves,
      focus: "Sustainable Tourism"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-teal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1422290/pexels-photo-1422290.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Environmental <span className="text-santaran-gold">Art</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Creating meaningful connections between art and nature through sustainable practices and environmental consciousness.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Our Environmental Programs
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Through art, we advocate for environmental protection and raise awareness about climate change, 
              biodiversity, and sustainable living practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-santaran-charcoal/20 group-hover:bg-santaran-charcoal/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                    <program.icon className="h-6 w-6 text-santaran-teal" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-santaran-charcoal">{program.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-santaran-teal font-medium">{program.focus}</span>
                    <Button size="sm" className="bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
                Art for Environmental <span className="text-santaran-terracotta">Change</span>
              </h2>
              <p className="text-lg text-santaran-charcoal/80 mb-6">
                Our environmental art initiatives have reached over 50,000 people across Bangladesh, 
                raising awareness about critical environmental issues through powerful artistic expressions.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-santaran-teal mb-2">25+</div>
                  <div className="text-santaran-charcoal/70">Green Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-santaran-teal mb-2">15</div>
                  <div className="text-santaran-charcoal/70">Protected Areas</div>
                </div>
              </div>
              <Button className="bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white">
                View Our Impact
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                alt="Environmental Art Impact"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-santaran-gold/20 w-32 h-32 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default EnvironmentalArt;
