import { prisma } from '@/lib/prisma';
import { resolveHomeContent } from '@/lib/homeContent';
import { saveHomeContentAction } from './actions';
import ImageField from './ImageField';
import HomePreviewButton from './HomePreviewButton';
import SaveToast from './SaveToast';
import { Suspense } from 'react';

function joinParagraphs(items: string[]) {
  return items.join('\n\n');
}

function joinLines(items: string[]) {
  return items.join('\n');
}

export default async function AdminHomePage() {
  const entry = await prisma.homePageContent.findFirst({
    orderBy: { updatedAt: 'desc' }
  });
  const content = resolveHomeContent(entry?.data);

  return (
    <>
      <Suspense fallback={null}>
        <SaveToast />
      </Suspense>
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-2xl text-mint-500">Главная страница</h1>
          <p className="text-sm text-leaf-200/70">
            Редактируйте тексты и ссылки на изображения. Для списков используйте по одной
            строке на пункт.
          </p>
        </div>

        <form action={saveHomeContentAction} className="space-y-10 pb-24">
        <section className="space-y-4 rounded-md border border-moss-700/70 p-6">
          <h2 className="text-lg text-mint-400">Hero</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="hero.title"
              defaultValue={content.hero.title}
              placeholder="Заголовок"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <ImageField name="hero.imageUrl" defaultValue={content.hero.imageUrl} />
          </div>
          <textarea
            name="hero.description"
            defaultValue={content.hero.description}
            placeholder="Описание"
            rows={4}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="hero.primaryCtaText"
              defaultValue={content.hero.primaryCtaText}
              placeholder="Текст кнопки 1"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="hero.primaryCtaUrl"
              defaultValue={content.hero.primaryCtaUrl}
              placeholder="Ссылка кнопки 1"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="hero.secondaryCtaText"
              defaultValue={content.hero.secondaryCtaText}
              placeholder="Текст кнопки 2"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="hero.secondaryCtaUrl"
              defaultValue={content.hero.secondaryCtaUrl}
              placeholder="Ссылка кнопки 2"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
          <input
            name="hero.imageAlt"
            defaultValue={content.hero.imageAlt}
            placeholder="Alt для картинки"
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
        </section>

        <section className="space-y-4 rounded-md border border-moss-700/70 p-6">
          <h2 className="text-lg text-mint-400">Интро</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="intro.eyebrow"
              defaultValue={content.intro.eyebrow}
              placeholder="Eyebrow"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="intro.title"
              defaultValue={content.intro.title}
              placeholder="Заголовок"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            name="intro.subtitle"
            defaultValue={content.intro.subtitle}
            placeholder="Подзаголовок"
            rows={3}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {content.intro.cards.map((card, index) => (
              <div key={index} className="space-y-3 rounded-md border border-moss-700/70 p-4">
                <input
                  name={`intro.cards.${index}.title`}
                  defaultValue={card.title}
                  placeholder={`Карточка ${index + 1}: заголовок`}
                  className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
                />
                <textarea
                  name={`intro.cards.${index}.text`}
                  defaultValue={card.text}
                  placeholder={`Карточка ${index + 1}: текст`}
                  rows={4}
                  className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
                />
              </div>
            ))}
          </div>
          <textarea
            name="intro.note"
            defaultValue={content.intro.note}
            placeholder="Примечание"
            rows={4}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
        </section>

        <section className="space-y-4 rounded-md border border-moss-700/70 p-6">
          <h2 className="text-lg text-mint-400">О нас</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="about.eyebrow"
              defaultValue={content.about.eyebrow}
              placeholder="Eyebrow"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="about.title"
              defaultValue={content.about.title}
              placeholder="Заголовок"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            name="about.subtitle"
            defaultValue={content.about.subtitle}
            placeholder="Подзаголовок"
            rows={3}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <input
            name="about.heading"
            defaultValue={content.about.heading}
            placeholder="Заголовок блока"
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <textarea
            name="about.paragraphs"
            defaultValue={joinParagraphs(content.about.paragraphs)}
            placeholder="Абзацы (разделяйте пустой строкой)"
            rows={8}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <textarea
            name="about.highlight"
            defaultValue={content.about.highlight}
            placeholder="Выделенный текст"
            rows={3}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <ImageField name="about.imageUrl" defaultValue={content.about.imageUrl} />
            <input
              name="about.imageAlt"
              defaultValue={content.about.imageAlt}
              placeholder="Alt для картинки"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
        </section>

        <section className="space-y-4 rounded-md border border-moss-700/70 p-6">
          <h2 className="text-lg text-mint-400">Принципы</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="principles.eyebrow"
              defaultValue={content.principles.eyebrow}
              placeholder="Eyebrow"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="principles.title"
              defaultValue={content.principles.title}
              placeholder="Заголовок"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            name="principles.subtitle"
            defaultValue={content.principles.subtitle}
            placeholder="Подзаголовок"
            rows={3}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {content.principles.items.map((item, index) => (
              <div key={index} className="space-y-3 rounded-md border border-moss-700/70 p-4">
                <input
                  name={`principles.items.${index}.title`}
                  defaultValue={item.title}
                  placeholder={`Принцип ${index + 1}: заголовок`}
                  className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
                />
                <textarea
                  name={`principles.items.${index}.description`}
                  defaultValue={item.description}
                  placeholder={`Принцип ${index + 1}: описание`}
                  rows={4}
                  className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-md border border-moss-700/70 p-6">
          <h2 className="text-lg text-mint-400">Состав проекта</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="composition.eyebrow"
              defaultValue={content.composition.eyebrow}
              placeholder="Eyebrow"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="composition.title"
              defaultValue={content.composition.title}
              placeholder="Заголовок"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            name="composition.subtitle"
            defaultValue={content.composition.subtitle}
            placeholder="Подзаголовок"
            rows={3}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <input
            name="composition.label"
            defaultValue={content.composition.label}
            placeholder="Подпись"
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-3">
              <input
                name="composition.primaryTitle"
                defaultValue={content.composition.primaryTitle}
                placeholder="Заголовок колонки 1"
                className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
              />
              <textarea
                name="composition.primaryItems"
                defaultValue={joinLines(content.composition.primaryItems)}
                placeholder="Пункты (по одному в строке)"
                rows={8}
                className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-3">
              <input
                name="composition.optionalTitle"
                defaultValue={content.composition.optionalTitle}
                placeholder="Заголовок колонки 2"
                className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
              />
              <textarea
                name="composition.optionalItems"
                defaultValue={joinLines(content.composition.optionalItems)}
                placeholder="Пункты (по одному в строке)"
                rows={8}
                className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-3">
              <input
                name="composition.additionalTitle"
                defaultValue={content.composition.additionalTitle}
                placeholder="Заголовок колонки 3"
                className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
              />
              <textarea
                name="composition.additionalItems"
                defaultValue={joinLines(content.composition.additionalItems)}
                placeholder="Пункты (по одному в строке)"
                rows={8}
                className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="composition.ctaText"
              defaultValue={content.composition.ctaText}
              placeholder="Текст кнопки"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="composition.ctaUrl"
              defaultValue={content.composition.ctaUrl}
              placeholder="Ссылка кнопки"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
        </section>

        <section className="space-y-4 rounded-md border border-moss-700/70 p-6">
          <h2 className="text-lg text-mint-400">Проекты</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="projects.eyebrow"
              defaultValue={content.projects.eyebrow}
              placeholder="Eyebrow"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="projects.title"
              defaultValue={content.projects.title}
              placeholder="Заголовок"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            name="projects.subtitle"
            defaultValue={content.projects.subtitle}
            placeholder="Подзаголовок"
            rows={3}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
        </section>

        <section className="space-y-4 rounded-md border border-moss-700/70 p-6">
          <h2 className="text-lg text-mint-400">FAQ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="faq.eyebrow"
              defaultValue={content.faq.eyebrow}
              placeholder="Eyebrow"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="faq.title"
              defaultValue={content.faq.title}
              placeholder="Заголовок"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            name="faq.subtitle"
            defaultValue={content.faq.subtitle}
            placeholder="Подзаголовок"
            rows={3}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {content.faq.items.map((item, index) => (
              <div key={index} className="space-y-3 rounded-md border border-moss-700/70 p-4">
                <input
                  name={`faq.items.${index}.question`}
                  defaultValue={item.question}
                  placeholder={`Вопрос ${index + 1}`}
                  className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
                />
                <textarea
                  name={`faq.items.${index}.answer`}
                  defaultValue={item.answer}
                  placeholder={`Ответ ${index + 1}`}
                  rows={4}
                  className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-3 py-2 text-sm"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-md border border-moss-700/70 p-6">
          <h2 className="text-lg text-mint-400">Контакты</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="contact.eyebrow"
              defaultValue={content.contact.eyebrow}
              placeholder="Eyebrow"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
            <input
              name="contact.title"
              defaultValue={content.contact.title}
              placeholder="Заголовок"
              className="rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            name="contact.subtitle"
            defaultValue={content.contact.subtitle}
            placeholder="Подзаголовок"
            rows={3}
            className="w-full rounded-md border border-moss-600/60 bg-moss-800/80 px-4 py-3 text-sm"
          />
        </section>

        <div className="fixed bottom-6 right-44 z-40 flex items-center gap-3">
          <HomePreviewButton baseContent={content} />
          <button
            type="submit"
            className="rounded-md bg-mint-500 px-6 py-3 text-sm font-medium text-black"
          >
            Сохранить
          </button>
        </div>
        </form>
      </div>
    </>
  );
}
