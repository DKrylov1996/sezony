import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import ProjectFilters from '@/components/ProjectFilters';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import { prisma } from '@/lib/prisma';
import { resolveHomeContent } from '@/lib/homeContent';
import { getHomePreviewData } from '@/lib/previewStore';
import { getSession } from '@/lib/auth';

export const revalidate = 120;

function safeParseArray(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default async function HomePage({
  searchParams
}: {
  searchParams: { preview?: string; previewKey?: string };
}) {
  const projects = await prisma.project.findMany({
    where: { isPublished: true },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }]
  });

  const entry = await prisma.homePageContent.findFirst({
    orderBy: { updatedAt: 'desc' }
  });
  const isPreview = searchParams.preview === '1';
  let content = resolveHomeContent(entry?.data);

  if (isPreview && searchParams.previewKey) {
    const session = await getSession();
    if (!session) {
      content = resolveHomeContent(entry?.data);
    } else {
      const previewContent = getHomePreviewData(searchParams.previewKey);
      if (previewContent) {
        content = previewContent;
      }
    }
  }

  const projectCards = projects.map((project) => ({
    id: project.id,
    title: project.title,
    slug: project.slug,
    shortDescription: project.shortDescription,
    coverImage: project.coverImage,
    tags: safeParseArray(project.tags)
  }));

  const tags = Array.from(
    new Set(projects.flatMap((project) => safeParseArray(project.tags)))
  ).sort();

  return (
    <main className="space-y-24 px-4 pb-24 pt-10 md:px-10">
      <section className="section-shell mx-auto max-w-6xl p-8 md:p-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6">
            <h1 className="text-3xl font-medium text-mint-500 md:text-5xl">
              {content.hero.title}
            </h1>
            <p className="max-w-2xl text-base text-leaf-200/80 md:text-lg">
              {content.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={content.hero.primaryCtaUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-mint-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-mint-400"
              >
                {content.hero.primaryCtaText}
              </a>
              <Link
                href={content.hero.secondaryCtaUrl}
                className="rounded-md border border-mint-500 px-6 py-3 text-sm font-medium text-mint-500 transition hover:bg-mint-500 hover:text-black"
              >
                {content.hero.secondaryCtaText}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md border border-moss-600/60 md:ml-auto">
            <Image
              src={content.hero.imageUrl}
              alt={content.hero.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 24rem, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss-900/80 via-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow={content.intro.eyebrow}
          title={content.intro.title}
          subtitle={content.intro.subtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.intro.cards.map((item, index) => (
            <div
              key={item.title}
              className={`glass-panel p-6 ${index === 1 ? 'animate-drift' : ''}`}
            >
              <h3 className="text-xl text-mint-500">{item.title}</h3>
              <p className="mt-3 text-sm text-leaf-200/80">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="max-w-4xl text-sm text-leaf-200/80 md:text-base">
          {content.intro.note}
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={content.about.eyebrow}
            title={content.about.title}
            subtitle={content.about.subtitle}
          />
          <div className="space-y-4 text-sm text-leaf-200/80 md:text-base">
            <h3 className="text-lg text-mint-400">{content.about.heading}</h3>
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="rounded-md border border-moss-600/60 bg-moss-700/50 p-4 text-mint-400">
              {content.about.highlight}
            </p>
          </div>
        </div>
        <div className="section-shell p-6">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
            <Image
              src={content.about.imageUrl}
              alt={content.about.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 28rem, 90vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow={content.principles.eyebrow}
          title={content.principles.title}
          subtitle={content.principles.subtitle}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {content.principles.items.map((item, index) => (
            <div key={item.title} className="glass-panel p-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-mint-400">0{index + 1}</span>
                <h3 className="text-xl text-mint-500">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm text-leaf-200/80">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow={content.composition.eyebrow}
          title={content.composition.title}
          subtitle={content.composition.subtitle}
        />
        <div className="text-xs uppercase tracking-[0.3em] text-mint-400">
          {content.composition.label}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-panel p-6">
            <h3 className="text-lg text-mint-500">{content.composition.primaryTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-leaf-200/80">
              {content.composition.primaryItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="glass-panel p-6">
            <h3 className="text-lg text-mint-500">{content.composition.optionalTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-leaf-200/80">
              {content.composition.optionalItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="glass-panel p-6">
            <h3 className="text-lg text-mint-500">{content.composition.additionalTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-leaf-200/80">
              {content.composition.additionalItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href={content.composition.ctaUrl}
          className="inline-flex rounded-md border border-mint-500 px-6 py-3 text-sm font-medium text-mint-500 transition hover:bg-mint-500 hover:text-black"
        >
          {content.composition.ctaText}
        </a>
      </section>

      <section id="projects" className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow={content.projects.eyebrow}
          title={content.projects.title}
          subtitle={content.projects.subtitle}
        />
        <ProjectFilters projects={projectCards} tags={tags} />
      </section>

      <section className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow={content.faq.eyebrow}
          title={content.faq.title}
          subtitle={content.faq.subtitle}
        />
        <Faq items={content.faq.items} />
      </section>

      <section id="contact" className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow={content.contact.eyebrow}
          title={content.contact.title}
          subtitle={content.contact.subtitle}
        />
        <ContactForm />
      </section>
    </main>
  );
}
