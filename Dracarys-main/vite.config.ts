import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for all asset URLs in the compiled output.
  // The compiled JS/CSS will be placed in D:\dracarys\assets\
  // and served from /assets/ on the web server.
  base: "/assets/",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    // Output directly into the root project's assets directory
    outDir: path.resolve(__dirname, "../assets"),
    // CRITICAL: Do NOT delete existing files in the output directory.
    // The root project has other assets (WebGL textures, etc.) that
    // must not be wiped.
    emptyOutDir: false,
    // Stable, deterministic filenames — no content hashes
    rollupOptions: {
      input: path.resolve(__dirname, "src/main.tsx"),
      output: {
        // Single entry bundle with a stable name
        entryFileNames: "dracarys-main.js",
        // Any code-split chunks get a stable prefix
        chunkFileNames: "dracarys-chunk-[name].js",
        // Static assets (images, fonts) imported in source
        assetFileNames: "dracarys-[name][extname]",
      },
    },
  },
});
