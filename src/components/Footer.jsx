import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-cardDark border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid gap-12 md:grid-cols-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-accent">AVEN</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Access. Vitality. Empowerment. Network.
          </p>
          <p className="text-gray-400 text-sm">
            Re-inventing social Health Care.
          </p>
          <p className="text-gray-400 text-sm">
            Community-first, human-centered digital health.
          </p>
        </div>

        <div>
          <h4 className="text-accent font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                to="/about-us"
                className="hover:text-accent transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-accent transition-colors"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-accent transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/community-feed"
                className="hover:text-accent transition-colors"
              >
                Communities
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-accent font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                to="/doctors"
                className="hover:text-accent transition-colors"
              >
                Book Appointments
              </Link>
            </li>
            <li>
              <Link
                to="/pharmacies"
                className="hover:text-accent transition-colors"
              >
                Health Stores
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="hover:text-accent transition-colors"
              >
                Search
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 grid gap-12 md:grid-cols-3 text-sm text-gray-300">
          <div className="md:pr-6 md:border- md:border-white/10">
            <button
              onClick={() => toggle("users")}
              className="w-full text-left text-accent font-semibold mb-3 md:cursor-default"
            >
              Users
            </button>

            <ul
              className={`${openSection === "users" ? "block" : "hidden"} md:block space-y-`}
            >
              <li>
                <Link
                  to="/privacy-policy-users"
                  className="hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/user-agreement"
                  className="hover:text-accent transition-colors"
                >
                  User Agreement
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:px-0  md:border-white/10">
            <button
              onClick={() => toggle("pharmacies")}
              className="w-full text-left text-accent font-semibold mb-3 md:cursor-default"
            >
              Health Stores
            </button>

            <ul
              className={`${openSection === "pharmacies" ? "block" : "hidden"} md:block space-y-2`}
            >
              <li>
                <Link
                  to="/privacy-policy-pharmacy"
                  className="hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/pharmacy-agreement"
                  className="hover:text-accent transition-colors whitespace-nowrap"
                >
                  Pharmacy Agreement
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:pl-0">
            <button
              onClick={() => toggle("medical")}
              className="w-full text-left text-accent font-semibold mb-3 md:cursor-default"
            >
              Medical Professionals
            </button>

            <ul
              className={`${openSection === "medical" ? "block" : "hidden"} md:block space-y-2`}
            >
              <li>
                <Link
                  to="/privacy-policy-medical"
                  className="hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/medical-professional-agreement"
                  className="hover:text-accent transition-colors whitespace-nowrap"
                >
                  Professional Agreement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="space-y-1 text-center md:text-left">
            <div>Email: avenhealthke@gmail.com</div>
            <div>Phone: +254 740 501 452</div>
          </div>

          <div className="mt-4 md:mt-0">
            © {new Date().getFullYear()} AVEN Health. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
