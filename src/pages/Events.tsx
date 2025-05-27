
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Ticket } from "lucide-react";

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const upcomingEvents = [
    {
      title: "Young Artists Showcase 2025",
      description: "Annual exhibition featuring emerging artists under 25",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
      date: "March 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Main Gallery",
      attendees: "200+ Expected",
      category: "Exhibition",
      featured: true
    },
    {
      title: "Environmental Art Workshop",
      description: "Hands-on workshop on sustainable art practices",
      image: "https://images.pexels.com/photos/1422290/pexels-photo-1422290.jpeg",
      date: "March 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Workshop Studio",
      attendees: "25 Participants",
      category: "Workshop",
      featured: false
    },
    {
      title: "Folk Art Festival Opening",
      description: "Grand opening of Karnaphuli Folk Triennial",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      date: "April 5, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Cultural Center",
      attendees: "500+ Expected",
      category: "Festival",
      featured: true
    },
    {
      title: "Artist Talk: Contemporary Perspectives",
      description: "Panel discussion with renowned contemporary artists",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      date: "April 12, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Auditorium",
      attendees: "150 Seats",
      category: "Talk",
      featured: false
    },
    {
      title: "Community Art Project Launch",
      description: "Launch of new mural project in Dhanmondi",
      image: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
      date: "April 20, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Dhanmondi Park",
      attendees: "Community Open",
      category: "Community",
      featured: false
    },
    {
      title: "Art Education Symposium",
      description: "Annual conference on innovative art education methods",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      date: "May 8, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Hall",
      attendees: "300+ Educators",
      category: "Conference",
      featured: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Exhibition': 'bg-santaran-teal text-white',
      'Workshop': 'bg-santaran-terracotta text-white',
      'Festival': 'bg-santaran-gold text-santaran-charcoal',
      'Talk': 'bg-santaran-cream text-santaran-charcoal',
      'Community': 'bg-green-100 text-green-800',
      'Conference': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-santaran-terracotta to-santaran-gold">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Upcoming <span className="text-santaran-charcoal">Events</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Join us for inspiring exhibitions, workshops, and cultural events that celebrate the arts and bring communities together.
          </p>
        </div>
      </div>

      {/* Featured Events */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Featured Events
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Don't miss these special events that showcase the best of our artistic community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-santaran-gold text-santaran-charcoal px-2 py-1 rounded text-sm font-bold">
                    FEATURED
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-santaran-charcoal">{event.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center text-santaran-teal">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-santaran-teal">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-santaran-teal">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-santaran-teal">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees}
                    </div>
                  </div>

                  <Button className="w-full bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                    <Ticket className="h-4 w-4 mr-2" />
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Events */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              All Upcoming Events
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Explore our complete calendar of exhibitions, workshops, talks, and community events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-santaran-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-santaran-charcoal">{event.title}</h3>
                  <p className="text-santaran-charcoal/70 mb-4 text-sm">{event.description}</p>
                  
                  <div className="space-y-1 mb-4 text-xs">
                    <div className="flex items-center text-santaran-teal">
                      <Calendar className="h-3 w-3 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-santaran-teal">
                      <Clock className="h-3 w-3 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-santaran-teal">
                      <MapPin className="h-3 w-3 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-santaran-teal text-santaran-teal hover:bg-santaran-teal/10">
                      Details
                    </Button>
                    <Button size="sm" className="flex-1 bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 bg-santaran-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Stay Updated on Events</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive early notifications about upcoming events, exhibitions, and special programs.
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

export default Events;
