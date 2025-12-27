import { Link } from "react-router-dom";

export default function CommunityCard({ name, members, image }) {
  return (
    <Link to="/community/mental-wellness">
      <div className="bg-cardDark rounded-xl overflow-hidden hover:shadow-lg transition">
        <img src={image} alt={name} className="h-40 w-full object-cover" />

        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-400">{members}</p>

          <button className="w-full py-2 rounded-lg bg-accent text-primary font-semibold text-sm">
            Join Community
          </button>
        </div>
      </div>
    </Link>
  );
}
