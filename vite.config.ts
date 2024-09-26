import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
//import baristaCSS from "@modularmoon/barista";

export default defineConfig({
  plugins: [react()],
  server: { port: 5100 },
  resolve: {
    alias: {
      "@": path.resolve(
        __dirname,
        "./src"
      ),
      "@server": path.resolve(
        __dirname,
        "./server"
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
