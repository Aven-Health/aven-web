import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim()) {
      signIn(username.trim());
      navigate("/"); // Redirect after sign-in
    }
  }

  return (
    <section className="max-w-md mx-auto p-6 bg-cardDark rounded-xl text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded bg-cardLight text-white placeholder-gray-400 focus:outline-accent"
          required
        />
        <button
          type="submit"
          className="w-full bg-accent py-3 rounded font-semibold hover:bg-yellow-500 transition"
        >
          Sign In
        </button>
      </form>
    </section>
  );
}
