
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContemporaryArt from "./pages/ContemporaryArt";
import EnvironmentalArt from "./pages/EnvironmentalArt";
import ArtEducation from "./pages/ArtEducation";
import FolkCommunityArt from "./pages/FolkCommunityArt";
import ArtForYoung from "./pages/ArtForYoung";
import OtherActivities from "./pages/OtherActivities";
import Publication from "./pages/Publication";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";

// Contemporary Art submenu pages
import YearlyOutcomeArtShow from "./pages/YearlyOutcomeArtShow";
import MultidisciplinaryArtShow from "./pages/MultidisciplinaryArtShow";

// Environmental Art submenu pages
import Harith from "./pages/Harith";
import EnvironmentalArtCamp from "./pages/EnvironmentalArtCamp";
import DharitriEcoTourism from "./pages/DharitriEcoTourism";

// Art Education submenu pages
import Kalpapuri from "./pages/Kalpapuri";
import KalpalokerCitra from "./pages/KalpalokerCitra";
import KalpapuriSchool from "./pages/KalpapuriSchool";

// Folk & Community Art submenu pages
import Shikar from "./pages/Shikar";
import KarnaphuliFolk from "./pages/KarnaphuliFolk";
import KandrabinduCommunity from "./pages/KandrabinduCommunity";

// Art for Young submenu pages
import ArtistResidency from "./pages/ArtistResidency";
import YoungArtExhibition from "./pages/YoungArtExhibition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main Category Pages */}
          <Route path="/contemporary-art" element={<ContemporaryArt />} />
          <Route path="/environmental-art" element={<EnvironmentalArt />} />
          <Route path="/art-education" element={<ArtEducation />} />
          <Route path="/folk-community-art" element={<FolkCommunityArt />} />
          <Route path="/art-for-young" element={<ArtForYoung />} />
          <Route path="/other-activities" element={<OtherActivities />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />

          {/* Contemporary Art Submenu Pages */}
          <Route path="/contemporary-art/yearly-outcome" element={<YearlyOutcomeArtShow />} />
          <Route path="/contemporary-art/multidisciplinary" element={<MultidisciplinaryArtShow />} />

          {/* Environmental Art Submenu Pages */}
          <Route path="/environmental-art/harith" element={<Harith />} />
          <Route path="/environmental-art/camp" element={<EnvironmentalArtCamp />} />
          <Route path="/environmental-art/dharitri" element={<DharitriEcoTourism />} />

          {/* Art Education Submenu Pages */}
          <Route path="/art-education/kalpapuri" element={<Kalpapuri />} />
          <Route path="/art-education/kalpaloker-citra" element={<KalpalokerCitra />} />
          <Route path="/art-education/school" element={<KalpapuriSchool />} />

          {/* Folk & Community Art Submenu Pages */}
          <Route path="/folk-community-art/shikar" element={<Shikar />} />
          <Route path="/folk-community-art/karnaphuli" element={<KarnaphuliFolk />} />
          <Route path="/folk-community-art/kandrabindu" element={<KandrabinduCommunity />} />

          {/* Art for Young Submenu Pages */}
          <Route path="/art-for-young/residency" element={<ArtistResidency />} />
          <Route path="/art-for-young/exhibition" element={<YoungArtExhibition />} />

          {/* Shopping & Tour */}
          <Route path="/shopping-tour" element={<DharitriEcoTourism />} />
          <Route path="/shopping-tour/kandrabindu" element={<Publication />} />
          <Route path="/shopping-tour/dharitri" element={<DharitriEcoTourism />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
