import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-white">


      <header className="w-full">
        <Navbar />
      </header>


      <main className="flex-1 pt-24 px-6 max-w mx-auto w-full text-left">

        <div className=" mx-auto px-2 pt-0 text-left pl-6">
          {children}
        </div>
      </main>


      <footer className="w-full mt-6">
        <Footer />
      </footer>

    </div>
  );
}