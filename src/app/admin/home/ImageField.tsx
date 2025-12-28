'use client';

import { useState } from 'react';

type ImageFieldProps = {
  name: string;
  defaultValue?: string;
  placeholder?: string;
};

export default function ImageField({
  name,
  defaultValue = '',
  placeholder = 'URL картинки'
}: ImageFieldProps) {
  const [value, setValue] = useState(defaultValue);
  const [uploading, setUploading] = useState(false);

  async function onUpload(file: File | null) {
    if (!file) return;
    setUploading(true);

    const body = new FormData();
    body.append('file', file);

    try {
      const response = await fetch('/api/uploads', {
        method: 'POST',
        body
      });
      const data = await response.json();
      if (response.ok && data.url) {
        setValue(data.url);
      }
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-2">
      <input
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(event) => onUpload(event.target.files?.[0] || null)}
        className="w-full text-xs"
      />
      {uploading ? (
        <div className="text-xs text-leaf-200/70">Загрузка...</div>
      ) : null}
    </div>
  );
}
