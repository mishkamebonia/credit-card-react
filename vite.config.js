// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/credit-card-react/', // Replace 'your-repo-name' with your actual GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'docs', // GitHub Pages serves from the 'docs' directory by default
  },
})
