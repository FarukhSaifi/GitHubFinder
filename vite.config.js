import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }), tailwindcss()],

    server: {
      port: 3000,
      strictPort: true,
    },

    preview: {
      port: 3000,
      strictPort: true,
    },

    // Pre-bundle heavy deps for faster cold starts in dev
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom", "axios"],
    },

    esbuild: {
      drop: isProd ? ["console", "debugger"] : [],
      legalComments: "none",
    },

    build: {
      target: "es2020",
      cssMinify: true,
      // Skip gzip size pass — noticeably faster builds on CI
      reportCompressedSize: false,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;

            if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
              return "react-vendor";
            }
            if (id.includes("node_modules/react-router-dom")) {
              return "router-vendor";
            }
            if (id.includes("node_modules/axios")) {
              return "http-vendor";
            }
          },
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },
    },
  };
});
