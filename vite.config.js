import { existsSync } from 'node:fs'

import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sites } from '@openai/sites-vite-plugin'

const hasSitesHostingConfig =
  process.env.GITHUB_ACTIONS !== 'true' &&
  existsSync(new URL('./.openai/hosting.json', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ...(hasSitesHostingConfig ? [sites()] : []),
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
