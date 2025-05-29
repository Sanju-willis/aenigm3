import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // must match your Sanity project
  dataset: 'production',
  apiVersion: '2024-05-17', // ISO date
  useCdn: true,
});
