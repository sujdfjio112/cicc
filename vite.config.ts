import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      // 将 svg 文件的路径指定为项目根目录下的 "src" 目录
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
