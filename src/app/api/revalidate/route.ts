import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path } = body;

    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path });
    }

    // Revalidate all important paths
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/admin');

    return NextResponse.json({ revalidated: true, paths: ['/', '/work', '/admin'] });
  } catch (error) {
    return NextResponse.json({ error: 'Error revalidating' }, { status: 500 });
  }
} 