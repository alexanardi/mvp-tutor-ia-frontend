// Importa la función defineConfig desde Vite, que nos permite usar tipado y autocompletado en la configuración.
import { defineConfig } from 'vite'

// Importa el plugin oficial de Vue para que Vite pueda procesar archivos .vue
import vue from '@vitejs/plugin-vue'

// Importa el módulo path de Node.js, que se usa para resolver rutas absolutas
import path from 'path'

// Exporta la configuración de Vite usando defineConfig
export default defineConfig({
  // Aplica el plugin de Vue. Esto le dice a Vite cómo manejar los archivos .vue correctamente
  plugins: [vue()],

  // Configura alias de rutas para importar archivos más fácilmente
  resolve: {
    alias: {
      // '@' será un atajo para la carpeta ./src
      // Por ejemplo, puedes importar con: import MyComponent from '@/components/MyComponent.vue'
      '@': path.resolve(__dirname, './src'),
    },
  },
})
