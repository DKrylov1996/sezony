import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import ProjectFilters from '@/components/ProjectFilters';
import Faq, { type FaqItem } from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import { prisma } from '@/lib/prisma';

export const revalidate = 120;

const faqItems: FaqItem[] = [
  {
    question: 'Сколько времени занимает разработка проекта?',
    answer:
      'Сроки зависят от масштаба и сложности проекта. Проектирование обычно занимает от 30 рабочих дней.'
  },
  {
    question: 'Какой минимальный бюджет необходим для ландшафтного дизайна?',
    answer:
      'Стоимость проекта формируется индивидуально после детального анализа участка и обсуждения ваших пожеланий. Минимальная стоимость - 40 000 рублей.'
  },
  {
    question: 'Возможно ли удаленное проектирование?',
    answer:
      'Основная деятельность СЕЗОНЫ сосредоточена в Уральском регионе, где мы используем растения, адаптированные к местному климату. Однако мы готовы рассмотреть проекты в других регионах.'
  },
  {
    question: 'Могу ли я посетить ваш питомник растений?',
    answer: 'Мы работаем над этим и скоро откроем площадку для посещений.'
  },
  {
    question: 'Возможна ли реализация проекта "под ключ"?',
    answer:
      'Да, мы осуществляем реализацию своих проектов с апреля по ноябрь. Также можно заказать растения с доставкой из проверенных питомников-партнеров.'
  },
  {
    question: 'Когда возможен выезд специалиста на замер?',
    answer: 'Осмотр и замер участка возможен до установления снежного покрова.'
  },
  {
    question: 'Какой порядок оплаты?',
    answer: 'Предоплата составляет 50% стоимости на момент заключения договора.'
  },
  {
    question: 'Предоставляете ли вы услуги по уходу за садом после завершения проекта?',
    answer:
      'Да, мы предлагаем комплексные услуги по дальнейшему уходу за садом, чтобы он радовал вас долгие годы. Это включает сезонные работы, обрезку, подкормку и консультации.'
  },
  {
    question: 'Возможно ли проектирование коммерческих объектов?',
    answer:
      'Да, мы проектируем как прилегающие территории коммерческой недвижимости, так и целые поселки.'
  }
];

const principles = [
  {
    title: 'Простота',
    description:
      'Чистые линии, понятная композиция и гармоничные сочетания дают возможность остановиться, выдохнуть и почувствовать себя.'
  },
  {
    title: 'Природные материалы',
    description:
      'Каменные глыбы, ступени из горного массива и локальные породы создают характер сада и живут веками.'
  },
  {
    title: 'Понятный уход',
    description:
      'Мы создаем устойчивые композиции из растений, которые требуют минимального ухода, но дают максимальный эффект.'
  },
  {
    title: 'Инженерные системы',
    description:
      'Каждый сад - это продуманная система полива, дренажа, освещения и коммуникаций с проработкой деталей.'
  },
  {
    title: 'Индивидуальность',
    description:
      'Каждый проект рождается из ваших мечтаний, привычек и образа жизни. Мы создаем сад именно для вас.'
  }
];

const projectComposition = [
  'Общий план участка',
  'План мощения',
  'План освещения',
  'План ливневой канализации',
  'Посадочный план',
  'План полива',
  '3D-визуализация участка со всех ракурсов',
  'Анимационный ролик «Прогулка по саду»'
];

const optionalComposition = [
  'При разноуровневом участке - разрезы с указанием',
  'Разрезы',
  'Аксонометрические проекции',
  'План заборов и ограждений'
];

const additionalComposition = [
  'Решение по отделке фасадов',
  'Новогоднее освещение',
  'Планировка второстепенных построек'
];

function safeParseArray(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const projects = await prisma.project.findMany({
    where: { isPublished: true },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }]
  });

  const projectCards = projects.map((project) => ({
    id: project.id,
    title: project.title,
    slug: project.slug,
    shortDescription: project.shortDescription,
    coverImage: project.coverImage,
    tags: safeParseArray(project.tags)
  }));

  const tags = Array.from(
    new Set(projects.flatMap((project) => safeParseArray(project.tags)))
  ).sort();

  return (
    <main className="space-y-24 px-4 pb-24 pt-10 md:px-10">
      <section className="section-shell mx-auto max-w-6xl p-8 md:p-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6">
            <h1 className="text-3xl font-medium text-mint-500 md:text-5xl">
              СЕЗОНЫ - студия ландшафтного дизайна и сад растений
            </h1>
            <p className="max-w-2xl text-base text-leaf-200/80 md:text-lg">
              Мастерская полного цикла: создаем сады от первого эскиза до финального штриха
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="http://t.me/KostiuchenkoPolina"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-mint-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-mint-400"
              >
                Рассчитать стоимость
              </a>
              <Link
                href="#projects"
                className="rounded-md border border-mint-500 px-6 py-3 text-sm font-medium text-mint-500 transition hover:bg-mint-500 hover:text-black"
              >
                Наши работы
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md border border-moss-600/60 md:ml-auto">
            <Image
              src="/uploads/mainphoto.jpg"
              alt="Project photo"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 24rem, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss-900/80 via-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Полный цикл создания сада"
          title="СЕЗОНЫ - это семейная мастерская полного цикла"
          subtitle="Мы сопровождаем каждый проект от первой идеи до момента, когда вы впервые ступите на дорожку своего обновлённого пространства."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Проектирование',
              text: 'Индивидуальный подход к каждому участку с учетом ваших желаний и особенностей ландшафта.'
            },
            {
              title: 'Собственный питомник',
              text: 'Растения, выращенные с заботой и адаптированные к уральскому климату.'
            },
            {
              title: 'Реализация',
              text: 'Воплощение проекта под ключ с контролем качества на всех этапах.'
            }
          ].map((item, index) => (
            <div
              key={item.title}
              className={`glass-panel p-6 ${index === 1 ? 'animate-drift' : ''}`}
            >
              <h3 className="text-xl text-mint-500">{item.title}</h3>
              <p className="mt-3 text-sm text-leaf-200/80">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="max-w-4xl text-sm text-leaf-200/80 md:text-base">
          С 2023 года мы воплотили более 30 проектов частных домов и дач, создали несколько общественных пространств, благоустроили парк и целый поселок. Наша особенность - собственный питомник растений, что позволяет нам контролировать качество на каждом этапе и предлагать решения, идеально адаптированные к местному климату.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Философия наших садов"
            title="Мы создаем живую среду, которая дарит эмоциональный комфорт"
            subtitle="В основе каждого проекта лежит глубокое понимание того, как человек чувствует себя в зелёном пространстве."
          />
          <div className="space-y-4 text-sm text-leaf-200/80 md:text-base">
            <h3 className="text-lg text-mint-400">Эмоциональная связь с природой</h3>
            <p>
              Сад - это пространство для созерцания, отдыха и восстановления сил. Мы тщательно продумываем каждый уголок так, чтобы вы могли найти гармонию с природой и услышать себя среди суеты будней.
            </p>
            <p>
              Наша главная задача - подружить вас с вашим садом, сделать так, чтобы каждое утро начиналось с желания выйти на террасу с чашкой кофе, а вечер заканчивался прогулкой по любимым дорожкам.
            </p>
            <p className="rounded-md border border-moss-600/60 bg-moss-700/50 p-4 text-mint-400">
              «Сад должен быть не обузой, а источником радости и вдохновения. Именно к этому мы стремимся в каждом проекте»
            </p>
          </div>
        </div>
        <div className="section-shell p-6">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
            <Image
              src="/uploads/3.png"
              alt="Project photo"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 28rem, 90vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Пять Принципов Проектирования СЕЗОНЫ"
          title="Наш подход строится на пяти фундаментальных принципах"
          subtitle="Эти ориентиры делают каждое пространство уникальным, комфортным и лёгким в уходе."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((item, index) => (
            <div key={item.title} className="glass-panel p-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-mint-400">0{index + 1}</span>
                <h3 className="text-xl text-mint-500">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm text-leaf-200/80">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Что вы получаете?"
          title="Состав проекта"
          subtitle="Полный комплект документации для реализации сада."
        />
        <div className="text-xs uppercase tracking-[0.3em] text-mint-400">СОСТАВ ПРОЕКТА</div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-panel p-6">
            <h3 className="text-lg text-mint-500">Полный комплект</h3>
            <ul className="mt-4 space-y-2 text-sm text-leaf-200/80">
              {projectComposition.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="glass-panel p-6">
            <h3 className="text-lg text-mint-500">При необходимости</h3>
            <ul className="mt-4 space-y-2 text-sm text-leaf-200/80">
              {optionalComposition.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="glass-panel p-6">
            <h3 className="text-lg text-mint-500">Дополнительно</h3>
            <ul className="mt-4 space-y-2 text-sm text-leaf-200/80">
              {additionalComposition.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href="#contact"
          className="inline-flex rounded-md border border-mint-500 px-6 py-3 text-sm font-medium text-mint-500 transition hover:bg-mint-500 hover:text-black"
        >
          Заказать обратный звонок
        </a>
      </section>

      <section id="projects" className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Примеры работ"
          title="Исследуйте портфолио СЕЗОНЫ"
          subtitle="Каждый проект - это уникальное сочетание функциональности и красоты. Посмотрите, как мы воплощаем мечты в реальность."
        />
        <ProjectFilters projects={projectCards} tags={tags} />
      </section>

      <section className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Частые вопросы и ответы"
          title="Ответы на самые распространенные вопросы"
          subtitle="Если у вас есть другие вопросы, свяжитесь с нами."
        />
        <Faq items={faqItems} />
      </section>

      <section id="contact" className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Задать свой вопрос"
          title="Расскажите о вашем участке"
          subtitle="Мы поможем подобрать решения, которые подходят именно вам."
        />
        <ContactForm />
      </section>
    </main>
  );
}
