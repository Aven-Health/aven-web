import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-aven-cardDark p-4 flex flex-wrap items-center justify-between">
      <Link to="/" className="text-aven-accent font-bold text-xl">
        AVEN
      </Link>

      {/* Hamburger button - visible on small screens */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu links */}
      <div
        className={`w-full md:w-auto md:flex md:items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-aven-accent"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-aven-accent"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        {/* Add more links here */}
      </div>
    </nav>
  );
}
