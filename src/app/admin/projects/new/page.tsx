import { prisma } from '@/lib/prisma';
import ProjectForm from '../ProjectForm';
import { saveProjectAction } from '../actions';

export default async function NewProjectPage() {
  const lastProject = await prisma.project.findFirst({
    orderBy: { sortOrder: 'desc' },
    select: { sortOrder: true }
  });
  const nextSortOrder = (lastProject?.sortOrder ?? 0) + 1;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-mint-500">Новый проект</h1>
      <ProjectForm action={saveProjectAction} project={{ sortOrder: nextSortOrder }} />
    </div>
  );
}