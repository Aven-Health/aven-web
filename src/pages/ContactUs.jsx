import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ fullName: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email is invalid";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Here you would normally send the data to backend API
    }
  };

  if (submitted) {
    return (
      <div className="bg-primary min-h-screen text-white px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Thanks!</h2>
        <p>Your message has been received. We’ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen text-white px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block mb-2 font-semibold">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-cardLight text-primary focus:outline-accent ${
              errors.fullName ? "border-2 border-red-500" : "border border-transparent"
            }`}
          />
          {errors.fullName && <p className="text-red-400 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-cardLight text-primary focus:outline-accent ${
              errors.email ? "border-2 border-red-500" : "border border-transparent"
            }`}
          />
          {errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-cardLight text-primary focus:outline-accent resize-none ${
              errors.message ? "border-2 border-red-500" : "border border-transparent"
            }`}
          />
          {errors.message && <p className="text-red-400 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-accent text-primary font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition"
        >
          Submit
        </button>
      </form>

      <p className="mt-8 text-center">
        Or email us at <a href="mailto:support@aven.com" className="underline hover:text-accent">support@aven.com</a>
      </p>
    </div>
  );
}
