import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { createAdminAction, deleteAdminAction } from './actions';

export const dynamic = 'force-dynamic';

type SearchParams = {
  created?: string;
  deleted?: string;
  error?: string;
};

function resolveNotice(params?: SearchParams) {
  if (!params) return null;
  if (params.created) return { text: 'Администратор добавлен.', tone: 'ok' };
  if (params.deleted) return { text: 'Администратор удален.', tone: 'ok' };

  switch (params.error) {
    case 'invalid':
      return { text: 'Проверьте email и пароль (минимум 6 символов).', tone: 'error' };
    case 'duplicate':
      return { text: 'Администратор с таким email уже есть.', tone: 'error' };
    case 'self':
      return { text: 'Нельзя удалить текущую учетную запись.', tone: 'error' };
    case 'last':
      return { text: 'Нельзя удалить последнего администратора.', tone: 'error' };
    default:
      return null;
  }
}

export default async function AdminAdminsPage({
  searchParams
}: {
  searchParams?: SearchParams;
}) {
  const [admins, session] = await Promise.all([
    prisma.adminUser.findMany({ orderBy: { createdAt: 'asc' } }),
    getSession()
  ]);

  const notice = resolveNotice(searchParams);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl text-mint-500">Администраторы</h1>
        <p className="text-sm text-leaf-200/70">
          Добавляйте новые учетные записи и управляйте доступом к админ-панели.
        </p>
        {notice ? (
          <p
            className={
              notice.tone === 'ok'
                ? 'text-sm text-mint-400'
                : 'text-sm text-rose-300'
            }
          >
            {notice.text}
          </p>
        ) : null}
      </div>

      <section className="space-y-4 rounded-md border border-moss-700 bg-moss-800/60 p-6">
        <h2 className="text-lg text-mint-400">Новый администратор</h2>
        <form action={createAdminAction} className="grid gap-4 md:grid-cols-3">
          <input
            name="email"
            type="email"
            placeholder="email"
            className="rounded-md border border-moss-600/60 bg-moss-900/60 px-4 py-3 text-sm"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Пароль (мин. 6)"
            className="rounded-md border border-moss-600/60 bg-moss-900/60 px-4 py-3 text-sm"
            required
            minLength={6}
          />
          <button
            type="submit"
            className="rounded-full border border-mint-500 px-4 py-3 text-xs uppercase tracking-[0.2em] text-mint-400"
          >
            Добавить
          </button>
        </form>
      </section>

      <section className="space-y-4">
        {admins.map((admin) => {
          const isCurrent = session?.id === admin.id;
          return (
            <div
              key={admin.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-md border border-moss-700 bg-moss-800/80 p-6"
            >
              <div className="space-y-1">
                <div className="text-lg text-mint-400">
                  {admin.email}
                  {isCurrent ? (
                    <span className="ml-3 text-xs uppercase tracking-[0.2em] text-mint-300/80">
                      Вы
                    </span>
                  ) : null}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-leaf-200/60">
                  Создан: {admin.createdAt.toLocaleString('ru-RU')}
                </div>
              </div>
              <div>
                {isCurrent ? (
                  <span className="text-xs uppercase tracking-[0.2em] text-leaf-200/50">
                    Текущий аккаунт
                  </span>
                ) : (
                  <form action={deleteAdminAction}>
                    <input type="hidden" name="id" value={admin.id} />
                    <button
                      type="submit"
                      className="rounded-full border border-rose-400/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-rose-200"
                    >
                      Удалить
                    </button>
                  </form>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
