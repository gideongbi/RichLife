import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base: '/RichLife/',
  plugins: [react()],
  server: {
    // Diese Einstellung stellt sicher, dass alle Routen auf index.html zurückfallen
    historyApiFallback: true
  }
})
