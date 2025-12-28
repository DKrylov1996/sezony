'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { requireAdminSession } from '@/lib/auth';
import { resolveHomeContent } from '@/lib/homeContent';
import { buildHomeContentFromFormData } from '@/lib/homeContentForm';

export async function saveHomeContentAction(formData: FormData) {
  await requireAdminSession();

  const existing = await prisma.homePageContent.findFirst({
    orderBy: { updatedAt: 'desc' }
  });
  const base = resolveHomeContent(existing?.data);
  const content = buildHomeContentFromFormData(formData, base);

  const payload = JSON.stringify(content);

  if (existing) {
    await prisma.homePageContent.update({
      where: { id: existing.id },
      data: { data: payload }
    });
  } else {
    await prisma.homePageContent.create({
      data: { data: payload }
    });
  }

  redirect('/admin/home?saved=1');
}
