'use server';

import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { transformGoogleDriveImageUrl, transformGoogleDriveVideoUrl } from './utils';

export const editVideo = async (formData: FormData) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const videoId = parseInt(formData.get('videoId') as string);
  const title = formData.get('title') as string;
  const subtitle = formData.get('subtitle') as string | null;
  let imgURL = formData.get('imgurl') as string;
  let videoURL = formData.get('videourl') as string;
  const category = formData.get('category') as string;

  console.log('Edit form data received:', { videoId, title, subtitle, imgURL, videoURL, category });

  if (!videoId || !title || !imgURL || !videoURL) {
    throw new Error('Video ID, title, imgURL, and videoURL are required.');
  }

  // Transform Google Drive image URL to thumbnail format
  imgURL = transformGoogleDriveImageUrl(imgURL);

  // Validate and transform the YouTube URL if applicable
  const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
  const isYouTubeLink = youtubeRegex.test(videoURL);

  if (isYouTubeLink) {
    const match = videoURL.match(youtubeRegex);
    if (match) {
      const videoId = match[3];
      videoURL = `https://www.youtube.com/embed/${videoId}`;
    } else {
      throw new Error('Invalid YouTube video link.');
    }
  }

  // Transform Google Drive video URL to preview format
  videoURL = transformGoogleDriveVideoUrl(videoURL);

  try {
    console.log('Attempting to update video with values:', [title, subtitle, category, imgURL, videoURL, videoId]);
    
    await sql(
      `UPDATE videos SET title = $1, subtitle = $2, category = $3, imgURL = $4, videoURL = $5 
       WHERE id = $6`,
      [title, subtitle, category, imgURL, videoURL, videoId]
    );
    console.log('Video updated successfully!');

    // Revalidate cache for pages that display the content
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/admin');

  } catch (error) {
    console.error('Database error details:', error);
    throw new Error(`Database update failed: ${error.message}`);
  }

  // Move redirect outside try-catch to avoid catching the redirect error
  redirect('/work');
};

export const editHeroVideo = async (formData: FormData) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const videoId = parseInt(formData.get('videoId') as string);
  const title = formData.get('title') as string;
  const subtitle = formData.get('subtitle') as string | null;
  let imgURL = formData.get('imgurl') as string;
  let videoURL = formData.get('videourl') as string;

  console.log('Edit hero video form data received:', { videoId, title, subtitle, imgURL, videoURL });

  if (!videoId || !title || !imgURL || !videoURL) {
    throw new Error('Video ID, title, imgURL, and videoURL are required.');
  }

  // Transform Google Drive image URL to thumbnail format
  imgURL = transformGoogleDriveImageUrl(imgURL);

  // Validate and transform the YouTube URL if applicable
  const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
  const isYouTubeLink = youtubeRegex.test(videoURL);

  if (isYouTubeLink) {
    const match = videoURL.match(youtubeRegex);
    if (match) {
      const videoId = match[3];
      videoURL = `https://www.youtube.com/embed/${videoId}`;
    } else {
      throw new Error('Invalid YouTube video link.');
    }
  }

  // Transform Google Drive video URL to preview format
  videoURL = transformGoogleDriveVideoUrl(videoURL);

  try {
    console.log('Attempting to update hero video with values:', [title, subtitle, imgURL, videoURL, videoId]);
    
    await sql(
      `UPDATE herovideos SET title = $1, subtitle = $2, imgURL = $3, videoURL = $4 
       WHERE id = $5`,
      [title, subtitle, imgURL, videoURL, videoId]
    );
    console.log('Hero video updated successfully!');

    // Revalidate cache for pages that display the content
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/admin');

  } catch (error) {
    console.error('Database error details:', error);
    throw new Error(`Database update failed: ${error.message}`);
  }

  // Move redirect outside try-catch to avoid catching the redirect error
  redirect('/');
}; 