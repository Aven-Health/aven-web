import React from "react";
import { useParams } from "react-router-dom";
import { pharmacies } from "../mock/pharmacies";

export default function PharmacyProfile() {
  const { id } = useParams();
  const pharmacy = pharmacies.find((p) => p.id === Number(id));

  if (!pharmacy) return <div className="p-6">Pharmacy not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-primary">{pharmacy.name}</h1>
      <p className="mb-2"><strong>Location:</strong> {pharmacy.location}</p>
      <p className="mb-4"><strong>Status:</strong> <span className={pharmacy.status === "Open" ? "text-green-500" : "text-red-500"}>{pharmacy.status}</span></p>
      <h2 className="text-2xl font-semibold mb-2">Products</h2>
      <ul>
        {pharmacy.products.map((prod) => (
          <li key={prod.id} className="mb-2 border-b pb-2">
            <p><strong>{prod.name}</strong></p>
            <p>Price: KES {prod.price}</p>
            <p>Availability: {prod.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
