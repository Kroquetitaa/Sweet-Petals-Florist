import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/routes': resolve(__dirname, 'src/routes'),
      '@/store': resolve(__dirname, 'src/store'),
      '@/styles': resolve(__dirname, 'src/styles'),
      '@/pages': resolve(__dirname, 'src/pages'),
      '@/features': resolve(__dirname, 'src/features'),
      '@/constants': resolve(__dirname, 'src/constants'),
    },
  },
})
