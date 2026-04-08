import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://DDS-Solutions.github.io',
    base: '/AI-Tadpole-OS-Marketing',
    integrations: [tailwind()],
});
