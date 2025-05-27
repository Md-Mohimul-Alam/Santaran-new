
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Star } from "lucide-react";

const ArtEducation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Kalpapuri",
      description: "Comprehensive art education program for all ages",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      duration: "6 months",
      students: "500+ students",
      level: "Beginner to Advanced"
    },
    {
      title: "Kalpaloker Citra",
      description: "Visual arts and photography workshops",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      duration: "3 months",
      students: "200+ students",
      level: "Intermediate"
    },
    {
      title: "Kalpapuri School of Arts & Crafts",
      description: "Traditional and contemporary crafts education",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      duration: "1 year",
      students: "150+ students",
      level: "All Levels"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-gold">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-santaran-charcoal mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Art <span className="text-santaran-teal">Education</span>
          </h1>
          <p className={`text-xl text-santaran-charcoal/80 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Nurturing creative minds through comprehensive art education programs that inspire lifelong learning and artistic expression.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Educational Programs
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our educational initiatives provide structured learning experiences for artists at every stage of their journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-santaran-charcoal">{program.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4">{program.description}</p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-santaran-charcoal/60">Duration:</span>
                      <span className="text-santaran-teal font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-santaran-charcoal/60">Students:</span>
                      <span className="text-santaran-teal font-medium">{program.students}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-santaran-charcoal/60">Level:</span>
                      <span className="text-santaran-teal font-medium">{program.level}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-santaran-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-santaran-teal" />
              </div>
              <h3 className="font-bold text-santaran-charcoal mb-2">Expert Faculty</h3>
              <p className="text-santaran-charcoal/70 text-sm">Learn from renowned artists and educators</p>
            </div>
            <div className="text-center">
              <div className="bg-santaran-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-santaran-terracotta" />
              </div>
              <h3 className="font-bold text-santaran-charcoal mb-2">Comprehensive Curriculum</h3>
              <p className="text-santaran-charcoal/70 text-sm">Structured learning paths for all skill levels</p>
            </div>
            <div className="text-center">
              <div className="bg-santaran-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-santaran-charcoal" />
              </div>
              <h3 className="font-bold text-santaran-charcoal mb-2">Community Learning</h3>
              <p className="text-santaran-charcoal/70 text-sm">Collaborative environment with fellow artists</p>
            </div>
            <div className="text-center">
              <div className="bg-santaran-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-santaran-teal" />
              </div>
              <h3 className="font-bold text-santaran-charcoal mb-2">Quality Assurance</h3>
              <p className="text-santaran-charcoal/70 text-sm">Certified programs with recognized credentials</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ArtEducation;
