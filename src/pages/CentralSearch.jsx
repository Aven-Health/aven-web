import { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology" },
  { id: 2, name: "Dr. Mike Lee", specialty: "Dermatology" },
];
const pharmacies = [
  { id: 1, name: "Healthy Pharmacy", location: "Nairobi CBD" },
  { id: 2, name: "CarePlus Pharmacy", location: "Westlands" },
];
const posts = [
  { id: 1, author: "Alice M.", content: "Great experience with Aven Health" },
  { id: 2, author: "John K.", content: "Looking for a pediatrician" },
];

export default function CentralSearch() {
  const [query, setQuery] = useState("");

  const filteredDoctors = doctors.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.specialty.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPharmacies = pharmacies.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPosts = posts.filter((p) =>
    p.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Search Aven Health</h1>

      <input
        type="text"
        placeholder="Search doctors, pharmacies, posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-lg p-3 rounded bg-cardLight text-white placeholder-gray-400 focus:outline-accent"
      />

      <div className="space-y-8">

        {/* Doctors */}
        <div>
          <h2 className="text-accent text-xl font-semibold mb-2">Doctors</h2>
          {filteredDoctors.length ? (
            <ul className="space-y-2">
              {filteredDoctors.map(({ id, name, specialty }) => (
                <li key={id} className="text-white">
                  {name} - <span className="text-gray-300">{specialty}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No doctors found.</p>
          )}
        </div>

        {/* Pharmacies */}
        <div>
          <h2 className="text-accent text-xl font-semibold mb-2">Pharmacies</h2>
          {filteredPharmacies.length ? (
            <ul className="space-y-2">
              {filteredPharmacies.map(({ id, name, location }) => (
                <li key={id} className="text-white">
                  {name} - <span className="text-gray-300">{location}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No pharmacies found.</p>
          )}
        </div>

        {/* Posts */}
        <div>
          <h2 className="text-accent text-xl font-semibold mb-2">Community Posts</h2>
          {filteredPosts.length ? (
            <ul className="space-y-2">
              {filteredPosts.map(({ id, author, content }) => (
                <li key={id} className="text-white">
                  <span className="font-semibold">{author}:</span> {content}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
