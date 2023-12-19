import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  base: "./",
  plugins: [react()],
  // 配置路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://47.99.50.118:4000",
        // target: "http://localhost:4000",
        changeOrigin: true,
        cookieDomainRewrite: "",
        secure: false,
      },
    },
  },
})
