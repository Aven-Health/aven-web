import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/our-app", label: "Our App" },
    { to: "/features", label: "Features" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/contact-us", label: "Contact" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary border-b border-accent/30">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-accent"
        >
          AVEN
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-accent font-semibold"
                    : "text-white hover:text-accent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-accent/30 px-6 py-4 space-y-3">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive
                    ? "text-accent font-semibold"
                    : "text-white hover:text-accent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
