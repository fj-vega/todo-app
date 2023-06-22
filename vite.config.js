import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tailwindcss from "tailwindcss";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todo-app/",
  build: {
    outDir: "docs",
  },
  plugins: [
    react(),
    reactRefresh(),
    tailwindcss("./tailwind.config.js"),
    Unfonts({
      preconnect: true,
      prefetch: true,
      google: {
        families: ["Dancing Script", "IBM Plex Serif"],
      },
    }),
  ],
});
