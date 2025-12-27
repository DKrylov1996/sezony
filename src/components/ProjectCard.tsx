import Image from 'next/image';
import Link from 'next/link';

export type ProjectCardData = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  coverImage: string;
  tags: string[];
};

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-moss-600/60 bg-moss-700/70 transition hover:border-mint-500/70"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-xl text-mint-500">{project.title}</h3>
          <p className="text-sm text-leaf-200/80">{project.shortDescription}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-mint-400/90">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-moss-600/60 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
