import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo2.jpeg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-accent" : "text-white hover:text-accent"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="AVEN Health Logo" className="h-8 w-auto" />
        </Link>

        {/* CENTER — MAIN NAV */}
        <div
          className="hidden md:flex items-center gap-4"
          ref={dropdownRef}
        >
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/community-feed" className={navLinkClass}>Communities</NavLink>
          <NavLink to="/doctors" className={navLinkClass}>Book Appointments</NavLink>
          <NavLink to="/pharmacies" className={navLinkClass}>Pharmacies</NavLink>

          {/* HOW IT WORKS */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "how" ? null : "how")
              }
              className="text-sm font-medium text-white hover:text-accent flex items-center gap-1"
            >
              How It Works <span className="text-xs">▾</span>
            </button>

            {openDropdown === "how" && (
              <div className="absolute top-full mt-2 w-48 bg-cardDark rounded-lg shadow-lg overflow-hidden">
                <NavLink
                  to="/how-it-works"
                  className="block px-4 py-3 text-sm hover:bg-accent hover:text-primary"
                >
                  How It Works
                </NavLink>
                <NavLink
                  to="/faq"
                  className="block px-4 py-3 text-sm hover:bg-accent hover:text-primary"
                >
                  FAQs
                </NavLink>
              </div>
            )}
          </div>

          {/* ABOUT US */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "about" ? null : "about")
              }
              className="text-sm font-medium text-white hover:text-accent flex items-center gap-1"
            >
              About Us <span className="text-xs">▾</span>
            </button>

            {openDropdown === "about" && (
              <div className="absolute top-full mt-2 w-48 bg-cardDark rounded-lg shadow-lg overflow-hidden">
                <NavLink
                  to="/about-us"
                  className="block px-4 py-3 text-sm hover:bg-accent hover:text-primary"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/meet-the-team"
                  className="block px-4 py-3 text-sm hover:bg-accent hover:text-primary"
                >
                  Team
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact-us" className={navLinkClass}>Contact Us</NavLink>
        </div>

        {/* RIGHT — AUTH + SEARCH */}
        <div className="hidden md:flex items-center gap-3">

          <NavLink
            to="/sign-up"
            className="px-4 py-2 text-sm font-semibold bg-accent text-primary rounded-lg hover:opacity-90"
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/sign-in"
            className="text-sm font-medium text-white hover:text-accent"
          >
            Sign In
          </NavLink>

          {/* COMPACT SEARCH */}
          <input
            type="text"
            placeholder="Search..."
            className="
              w-40
              bg-cardDark
              border border-white/15
              rounded-full
              px-4 py-1.5
              text-sm
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-accent
            "
          />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-accent text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
