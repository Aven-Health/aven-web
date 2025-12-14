import React from "react";
import { communityPosts } from "../mock/communityPosts";

export default function CommunityFeed() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-primary">Community Feed</h1>
      <ul>
        {communityPosts.map((post) => (
          <li key={post.id} className="mb-4 p-4 border border-cardLight rounded shadow-sm">
            <p className="text-gray-600 text-sm">{post.user} - {new Date(post.date).toLocaleDateString()}</p>
            <p className="mt-1">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
