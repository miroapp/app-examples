import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",

      appPath: "./src/app.js",

      exportName: "viteNodeApp",
    }),
  ],
  optimizeDeps: {},
});
