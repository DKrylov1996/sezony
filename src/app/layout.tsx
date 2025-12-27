import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import './globals.css';

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-unbounded'
});

export const metadata: Metadata = {
  title: 'СЕЗОНЫ - студия ландшафтного дизайна и сад растений',
  description:
    'Мастерская полного цикла: создаем сады от первого эскиза до финального штриха.',
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${unbounded.variable} font-sans`}>{children}</body>
    </html>
  );
}
