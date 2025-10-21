import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/renderer"),
    },
  },
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  build: {
    outDir: "dist/renderer",
    rollupOptions: {
      input: path.resolve(__dirname, "src/renderer/index.html"),
    },
  },
  server: {
    port: 5173,
  },
  root: path.resolve(__dirname, "src/renderer"),
});
