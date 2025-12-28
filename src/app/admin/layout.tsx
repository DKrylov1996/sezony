import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-moss-900 text-leaf-200">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-moss-700 px-6 py-4">
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-mint-400">
          <span className="accent-dot" />
          Админ панель
        </div>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
          <Link href="/admin/projects" className="rounded-full border border-moss-600/70 px-4 py-2">
            Проекты
          </Link>
          <Link href="/admin/home" className="rounded-full border border-moss-600/70 px-4 py-2">
            Главная
          </Link>
          <Link href="/admin/requests" className="rounded-full border border-moss-600/70 px-4 py-2">
            Заявки
          </Link>
          <Link href="/admin/admins" className="rounded-full border border-moss-600/70 px-4 py-2">
            Админы
          </Link>
          <form action="/api/auth/logout" method="post">
            <button type="submit" className="rounded-full border border-mint-500 px-4 py-2 text-mint-400">
              Выйти
            </button>
          </form>
        </div>
      </nav>
      <main className="px-6 py-10">{children}</main>
    </div>
  );
}
