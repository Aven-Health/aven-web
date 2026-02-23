import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // services dropdown
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/our-app", label: "Our App" },
    { to: "/features", label: "Features" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/contact-us", label: "Contact" },
    { to: "/faq", label: "FAQ" },
    { to: "/meet-the-team", label: "Meet the Team" },
  ];

  const servicesLinks = [
    { to: "/doctors", label: "Doctor Directory" },
    { to: "/doctors/1", label: "Doctor Profile" }, // example id=1
    { to: "/appointment-booking", label: "Appointment Booking" },
    { to: "/pharmacies", label: "Pharmacy Directory" },
    { to: "/community-feed", label: "Community Feed" },
    { to: "/search", label: "Central Search" },
  ];

  const authLinks = [
    { to: "/sign-in", label: "Sign In" },
    { to: "/sign-up", label: "Sign Up" },
  ];

  return (
    <nav className="bg-primary text-white fixed w-full z-30 top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-accent font-bold text-2xl">
          Aven Health
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Main links */}
          {mainLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:text-accent ${
                  isActive ? "text-accent font-semibold" : "text-white"
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setDropdownOpen(false);
              }}
            >
              {label}
            </NavLink>
          ))}

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-accent focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <span className={dropdownOpen ? "text-accent font-semibold" : "text-white"}>
                Services
              </span>
              <svg
                className={`w-4 h-4 text-accent transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-cardDark rounded-md shadow-lg py-2 z-40">
                {servicesLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-white hover:bg-accent hover:text-primary ${
                        isActive ? "bg-accent text-primary font-semibold" : ""
                      }`
                    }
                    onClick={() => {
                      setDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Auth Links */}
          {authLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:text-accent ${
                  isActive ? "text-accent font-semibold" : "text-white"
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setDropdownOpen(false);
              }}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary px-6 pt-2 pb-6 space-y-2 shadow-inner">
          {/* Main Links */}
          {mainLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block py-2 text-lg hover:text-accent ${
                  isActive ? "text-accent font-semibold" : "text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          {/* Services dropdown as collapsible */}
          <div className="pt-2">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center justify-between w-full text-white text-lg font-semibold hover:text-accent focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Services
              <svg
                className={`w-5 h-5 text-accent transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="mt-1 pl-4 space-y-1">
                {servicesLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `block py-2 hover:text-accent ${
                        isActive ? "text-accent font-semibold" : "text-white"
                      }`
                    }
                    onClick={() => {
                      setIsOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Auth Links */}
          {authLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block py-2 text-lg hover:text-accent ${
                  isActive ? "text-accent font-semibold" : "text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
