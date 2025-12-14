import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-cardDark text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0 text-sm">
          &copy; {new Date().getFullYear()} AVEN Health Platform. All rights reserved.
        </p>
        <div className="space-x-4 text-sm">
          <Link to="/privacy-policy" className="hover:text-accent">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="hover:text-accent">
            Terms & Conditions
          </Link>
          <Link to="/contact-us" className="hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
