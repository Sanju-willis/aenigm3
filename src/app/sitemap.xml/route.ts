// src\app\sitemap.xml\route.ts
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextResponse } from 'next/server';

export async function GET() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    // Add more dynamic/static URLs here
  ];

  const stream = new SitemapStream({ hostname: 'https://aenigm3labs.com' });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
