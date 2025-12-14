import React, { useState } from "react";

export default function AppointmentBooking() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-primary">Book Appointment</h1>
      {!confirmed ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Doctor's Name"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="p-2 border border-cardLight rounded"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border border-cardLight rounded"
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border border-cardLight rounded"
            required
          />
          <button type="submit" className="bg-accent text-white py-2 rounded hover:bg-yellow-600">
            Confirm Booking
          </button>
        </form>
      ) : (
        <div className="bg-green-100 p-4 rounded">
          <p>Appointment booked with Dr. {doctor} on {date} at {time}.</p>
        </div>
      )}
    </div>
  );
}
