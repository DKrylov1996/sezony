import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import BackToTopButton from '@/components/BackToTopButton';

const unbounded = localFont({
  src: [
    { path: '../../public/fonts/Unbounded-300.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Unbounded-400.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Unbounded-500.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Unbounded-600.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Unbounded-700.ttf', weight: '700', style: 'normal' }
  ],
  variable: '--font-unbounded',
  display: 'swap'
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
      <body className={`${unbounded.variable} font-sans`}>
        <SiteHeader />
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}