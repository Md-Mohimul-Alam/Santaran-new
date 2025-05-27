
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Target } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Rashida Rahman",
      position: "Founder & Director",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      bio: "Renowned artist and cultural advocate with 25 years of experience"
    },
    {
      name: "Kamal Ahmed",
      position: "Artistic Director",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
      bio: "Contemporary artist specializing in environmental installations"
    },
    {
      name: "Fatima Begum",
      position: "Community Outreach Manager",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
      bio: "Expert in folk art preservation and community engagement"
    },
    {
      name: "Nasir Uddin",
      position: "Education Coordinator",
      image: "https://images.pexels.com/photos/1181425/pexels-photo-1181425.jpeg",
      bio: "Passionate educator with focus on art pedagogy and youth development"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Cultural Preservation",
      description: "Safeguarding Bangladesh's rich artistic heritage for future generations"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building bridges between artists and communities through collaborative projects"
    },
    {
      icon: Award,
      title: "Artistic Excellence",
      description: "Promoting the highest standards in contemporary and traditional art forms"
    },
    {
      icon: Target,
      title: "Social Impact",
      description: "Using art as a catalyst for positive social and environmental change"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-charcoal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="text-santaran-gold">Santaran Art</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Founded in 2010, Santaran Art Organization has been at the forefront of promoting artistic excellence and cultural exchange in Bangladesh.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
                Our <span className="text-santaran-teal">Mission</span>
              </h2>
              <p className="text-lg text-santaran-charcoal/80 mb-6">
                Santaran Art Organization is dedicated to fostering artistic innovation, preserving cultural heritage, 
                and building sustainable communities through the transformative power of art. We believe that art has 
                the unique ability to bridge differences, inspire change, and create lasting impact.
              </p>
              <p className="text-lg text-santaran-charcoal/80 mb-8">
                Since our establishment, we have organized over 250 exhibitions, supported more than 5,000 artists, 
                and reached communities across Bangladesh and internationally through our diverse programs.
              </p>
              <Button className="bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                View Our Timeline
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
                alt="Santaran Art Mission"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-santaran-gold/20 w-32 h-32 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Our Core Values
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              These fundamental principles guide our work and shape our approach to supporting the arts community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-santaran-cream w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-santaran-teal transition-colors duration-300">
                  <value.icon className="h-10 w-10 text-santaran-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-santaran-charcoal mb-3">{value.title}</h3>
                <p className="text-santaran-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Meet Our <span className="text-santaran-terracotta">Team</span>
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our dedicated team brings together diverse expertise in arts, education, and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-santaran-charcoal mb-2">{member.name}</h3>
                  <p className="text-santaran-teal font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-santaran-charcoal/70">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Our Journey
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Fifteen years of dedication to the arts community in Bangladesh.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                { year: "2010", title: "Foundation", description: "Santaran Art Organization was established with a vision to promote artistic excellence in Bangladesh." },
                { year: "2013", title: "First International Exhibition", description: "Organized our first international contemporary art exhibition featuring 30 artists from 8 countries." },
                { year: "2016", title: "Community Programs Launch", description: "Launched folk art preservation and community engagement initiatives across rural Bangladesh." },
                { year: "2019", title: "Education Center Opening", description: "Opened Kalpapuri School of Arts & Crafts, providing structured art education to over 500 students annually." },
                { year: "2022", title: "Environmental Art Initiative", description: "Launched major environmental art programs including Harith and Dharitri eco-tourism project." },
                { year: "2025", title: "15th Anniversary", description: "Celebrating 15 years of artistic excellence with over 250 exhibitions and 5,000 artists supported." }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <span className="text-2xl font-bold text-santaran-teal">{milestone.year}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-santaran-charcoal mb-2">{milestone.title}</h3>
                    <p className="text-santaran-charcoal/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default About;
