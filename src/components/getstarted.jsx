import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function GetStartedModal({ isOpen, onClose }) {

  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    entryType: "" 
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.includes("@")) return "Valid email required";
    if (!form.entryType) return "Please select how you want to join";
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xaqdlrkl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          type: "Early Access Signup",
          name: form.name,
          email: form.email,
          entryType: form.entryType, // ✅ sent to Formspree
        }),
      });

      if (!response.ok) throw new Error("Failed");

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", entryType: "" });
        onClose();
      }, 2000);

    } catch {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative bg-cardDark w-full max-w-lg rounded-2xl shadow-2xl p-8 border border-white/10"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">
              Be the First to Join Aven
            </h2>

            <p className="text-gray-300 mb-6">
              Get early access to Aven Health and help shape the future of connected healthcare.
            </p>

            {submitted ? (
              <div className="text-left space-y-4">
                <h3 className="text-xl font-semibold text-accent">
                  You're on the list 🎉
                </h3>
                <p className="text-gray-300">
                  We’ll notify you as soon as Aven launches.
                </p>
              </div>
            ) : (
              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <select
                  value={form.entryType}
                  onChange={(e) => setForm({ ...form, entryType: e.target.value })}
                  className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="" className="text-gray-400">
                    Select how you want to join
                  </option>
                  <option value="User">User</option>
                  <option value="Health Store Provider">Health Store Provider</option>
                  <option value="Investor">Investor</option>
                  <option value="Medical Professional">Medical Professional</option>
                </select>

                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                >
                  Join Aven Early
                </button>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}