import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './styles/app.css';
import Header from './components/header';
import { cn } from './lib/heplers';

export const metadata: Metadata = {
  title: 'Test Steel Lady',
  description: 'Generated by create next app',
};

const sans = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  weight: 'variable',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={cn(
          `relative
        bg-bg
        z-0
        min-h-svh
        tracking-wide
        text-white`,
          sans.className
        )}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
