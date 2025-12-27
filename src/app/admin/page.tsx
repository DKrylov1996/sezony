import Link from 'next/link';

export default function AdminLogin({
  searchParams
}: {
  searchParams: { error?: string };
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-moss-900 px-4">
      <form
        action="/api/auth/login"
        method="post"
        className="w-full max-w-md space-y-6 rounded-md border border-moss-700 bg-moss-800/80 p-8"
      >
        <div className="space-y-2">
          <h1 className="text-2xl text-mint-500">Вход в админ-панель</h1>
          <p className="text-sm text-leaf-200/70">
            Используйте логин и пароль администратора.
          </p>
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-md border border-moss-600/60 bg-moss-700/70 px-4 py-3 text-sm"
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          required
          className="w-full rounded-md border border-moss-600/60 bg-moss-700/70 px-4 py-3 text-sm"
        />
        {searchParams.error ? (
          <p className="text-sm text-red-200">Неверные данные для входа.</p>
        ) : null}
        <button
          type="submit"
          className="w-full rounded-md bg-mint-500 px-6 py-3 text-sm font-medium text-black"
        >
          Войти
        </button>
        <Link href="/" className="block text-center text-xs uppercase tracking-[0.2em] text-mint-400">
          На сайт
        </Link>
      </form>
    </main>
  );
}
