import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://phomarkon.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
