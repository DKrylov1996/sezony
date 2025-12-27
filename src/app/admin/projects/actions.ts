'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { requireAdminSession } from '@/lib/auth';
import { createSlug } from '@/lib/slug';
import { projectSchema } from '@/lib/validators';

export async function saveProjectAction(formData: FormData) {
  await requireAdminSession();

  const id = formData.get('id')?.toString();
  const title = formData.get('title')?.toString() || '';
  const slugInput = formData.get('slug')?.toString() || '';
  const shortDescription = formData.get('shortDescription')?.toString() || '';
  const fullDescription = formData.get('fullDescription')?.toString() || '';
  const location = formData.get('location')?.toString() || undefined;
  const yearValue = formData.get('year')?.toString();
  const tagsInput = formData.get('tags')?.toString() || '';
  const coverImage = formData.get('coverImage')?.toString() || '';
  const galleryImagesRaw = formData.get('galleryImages')?.toString() || '[]';
  const sortOrderValue = formData.get('sortOrder')?.toString();
  const isPublished = formData.get('isPublished') === 'on';

  const tags = tagsInput
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

  const galleryImages = JSON.parse(galleryImagesRaw) as string[];

  const parsed = projectSchema.parse({
    title,
    slug: slugInput || createSlug(title),
    shortDescription,
    fullDescription,
    location: location || null,
    year: yearValue ? Number(yearValue) : null,
    tags,
    coverImage,
    galleryImages,
    isPublished,
    sortOrder: sortOrderValue ? Number(sortOrderValue) : 0
  });

  if (id) {
    await prisma.project.update({
      where: { id },
      data: {
        ...parsed,
        tags: JSON.stringify(parsed.tags),
        galleryImages: JSON.stringify(parsed.galleryImages)
      }
    });
  } else {
    await prisma.project.create({
      data: {
        ...parsed,
        tags: JSON.stringify(parsed.tags),
        galleryImages: JSON.stringify(parsed.galleryImages)
      }
    });
  }

  redirect('/admin/projects');
}

export async function deleteProjectAction(formData: FormData) {
  await requireAdminSession();
  const id = formData.get('id')?.toString();
  if (id) {
    await prisma.project.delete({ where: { id } });
  }
  redirect('/admin/projects');
}
