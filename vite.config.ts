import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import ApiRoutes from 'vite-plugin-api-routes'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    cors: true,
    proxy: {
      '/api/rsshub': {
        target: 'https://rsshub.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/rsshub/, ''),
      },
    }
  },
  plugins: [
    react(),
    ApiRoutes({
      routeBase: "./src/api"
    }),
    tailwindcss(),
    flowbiteReact()],
})
