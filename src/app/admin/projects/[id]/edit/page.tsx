import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import ProjectForm from '../../ProjectForm';
import { saveProjectAction } from '../../actions';

export const dynamic = 'force-dynamic';

function safeParseArray(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default async function EditProjectPage({
  params
}: {
  params: { id: string };
}) {
  const project = await prisma.project.findUnique({
    where: { id: params.id }
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-mint-500">Редактирование проекта</h1>
      <ProjectForm
        action={saveProjectAction}
        project={{
          id: project.id,
          title: project.title,
          slug: project.slug,
          shortDescription: project.shortDescription,
          fullDescription: project.fullDescription,
          location: project.location,
          year: project.year,
          tags: safeParseArray(project.tags),
          coverImage: project.coverImage,
          galleryImages: safeParseArray(project.galleryImages),
          isPublished: project.isPublished,
          sortOrder: project.sortOrder
        }}
      />
    </div>
  );
}
