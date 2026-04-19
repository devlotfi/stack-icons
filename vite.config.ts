import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/stack-icons/",
  build: {
    outDir: "./docs",
    emptyOutDir: true,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "heroui",
              test: /node_modules\/@heroui/,
            },
          ],
        },
      },
    },
  },
});
