'use server';

import { redirect } from 'next/navigation';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { requireAdminSession } from '@/lib/auth';

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export async function createAdminAction(formData: FormData) {
  await requireAdminSession();

  const emailRaw = formData.get('email')?.toString() || '';
  const password = formData.get('password')?.toString() || '';
  const email = normalizeEmail(emailRaw);

  if (!email || !password || password.length < 6) {
    redirect('/admin/admins?error=invalid');
  }

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) {
    redirect('/admin/admins?error=duplicate');
  }

  const passwordHash = await hash(password, 10);
  await prisma.adminUser.create({
    data: { email, passwordHash }
  });

  redirect('/admin/admins?created=1');
}

export async function deleteAdminAction(formData: FormData) {
  const session = await requireAdminSession();
  const id = formData.get('id')?.toString();

  if (!id) {
    redirect('/admin/admins?error=invalid');
  }

  const admin = await prisma.adminUser.findUnique({ where: { id } });
  if (!admin) {
    redirect('/admin/admins');
  }

  if (admin.id === session.id) {
    redirect('/admin/admins?error=self');
  }

  const totalAdmins = await prisma.adminUser.count();
  if (totalAdmins <= 1) {
    redirect('/admin/admins?error=last');
  }

  await prisma.adminUser.delete({ where: { id } });
  redirect('/admin/admins?deleted=1');
}
