import { useState } from "react";
import PostComposerModal from "../components/community/PostComposerModal";
import PostCard from "../components/community/PostCard";
import CommunityCard from "../components/community/CommunityCard";

import communityImg1 from "../assets/01.png";
import communityImg2 from "../assets/02.png";
import communityImg3 from "../assets/03.png";

export default function CommunityFeed() {
  const [openComposer, setOpenComposer] = useState(false);

  const communities = [
    {
      name: "Mental Wellness",
      members: "12,430 members",
      image: communityImg1,
    },
    {
      name: "Fitness & Nutrition",
      members: "9,870 members",
      image: communityImg2,
    },
    {
      name: "Chronic Care Support",
      members: "6,240 members",
      image: communityImg3,
    },
  ];

  const posts = [
    {
      id: 1,
      author: "Dr. Mathias",
      role: "Medical Advisor",
      content:
        "Mental health is just as important as physical health. Seeking support early can make a huge difference.",
      time: "1 day ago",
    },
    {
      id: 2,
      author: "Sarah M.",
      role: "Community Member",
      content:
        "What are some healthy routines you follow to manage stress during busy weeks?",
      time: "3 days ago",
    },
  ];

  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Communities</h1>
        <p className="text-gray-300 max-w-2xl">
          Join health-focused communities to share experiences, ask questions,
          and support one another.
        </p>
      </section>

      {/* COMMUNITY GRID */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {communities.map((community, index) => (
          <CommunityCard
            key={index}
            name={community.name}
            members={community.members}
            image={community.image}
          />
        ))}
      </section>

      {/* FEED HEADER */}
      <section className="flex items-center justify-between max-w-3xl">
        <h2 className="text-2xl font-semibold">Community Feed</h2>
        <button
          onClick={() => setOpenComposer(true)}
          className="px-4 py-2 bg-accent text-primary rounded-lg text-sm font-semibold hover:opacity-90"
        >
          Create Post
        </button>
      </section>

      {/* FEED */}
      <section className="max-w-3xl space-y-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            author={post.author}
            role={post.role}
            content={post.content}
            time={post.time}
          />
        ))}
      </section>

      {/* POST COMPOSER MODAL */}
      <PostComposerModal
        open={openComposer}
        onClose={() => setOpenComposer(false)}
      />
    </div>
  );
}
