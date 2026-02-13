import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  // GitHub Pages için repo adı ile aynı base yolu kullan
  // https://munhani.github.io/RealityModel/ gibi bir URL'de yayınlanacak
  base: "/RealityModel/",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
  },
});

