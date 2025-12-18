import { useState } from "react";

const mockPharmacies = [
  {
    id: 1,
    name: "Healthy Pharmacy",
    location: "Nairobi CBD",
    contact: "0722 123456",
    products: [
      { id: 101, name: "Paracetamol", price: 5, description: "Pain relief" },
      { id: 102, name: "Vitamin C", price: 10, description: "Immune support" },
    ],
  },
  {
    id: 2,
    name: "CarePlus Pharmacy",
    location: "Westlands",
    contact: "0733 987654",
    products: [
      { id: 201, name: "Ibuprofen", price: 7, description: "Anti-inflammatory" },
      { id: 202, name: "Zinc Tablets", price: 12, description: "Immunity booster" },
    ],
  },
];

export default function PharmacyDirectory() {
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  return (
    <section className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-white">Pharmacy Directory</h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Pharmacy list */}
        <div className="w-full lg:w-1/3 bg-cardDark rounded-xl p-6 space-y-4">
          {mockPharmacies.map(({ id, name, location }) => (
            <button
              key={id}
              onClick={() => setSelectedPharmacy(id)}
              className={`block w-full text-left p-4 rounded ${
                selectedPharmacy === id ? "bg-accent text-primary" : "text-white hover:bg-cardLight"
              } transition`}
            >
              <h2 className="font-semibold text-lg">{name}</h2>
              <p className="text-gray-300">{location}</p>
            </button>
          ))}
        </div>

        {/* Selected pharmacy products */}
        <div className="flex-1 bg-cardDark rounded-xl p-6">
          {selectedPharmacy ? (
            <>
              <h2 className="text-accent font-bold text-2xl mb-4">
                Products at {mockPharmacies.find(p => p.id === selectedPharmacy).name}
              </h2>
              <ul className="space-y-4">
                {mockPharmacies
                  .find((p) => p.id === selectedPharmacy)
                  .products.map(({ id, name, price, description }) => (
                    <li
                      key={id}
                      className="bg-cardLight rounded p-4 text-white flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-semibold">{name}</h3>
                        <p className="text-gray-300 text-sm">{description}</p>
                      </div>
                      <span className="font-bold">{price} KES</span>
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-400">Select a pharmacy to view products.</p>
          )}
        </div>
      </div>
    </section>
  );
}
