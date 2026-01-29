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
      '@/app': resolve(__dirname, 'src/app'),
      '@/styles': resolve(__dirname, 'src/styles'),
      '@/store': resolve(__dirname, 'src/store'),
      '@/constants': resolve(__dirname, 'src/constants'),
      '@/routes': resolve(__dirname, 'src/routes'),
      '@/pages': resolve(__dirname, 'src/pages'),
      '@/features': resolve(__dirname, 'src/features'),
    },
  },
})
