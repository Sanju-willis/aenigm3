import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });

export const playfair = localFont({
  src: [
    {
      path: '../fonts/PlayfairDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-playfair',
});

export const sourceSans = localFont({
  src: [
    {
      path: '../fonts/SourceSansPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-sourcesans',
});