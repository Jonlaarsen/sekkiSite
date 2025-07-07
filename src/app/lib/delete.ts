'use server';

import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const deleteVideo = async (videoId: number) => {
  const sql = neon(`${process.env.DATABASE_URL}`);

  try {
    console.log('Attempting to delete video with ID:', videoId);
    
    await sql(
      `DELETE FROM videos WHERE id = $1`,
      [videoId]
    );
    console.log('Video deleted successfully!');

    // Revalidate cache for pages that display the content
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/admin');

  } catch (error) {
    console.error('Database error details:', error);
    throw new Error(`Database deletion failed: ${error.message}`);
  }

  // Move redirect outside try-catch to avoid catching the redirect error
  redirect('/work');
};

export const deleteHeroVideo = async (videoId: number) => {
  const sql = neon(`${process.env.DATABASE_URL}`);

  try {
    console.log('Attempting to delete hero video with ID:', videoId);
    
    await sql(
      `DELETE FROM herovideos WHERE id = $1`,
      [videoId]
    );
    console.log('Hero video deleted successfully!');

    // Revalidate cache for pages that display the content
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/admin');

  } catch (error) {
    console.error('Database error details:', error);
    throw new Error(`Database deletion failed: ${error.message}`);
  }

  // Move redirect outside try-catch to avoid catching the redirect error
  redirect('/');
}; 