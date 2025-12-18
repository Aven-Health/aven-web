const mockPosts = [
  {
    id: 1,
    author: "Alice M.",
    date: "2025-12-01",
    content: "Just had my first appointment through AVEN! Great experience.",
  },
  {
    id: 2,
    author: "John K.",
    date: "2025-12-05",
    content: "Looking for recommendations for a good pediatrician in Nairobi.",
  },
  {
    id: 3,
    author: "Mary W.",
    date: "2025-12-07",
    content: "AVEN's community features help me stay informed and connected.",
  },
];

export default function CommunityFeed() {
  return (
    <section className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-white">Community Feed</h1>

      <ul className="space-y-6">
        {mockPosts.map(({ id, author, date, content }) => (
          <li
            key={id}
            className="bg-cardDark rounded-xl p-4 flex space-x-4 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-lg">
              {author.charAt(0)}
            </div>
            <div>
              <p className="text-accent font-semibold">{author}</p>
              <p className="text-gray-400 text-sm mb-2">{date}</p>
              <p className="text-white">{content}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
