import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-white">

      {/* Header Section */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main Content Wrapper */}
      <main className="flex-1 pt-24 px-6 max-w-7xl mx-auto w-full text-left">
        {/* Content Container — prevents centering bugs */}
        <div className="max-w-7xl mx-auto px-6 pt-20 text-left">
          {children}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full mt-12">
        <Footer />
      </footer>
      
    </div>
  );
}