import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-cardDark border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-accent">AVEN</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Access. Vitality. Empowerment. Network.
          </p>
          <p className="text-gray-400 text-sm">
            Community-first, human-centered digital health.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/about-us" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-accent">How It Works</Link></li>
            <li><Link to="/faq" className="hover:text-accent">FAQs</Link></li>
            <li><Link to="/community-feed" className="hover:text-accent">Communities</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/doctors" className="hover:text-accent">Book Appointments</Link></li>
            <li><Link to="/pharmacies" className="hover:text-accent">Pharmacies</Link></li>
            <li><Link to="/search" className="hover:text-accent">Search</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@aven.health</li>
            <li>Phone: +254 XXX XXX XXX</li>
          </ul>

          <div className="flex gap-4 mt-4 text-accent">
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AVEN Health. All rights reserved ·{" "}
        <Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>{" "}
        ·{" "}
        <Link to="/terms-conditions" className="hover:text-accent">Terms & Conditions</Link>
      </div>
    </footer>
  );
}
