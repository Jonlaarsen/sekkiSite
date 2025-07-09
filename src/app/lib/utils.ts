// Utility functions for URL transformations

/**
 * Transforms Google Drive image URLs to thumbnail format
 * @param url - The original Google Drive URL
 * @returns The transformed thumbnail URL or original URL if not a Google Drive URL
 */
export const transformGoogleDriveImageUrl = (url: string): string => {
  // Google Drive file URL pattern: https://drive.google.com/file/d/{fileId}/view
  const googleDriveImageRegex = /^(https?:\/\/)?(www\.)?drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const isGoogleDriveImage = googleDriveImageRegex.test(url);

  if (isGoogleDriveImage) {
    const match = url.match(googleDriveImageRegex);
    if (match) {
      const fileId = match[3];
      return `https://drive.google.com/thumbnail?sz=w640&id=${fileId}`;
    }
  }

  return url;
};

/**
 * Transforms Google Drive video URLs to preview format
 * @param url - The original Google Drive URL
 * @returns The transformed preview URL or original URL if not a Google Drive URL
 */
export const transformGoogleDriveVideoUrl = (url: string): string => {
  // Google Drive file URL pattern: https://drive.google.com/file/d/{fileId}/view
  const googleDriveVideoRegex = /^(https?:\/\/)?(www\.)?drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const isGoogleDriveVideo = googleDriveVideoRegex.test(url);

  if (isGoogleDriveVideo) {
    const match = url.match(googleDriveVideoRegex);
    if (match) {
      const fileId = match[3];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
  }

  return url;
};