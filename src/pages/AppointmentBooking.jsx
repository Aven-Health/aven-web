import doctor1 from "../assets/01.png";
import doctor2 from "../assets/02.png";
import doctor3 from "../assets/03.png";

export default function AppointmentBooking() {
  const doctors = [
    {
      name: "Dr. Mathias",
      specialty: "General Practitioner",
      availability: "Available Today",
      image: doctor1,
    },
    {
      name: "Dr. Safia Ahmed",
      specialty: "Mental Health Specialist",
      availability: "Available Tomorrow",
      image: doctor2,
    },
    {
      name: "Dr. Paul Njoroge",
      specialty: "Chronic Care Specialist",
      availability: "Available This Week",
      image: doctor3,
    },
  ];

  return (
    <section className="space-y-16">
      {/* HEADER */}
      <header className="space-y-4 max-w-3xl">
        <h1 className="text-3xl font-bold">Book Appointments</h1>
        <p className="text-gray-300">
          Find trusted healthcare professionals and book appointments at your
          convenience.
        </p>
      </header>

      {/* DOCTOR GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-cardDark rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-accent text-sm">{doctor.specialty}</p>
              <p className="text-gray-300 text-sm">{doctor.availability}</p>

              <button className="w-full mt-4 px-4 py-2 bg-accent text-primary rounded-lg font-semibold hover:opacity-90">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
