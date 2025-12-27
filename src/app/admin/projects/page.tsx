import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { deleteProjectAction } from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }]
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl text-mint-500">Проекты</h1>
        <Link
          href="/admin/projects/new"
          className="rounded-md bg-mint-500 px-4 py-2 text-sm font-medium text-black"
        >
          Добавить проект
        </Link>
      </div>

      <div className="overflow-x-auto rounded-md border border-moss-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-moss-800/80 text-mint-400">
            <tr>
              <th className="px-4 py-3">Название</th>
              <th className="px-4 py-3">Статус</th>
              <th className="px-4 py-3">Порядок</th>
              <th className="px-4 py-3">Обновлено</th>
              <th className="px-4 py-3">Действия</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t border-moss-700/60">
                <td className="px-4 py-3">
                  <div className="font-medium text-leaf-200">{project.title}</div>
                  <div className="text-xs text-leaf-200/60">/{project.slug}</div>
                </td>
                <td className="px-4 py-3">
                  {project.isPublished ? (
                    <span className="text-mint-400">Опубликован</span>
                  ) : (
                    <span className="text-leaf-200/60">Черновик</span>
                  )}
                </td>
                <td className="px-4 py-3">{project.sortOrder}</td>
                <td className="px-4 py-3">
                  {project.updatedAt.toLocaleDateString('ru-RU')}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/admin/projects/${project.id}/edit`}
                      className="rounded-full border border-moss-600/70 px-3 py-1 text-xs uppercase tracking-[0.2em]"
                    >
                      Редактировать
                    </Link>
                    <form action={deleteProjectAction}>
                      <input type="hidden" name="id" value={project.id} />
                      <button
                        type="submit"
                        className="rounded-full border border-red-400/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-200"
                      >
                        Удалить
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
