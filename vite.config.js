import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/portfolio/' : './',  // Use 'mode' from the config context
    plugins: [react()],
  }
})

// // https://vitejs.dev/config/
// export default defineConfig({
//   // base: "./",
//   base: import.meta.env.MODE === 'production' ? '/portfolio/' : './',
//   // base: "/portfolio/", if you use this your local image won't be rendered
//   plugins: [react()],
//   server: {
//     port: 3000,
//   }
// })
