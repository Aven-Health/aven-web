import { useState, useEffect } from "react";
import PostComposerModal from "../components/community/PostComposerModal";
import PostCard from "../components/community/PostCard";
import CommunityCard from "../components/community/CommunityCard";
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
<Banner
  backgroundImage={communityImg1}
  interval={7000}
  slides={[
    {
      title:
        "Welcome to the Aven Health Community",
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
        "Post updates, join communities, discuss what matters, and stay motivated on your wellness journey. Web communities coming soon — explore in the app today.",
    },
  ]}
/>
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
