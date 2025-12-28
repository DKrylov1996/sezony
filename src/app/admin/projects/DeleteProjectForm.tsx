'use client';

import { useRef, useState } from 'react';

type DeleteProjectFormProps = {
  id: string;
  action: (formData: FormData) => void;
};

export default function DeleteProjectForm({ id, action }: DeleteProjectFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function confirmDelete() {
    formRef.current?.requestSubmit();
    setIsOpen(false);
  }

  return (
    <>
      <form ref={formRef} action={action}>
        <input type="hidden" name="id" value={id} />
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full border border-red-400/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-200"
        >
          Удалить
        </button>
      </form>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-moss-900/70 px-4 backdrop-blur">
          <div className="w-full max-w-sm rounded-md border border-moss-600/60 bg-moss-800/95 p-6 text-sm">
            <div className="text-mint-400">Удаление проекта</div>
            <p className="mt-3 text-leaf-200/80">
              Вы точно хотите удалить проект? Это действие нельзя отменить.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={confirmDelete}
                className="rounded-md bg-red-500/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white"
              >
                Удалить
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-moss-600/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-leaf-200/80"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
