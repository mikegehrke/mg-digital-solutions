import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor code
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            if (id.includes('@formspree')) {
              return 'vendor-formspree'
            }
            return 'vendor'
          }
          // Split components by folder
          if (id.includes('/components/demos/')) {
            return 'demos'
          }
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
    chunkSizeWarningLimit: 500,
  },
})
