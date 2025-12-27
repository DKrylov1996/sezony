'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { requireAdminSession } from '@/lib/auth';

export async function markRequestAction(formData: FormData) {
  await requireAdminSession();
  const id = formData.get('id')?.toString();
  if (id) {
    await prisma.contactRequest.update({
      where: { id },
      data: { isProcessed: true }
    });
  }
  redirect('/admin/requests');
}
