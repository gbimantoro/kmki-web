// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/lms': 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1',
    '/ccpg2026/lms': 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1',
    '/ccpg2026/call-for-poster': '/call-for-poster/',
    '/poster': '/call-for-poster/',
    '/call-for-paper': '/call-for-poster/',
    '/call-for-abstract': '/call-for-poster/',
    '/abstract': '/call-for-poster/',
    '/ccpg2026/call-for-paper': '/call-for-poster/',
    '/ccpg2026/call-for-abstract': '/call-for-poster/',
    '/ccpg2026kaj': '/ccpg2026/',
    '/ccpg2026kaj/lms': 'https://lms.kemkes.go.id/courses/cc233408-d5f2-428f-9871-21413b2ecea1',
    '/ccpg2026kaj/call-for-poster': '/call-for-poster/',
    '/ccpg2026kaj/poster': '/call-for-poster/',
    '/ccpg2026kaj/call-for-paper': '/call-for-poster/',
    '/ccpg2026kaj/call-for-abstract': '/call-for-poster/',
    '/pendaftaran-anggota-2': '/keanggotaan/pendaftaran-anggota-2/',
    '/pendaftaran-anggota': '/keanggotaan/pendaftaran-anggota-2/',
    '/kaj/pendaftaran-anggota-2': '/kaj/keanggotaan/pendaftaran-anggota-2/',
    '/kaj/pendaftaran-anggota': '/kaj/keanggotaan/pendaftaran-anggota-2/',
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});