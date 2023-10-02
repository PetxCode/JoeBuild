import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: "/icons/610x610.jpeg",
            sizes: "610x610",
            type: "image/jpeg",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
