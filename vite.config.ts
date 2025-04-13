import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import ApiRoutes from 'vite-plugin-api-routes'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    cors:true,
    proxy: {
      // Proxy for the YouTube RSS feed
      '/api/rss': {
        target: 'https://rsshub.app/youtube/playlist', // YouTube RSS feed
        changeOrigin: true, // This allows us to bypass CORS by modifying the origin
        rewrite: (path) => path.replace(/^\/api\/rss/, ''), // Rewrite '/api/rss' to nothing
      },
    },
  },
  plugins: [react(), ApiRoutes({
    routeBase:"./src/api"
  }), tailwindcss(), flowbiteReact()],
})
