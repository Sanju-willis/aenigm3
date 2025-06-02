// src\utils\fonts.ts
import localFont from 'next/font/local';
import { Inter_Tight } from 'next/font/google';

// ▶ Royal Castle – Display/Heading font (800 weight)
export const royalCastle = localFont({
  src: [
    {
      path: '../fonts/Royal-Castle-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-royal-castle',
  display: 'swap',
});

// ▶ Aleo – Serif body/quote font (400 weight)
export const aleo = localFont({
  src: [
    {
      path: '../fonts/Aleo-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aleo',
  display: 'swap',
});

// ▶ Bangers – Fun/label/accent font (400 weight)
export const bangers = localFont({
  src: [
    {
      path: '../fonts/bangers.regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bangers',
  display: 'swap',
});

// ▶ Inter Tight – Main UI font (multiple weights)
export const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'], // ← includes all usable weights
});
