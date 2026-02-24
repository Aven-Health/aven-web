import React, { useState } from "react";
import { doctors } from "../mock/appointments";
import { pharmacies } from "../mock/pharmacies";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ doctors: [], pharmacies: [], products: [] });

  const handleSearch = () => {
    const lowerQuery = query.toLowerCase();

    const matchedDoctors = doctors.filter((d) =>
      d.name.toLowerCase().includes(lowerQuery) || d.specialization.toLowerCase().includes(lowerQuery)
    );

    const matchedPharmacies = pharmacies.filter((p) =>
      p.name.toLowerCase().includes(lowerQuery) || p.location.toLowerCase().includes(lowerQuery)
    );

    const matchedProducts = pharmacies.flatMap((p) =>
      p.products.filter((prod) => prod.name.toLowerCase().includes(lowerQuery))
        .map((prod) => ({ ...prod, pharmacyName: p.name }))
    );

    setResults({
      doctors: matchedDoctors,
      pharmacies: matchedPharmacies,
      products: matchedProducts,
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-primary">Search</h1>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search doctors, pharmacies, products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border border-cardLight rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-accent text-white px-4 rounded hover:bg-yellow-600"
        >
          Search
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Doctors</h2>
        {results.doctors.length ? (
          <ul>
            {results.doctors.map((doc) => (
              <li key={doc.id} className="mb-2">
                {doc.name} - {doc.specialization}
              </li>
            ))}
          </ul>
        ) : (
          <p>No doctors found.</p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold my-2">Pharmacies</h2>
        {results.pharmacies.length ? (
          <ul>
            {results.pharmacies.map((pharm) => (
              <li key={pharm.id} className="mb-2">
                {pharm.name} - {pharm.location}
              </li>
            ))}
          </ul>
        ) : (
          <p>No pharmacies found.</p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold my-2">Products</h2>
        {results.products.length ? (
          <ul>
            {results.products.map((prod) => (
              <li key={prod.id} className="mb-2">
                {prod.name} (from {prod.pharmacyName}) - KES {prod.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
