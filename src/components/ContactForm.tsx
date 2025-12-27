'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error || 'Не удалось отправить заявку.');
      setStatus('error');
      return;
    }

    form.reset();
    setStatus('success');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Ваше имя"
          className="rounded-md border border-moss-600/60 bg-moss-700/70 px-4 py-3 text-sm"
        />
        <input
          name="phone"
          placeholder="Телефон"
          className="rounded-md border border-moss-600/60 bg-moss-700/70 px-4 py-3 text-sm"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full rounded-md border border-moss-600/60 bg-moss-700/70 px-4 py-3 text-sm"
      />
      <textarea
        required
        name="message"
        placeholder="Расскажите о вашем участке"
        rows={5}
        className="w-full rounded-md border border-moss-600/60 bg-moss-700/70 px-4 py-3 text-sm"
      />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-md bg-mint-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-mint-400"
        >
          {status === 'loading' ? 'Отправка...' : 'Задать свой вопрос'}
        </button>
        {status === 'success' ? (
          <span className="text-sm text-mint-400">Спасибо! Мы скоро свяжемся.</span>
        ) : null}
        {status === 'error' && error ? (
          <span className="text-sm text-red-200">{error}</span>
        ) : null}
      </div>
    </form>
  );
}
