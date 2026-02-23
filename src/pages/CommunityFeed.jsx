import { useState, useEffect } from "react";
import ComingSoonModal from "../components/ui/ComingSoonModal";
import Banner from "../components/banner";
import communityImg1 from "../assets/community01.jpg";
import communityImg2 from "../assets/community02.jpg";
import communityImg3 from "../assets/community03.jpg";

export default function CommunityFeed() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    setShowNotice(true);
  }, []);

  const features = [
    {
      title: "Share Your Thoughts",
      description:
        "Post updates, ask questions, and interact with other users’ thoughts in a supportive environment.",
      image: communityImg1,
    },
    {
      title: "Join Different Communities",
      description:
        "Explore communities focused on mental wellness, fitness, nutrition, chronic care support, and more.",
      image: communityImg2,
    },
    {
      title: "Safe Space",
      description:
        "Engage freely in a moderated, safe, and supportive environment where health discussions are respected.",
      image: communityImg3,
    },
    {
      title: "Create Your Own Community",
      description:
        "Start your own community around topics that matter to you and invite others to join and share.",
      image: communityImg1,
    },
  ];

  const handleFeatureClick = () => {
    setShowNotice(true);
  };

  return (
    <div className="space-y-20">
      <Banner
        backgroundImage={communityImg1}
        interval={7000}
        slides={[
          {
            title: "Welcome to the Aven Health Community",
            description:
              "Connect, share, and grow with people who care about health. Join mental wellness, fitness, nutrition, and chronic care support communities built for real conversations.",
          },
          {
            title: "Improve Health Outcomes Together",
            description:
              "A community-driven approach to wellness where shared experiences, expert insights, and support networks help build stronger, healthier lives.",
          },
          {
            title: "Think of It as a Social App for Health",
            description:
              "Post updates, join communities, discuss what matters, and stay motivated on your wellness journey. Web communities coming soon, explore in the app today.",
          },
        ]}
      />


      <section className="space-y-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={handleFeatureClick}
              className="cursor-pointer group hover:shadow-lg transition-shadow rounded-xl overflow-hidden"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-4 bg-gray-800">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-300 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="space-y-6 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-semibold">Aven Communities</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Aven Communities are safe, moderated spaces designed to bring people together around health topics that matter.
          Share your experiences, get support, discuss challenges, and learn from others who understand your journey.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          You can join existing communities on mental wellness, fitness, nutrition, chronic care, and more, or create your own to bring like-minded people together.
        </p>
        <p className="text-gray-400 text-base mt-4">
          Web Communities coming soon, for now, explore and interact in the app!
        </p>
      </section>
    </div>
  );
}