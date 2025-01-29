import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Binds the server to all network interfaces
    port: 5173, // Port for your local server, you can change it if necessary
  },
});
