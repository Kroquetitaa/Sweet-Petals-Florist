import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const excludeFiles = ['node_modules', 'dist', '**/*.d.ts', 'src/vite-env.d.ts', 'src/stories/**/*']

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test.spec}.{ts,tsx}'],
    exclude: excludeFiles,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: excludeFiles,
      reporter: ['text', 'html'],
    },
    setupFiles: 'src/setupTest.ts'
  }
})
