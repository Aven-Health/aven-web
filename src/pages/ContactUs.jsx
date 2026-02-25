import { useState } from "react";
import { motion } from "framer-motion";
import Banner from "../components/banner"; 
import contactBg from "../assets/contact.jpg"; 

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});

  try {
    const response = await fetch("https://formspree.io/f/xaqdlrkl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,       
        message: form.message,

      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    setSubmitted(true);
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};


  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

    const slides = [
    {
      title: "Reach Out to Aven Health",
      description:
        "Have questions, feedback, or ideas? We’re here to listen and support your healthcare journey.",
    },
    {
      title: "We Value Your Input",
      description:
        "Your insights help us improve Aven Health and make healthcare more connected and personal.",
    },
    {
      title: "Connect With Us Anytime",
      description:
        "Whether it’s a quick question or detailed feedback, our team is ready to respond promptly.",
    },
  ];

  return (
    <section className=" mx-auto space-y-12">
  <Banner backgroundImage={contactBg} slides={slides} interval={6000} />

    <section className="max-w-3xl mx-auto space-y-12">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-cardDark p-8 rounded-xl"
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-4"
            role="alert"
            aria-live="polite"
          >
            <h2 className="text-2xl font-semibold text-accent" tabIndex={0}>
              Message Sent
            </h2>
            <p className="text-gray-300" tabIndex={0}>
              Thank you for reaching out. We’ll get back to you soon.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 bg-accent text-white font-semibold py-2 px-6 rounded hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>

            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="text-red-400 text-sm mt-1"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="text-red-400 text-sm mt-1"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full p-3 rounded bg-cardLight text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="text-red-400 text-sm mt-1"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white font-semibold py-3 rounded hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
      </section>
    </section>
  );
}
