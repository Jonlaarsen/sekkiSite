"use client";
import { useState } from "react";

const EditForm = ({ video, isHeroVideo = false, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      const videoData = {
        videoId: parseInt(formData.get('videoId')),
        title: formData.get('title'),
        subtitle: formData.get('subtitle'),
        imgURL: formData.get('imgurl'),
        videoURL: formData.get('videourl'),
        category: formData.get('category'),
        isHeroVideo: isHeroVideo
      };

      const response = await fetch('/api/videos/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoData),
      });

      if (!response.ok) {
        throw new Error('Failed to edit video');
      }

      // Refresh the page to show updated content
      window.location.reload();
    } catch (error) {
      console.error('Edit failed:', error);
      alert('Failed to edit video. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to video container
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white text-black p-8 rounded-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={handleModalClick}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Edit {isHeroVideo ? 'Hero ' : ''}Video</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="videoId" value={video.id} />
          
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Client name
            </label>
            <input
              id="title"
              name="title"
              type="text"
              defaultValue={video.title}
              className="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="Company, brand name etc"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subtitle" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              id="subtitle"
              name="subtitle"
              type="text"
              defaultValue={video.subtitle || ''}
              className="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="Title of video"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="imgurl" className="block text-sm font-medium mb-2">
              Image URL
            </label>
            <input
              id="imgurl"
              name="imgurl"
              type="url"
              defaultValue={video.imgurl}
              className="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="Image URL"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="videourl" className="block text-sm font-medium mb-2">
              Video URL
            </label>
            <input
              id="videourl"
              name="videourl"
              type="url"
              defaultValue={video.videourl}
              className="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="YouTube video URL"
              required
            />
          </div>

          {!isHeroVideo && (
            <div className="mb-6">
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={video.category}
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              >
                <option value="Brand Film">Brand Film</option>
                <option value="vertical">Vertical</option>
                <option value="Music Video">Music Video</option>
                <option value="Documentary">Documentary</option>
              </select>
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Updating..." : "Update Video"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm; 