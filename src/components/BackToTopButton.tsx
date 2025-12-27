'use client';

import { useEffect, useState } from 'react';

const SHOW_AFTER_PX = 300;

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Наверх"
      className="fixed bottom-6 right-6 z-50 rounded-full border border-moss-600/60 bg-moss-800/90 px-4 py-3 text-xs uppercase tracking-[0.3em] text-mint-500 shadow-lg transition hover:-translate-y-0.5 hover:bg-moss-700/90"
    >
      Наверх
    </button>
  );
}
