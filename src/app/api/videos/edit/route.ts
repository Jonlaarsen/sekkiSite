import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

export async function PUT(request: NextRequest) {
  try {
    const { videoId, title, subtitle, imgURL, videoURL, category, isHeroVideo } = await request.json();
    
    if (!videoId || !title || !imgURL || !videoURL) {
      return NextResponse.json({ error: 'Video ID, title, imgURL, and videoURL are required' }, { status: 400 });
    }

    const sql = neon(`${process.env.DATABASE_URL}`);

    // Validate and transform the YouTube URL if applicable
    const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
    const isYouTubeLink = youtubeRegex.test(videoURL);
    let processedVideoURL = videoURL;

    if (isYouTubeLink) {
      const match = videoURL.match(youtubeRegex);
      if (match) {
        const videoId = match[3];
        processedVideoURL = `https://www.youtube.com/embed/${videoId}`;
      } else {
        return NextResponse.json({ error: 'Invalid YouTube video link' }, { status: 400 });
      }
    }

    if (isHeroVideo) {
      await sql(
        `UPDATE herovideos SET title = $1, subtitle = $2, imgURL = $3, videoURL = $4 
         WHERE id = $5`,
        [title, subtitle, imgURL, processedVideoURL, videoId]
      );
    } else {
      if (!category) {
        return NextResponse.json({ error: 'Category is required for regular videos' }, { status: 400 });
      }
      await sql(
        `UPDATE videos SET title = $1, subtitle = $2, category = $3, imgURL = $4, videoURL = $5 
         WHERE id = $6`,
        [title, subtitle, category, imgURL, processedVideoURL, videoId]
      );
    }

    // Revalidate cache for pages that display the content
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/admin');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Edit error:', error);
    return NextResponse.json({ error: 'Failed to edit video' }, { status: 500 });
  }
} 