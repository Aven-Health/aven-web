import { useParams } from "react-router-dom";
import { useState } from "react";
import doc1 from "../assets/01.png";

export default function DoctorProfile() {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <section className="max-w-4xl mx-auto space-y-10">
      <div className="bg-cardDark rounded-xl overflow-hidden shadow">
        <img src={doc1} alt="Doctor" className="h-64 w-full object-cover" />

        <div className="p-8 space-y-4">
          <h1 className="text-3xl font-bold">Dr. Mathias</h1>
          <p className="text-accent">General Practitioner</p>
          <p className="text-gray-300">
            Community-first healthcare professional focused on preventative and
            holistic care.
          </p>
        </div>
      </div>

      {/* Appointment Booking */}
      <div className="bg-cardDark p-8 rounded-xl space-y-6">
        <h2 className="text-2xl font-semibold">Book Appointment</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 rounded bg-cardLight text-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Select Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 rounded bg-cardLight text-white"
            >
              <option value="">Choose time</option>
              <option>09:00 AM</option>
              <option>11:00 AM</option>
              <option>02:00 PM</option>
              <option>04:00 PM</option>
            </select>
          </div>
        </div>

        <button
          disabled={!date || !time}
          className="mt-4 px-6 py-3 bg-accent text-primary font-semibold rounded-md disabled:opacity-50"
        >
          Confirm Appointment
        </button>
      </div>
    </section>
  );
}
