import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

const imagePool = [
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/956rb2eqlon3708/26e33f8c6e4440c6be2fb1fa98fa0ca9/original/photo_2025-12-01_12-34-38.jpg',
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/956rb2eqlon3708/b5cf66405048477cbbe3ecdc88c397fe/original/photo_2025-04-13_11-33-22.jpg',
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/956rb2eqlon3708/6a1cc1d577154b41a6f440fcecde8617/original/photo_2025-04-13_11-33-21.jpg',
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/956rb2eqlon3708/118e8d9ea4944490ba377bfc393f6ef5/original/3.png',
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/956rb2eqlon3708/0cc3848d8bbe49c48af616aaebf608bc/original/Scene-16.png',
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/956rb2eqlon3708/4211bb5365704d0fb9c60e9a67499172/original/5.png',
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/956rb2eqlon3708/217df69d9be144bebd728c675236f094/original/Render_5.png',
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/956rb2eqlon3708/02b36c68552841b994350313a53237ae/original/photo_2025-12-04_12-18-42.jpg',
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/956rb2eqlon3708/0ba039ffb0a34a569af45f85fdd1c2dd/original/6.png',
  'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/956rb2eqlon3708/0cc3848d8bbe49c48af616aaebf608bc/original/Scene-16.png'
];

const projects = [
  {
    title: 'Проект "Оазис спокойствия"',
    slug: 'oazis-spokoystviya',
    shortDescription:
      'Многофункциональный сад с зонами отдыха, водоемом и продуманной системой освещения.',
    fullDescription:
      'Погрузитесь в детали одного из наших знаковых проектов. Мы создали многофункциональный сад с зонами отдыха, водоемом и продуманной системой освещения, где каждый элемент способствует максимальному расслаблению и единению с природой. Это идеальное место для уединения или проведения вечеров с близкими.\n\nОцените, как гармонично вписаны природные материалы и современные технологии, создавая пространство, которое легко поддерживать и которым приятно наслаждаться в любое время года.',
    location: 'Челябинская область',
    year: 2024,
    tags: ['частный участок', 'под ключ'],
    coverImage: imagePool[0],
    galleryImages: [imagePool[1], imagePool[2], imagePool[7]],
    isPublished: true,
    sortOrder: 1
  },
  {
    title: 'Проект "Дикий Сад"',
    slug: 'dikiy-sad',
    shortDescription:
      'Свободное пространство с арт-объектом и функциональными зонами для отдыха.',
    fullDescription:
      'Этот объект был под пристальным вниманием всей студии, т.к. создавался для очень творческого человека-дизайнера современных интерьеров. Здесь важно было сохранить свободу во всем! И в восприятии, и в ассортименте растений, и в компоновке пространства. Впервые использовали арт-объект «Ландшафтное зеркало», чтобы зрительно увеличить пространство и создать многогранные блики.\n\nПродумали функциональные зоны: огород с модульными грядками, костровую зону, зону загара, гриль-зону и калитку для выгула собаки. Прогуливаясь по саду можно набрать букетик ароматных трав и насладиться видами.',
    location: 'Екатеринбург',
    year: 2023,
    tags: ['частный участок', 'арт-объект'],
    coverImage: imagePool[1],
    galleryImages: [imagePool[3], imagePool[4], imagePool[5]],
    isPublished: true,
    sortOrder: 2
  },
  {
    title: 'Проект "Домашний"',
    slug: 'domashniy',
    shortDescription:
      'Преображение участка для семьи с сохранением уютной атмосферы.',
    fullDescription:
      'Этот проект - удачный образец того, как можно преобразовать поживший участок и сохранить его уютную атмосферу. Семья живет на этой земле уже много лет. Участок всегда был большим картофельным полем с плодовыми деревьями по периметру. Перед нами стояла задача создать очаровательный сад для трех поколений.\n\nОставили крупную грушу с раскидистыми ветвями, под которой разместили бассейн и зону загара. Зону огорода спрятали за деревянными перголами, увитыми клематисом. Партерный газон обрамляют аккуратные круглые шарики кустов спиреи и плотные посадки вероники и манжетки.',
    location: 'Магнитогорск',
    year: 2024,
    tags: ['семейный сад', 'реконструкция'],
    coverImage: imagePool[2],
    galleryImages: [imagePool[6], imagePool[7], imagePool[8]],
    isPublished: true,
    sortOrder: 3
  },
  {
    title: 'Проект "Вещий камень"',
    slug: 'veshchiy-kamen',
    shortDescription:
      'Контрастный сад с акцентными красными элементами и природным камнем.',
    fullDescription:
      'Спасибо заказчику этого проекта за то, что разрешил нам применять невероятные сочетания и быть смелыми. Только благодаря этому, родился проект на грани взрыва и спокойствия. Внимание привлекают красные элементы строений. Они перекликаются с окраской осенней листвы рябины «Додонг».\n\nВторостепенные дорожки выложены из гранитных плит с природным краем. Среди небольших холмов из геопластики встречаются мраморные валуны. Проект выверен до мелочей и учитывает сценарии жизни заказчика.',
    location: 'Снежинск',
    year: 2022,
    tags: ['арт-ландшафт', 'природный камень'],
    coverImage: imagePool[3],
    galleryImages: [imagePool[4], imagePool[5], imagePool[6]],
    isPublished: true,
    sortOrder: 4
  },
  {
    title: 'Проект "Игристое"',
    slug: 'igristoe',
    shortDescription:
      'Компактный участок с огородом, бассейном и зоной отдыха.',
    fullDescription:
      'Прекрасный образец, как на компактной площади разместить все и даже больше. Заказчик ставил перед нами задачу запроектировать сад, в котором будет обособленная зона отдыха с костровой чашей, огород, бассейн, гриль-зона и площадка для выгула собаки.\n\nЧтобы пространство было максимально легким и малоуходным, использовали массивы из гортензий, крупный цветник из шалфеев и котовников. Структуру сада создают ирга Ламарка и крупные можжевельники.',
    location: 'Челябинск',
    year: 2024,
    tags: ['компактный сад', 'под ключ'],
    coverImage: imagePool[4],
    galleryImages: [imagePool[7], imagePool[8], imagePool[1]],
    isPublished: true,
    sortOrder: 5
  },
  {
    title: 'Проект "Аптекарский огород"',
    slug: 'aptekar-skiy-ogorod',
    shortDescription:
      'Озеленение частного медицинского центра с фокусом на детскую зону.',
    fullDescription:
      'Перед нами стояла задача озеленить частный медицинский центр. Так как основное направление этого отделения - детское, мы решили сделать упор на маленьких пациентов. Создали для них целый огород с полезными травами и установили таблички с описаниями полезных свойств каждого растения.\n\nПомимо этого организовали теневую зону отдыха для родителей. В дальнейшем планируем расширить этот огород на окружающие запущенные городские клумбы.',
    location: 'Златоуст',
    year: 2023,
    tags: ['общественное пространство', 'детская зона'],
    coverImage: imagePool[5],
    galleryImages: [imagePool[6], imagePool[2], imagePool[8]],
    isPublished: true,
    sortOrder: 6
  },
  {
    title: 'Проект "Поселок Карьерный"',
    slug: 'poselok-karernyy',
    shortDescription:
      'Масштабный проект поселка с жилыми домами, парком и инфраструктурой.',
    fullDescription:
      'Это самое большое сокровище среди наших объектов! Заказчику необходимо было решить проблему привлечения специалистов высокого уровня для работы на предприятиях, расположенных в деревенской глуши. Особенности окружающего ландшафта и перепады температур накладывали ограничения на использование ассортимента растений.\n\nДля поселка разработали несколько типов современных домов со встроенными верандами, теневые сады и большую парковку. В центре поселка расположили детскую площадку в эко-стиле и спроектировали безопасные общественные зоны.',
    location: 'Уральский регион',
    year: 2025,
    tags: ['поселок', 'общественное пространство'],
    coverImage: imagePool[6],
    galleryImages: [imagePool[0], imagePool[7], imagePool[5]],
    isPublished: true,
    sortOrder: 7
  }
];

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set for seed');
  }

  const passwordHash = await hash(adminPassword, 10);

  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: { email: adminEmail, passwordHash }
  });

  for (const project of projects) {
    const payload = {
      ...project,
      tags: JSON.stringify(project.tags),
      galleryImages: JSON.stringify(project.galleryImages)
    };
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: payload,
      create: payload
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
