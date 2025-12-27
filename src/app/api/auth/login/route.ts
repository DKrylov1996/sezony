import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { createSessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get('email')?.toString() || '';
  const password = formData.get('password')?.toString() || '';

  const admin = await prisma.adminUser.findUnique({ where: { email } });
  if (!admin) {
    return NextResponse.redirect(new URL('/admin?error=1', request.url));
  }

  const isValid = await compare(password, admin.passwordHash);
  if (!isValid) {
    return NextResponse.redirect(new URL('/admin?error=1', request.url));
  }

  const token = await createSessionToken({ id: admin.id, email: admin.email });
  const response = NextResponse.redirect(new URL('/admin/projects', request.url));
  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}
