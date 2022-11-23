import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.js",
    coverage: {
      include: ["src", "!src/main.tsx", "!src/App.tsx", "!**/types/**"],
      all: true,
    },
  },
});
