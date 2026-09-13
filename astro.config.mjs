// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/lms': 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1',
    '/ccpg2026/lms': 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1',
    '/call-for-abstract': '/ccpg2026/call-for-abstract',
    '/call-for-paper': '/ccpg2026/call-for-abstract',
    '/abstract': '/ccpg2026/call-for-abstract',
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});