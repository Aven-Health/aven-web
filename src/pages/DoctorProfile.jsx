import { useParams } from "react-router-dom";

const mockDoctorProfiles = {
  1: {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    bio:
      "Dr. Johnson has 15 years experience in heart health, dedicated to patient-centered care.",
    rating: 4.8,
    availability: "Mon-Fri, 9am - 4pm",
  },
  2: {
    name: "Dr. Mike Lee",
    specialty: "Dermatology",
    bio:
      "Specializing in skin health, Dr. Lee offers expert diagnosis and treatment.",
    rating: 4.5,
    availability: "Tue-Thu, 10am - 3pm",
  },
  // Add others as needed
};

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = mockDoctorProfiles[id];

  if (!doctor) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-white">
        <h2 className="text-2xl font-bold">Doctor not found</h2>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6 bg-cardDark rounded-xl space-y-6">
      <h1 className="text-3xl font-bold text-accent">{doctor.name}</h1>
      <p className="text-white text-lg font-semibold">{doctor.specialty}</p>
      <p className="text-gray-300">{doctor.bio}</p>
      <p className="text-white">Rating: {doctor.rating} ★</p>
      <p className="text-white">Availability: {doctor.availability}</p>
      <button className="mt-4 bg-accent text-primary font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition">
        Book Appointment
      </button>
    </section>
  );
}
