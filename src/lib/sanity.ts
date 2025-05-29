// src\lib\sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
     projectId: 'n85d6r9j',
     dataset: 'production',
     apiVersion: '2024-05-17',
     useCdn: true
});