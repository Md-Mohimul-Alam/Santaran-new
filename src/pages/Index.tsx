
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import LatestExhibition from "@/components/LatestExhibition";
import ArtStats from "@/components/ArtStats";
import Testimonials from "@/components/Testimonials";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  useEffect(() => {
    // Add a class to handle animations and section transitions
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    });

    document.querySelectorAll(".section-transition").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <div className="section-transition">
        <FeaturedCategories />
      </div>
      
      <div className="section-transition">
        <LatestExhibition />
      </div>
      
      <div className="section-transition">
        <ArtStats />
      </div>
      
      <div className="section-transition">
        <Testimonials />
      </div>
      
      <div className="section-transition">
        <UpcomingEvents />
      </div>
      
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
