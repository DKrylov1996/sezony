import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="w-full border-b border-moss-700/70 bg-moss-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-10">
        <div className="flex items-center gap-3 text-mint-500">
          <Link href="/" className="group inline-flex">
            <img
              src="/uploads/logo.jpg"
              alt="СЕЗОНЫ"
              className="h-16 w-16 shrink-0 rounded-md border border-moss-600/60 bg-moss-800/80 p-1 object-cover transition-transform duration-200 ease-out group-hover:scale-105"
            />
          </Link>
          <a
            href="https://t.me/sezons_mgn"
            className="text-sm uppercase tracking-[0.3em] hover:underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Ссылка на наш телеграм канал
          </a>
        </div>
      </div>
    </header>
  );
}
