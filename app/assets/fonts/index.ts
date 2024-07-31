import { Source_Sans_3 } from 'next/font/google';
import localFont from 'next/font/local';

export const sourse_sans_3 = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sourse-sans-3',
});

export const shadows_into_light = localFont({
  src: './ShadowsIntoLight.woff2',
  display: 'swap',
  variable: '--font-shadows-into-light',
});
