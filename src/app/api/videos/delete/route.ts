import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

export async function DELETE(request: NextRequest) {
  try {
    const { videoId, isHeroVideo } = await request.json();
    
    if (!videoId) {
      return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
    }

    const sql = neon(`${process.env.DATABASE_URL}`);

    if (isHeroVideo) {
      await sql(`DELETE FROM herovideos WHERE id = $1`, [videoId]);
    } else {
      await sql(`DELETE FROM videos WHERE id = $1`, [videoId]);
    }

    // Revalidate cache for pages that display the content
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/admin');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ error: 'Failed to delete video' }, { status: 500 });
  }
} 