'use client';

import { useMemo, useState } from 'react';
import ProjectCard, { ProjectCardData } from './ProjectCard';

export default function ProjectFilters({
  projects,
  tags
}: {
  projects: ProjectCardData[];
  tags: string[];
}) {
  const [activeTag, setActiveTag] = useState('Все');

  const filtered = useMemo(() => {
    if (activeTag === 'Все') return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {['Все', ...tags].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
              activeTag === tag
                ? 'border-mint-500 bg-mint-500 text-black'
                : 'border-moss-600/60 text-leaf-200/80 hover:border-mint-500/70'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
