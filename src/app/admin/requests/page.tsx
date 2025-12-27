import { prisma } from '@/lib/prisma';
import { markRequestAction } from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminRequestsPage() {
  const requests = await prisma.contactRequest.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-mint-500">Заявки</h1>
      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="rounded-md border border-moss-700 bg-moss-800/80 p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-lg text-mint-400">{request.name}</div>
                <div className="text-sm text-leaf-200/70">
                  {request.email || 'Email не указан'}
                </div>
                <div className="text-sm text-leaf-200/70">
                  {request.phone || 'Телефон не указан'}
                </div>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-leaf-200/60">
                {request.createdAt.toLocaleString('ru-RU')}
              </div>
            </div>
            <p className="mt-4 text-sm text-leaf-200/80">{request.message}</p>
            <div className="mt-4">
              {request.isProcessed ? (
                <span className="text-mint-400">Обработано</span>
              ) : (
                <form action={markRequestAction}>
                  <input type="hidden" name="id" value={request.id} />
                  <button
                    type="submit"
                    className="rounded-full border border-mint-500 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mint-400"
                  >
                    Пометить обработанным
                  </button>
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
