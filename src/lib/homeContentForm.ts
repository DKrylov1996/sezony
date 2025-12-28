import type { HomeContent } from '@/lib/homeContent';

function readString(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === 'string' ? value : '';
}

function readLines(formData: FormData, name: string) {
  const value = readString(formData, name);
  return value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function readParagraphs(formData: FormData, name: string) {
  const value = readString(formData, name).trim();
  if (!value) return [];
  return value
    .split(/\r?\n\s*\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function buildHomeContentFromFormData(formData: FormData, base: HomeContent) {
  const cards = base.intro.cards.map((_, index) => ({
    title: readString(formData, `intro.cards.${index}.title`),
    text: readString(formData, `intro.cards.${index}.text`)
  }));

  const principles = base.principles.items.map((_, index) => ({
    title: readString(formData, `principles.items.${index}.title`),
    description: readString(formData, `principles.items.${index}.description`)
  }));

  const faqItems = base.faq.items.map((_, index) => ({
    question: readString(formData, `faq.items.${index}.question`),
    answer: readString(formData, `faq.items.${index}.answer`)
  }));

  return {
    hero: {
      title: readString(formData, 'hero.title'),
      description: readString(formData, 'hero.description'),
      primaryCtaText: readString(formData, 'hero.primaryCtaText'),
      primaryCtaUrl: readString(formData, 'hero.primaryCtaUrl'),
      secondaryCtaText: readString(formData, 'hero.secondaryCtaText'),
      secondaryCtaUrl: readString(formData, 'hero.secondaryCtaUrl'),
      imageUrl: readString(formData, 'hero.imageUrl'),
      imageAlt: readString(formData, 'hero.imageAlt')
    },
    intro: {
      eyebrow: readString(formData, 'intro.eyebrow'),
      title: readString(formData, 'intro.title'),
      subtitle: readString(formData, 'intro.subtitle'),
      cards,
      note: readString(formData, 'intro.note')
    },
    about: {
      eyebrow: readString(formData, 'about.eyebrow'),
      title: readString(formData, 'about.title'),
      subtitle: readString(formData, 'about.subtitle'),
      heading: readString(formData, 'about.heading'),
      paragraphs: readParagraphs(formData, 'about.paragraphs'),
      highlight: readString(formData, 'about.highlight'),
      imageUrl: readString(formData, 'about.imageUrl'),
      imageAlt: readString(formData, 'about.imageAlt')
    },
    principles: {
      eyebrow: readString(formData, 'principles.eyebrow'),
      title: readString(formData, 'principles.title'),
      subtitle: readString(formData, 'principles.subtitle'),
      items: principles
    },
    composition: {
      eyebrow: readString(formData, 'composition.eyebrow'),
      title: readString(formData, 'composition.title'),
      subtitle: readString(formData, 'composition.subtitle'),
      label: readString(formData, 'composition.label'),
      primaryTitle: readString(formData, 'composition.primaryTitle'),
      primaryItems: readLines(formData, 'composition.primaryItems'),
      optionalTitle: readString(formData, 'composition.optionalTitle'),
      optionalItems: readLines(formData, 'composition.optionalItems'),
      additionalTitle: readString(formData, 'composition.additionalTitle'),
      additionalItems: readLines(formData, 'composition.additionalItems'),
      ctaText: readString(formData, 'composition.ctaText'),
      ctaUrl: readString(formData, 'composition.ctaUrl')
    },
    projects: {
      eyebrow: readString(formData, 'projects.eyebrow'),
      title: readString(formData, 'projects.title'),
      subtitle: readString(formData, 'projects.subtitle')
    },
    faq: {
      eyebrow: readString(formData, 'faq.eyebrow'),
      title: readString(formData, 'faq.title'),
      subtitle: readString(formData, 'faq.subtitle'),
      items: faqItems
    },
    contact: {
      eyebrow: readString(formData, 'contact.eyebrow'),
      title: readString(formData, 'contact.title'),
      subtitle: readString(formData, 'contact.subtitle')
    }
  } satisfies HomeContent;
}
