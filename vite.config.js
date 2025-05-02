import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
      "/products": {
        target: "https://api.escuelajs.co",
        changeOrigin: true,
        secure: true,
        cors: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
