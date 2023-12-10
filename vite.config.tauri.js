/** @type {import('vite').UserConfig} */

import { defineConfig, mergeConfig } from 'vite'
import baseViteConfig from './vite.config.js'
import { tauri } from 'vite-plugin-tauri'

// https://vitejs.dev/config/
export default defineConfig(
  mergeConfig(
    baseViteConfig,
    defineConfig({
      plugins: [tauri()],
      // prevent vite from obscuring rust errors
      clearScreen: false,
      // Tauri expects a fixed port, fail if that port is not available
      server: {
        strictPort: true,
        open: false
      },
      // to access the Tauri environment variables set by the CLI with information about the current target
      envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG'],
      build: {
        // Tauri uses Chromium on Windows and WebKit on macOS and Linux
        target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        // don't minify for debug builds
        minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        cssMinify: !process.env.TAURI_DEBUG ? 'lightningcss' : false,
        // produce sourcemaps for debug builds
        sourcemap: !!process.env.TAURI_DEBUG,
      }
    })
  )
);
