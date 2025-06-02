// src\types\post.tsx
import { PortableText, PortableTextBlock } from '@portabletext/react';

export type Heading = {
  text: string;
  id: string;
  level: 'h1' | 'h2' | 'h3';
};

export type  Post = {
  title: string;
  body: PortableTextBlock[];
  publishedAt: string;
  mainImage?: { asset?: { url: string } };
  author?: {
    name: string;
    image?: { asset?: { url: string } };
  };
};