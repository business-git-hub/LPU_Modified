import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Allows external access
    port: 5173, // Ensure this matches the port used in Nginx
    watch: {
      usePolling: true,
    },
    allowedHosts: ["http://46.202.163.190:8081","topuniversityindia.com", "www.topuniversityindia.com"], // Allow your domain
  },
  plugins: [
    react({
      include: "**/*.jsx",
    }),
  ],
});





