import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComingSoonModal from "../components/ui/ComingSoonModal";
import doctor1 from "../assets/01.png";
import doctor2 from "../assets/02.png";
import doctor3 from "../assets/03.png";

export default function DoctorDirectory() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    setShowNotice(true);
  }, []);
  const doctors = [
    {
      name: "Doctor 1",
      specialty: "General Practitioner",
      availability: "Coming Soon",
      image: doctor1,
    },
    {
      name: "Doctor 2",
      specialty: "Mental Health Specialist",
      availability: "Coming Soon",
      image: doctor2,
    },
    {
      name: "Doctor 3",
      specialty: "Chronic Care Specialist",
      availability: "Coming Soon",
      image: doctor3,
    },
  ];

  const features = [
    {
      title: "Easy 2-Step Booking",
      description: "Select a doctor and confirm your appointment in just 2 simple steps.",
    },
    {
      title: "Secure One-on-One Appointments",
      description: "Enjoy private and fully encrypted consultations with your doctor.",
    },
    {
      title: "Physical & Online Consultations",
      description: "Choose between in-person visits or virtual appointments from home.",
    },
    {
      title: "Meet Any Medical Professional",
      description: "Access verified general practitioners, specialists, and mental health experts.",
    },
    {
      title: "Quick Appointments",
      description: "Get fast scheduling without waiting weeks to see a doctor.",
    },
    {
      title: "Web Booking Coming Soon",
      description: "Currently available in the app. Web-based booking will be live in the next update.",
    },
  ];


  const handleFeatureClick = (e) => {
    e.preventDefault();
    setShowNotice(true);
  };

  return (
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">

      <div className="text-start mb-12">
        <header className="space-y-4">
          <h1 className="font-bold text-3xl text-left">Book Appointments</h1>
          <p className="text-gray-300 max-w-2xl text-left">
            Browse verified healthcare professionals and book appointments easily via the Aven app. Web booking coming soon!
          </p>
        </header>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-cardDark rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="group bg-cardDark rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-56 w-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-accent">
                {doctor.availability}
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-accent text-sm">{doctor.specialty}</p>
              </div>

              <p className="text-gray-400 text-sm">
                Online and in-person consultations are currently available in the app. Web booking will be live soon.
              </p>

              <button
                disabled
                className="w-full mt-4 px-4 py-3 bg-accent/40 text-primary rounded-xl font-semibold cursor-not-allowed"
              >
                Booking Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400 max-w-2xl mt-8">
        Book appointments now via the Aven app. Web booking will be available in an upcoming update.
      </p>

      {/* NOTICE MODAL */}
      <ComingSoonModal
        open={showNotice}
        onClose={() => setShowNotice(false)}
        title="Appointment Booking Coming Soon"
        message="Doctor profiles and appointment booking are not yet available on the website. These features will be introduced soon. You can currently explore the upcoming experience."
      />
    </section>
  );
}
