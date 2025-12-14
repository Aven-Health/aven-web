import React from "react";
import { pharmacies } from "../mock/pharmacies";
import { Link } from "react-router-dom";

export default function PharmacyDirectory() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6 text-primary">Pharmacy Directory</h1>
      <ul>
        {pharmacies.map((pharmacy) => (
          <li key={pharmacy.id} className="mb-4 p-4 border border-cardLight rounded shadow-sm">
            <h2 className="text-xl font-bold">{pharmacy.name}</h2>
            <p>{pharmacy.location}</p>
            <p>Status: <span className={pharmacy.status === "Open" ? "text-green-500" : "text-red-500"}>{pharmacy.status}</span></p>
            <Link to={`/pharmacies/${pharmacy.id}`} className="text-accent hover:underline mt-2 inline-block">
              View Products
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
