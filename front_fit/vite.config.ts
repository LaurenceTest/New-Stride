import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/user': {
        target: 'http://127.0.0.1:4560', //change when moving to
      },
      '/auth': {
        target: 'http://127.0.0.1:4560', //change when moving to prod
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '/auth'),
      },
    },
  },
});
