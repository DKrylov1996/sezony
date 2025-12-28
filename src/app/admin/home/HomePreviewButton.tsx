'use client';

import { buildHomeContentFromFormData } from '@/lib/homeContentForm';
import type { HomeContent } from '@/lib/homeContent';

type HomePreviewButtonProps = {
  baseContent: HomeContent;
};

export default function HomePreviewButton({ baseContent }: HomePreviewButtonProps) {
  async function onPreviewClick(event: React.MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form) return;

    const formData = new FormData(form);
    const content = buildHomeContentFromFormData(formData, baseContent);

    try {
      const response = await fetch('/api/home-preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
      });
      const data = (await response.json()) as { key?: string };
      if (response.ok && data.key) {
        const url = new URL('/', window.location.origin);
        url.searchParams.set('preview', '1');
        url.searchParams.set('previewKey', data.key);
        window.open(url.toString(), '_blank', 'noopener,noreferrer');
        return;
      }
    } catch {
      // ignore and fall through
    }

    window.open('/', '_blank', 'noopener,noreferrer');
  }

  return (
    <button
      type="button"
      onClick={onPreviewClick}
      className="rounded-md border border-mint-500 bg-moss-800/90 px-6 py-3 text-sm font-medium text-mint-500"
    >
      Предпросмотр
    </button>
  );
}
