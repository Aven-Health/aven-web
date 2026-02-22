// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import Layout from "./layouts/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import OurApp from "./pages/OurApp.jsx";
import Features from "./pages/Features.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import FAQ from "./pages/FAQ.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import MeetTheTeam from "./pages/MeetTheTeam.jsx";

import DoctorDirectory from "./pages/DoctorDirectory.jsx";
import DoctorProfile from "./pages/DoctorProfile.jsx";
import AppointmentBooking from "./pages/AppointmentBooking.jsx";
import PharmacyDirectory from "./pages/PharmacyDirectory.jsx";
import CommunityFeed from "./pages/CommunityFeed.jsx";
import CentralSearch from "./pages/CentralSearch.jsx";
import CommunityDetail from "./pages/CommunityDetail.jsx";

import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

import LegalLandingPage from "./pages/LegalLandingPage.jsx";

const UserPrivacyPolicy = lazy(() => import("./pages/legalDocs/UserPrivacyPolicy.jsx"));
const UserAgreement = lazy(() => import("./pages/legalDocs/UserAgreement.jsx"));
const MedicalPrivacyPolicy = lazy(() => import("./pages/legalDocs/MedicalPrivacyPolicy.jsx"));
const MedicalAgreement = lazy(() => import("./pages/legalDocs/MedicalAgreement.jsx"));
const PharmacyPrivacyPolicy = lazy(() => import("./pages/legalDocs/PharmacyPrivacyPolicy.jsx"));
const PharmacyAgreement = lazy(() => import("./pages/legalDocs/PharmacyAgreement.jsx"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-1 text-center text-red-500">
          Something went wrong loading this page.
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<div className="p-1 text-center">Loading...</div>}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-app" element={<OurApp />} />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
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

              {/* ================= LEGAL ================= */}
              <Route path="/legal" element={<LegalLandingPage />} />

              {/* Users */}
              <Route path="/privacy-policy-users" element={<UserPrivacyPolicy />} />
              <Route path="/user-agreement" element={<UserAgreement />} />

              {/* Medical */}
              <Route path="/privacy-policy-medical" element={<MedicalPrivacyPolicy />} />
              <Route path="/medical-professional-agreement" element={<MedicalAgreement />} />

              {/* Pharmacy */}
              <Route path="/privacy-policy-pharmacy" element={<PharmacyPrivacyPolicy />} />
              <Route path="/pharmacy-agreement" element={<PharmacyAgreement />} />

              {/* Authentication */}
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </Router>
  );
}

export default App;
