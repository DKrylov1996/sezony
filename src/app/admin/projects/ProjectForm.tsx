'use client';

import { useMemo, useRef, useState } from 'react';
import { createSlug } from '@/lib/slug';

type ProjectFormData = {
  id?: string;
  title?: string;
  slug?: string;
  shortDescription?: string;
  fullDescription?: string;
  location?: string | null;
  year?: number | null;
  tags?: string[];
  coverImage?: string;
  galleryImages?: string[];
  isPublished?: boolean;
  sortOrder?: number;
};

export default function ProjectForm({
  action,
  project
}: {
  action: (formData: FormData) => void;
  project?: ProjectFormData;
}) {
  const [coverImage, setCoverImage] = useState(project?.coverImage || '');
  const [galleryImages, setGalleryImages] = useState<string[]>(
    project?.galleryImages || []
  );
  const [uploading, setUploading] = useState(false);
  const [slugValue, setSlugValue] = useState(project?.slug || '');
  const [slugEdited, setSlugEdited] = useState(Boolean(project?.slug));
  const formRef = useRef<HTMLFormElement>(null);

  const tagsValue = useMemo(() => (project?.tags || []).join(', '), [project]);

  async function uploadFiles(files: FileList | null) {
    if (!files?.length) return;
    setUploading(true);

    const uploaded: string[] = [];
    for (const file of Array.from(files)) {
      const body = new FormData();
      body.append('file', file);
      const response = await fetch('/api/uploads', {
        method: 'POST',
        body
      });
      const data = await response.json();
      if (response.ok) {
        uploaded.push(data.url);
      }
    }

    setGalleryImages((prev) => [...prev, ...uploaded]);
    setUploading(false);
  }

  async function uploadCover(file: File | null) {
    if (!file) return;
    setUploading(true);
    const body = new FormData();
    body.append('file', file);
    const response = await fetch('/api/uploads', {
      method: 'POST',
      body
    });
    const data = await response.json();
    if (response.ok) {
      setCoverImage(data.url);
    }
    setUploading(false);
  }

  function onDragStart(event: React.DragEvent<HTMLDivElement>, index: number) {
    event.dataTransfer.setData('text/plain', index.toString());
  }

  function onDrop(event: React.DragEvent<HTMLDivElement>, index: number) {
    const from = Number(event.dataTransfer.getData('text/plain'));
    if (Number.isNaN(from)) return;
    event.preventDefault();

    setGalleryImages((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(index, 0, moved);
      return next;
    });
  }

  function onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (slugEdited) return;
    setSlugValue(createSlug(event.target.value));
  }

  function onSlugChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSlugValue(value);
    setSlugEdited(value.trim().length > 0);
  }

  function openPreview() {
    const formData = formRef.current ? new FormData(formRef.current) : null;
    const title = formData?.get('title')?.toString() || '';
    const slugInput = formData?.get('slug')?.toString() || '';
    const shortDescription = formData?.get('shortDescription')?.toString() || '';
    const fullDescription = formData?.get('fullDescription')?.toString() || '';
    const location = formData?.get('location')?.toString() || '';
    const year = formData?.get('year')?.toString() || '';
    const tagsRaw = formData?.get('tags')?.toString() || '';
    const tags = tagsRaw
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
    const payload = {
      title,
      slug: slugInput,
      shortDescription,
      fullDescription,
      location: location || null,
      year: year ? Number(year) : null,
      tags,
      coverImage,
      galleryImages
    };

    const slugForPreview = slugInput || title || 'preview';
    const url = new URL(`/projects/${slugForPreview}`, window.location.origin);
    url.searchParams.set('preview', '1');

    fetch('/api/preview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(async (response) => {
        if (response.ok) {
          const data = (await response.json()) as { key?: string };
          if (data.key) {
            url.searchParams.set('previewKey', data.key);
            window.open(url.toString(), '_blank', 'noopener,noreferrer');
            return;
          }
        }

        if (title) url.searchParams.set('title', title);
        if (slugInput) url.searchParams.set('slug', slugInput);
        if (shortDescription) url.searchParams.set('shortDescription', shortDescription);
        if (fullDescription) url.searchParams.set('fullDescription', fullDescription);
        if (location) url.searchParams.set('location', location);
        if (year) url.searchParams.set('year', year);
        if (tags.length) url.searchParams.set('tags', JSON.stringify(tags));
        if (coverImage) {
          url.searchParams.set('coverImage', coverImage);
        }
        if (galleryImages.length) {
          url.searchParams.set('galleryImages', JSON.stringify(galleryImages));
        }
        window.open(url.toString(), '_blank', 'noopener,noreferrer');
      })
      .catch(() => {
        if (title) url.searchParams.set('title', title);
        if (slugInput) url.searchParams.set('slug', slugInput);
        if (shortDescription) url.searchParams.set('shortDescription', shortDescription);
        if (fullDescription) url.searchParams.set('fullDescription', fullDescription);
        if (location) url.searchParams.set('location', location);
        if (year) url.searchParams.set('year', year);
        if (tags.length) url.searchParams.set('tags', JSON.stringify(tags));
        if (coverImage) {
          url.searchParams.set('coverImage', coverImage);
        }
        if (galleryImages.length) {
          url.searchParams.set('galleryImages', JSON.stringify(galleryImages));
        }
        window.open(url.toString(), '_blank', 'noopener,noreferrer');
      });
  }

  return (
    <form ref={formRef} action={action} className="space-y-6">
      {project?.id ? <input type="hidden" name="id" value={project.id} /> : null}
      <input type="hidden" name="coverImage" value={coverImage} />
      <input
        type="hidden"
        name="galleryImages"
        value={JSON.stringify(galleryImages)}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="title"
          required
          defaultValue={project?.title}
          onChange={onTitleChange}
          placeholder="Название проекта"
          className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
        />
        <input
          name="slug"
          value={slugValue}
          onChange={onSlugChange}
          placeholder="Slug (если пусто - создается автоматически)"
          className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="shortDescription"
          defaultValue={project?.shortDescription}
          placeholder="Краткое описание"
          className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
        />
        <input
          name="tags"
          defaultValue={tagsValue}
          placeholder="Теги (через запятую)"
          className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
        />
      </div>

      <textarea
        name="fullDescription"
        defaultValue={project?.fullDescription}
        placeholder="Полное описание"
        rows={6}
        className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <input
          name="location"
          defaultValue={project?.location || ''}
          placeholder="Локация"
          className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
        />
        <input
          name="year"
          type="number"
          defaultValue={project?.year ?? undefined}
          placeholder="Год"
          className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
        />
        <input
          name="sortOrder"
          type="number"
          defaultValue={project?.sortOrder ?? 0}
          placeholder="Порядок"
          className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-leaf-200/80">
        <input
          type="checkbox"
          name="isPublished"
          defaultChecked={project?.isPublished}
        />
        Опубликован
      </label>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <div className="text-sm text-mint-400">Обложка проекта</div>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => uploadCover(event.target.files?.[0] || null)}
            className="w-full text-sm"
          />
          {coverImage ? (
            <div className="rounded-md border border-moss-600/60 bg-moss-800/80 p-3 text-xs text-leaf-200/70">
              {coverImage}
            </div>
          ) : null}
        </div>
        <div className="space-y-3">
          <div className="text-sm text-mint-400">Галерея</div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(event) => uploadFiles(event.target.files)}
            className="w-full text-sm"
          />
          <p className="text-xs text-leaf-200/60">
            Перетаскивайте изображения для изменения порядка.
          </p>
          <div className="space-y-2">
            {galleryImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                draggable
                onDragStart={(event) => onDragStart(event, index)}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => onDrop(event, index)}
                className="flex items-center justify-between gap-3 rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-xs"
              >
                <span className="break-all text-leaf-200/70">{src}</span>
                <button
                  type="button"
                  onClick={() =>
                    setGalleryImages((prev) => prev.filter((_, i) => i !== index))
                  }
                  className="rounded-full border border-red-400/60 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-red-200"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={uploading}
          className="rounded-md bg-mint-500 px-6 py-3 text-sm font-medium text-black"
        >
          {uploading ? 'Загрузка...' : 'Сохранить'}
        </button>
        <button
          type="button"
          onClick={openPreview}
          className="rounded-md border border-mint-500 px-6 py-3 text-sm font-medium text-mint-500"
        >
          Предпросмотр
        </button>
      </div>
    </form>
  );
}
