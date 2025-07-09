'use server';

import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { transformGoogleDriveImageUrl, transformGoogleDriveVideoUrl } from './utils';

export const create = async (formData: FormData) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const title = formData.get('title') as string;
  const subtitle = formData.get('subtitle') as string | null;
  let imgURL = formData.get('imgurl') as string;
  let videoURL = formData.get('videourl') as string;
  const category = formData.get('category') as string;

  console.log('Form data received:', { title, subtitle, imgURL, videoURL, category });

  if (!title || !imgURL || !videoURL) {
    throw new Error('Title, imgURL, and videoURL are required.');
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
    console.log('Attempting to insert with values:', [title, subtitle, category, imgURL, videoURL]);
    
    await sql(
      `INSERT INTO videos (title, subtitle, category, imgURL, videoURL) 
       VALUES ($1, $2, $3, $4, $5)`,
      [title, subtitle, category, imgURL, videoURL]
    );
    console.log('Data inserted successfully!');

    // Revalidate cache for pages that display the content
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/admin');

  } catch (error) {
    console.error('Database error details:', error);
    throw new Error(`Database insertion failed: ${error.message}`);
  }

  // Move redirect outside try-catch to avoid catching the redirect error
  redirect('/work');
};
