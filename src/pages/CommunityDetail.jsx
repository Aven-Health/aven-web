import PostCard from "../components/community/PostCard";
import communityBanner from "../assets/05.png";

export default function CommunityDetail() {
  const posts = [
    {
      id: 1,
      author: "Dr. Mathias",
      role: "Medical Advisor",
      content:
        "Mental health is just as important as physical health. Seek support early.",
      time: "1d ago",
    },
    {
      id: 2,
      author: "Sarah M.",
      role: "Community Member",
      content:
        "What techniques do you use to manage stress during busy weeks?",
      time: "3d ago",
    },
  ];

  return (
    <div className="space-y-12">
      {/* HEADER */}
      <section className="relative rounded-2xl overflow-hidden">
        <img
          src={communityBanner}
          alt="Community banner"
          className="w-full h-[260px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center px-8">
          <div>
            <h1 className="text-3xl font-bold">Mental Wellness</h1>
            <p className="text-gray-300 mt-2 max-w-xl">
              A safe space to discuss mental health, mindfulness, and emotional wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* ACTION BAR */}
      <div className="flex justify-between items-center max-w-3xl">
        <p className="text-sm text-gray-400">12,430 members</p>
        <button className="px-4 py-2 bg-accent text-primary rounded-lg text-sm font-semibold">
          Join Community
        </button>
      </div>

      {/* FEED */}
      <section className="max-w-3xl space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </section>
    </div>
  );
}
