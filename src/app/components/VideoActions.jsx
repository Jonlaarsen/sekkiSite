"use client";
import { useState } from "react";
import { useAuth } from "../lib/auth";
import EditForm from "./EditForm";

const VideoActions = ({ video, isHeroVideo = false }) => {
  const { isLoggedIn, isLoading } = useAuth();
  const [showEditForm, setShowEditForm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to parent
    if (!confirm(`Are you sure you want to delete "${video.title}"?`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch('/api/videos/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoId: video.id,
          isHeroVideo: isHeroVideo
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete video');
      }

      // Refresh the page to show updated content
      window.location.reload();
    } catch (error) {
      console.error('Delete failed:', error);
      alert('Failed to delete video. Please try again.');
      setIsDeleting(false);
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to parent
    setShowEditForm(true);
  };

  if (isLoading) {
    return null; // Don't show anything while checking auth
  }

  if (!isLoggedIn) {
    return null; // Don't show actions if not logged in
  }

  return (
    <>
      <div className="absolute top-2 right-2 flex gap-2 z-10">
        <button
          onClick={handleEdit}
          className="bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition-colors"
          title="Edit video"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700 disabled:opacity-50 transition-colors"
          title="Delete video"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>

      {showEditForm && (
        <EditForm
          video={video}
          isHeroVideo={isHeroVideo}
          onClose={() => setShowEditForm(false)}
        />
      )}
    </>
  );
};

export default VideoActions; 