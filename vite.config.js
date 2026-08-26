import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sites } from '@openai/sites-vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    sites(),
    cloudflare({
      viteEnvironment: {
        name: 'server',
      },
      config: {
        main: './src/worker.js',
        compatibility_date: '2026-05-22',
        assets: {
          binding: 'ASSETS',
          not_found_handling: 'single-page-application',
        },
      },
    }),
  ],
})
