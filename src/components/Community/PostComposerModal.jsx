import { useEffect } from "react";

export default function PostComposerModal({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-cardDark w-full max-w-lg rounded-xl p-6 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Create Post</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Textarea */}
        <textarea
          rows="5"
          placeholder="Share something with the community..."
          className="w-full rounded-lg bg-cardLight p-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
        />

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm font-semibold bg-accent text-primary rounded-lg"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
