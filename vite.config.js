import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "./",
  base: import.meta.env.MODE === 'production' ? '/portfolio/' : './',
  // base: "/portfolio/", if you use this your local image won't be rendered
  plugins: [react()],
  server: {
    port: 3000,
  }
})
