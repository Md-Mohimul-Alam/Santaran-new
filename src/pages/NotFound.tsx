
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-santaran-cream">
        <div className="text-center px-6 py-20">
          <div className="relative inline-block">
            <span className="text-9xl font-bold text-santaran-teal opacity-20">404</span>
            <h1 className="text-4xl md:text-5xl font-bold text-santaran-charcoal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              Page Not Found
            </h1>
          </div>
          
          <p className="text-xl text-santaran-charcoal/70 my-6 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <Button 
            asChild
            className="bg-santaran-teal hover:bg-santaran-teal/90 text-white px-6 py-6 rounded-md font-medium"
          >
            <a href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
