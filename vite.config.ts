import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PortfolioWebDev/',
  mode: 'development',
  plugins: [vue()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    devSourcemap: true
    },
  server: {
    port: 3000,
  },
  preview: {
    port: 8000,
  },
  build: {
    sourcemap: true,
    minify: false,
  }
})
