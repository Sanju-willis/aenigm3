import localFont from 'next/font/local';

export const royalCastle = localFont({
  src: [
    {
      path: '../fonts/Royal-Castle-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-royal-castle',
});

export const aleo = localFont({
  src: [
    {
      path: '../fonts/Aleo-Regular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-aleo',
});

export const bangers = localFont({
  src: [
    {
      path: '../fonts/bangers.regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-bangers',
});