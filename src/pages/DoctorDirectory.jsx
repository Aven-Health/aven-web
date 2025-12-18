import { useState } from "react";

const mockDoctors = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", rating: 4.8 },
  { id: 2, name: "Dr. Mike Lee", specialty: "Dermatology", rating: 4.5 },
  { id: 3, name: "Dr. Angela Smith", specialty: "Pediatrics", rating: 4.7 },
  { id: 4, name: "Dr. David Kim", specialty: "General Medicine", rating: 4.3 },
];

export default function DoctorDirectory() {
  const [search, setSearch] = useState("");

  const filteredDoctors = mockDoctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Doctor Directory</h1>

      <input
        type="text"
        placeholder="Search by name or specialty"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-3 rounded bg-cardLight text-white placeholder-gray-400 focus:outline-accent"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(({ id, name, specialty, rating }) => (
            <div key={id} className="bg-cardDark p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-white">{name}</h2>
              <p className="text-accent font-medium">{specialty}</p>
              <p className="text-gray-300">Rating: {rating} ★</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No doctors found.</p>
        )}
      </div>
    </section>
  );
}
