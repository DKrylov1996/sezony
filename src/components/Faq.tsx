'use client';

import { useState } from 'react';

export type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <FaqRow key={item.question} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

function FaqRow({
  item,
  defaultOpen
}: {
  item: FaqItem;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <button
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      className="w-full rounded-md border border-moss-600/60 bg-moss-700/60 p-5 text-left transition hover:border-mint-500/60"
    >
      <div className="flex items-center justify-between gap-6">
        <span className="text-base text-mint-500 md:text-lg">{item.question}</span>
        <span className="text-mint-500">{open ? '—' : '+'}</span>
      </div>
      {open ? (
        <p className="mt-4 text-sm text-leaf-200/80 md:text-base">{item.answer}</p>
      ) : null}
    </button>
  );
}
