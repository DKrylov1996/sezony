import { NextResponse } from 'next/server';
import { SESSION_COOKIE_NAME } from '@/lib/auth';
import { getBaseUrl } from '@/lib/url';

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL('/admin', getBaseUrl(request)));
  response.cookies.set(SESSION_COOKIE_NAME, '', {
    httpOnly: true,
    path: '/',
    maxAge: 0
  });
  return response;
}

