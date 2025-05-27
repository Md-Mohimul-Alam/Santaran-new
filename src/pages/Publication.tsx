
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Calendar, Eye } from "lucide-react";

const Publication = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const publications = [
    {
      title: "Contemporary Art in Bangladesh: A Decade Review",
      description: "Comprehensive analysis of contemporary art movements in Bangladesh from 2014-2024",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      type: "Annual Report",
      year: "2024",
      pages: "156 pages",
      downloads: "2.5K",
      featured: true
    },
    {
      title: "Folk Art Documentation Project",
      description: "Visual documentation of traditional folk art forms across rural Bangladesh",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      type: "Research Publication",
      year: "2024",
      pages: "240 pages",
      downloads: "1.8K",
      featured: true
    },
    {
      title: "Environmental Art Practices",
      description: "Sustainable art practices and environmental consciousness in contemporary works",
      image: "https://images.pexels.com/photos/1422290/pexels-photo-1422290.jpeg",
      type: "Academic Journal",
      year: "2023",
      pages: "98 pages",
      downloads: "3.2K",
      featured: false
    },
    {
      title: "Young Artists Anthology",
      description: "Collection of works and essays from emerging artists under 25",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      type: "Anthology",
      year: "2023",
      pages: "180 pages",
      downloads: "1.5K",
      featured: false
    },
    {
      title: "Art Education Methodologies",
      description: "Innovative approaches to art education in the digital age",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      type: "Educational Guide",
      year: "2022",
      pages: "120 pages",
      downloads: "2.1K",
      featured: false
    },
    {
      title: "Community Art Impact Study",
      description: "Sociological study on the impact of community art projects",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      type: "Research Study",
      year: "2022",
      pages: "200 pages",
      downloads: "1.9K",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-gold">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-santaran-charcoal mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-santaran-teal">Publications</span>
          </h1>
          <p className={`text-xl text-santaran-charcoal/80 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Discover our comprehensive collection of research, documentation, and academic publications on art and culture.
          </p>
        </div>
      </div>

      {/* Featured Publications */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Featured Publications
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Our latest and most impactful publications documenting the evolving landscape of art in Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {publications.filter(pub => pub.featured).map((publication, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={publication.image} 
                    alt={publication.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-santaran-teal/10 text-santaran-teal rounded-full text-sm font-medium">
                      {publication.type}
                    </span>
                    <span className="text-santaran-charcoal/60 text-sm">{publication.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-santaran-charcoal">{publication.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-6">{publication.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-santaran-teal">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {publication.pages}
                    </div>
                    <div className="flex items-center text-santaran-teal">
                      <Download className="h-4 w-4 mr-2" />
                      {publication.downloads} downloads
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="border-santaran-teal text-santaran-teal hover:bg-santaran-teal/10">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Publications */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              All Publications
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Browse our complete archive of publications spanning research, documentation, and educational materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div key={index} className="bg-santaran-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={publication.image} 
                    alt={publication.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-santaran-teal/10 text-santaran-teal rounded text-xs font-medium">
                      {publication.type}
                    </span>
                    <span className="text-santaran-charcoal/60 text-xs">{publication.year}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-santaran-charcoal line-clamp-2">{publication.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4 text-sm line-clamp-2">{publication.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-xs text-santaran-charcoal/60">
                    <span>{publication.pages}</span>
                    <span>{publication.downloads} downloads</span>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="border-santaran-teal text-santaran-teal hover:bg-santaran-teal/10">
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-santaran-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-santaran-gold" />
          <h3 className="text-3xl font-bold mb-6">Stay Updated</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Subscribe to receive notifications about new publications and research releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-md text-santaran-charcoal"
            />
            <Button className="bg-santaran-gold hover:bg-santaran-gold/90 text-santaran-charcoal">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Publication;
