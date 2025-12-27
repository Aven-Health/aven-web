import pharm1 from "../assets/pharmacy01.png";
import pharm2 from "../assets/pharmacy02.png";
import pharm3 from "../assets/pharmacy03.png";

export default function PharmacyDirectory() {
  const pharmacies = [
    {
      name: "Goodlife Pharmacy",
      location: "Nairobi CBD",
      services: "Prescription & OTC",
      image: pharm1,
    },
    {
      name: "Dawa Plus",
      location: "Westlands",
      services: "Prescription & Wellness",
      image: pharm2,
    },
    {
      name: "Community Health Pharmacy",
      location: "Kilimani",
      services: "Chronic Care Meds",
      image: pharm3,
    },
  ];

  return (
    <section className="space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Pharmacies</h1>
        <p className="text-gray-300">
          Locate trusted pharmacies and access medications near you.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pharmacies.map((pharmacy, index) => (
          <div
            key={index}
            className="bg-cardDark rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={pharmacy.image}
              alt={pharmacy.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">{pharmacy.name}</h3>
              <p className="text-gray-300 text-sm">{pharmacy.location}</p>
              <p className="text-accent text-sm">{pharmacy.services}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
