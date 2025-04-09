import { defineConfig } from 'vite';
import { config } from 'dotenv';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
config();
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
