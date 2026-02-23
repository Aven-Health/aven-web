import ComingSoonModal from "../components/ui/ComingSoonModal";
import Banner from "../components/banner";

import pharmFeature1 from "../assets/pharmacy01.png";
import pharmFeature2 from "../assets/pharmacy02.png";
import pharmFeature3 from "../assets/pharmacy03.png";
import pharm1 from "../assets/pharmacy01.png";

export default function PharmacyDirectory() {

  const pharmacySlides = [
    {
      title: "Locate Trusted Health Stores Nearby",
      description:
        "Find verified and licensed Health Stores in your area, ensuring safe and reliable healthcare services.",
    },
    {
      title: "Explore Available Products",
      description:
        "Access a wide range of medications, wellness supplements, and medical devices conveniently.",
    },
    {
      title: "Connect with Verified Sellers",
      description:
        "Engage directly with pharmacy providers to get expert guidance and timely support.",
    },
    {
      title: "Prescription & OTC Support",
      description:
        "Easily browse prescription medications and over-the-counter products all in one place.",
    },
    {
      title: "Chronic Care Management",
      description:
        "Access specialized Health Stores offering medications for chronic conditions like diabetes, hypertension, and asthma.",
    },
    {
      title: "Web Ordering Coming Soon",
      description:
        "Currently available via the app. Online ordering and delivery will be available in the next update.",
    },
  ];

   const features = [
  {
    title: "Locate Trusted Health Stores Nearby",
    description:
      "Find verified and licensed Health Stores in your area, ensuring safe and reliable healthcare services.",
    image: pharmFeature1,
  },
  {
    title: "Explore Products & Medications",
    description:
      "Browse prescription and over-the-counter medications, wellness supplements, and medical devices easily.",
    image: pharmFeature2,
  },
  {
    title: "Connect with Verified Sellers",
    description:
      "Engage directly with pharmacy providers for expert guidance, advice, and timely support.",
    image: pharmFeature3,
  },
  {
    title: "Chronic Care & Specialty Meds",
    description:
      "Access Health Stores offering medications for chronic conditions like diabetes, hypertension, and asthma.",
    image: pharmFeature1,
  },
  {
    title: "Web Ordering Coming Soon",
    description:
      "Currently available via the app. Online ordering, delivery, and full web support will be coming soon.",
    image: pharmFeature2,
  },
  {
    title: "Medication Reminders & Alerts",
    description:
      "Receive timely reminders to refill prescriptions and take your medications, helping you stay on track with your health.",
    image: pharmFeature3,
  },
];

  return (
    <section className="space-y-12 text-left">

      <Banner backgroundImage={pharm1} slides={pharmacySlides} interval={6500} />

<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
  {features.map((feature, index) => (
    <div
      key={index}
      className="cursor-pointer group hover:shadow-lg transition-shadow rounded-xl overflow-hidden"
    >
      <img
        src={feature.image}
        alt={feature.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{feature.description}</p>
      </div>
    </div>
  ))}
</div>

        <section className=" rounded-xl p-8 text-center max-w-4xl mx-auto space-y-4 mt-12">
        <h2 className="text-2xl font-semibold text-white">Verified Health Stores Only</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Aven only lists verified and licensed health stores to ensure safe, reliable, and professional service.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Web ordering is coming soon. Order medications and wellness products directly via the Aven Health app.
        </p>
      </section>
   
    </section>
  );
}