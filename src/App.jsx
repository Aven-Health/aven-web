import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import OurApp from "./pages/OurApp.jsx";
import Features from "./pages/Features.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import FAQ from "./pages/FAQ.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import MeetTheTeam from "./pages/MeetTheTeam.jsx";

// Services related pages (add these pages/components accordingly)
import DoctorDirectory from "./pages/DoctorDirectory.jsx";
import DoctorProfile from "./pages/DoctorProfile.jsx";
import AppointmentBooking from "./pages/AppointmentBooking.jsx";
import PharmacyDirectory from "./pages/PharmacyDirectory.jsx";
import CommunityFeed from "./pages/CommunityFeed.jsx";
import CentralSearch from "./pages/CentralSearch.jsx";
import CommunityDetail from "./pages/CommunityDetail";



// Auth pages
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-app" element={<OurApp />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />

          {/* Services pages */}
          <Route path="/doctors" element={<DoctorDirectory />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/appointment-booking" element={<AppointmentBooking />} />
          <Route path="/pharmacies" element={<PharmacyDirectory />} />
          <Route path="/community-feed" element={<CommunityFeed />} />
          <Route path="/search" element={<CentralSearch />} />
          <Route path="/community/:slug" element={<CommunityDetail />} />

          {/* Authentication */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
