import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  // Relative base so the built site works under any path, including the GitHub
  // Pages project subpath (https://<user>.github.io/docs/). Hash routing keeps the
  // real URL at the base, so no server-side rewrite is needed.
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, 'lib'),
      '@components': path.resolve(__dirname, 'components'),
      '@content': path.resolve(__dirname, 'content'),
    },
  },
  server: { port: 5173, open: false },
});
