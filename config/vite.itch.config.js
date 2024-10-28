import { defineConfig } from 'vite';
import viteZip from 'vite-plugin-zip';
import { name, version } from '../package.json';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    viteZip({
      outputName: `${name}-${version}`,
    })
  ],
});
