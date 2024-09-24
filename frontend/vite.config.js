import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    sourcemap:false,
  },
  plugins: [react()],
  server:{
    port:3000,
    //get rid of the CORS error
    proxy:{
      "/api":{
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

