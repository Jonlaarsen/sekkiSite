import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const isLoggedin = request.cookies.get('isLoggedin')?.value === 'true';
  
  return NextResponse.json({ isLoggedIn: isLoggedin });
} 