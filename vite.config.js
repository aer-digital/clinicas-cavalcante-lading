import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  base: './', // Configura caminhos relativos para o Amplify
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        'via-saude': resolve(__dirname, 'src/views/via-saude/index.html')
      }
    },
    outDir: 'dist',       // Ativa a geração na pasta dist
    emptyOutDir: true,    // Limpa a pasta antes de cada build
    assetsInlineLimit: 0  // Garante que todas as imagens sejam copiadas
  }
})