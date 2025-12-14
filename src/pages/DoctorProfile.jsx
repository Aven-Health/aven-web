import React from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../mock/doctors";

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) return <div className="p-6">Doctor not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-primary">{doctor.name}</h1>
      <p className="mb-2"><strong>Specialization:</strong> {doctor.specialization}</p>
      <p className="mb-2"><strong>Location:</strong> {doctor.location}</p>
      <p className="mb-2"><strong>Availability:</strong> <span className={doctor.availability === "Available" ? "text-green-500" : "text-red-500"}>{doctor.availability}</span></p>
      <p className="mb-2"><strong>Consultation Type:</strong> {doctor.consultationType}</p>
      <p className="mb-4"><strong>Bio:</strong> {doctor.bio}</p>
      <p className="mb-4"><strong>Credentials:</strong> {doctor.credentials}</p>
      <p className="mb-4"><strong>Ratings:</strong> {doctor.ratings} / 5</p>

      <h2 className="text-2xl font-semibold mb-2">Available Time Slots</h2>
      {doctor.availableSlots.length ? (
        <ul>
          {doctor.availableSlots.map((slot, idx) => (
            <li key={idx} className="mb-1 p-2 border rounded cursor-pointer hover:bg-accent hover:text-white">
              {new Date(slot).toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No available slots.</p>
      )}
    </div>
  );
}
