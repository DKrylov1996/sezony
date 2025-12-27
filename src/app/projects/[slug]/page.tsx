import Image from 'next/image';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

function safeParseArray(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default async function ProjectPage({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams: { preview?: string };
}) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug }
  });

  if (!project) {
    notFound();
  }

  if (!project.isPublished && searchParams.preview !== '1') {
    notFound();
  }

  if (!project.isPublished && searchParams.preview === '1') {
    const session = await getSession();
    if (!session) {
      notFound();
    }
  }

  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 pb-24 pt-10 md:px-10">
      <section className="section-shell p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <h1 className="text-3xl text-mint-500 md:text-4xl">{project.title}</h1>
            <p className="text-base text-leaf-200/80">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-mint-400">
              {safeParseArray(project.tags).map((tag) => (
                <span key={tag} className="rounded-full border border-moss-600/60 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-leaf-200/70">
              {project.location ? <span>Локация: {project.location}</span> : null}
              {project.year ? <span>Год: {project.year}</span> : null}
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-moss-600/60">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl text-mint-500">Описание проекта</h2>
        <p className="whitespace-pre-line text-sm text-leaf-200/80 md:text-base">
          {project.fullDescription}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl text-mint-500">Галерея</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {safeParseArray(project.galleryImages).map((src, index) => (
            <div key={`${src}-${index}`} className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-moss-600/60">
              <Image
                src={src}
                alt={`${project.title} фото ${index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
