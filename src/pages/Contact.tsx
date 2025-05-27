
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-santaran-teal">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg')" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Contact <span className="text-santaran-gold">Us</span>
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get in touch with us for collaborations, inquiries, or to learn more about our programs and initiatives.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 bg-santaran-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-santaran-charcoal">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-santaran-charcoal mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-santaran-charcoal mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-santaran-charcoal mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-santaran-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-santaran-teal focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <Button type="submit" className="w-full bg-santaran-teal hover:bg-santaran-teal/90 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-santaran-charcoal">Get in Touch</h2>
                <p className="text-lg text-santaran-charcoal/80 mb-8">
                  We'd love to hear from you. Whether you're an artist, educator, or art enthusiast, 
                  we welcome opportunities to collaborate and connect.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-santaran-teal/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-santaran-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-santaran-charcoal mb-2">Visit Our Gallery</h3>
                    <p className="text-santaran-charcoal/70">
                      123 Art Avenue, Cultural District<br />
                      Dhanmondi, Dhaka 1205<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-santaran-terracotta/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-santaran-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-santaran-charcoal mb-2">Call Us</h3>
                    <p className="text-santaran-charcoal/70">
                      +88 02 9611677<br />
                      +88 01711 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-santaran-gold/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-santaran-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-santaran-charcoal mb-2">Email Us</h3>
                    <p className="text-santaran-charcoal/70">
                      info@santaranart.org<br />
                      programs@santaranart.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-santaran-teal/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-santaran-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-santaran-charcoal mb-2">Gallery Hours</h3>
                    <p className="text-santaran-charcoal/70">
                      Tuesday - Sunday: 10:00 AM - 6:00 PM<br />
                      Monday: Closed<br />
                      Special events: Extended hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-santaran-charcoal/5 rounded-lg p-8 text-center">
                <MapPin className="h-12 w-12 text-santaran-teal mx-auto mb-4" />
                <h3 className="font-semibold text-santaran-charcoal mb-2">Interactive Map</h3>
                <p className="text-santaran-charcoal/70 mb-4">
                  Find us easily with our detailed location map
                </p>
                <Button variant="outline" className="border-santaran-teal text-santaran-teal hover:bg-santaran-teal/10">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-santaran-charcoal">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-santaran-charcoal/80 max-w-3xl mx-auto">
              Quick answers to common questions about our programs and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How can I exhibit my artwork?",
                answer: "Submit your portfolio through our online application system. We review submissions quarterly for upcoming exhibitions."
              },
              {
                question: "Do you offer art classes for beginners?",
                answer: "Yes! Our Kalpapuri program offers classes for all skill levels, from complete beginners to advanced artists."
              },
              {
                question: "Can I volunteer with your organization?",
                answer: "We welcome volunteers! Contact us to learn about current opportunities in events, education, and community outreach."
              },
              {
                question: "How do I purchase artworks?",
                answer: "Visit our Kandrabindu shop or contact us directly. We also have an online catalog of available pieces."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-santaran-cream rounded-lg p-6">
                <h3 className="font-bold text-santaran-charcoal mb-3">{faq.question}</h3>
                <p className="text-santaran-charcoal/70">{faq.answer}</p>
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

export default Contact;
