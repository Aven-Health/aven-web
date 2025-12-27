import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-white">
      <Navbar /> {/* Navbar stays at the top */}
      
      <main className="flex-1 pt-20 px-6 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <Footer /> {/* Replaces the old footer, stays outside main */}
    </div>
  );
}
