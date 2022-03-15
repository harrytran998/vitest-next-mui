/// <reference types="vitest" />

import { defineConfig } from 'vite';


export default defineConfig({
  test: {
    isolate: false,
    global: true,
    environment: 'node',
    coverage: {
      reporter: ['text', 'json', 'html']
    },
  }
});
