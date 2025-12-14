import React from "react";
import { doctors } from "../mock/doctors";
import { Link } from "react-router-dom";

export default function DoctorDirectory() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6 text-primary">Doctor Directory</h1>
      <ul>
        {doctors.map((doc) => (
          <li
            key={doc.id}
            className="mb-4 p-4 border border-cardLight rounded-md shadow-sm"
          >
            <h2 className="text-xl font-bold">{doc.name}</h2>
            <p>{doc.specialization} - {doc.location}</p>
            <p>Status: <span className={doc.availability === "Available" ? "text-green-500" : "text-red-500"}>{doc.availability}</span></p>
            <p>Consultation: {doc.consultationType}</p>
            <Link to={`/doctors/${doc.id}`} className="text-accent hover:underline mt-2 inline-block">
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
