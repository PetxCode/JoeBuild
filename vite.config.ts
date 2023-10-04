import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "global_file",
      filename: "global.js",
      exposes: {
        "./Share": "./src/global/jotai.tsx",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
});
