import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

const excludeFiles = ['node_modules', 'dist', '**/*.d.ts', 'src/vite-env.d.ts', 'src/stories/**/*']

// https://vite.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: 'src/setupTest.ts',
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        exclude: excludeFiles,
      },
    },
  })
)
