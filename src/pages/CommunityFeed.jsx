import { useState, useEffect } from "react";
import PostComposerModal from "../components/community/PostComposerModal";
import PostCard from "../components/community/PostCard";
import CommunityCard from "../components/community/CommunityCard";
import ComingSoonModal from "../components/ui/ComingSoonModal";

import communityImg1 from "../assets/community01.jpg";
import communityImg2 from "../assets/community02.jpg";
import communityImg3 from "../assets/community03.jpg";

export default function CommunityFeed() {
  const [openComposer, setOpenComposer] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    setShowNotice(true);
  }, []);

  const communities = [
    { name: "Mental Wellness", members: "112 members", image: communityImg1 },
    { name: "Fitness & Nutrition", members: "2 members", image: communityImg2 },
    {
      name: "Chronic Care Support",
      members: "15 members",
      image: communityImg3,
    },
  ];



  const handleFeatureClick = () => {
    setShowNotice(true);
  };

  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-white">
          Welcome to the Aven Community: Health-Focused Social App for Wellness
        </h1>

        <div className="space-y-6">
          <div className="bg-cardDark p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-accent mb-2">
              Connect and Share in Health Communities
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Aven Community is your space to{" "}
              <strong>connect, share, and learn</strong> with others who care
              about health just like you. Join{" "}
              <strong>mental wellness communities</strong>,
              <strong>fitness and nutrition groups</strong>, or{" "}
              <strong>chronic care support networks</strong>. Post updates, ask
              questions, and support each other on your journey to better
              health.
            </p>
          </div>

          <div className="bg-cardDark p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-accent mb-2">
              Improve Health Outcomes Together
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our goal is to <strong>improve health outcomes</strong> by
              bringing people together. Share experiences, provide support, and
              access expert insights in a{" "}
              <strong>community-driven approach to wellness</strong>. Every
              interaction helps build a stronger, healthier network of members
              committed to holistic well-being.
            </p>
          </div>

          <div className="bg-cardDark p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-accent mb-2">
              A Social App for Health: Post, Join, and Explore
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Think of it like a <strong>social app for health</strong>: post
              updates, join communities, discuss topics that matter, and stay
              motivated on your journey to wellness.
              <strong>Web communities coming soon</strong>, so for now, explore
              and engage in the app!
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Explore Communities In the app</h2>
          <span className="text-sm text-gray-400">More coming soon</span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community, index) => (
            <div
              key={index}
              onClick={handleFeatureClick}
              className="group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <CommunityCard
                name={community.name}
                members={community.members}
                image={community.image}
              />
            </div>
          ))}
        </div>
      </section>



      <ComingSoonModal
        open={showNotice}
        onClose={() => setShowNotice(false)}
        title="Web Communities Coming Soon"
        message={`Joining ${name} and other communities will soon be available on the web. For now, you can join and interact in the app!`}
      />
    </div>
  );
}
