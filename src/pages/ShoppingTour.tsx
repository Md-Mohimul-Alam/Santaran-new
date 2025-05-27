
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MapPin, Camera, Star } from "lucide-react";

const ShoppingTour = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const shopItems = [
    {
      title: "Traditional Pottery Collection",
      description: "Handcrafted pottery from local artisans",
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
      price: "৳500 - ৳2,500",
      category: "Ceramics",
      rating: 4.8
    },
    {
      title: "Contemporary Art Prints",
      description: "Limited edition prints from featured artists",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      price: "৳800 - ৳3,000",
      category: "Prints",
      rating: 4.9
    },
    {
      title: "Folk Art Textiles",
      description: "Traditional woven fabrics and embroidered pieces",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      price: "৳1,200 - ৳5,000",
      category: "Textiles",
      rating: 4.7
    },
    {
      title: "Handmade Jewelry",
      description: "Artisan jewelry inspired by traditional designs",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      price: "৳600 - ৳4,000",
      category: "Jewelry",
      rating: 4.8
    },
    {
      title: "Wooden Sculptures",
      description: "Carved wooden art pieces and decorative items",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      price: "৳1,500 - ৳8,000",
      category: "Sculpture",
      rating: 4.9
    },
    {
      title: "Art Books & Catalogues",
      description: "Publications on Bangladesh art and culture",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg",
      price: "৳300 - ৳1,200",
      category: "Books",
      rating: 4.6
    }
  ];

  const tourPackages = [
    {
      title: "Dharitri Eco-Tourism Experience",
      description: "3-day immersive eco-tourism experience with art workshops",
      image: "https://images.pexels.com/photos/1422290/pexels-photo-1422290.jpeg",
      duration: "3 Days / 2 Nights",
      price: "৳8,500 per person",
      includes: ["Accommodation", "Meals", "Art Workshops", "Nature Walks"]
    },
    {
      title: "Cultural Heritage Tour",
      description: "Explore traditional art centers and meet local artisans",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      duration: "5 Days / 4 Nights",
      price: "৳12,000 per person",
      includes: ["Transport", "Guide", "Workshop Access", "Cultural Shows"]
    },
    {
      title: "Artist Studio Tour",
      description: "Behind-the-scenes visit to contemporary artist studios",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      duration: "1 Day",
      price: "৳2,500 per person",
      includes: ["Studio Visits", "Artist Meetings", "Lunch", "Art Materials"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-gold to-santaran-terracotta">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Shopping & <span className="text-santaran-charcoal">Tours</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Discover authentic artisan crafts and experience immersive cultural tours that connect you with Bangladesh's rich artistic heritage.
          </p>
        </div>
      </div>

      {/* Kandrabindu Shop Section */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Kandrabindu <span className="text-santaran-teal">Shop</span>
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Support local artisans by purchasing authentic handcrafted items that tell the story of Bangladesh's cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-santaran-teal/10 text-santaran-teal rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-santaran-gold fill-current mr-1" />
                      <span className="text-sm text-santaran-charcoal/70">{item.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-santaran-charcoal">{item.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-santaran-teal font-bold">{item.price}</span>
                    <Button size="sm" className="bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Packages Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Cultural <span className="text-santaran-terracotta">Tours</span>
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Embark on curated journeys that immerse you in the artistic traditions and natural beauty of Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour, index) => (
              <div key={index} className="bg-santaran-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-santaran-charcoal">{tour.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4">{tour.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="text-santaran-teal font-medium">{tour.duration}</span>
                    <span className="text-santaran-terracotta font-bold">{tour.price}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-santaran-charcoal mb-2">Includes:</h4>
                    <ul className="text-sm text-santaran-charcoal/70 space-y-1">
                      {tour.includes.map((include, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-santaran-teal rounded-full mr-2"></div>
                          {include}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white">
                    <Camera className="h-4 w-4 mr-2" />
                    Book Tour
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-santaran-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 text-santaran-gold" />
          <h3 className="text-3xl font-bold mb-6">Visit Our Physical Location</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience our shop and tour packages in person. Located in the heart of Dhaka's cultural district.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-santaran-gold hover:bg-santaran-gold/90 text-santaran-charcoal">
              Get Directions
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ShoppingTour;
