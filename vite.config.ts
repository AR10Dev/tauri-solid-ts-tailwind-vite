import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from "@tailwindcss/vite";
import process from 'node:process'
import tsconfigPaths from 'vite-tsconfig-paths'

const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solid(), tailwindcss(), tsconfigPaths()],
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
        protocol: "ws",
        host,
        port: 1421,
      }
      : undefined,
    watch: {
      // Ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
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
  },
})
