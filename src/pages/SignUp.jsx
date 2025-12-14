import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const { signUp, error, loading } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!name || !email || !password || !confirmPassword) {
      setFormError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    try {
      await signUp({ name, email, password });
      navigate("/");
    } catch (err) {
      setFormError(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4">
      <div className="bg-cardDark p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">Sign Up</h2>
        {formError && <p className="text-accent mb-4 text-center font-semibold">{formError}</p>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="text-white font-semibold">Full Name</span>
            <input
              type="text"
              className="mt-2 block w-full p-3 rounded-md border border-accent bg-cardLight text-white placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </label>
          <label className="block">
            <span className="text-white font-semibold">Email</span>
            <input
              type="email"
              className="mt-2 block w-full p-3 rounded-md border border-accent bg-cardLight text-white placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="username"
            />
          </label>
          <label className="block">
            <span className="text-white font-semibold">Password</span>
            <input
              type="password"
              className="mt-2 block w-full p-3 rounded-md border border-accent bg-cardLight text-white placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
          </label>
          <label className="block">
            <span className="text-white font-semibold">Confirm Password</span>
            <input
              type="password"
              className="mt-2 block w-full p-3 rounded-md border border-accent bg-cardLight text-white placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-accent text-primary font-semibold rounded-md hover:bg-yellow-500 disabled:opacity-50 transition"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-6 text-center text-white">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-accent underline hover:text-yellow-400">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
