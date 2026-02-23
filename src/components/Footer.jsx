import { Link } from "react-router-dom";

export default function Footer() {


  return (
    <footer className="bg-cardDark border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid gap-12 md:grid-cols-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-accent">Aven Health</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Access. Vitality. Empowerment. Network.
          </p>
          <p className="text-gray-400 text-sm">
          The Future of Integrated Health
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
          
          </ul>
        </div>

               <div className="md:col-span-3 grid gap-12 md:grid-cols-3 text-sm text-gray-300">
          <div className="md:pr-6">
            <h4 className="text-accent font-semibold mb-3">Users</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy-users" className="hover:text-accent transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/user-agreement" className="hover:text-accent transition-colors block">
                  User Agreement
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:px-0 md:border-white/10">
            <h4 className="text-accent font-semibold mb-3">Health Stores</h4>
            <ul className="space-y-2 ">
              <li>
                <Link to="/privacy-policy-pharmacy" className="hover:text-accent transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/pharmacy-agreement" className="hover:text-accent transition-colors block whitespace-nowrap">
                  Pharmacy Agreement
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:pl-0">
            <h4 className="text-accent font-semibold mb-3">Medical Professionals</h4>
            <ul className="space-y-2 ">
              <li>
                <Link to="/privacy-policy-medical" className="hover:text-accent transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/medical-professional-agreement" className="hover:text-accent transition-colors block whitespace-nowrap">
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
            © {new Date().getFullYear()} Aven Health. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
