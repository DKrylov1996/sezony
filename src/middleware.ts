import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getBaseUrl } from '@/lib/url';

const SESSION_COOKIE_NAME = 'sezony_session';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const isLoginPage = pathname === '/admin' || pathname === '/admin/';

  if (!session && !isLoginPage) {
    const url = new URL('/admin', getBaseUrl(request));
    url.search = 'error=auth';
    return NextResponse.redirect(url);
  }

  if (session && isLoginPage) {
    const url = new URL('/admin/projects', getBaseUrl(request));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};


