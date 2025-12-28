import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().optional(),
  email: z.string().email('Введите корректный email').optional().or(z.literal('')),
  message: z.string().min(10, 'Введите сообщение')
});

export const projectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().optional(),
  shortDescription: z.string(),
  fullDescription: z.string(),
  location: z.string().optional().nullable(),
  year: z.number().int().optional().nullable(),
  tags: z.array(z.string()).default([]),
  coverImage: z.string().optional().or(z.literal('')),
  galleryImages: z.array(z.string()).default([]),
  isPublished: z.boolean().default(false),
  sortOrder: z.number().int().default(0)
});
