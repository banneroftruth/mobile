import { defineConfig } from 'vite'
import path from 'path';

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/mobile/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
