export default function PostCard({ author, role, content, time }) {
  return (
    <div className="bg-cardDark rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
        <span className="text-xs text-gray-500">{time}</span>
      </div>

      <p className="text-sm text-gray-200 leading-relaxed">
        {content}
      </p>

      <div className="flex gap-4 text-sm text-gray-400">
        <button className="hover:text-accent">Like</button>
        <button className="hover:text-accent">Comment</button>
        <button className="hover:text-accent">Share</button>
      </div>
    </div>
  );
}
