import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // <-- Esta é a linha que estava faltando!
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
