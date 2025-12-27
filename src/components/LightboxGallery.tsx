'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type LightboxGalleryProps = {
  images: string[];
  title: string;
};

export default function LightboxGallery({ images, title }: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (activeIndex === null) return;
      if (event.key === 'Escape') {
        setActiveIndex(null);
        return;
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? prev : (prev + 1) % images.length
        );
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? prev : (prev - 1 + images.length) % images.length
        );
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length]);

  if (!images.length) return null;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-md border border-moss-600/60"
          >
            <Image
              src={src}
              alt={`${title} фото ${index + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-zoom-out"
            onClick={() => setActiveIndex(null)}
            aria-label="Закрыть"
          />
          <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-4">
            <img
              src={images[activeIndex]}
              alt={`${title} фото ${activeIndex + 1}`}
              className="max-h-[85vh] w-auto max-w-[90vw] rounded-md border border-moss-600/60 object-contain"
            />
            <div className="flex w-full max-w-[90vw] items-center justify-between text-sm text-leaf-200/80">
              <span>
                {activeIndex + 1} / {images.length}
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === null ? prev : (prev - 1 + images.length) % images.length
                    )
                  }
                  className="rounded-full border border-moss-600/70 px-4 py-2"
                >
                  Назад
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === null ? prev : (prev + 1) % images.length
                    )
                  }
                  className="rounded-full border border-moss-600/70 px-4 py-2"
                >
                  Вперед
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
