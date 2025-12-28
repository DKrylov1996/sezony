'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SaveToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const saved = searchParams.get('saved') === '1';
  const [visible, setVisible] = useState(saved);

  useEffect(() => {
    if (!saved) return;
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      const params = new URLSearchParams(searchParams.toString());
      params.delete('saved');
      const next = params.toString();
      router.replace(next ? `/admin/home?${next}` : '/admin/home');
    }, 2500);

    return () => clearTimeout(timer);
  }, [router, saved, searchParams]);

  if (!visible) return null;

  return (
    <div className="fixed left-6 top-20 z-40 rounded-md border border-moss-600/60 bg-moss-800/90 px-4 py-3 text-sm text-mint-400 shadow-lg">
      Изменения сохранены
    </div>
  );
}
