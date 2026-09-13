// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/lms': 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1',
    '/ccpg2026/lms': 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1',
    '/call-for-poster': '/ccpg2026/call-for-poster/',
    '/poster': '/ccpg2026/call-for-poster/',
    '/call-for-paper': '/ccpg2026/call-for-poster/',
    '/call-for-abstract': '/ccpg2026/call-for-poster/',
    '/abstract': '/ccpg2026/call-for-poster/',
    '/ccpg2026/call-for-paper': '/ccpg2026/call-for-poster/',
    '/ccpg2026/call-for-abstract': '/ccpg2026/call-for-poster/',
    '/ccpg2026kaj': '/ccpg2026/',
    '/ccpg2026kaj/lms': 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1',
    '/ccpg2026kaj/call-for-poster': '/ccpg2026/call-for-poster/',
    '/ccpg2026kaj/poster': '/ccpg2026/call-for-poster/',
    '/ccpg2026kaj/call-for-paper': '/ccpg2026/call-for-poster/',
    '/ccpg2026kaj/call-for-abstract': '/ccpg2026/call-for-poster/',
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});