import Image from 'next/image';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { getPreviewData } from '@/lib/previewStore';
import LightboxGallery from '@/components/LightboxGallery';

export const dynamic = 'force-dynamic';

function safeParseArray(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function parseArrayOrNull(value?: string) {
  if (value === undefined) return null;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export default async function ProjectPage({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams: {
    preview?: string;
    previewKey?: string;
    title?: string;
    slug?: string;
    shortDescription?: string;
    fullDescription?: string;
    location?: string;
    year?: string;
    tags?: string;
    coverImage?: string;
    galleryImages?: string;
  };
}) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug }
  });

  const isPreview = searchParams.preview === '1';
  const previewPayload =
    isPreview && searchParams.previewKey
      ? getPreviewData(searchParams.previewKey)
      : null;

  if (!project) {
    if (!isPreview) {
      notFound();
    }

    const session = await getSession();
    if (!session) {
      notFound();
    }

    if (!previewPayload && !searchParams.title && !searchParams.coverImage) {
      notFound();
    }
  } else {
    if (!project.isPublished && !isPreview) {
      notFound();
    }

    if (!project.isPublished && isPreview) {
      const session = await getSession();
      if (!session) {
        notFound();
      }
    }
  }

  const previewCoverImage = isPreview ? searchParams.coverImage || null : null;
  const previewGalleryImages = isPreview
    ? parseArrayOrNull(searchParams.galleryImages)
    : null;
  const previewTags = isPreview ? parseArrayOrNull(searchParams.tags) : null;

  const title =
    (isPreview && previewPayload?.title) ||
    (isPreview && searchParams.title) ||
    project?.title ||
    '';
  const shortDescription =
    (isPreview && previewPayload?.shortDescription) ||
    (isPreview && searchParams.shortDescription) ||
    project?.shortDescription ||
    '';
  const fullDescription =
    (isPreview && previewPayload?.fullDescription) ||
    (isPreview && searchParams.fullDescription) ||
    project?.fullDescription ||
    '';
  const location = isPreview
    ? previewPayload?.location ?? searchParams.location ?? null
    : project?.location || null;
  const year = isPreview
    ? previewPayload?.year ?? (searchParams.year ? Number(searchParams.year) : null)
    : project?.year ?? null;
  const coverImage =
    (isPreview && previewPayload?.coverImage) ||
    previewCoverImage ||
    project?.coverImage ||
    '';
  const galleryImages =
    (isPreview && previewPayload?.galleryImages) ||
    (previewGalleryImages !== null
      ? previewGalleryImages
      : safeParseArray(project?.galleryImages || '[]'));
  const tags =
    (isPreview && previewPayload?.tags) ||
    (previewTags !== null ? previewTags : safeParseArray(project?.tags || '[]'));

  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 pb-24 pt-10 md:px-10">
      <section className="section-shell p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <h1 className="text-3xl text-mint-500 md:text-4xl">{title}</h1>
            <p className="text-base text-leaf-200/80">{shortDescription}</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-mint-400">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-moss-600/60 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-leaf-200/70">
              {location ? <span>Локация: {location}</span> : null}
              {year ? <span>Год: {year}</span> : null}
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-moss-600/60">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={title || 'Обложка проекта'}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-leaf-200/60">
                Обложка не добавлена
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl text-mint-500">Описание проекта</h2>
        <p className="whitespace-pre-line text-sm text-leaf-200/80 md:text-base">
          {fullDescription}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl text-mint-500">Галерея</h2>
        <LightboxGallery
          images={galleryImages}
          title={title}
        />
      </section>
    </main>
  );
}
