import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path'


export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', '@mui/material', '@emotion/react', '@emotion/styled',],
    }
  }
});
