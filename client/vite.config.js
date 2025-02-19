import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
//dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react({
      include: "**/*.jsx",
    }),
  ],
});
