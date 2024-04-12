/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solid(), tailwindcss()],
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ]
    }
  }
})
