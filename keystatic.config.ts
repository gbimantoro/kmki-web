import { keystatic } from '@keystatic/core';

export default keystatic({
  storage: {
    kind: 'local',
    // Use a relative path to store content in the repo
    location: 'src/content',
  },
  collections: {
    pages: {
      label: 'Pages',
      format: { kind: 'mdx' },
      schema: {
        title: { kind: 'string', label: 'Title' },
        description: { kind: 'string', label: 'Description', description: 'Short description for SEO' },
        content: { kind: 'richText', label: 'Content' },
      },
    },
  },
});