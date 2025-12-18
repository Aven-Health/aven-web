import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-white">
      <Navbar /> {/* Navbar must be here */}
      <main className="flex-1 pt-20 px-6 max-w-7xl mx-auto w-full">{children}</main>
      <footer className="border-t border-accent/30 py-6 mt-16 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} AVEN Health. All rights reserved.
      </footer>
    </div>
  );
}
