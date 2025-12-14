import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { AuthProvider } from "./context/AuthContext";

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

import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Example of a protected page (you can protect any page similarly)
import AppointmentBooking from "./pages/AppointmentBooking.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public routes */}
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

            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Protected routes */}
            <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <AppointmentBooking />
                </ProtectedRoute>
              }
            />
            {/* Add other protected routes as needed */}
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
