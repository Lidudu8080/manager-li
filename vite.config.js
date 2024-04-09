import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 2587,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
