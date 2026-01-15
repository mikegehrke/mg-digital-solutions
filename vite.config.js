import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          forms: ['@formspree/react'],
        },
      },
    },
    // Use esbuild for minification (default, faster)
    minify: 'esbuild',
    // Optimize CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Enable source maps for debugging
    sourcemap: false,
    // Reduce chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
})
