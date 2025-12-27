import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-cardDark p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Sign In
        </h1>

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-primary py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-accent hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
