import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    },
    manifest: {
      "short_name": "Rick and Morty",
      "name": "Rick and Morty",
      "start_url": ".",
      "display": "standalone",
      "theme_color": "#f8fbff",
      "background_color": "#f8fbff",
      "orientation": "portrait-primary",
      "icons": [
        {
          "src": "/icons/icon-48x48.png",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    }
  })],
})
