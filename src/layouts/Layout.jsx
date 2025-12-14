import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      <Navbar isLoggedIn={!!user} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
