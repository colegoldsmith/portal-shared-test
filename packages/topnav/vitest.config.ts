import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    coverage: {
      exclude: ['**/assets/**', '**/theme/**', '**.config.**'],
    },
    environment: 'jsdom',
    globals: true,
  },
});
