import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true,
    port: 5173
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Tách riêng các logic liên quan đến firebase để không làm nặng file chính
          if (id.includes('firebase-logic')) {
            return 'firebase';
          }
        }
      }
    }
  }
});
