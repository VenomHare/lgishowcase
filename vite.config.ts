import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy for the YouTube RSS feed
      '/api/rss': {
        target: 'https://www.youtube.com/feeds/videos.xml', // YouTube RSS feed
        changeOrigin: true, // This allows us to bypass CORS by modifying the origin
        rewrite: (path) => path.replace(/^\/api\/rss/, ''), // Rewrite '/api/rss' to nothing
      },
    },
  },
  plugins: [react()],
})
