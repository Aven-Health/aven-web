import { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Sarah Johnson" },
  { id: 2, name: "Dr. Mike Lee" },
  { id: 3, name: "Dr. Angela Smith" },
];

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    doctorId: "",
    date: "",
    time: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!formData.doctorId) errs.doctorId = "Please select a doctor.";
    if (!formData.date) errs.date = "Please select a date.";
    if (!formData.time) errs.time = "Please select a time.";
    if (!formData.reason.trim()) errs.reason = "Please provide a reason.";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(errs);
    }
  }

  if (submitted) {
    return (
      <section className="max-w-3xl mx-auto p-6 bg-cardDark rounded-xl text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Appointment Booked!</h2>
        <p>Thank you for scheduling your appointment. We'll be in touch soon.</p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto p-6 bg-cardDark rounded-xl space-y-6">
      <h1 className="text-3xl font-bold text-white">Book an Appointment</h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-white">

        <label className="block">
          <span className="text-accent font-semibold">Select Doctor</span>
          <select
            value={formData.doctorId}
            onChange={(e) =>
              setFormData({ ...formData, doctorId: e.target.value })
            }
            className="mt-1 block w-full rounded bg-cardLight p-2 text-white"
          >
            <option value="">-- Choose a doctor --</option>
            {doctors.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          {errors.doctorId && (
            <p className="text-red-500 text-sm mt-1">{errors.doctorId}</p>
          )}
        </label>

        <label className="block">
          <span className="text-accent font-semibold">Date</span>
          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="mt-1 block w-full rounded bg-cardLight p-2 text-white"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </label>

        <label className="block">
          <span className="text-accent font-semibold">Time</span>
          <input
            type="time"
            value={formData.time}
            onChange={(e) =>
              setFormData({ ...formData, time: e.target.value })
            }
            className="mt-1 block w-full rounded bg-cardLight p-2 text-white"
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </label>

        <label className="block">
          <span className="text-accent font-semibold">Reason for Appointment</span>
          <textarea
            rows="3"
            value={formData.reason}
            onChange={(e) =>
              setFormData({ ...formData, reason: e.target.value })
            }
            className="mt-1 block w-full rounded bg-cardLight p-2 text-white"
          />
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
          )}
        </label>

        <button
          type="submit"
          className="bg-accent text-primary px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
        >
          Book Appointment
        </button>
      </form>
    </section>
  );
}
