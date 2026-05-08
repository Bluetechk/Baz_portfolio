import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage"
import Biography from "./pages/Biography";
import Gallery from "./pages/Gallery";
import PressRoom from "./pages/PressRoom";
import MediaKite from "./pages/MediaKite"
import Blog from "./pages/Blog";
import Videos from "./pages/Videos";
import Shop from "./pages/Shop";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import BookKeynot from "./pages/BookKeynot"
import Speaker from "./pages/Speaker";
import NotFound from "./pages/NotFound";
import Blogg from "./pages/Blogg";
import Quotes from "./pages/Quotes";
import PublicVoice from "./pages/PublicVoice";
import SpeakerTeacher from "./pages/SpeakerTeacher";
import ThinkerWriter from "./pages/ThinkerWriter";
import EntrepreneurBuilder from "./pages/EntrepreneurBuilder";
import LeaderServant from "./pages/LeaderServant";
import Creative from "./pages/Creative";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsConditions from "./pages/TermsConditions";
import ReturnRefundPolicy from "./pages/ReturnRefundPolicy";
import MediaReleasePolicy from "./pages/MediaReleasePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/press" element={<PressRoom />} />
          <Route path="/media-kit" element={<MediaKite />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-keynote" element={<BookKeynot />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/Blogg" element={<Blogg />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/roles/public-voice" element={<PublicVoice />} />
          <Route path="/roles/speaker-teacher" element={<SpeakerTeacher />} />
          <Route path="/roles/thinker-writer" element={<ThinkerWriter />} />
          <Route path="/roles/entrepreneur-builder" element={<EntrepreneurBuilder />} />
          <Route path="/roles/leader-servant" element={<LeaderServant />} />
          <Route path="/roles/creative" element={<Creative />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
          <Route path="/media-release-policy" element={<MediaReleasePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
