import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/our-app", label: "Our App" },
    { to: "/features", label: "Features" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/faq", label: "FAQ" },
    { to: "/meet-the-team", label: "Meet the Team" },
    { to: "/doctors", label: "Doctors" },
    { to: "/pharmacies", label: "Pharmacies" },
    { to: "/community-feed", label: "Community" },
    { to: "/search", label: "Search" },
  ];

  return (
    <nav className="bg-primary text-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-accent font-bold text-2xl">
          AVEN
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:text-accent ${
                  isActive ? "text-accent font-semibold" : "text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          {user ? (
            <>
              <span className="ml-4 text-sm font-semibold">Hello, {user.name}</span>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="ml-4 bg-accent text-primary px-3 py-1 rounded font-semibold hover:bg-yellow-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/sign-in"
                className="ml-4 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/sign-up"
                className="ml-4 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </>
          )}
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
            xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary px-6 pt-2 pb-6 space-y-2 shadow-inner">
          {links.map(({ to, label }) => (
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

          {user ? (
            <>
              <span className="block mt-2 text-sm font-semibold">Hello, {user.name}</span>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="mt-2 w-full bg-accent text-primary py-2 rounded font-semibold hover:bg-yellow-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/sign-in"
                className="block mt-2 py-2 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/sign-up"
                className="block py-2 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
