import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Deploying to GitHub Pages at username.github.io/repo-name?
  // Uncomment the line below and use your repo name.
  // base: "/kannan-portfolio/",
});
