// Importa la función para crear una aplicación Vue
import { createApp } from 'vue'

// Importa Pinia, el gestor de estado oficial de Vue 3
import { createPinia } from 'pinia'

// Importa el plugin de persistencia para guardar el estado de Pinia en localStorage
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Importa el componente raíz de tu aplicación
import App from './App.vue'

// Importa el router (gestor de rutas de Vue)
import router from './router'

// Importa los estilos de TailwindCSS (ubicados en src/styles/tailwind.css)
import './styles/tailwind.css'

import Toast from 'vue-toastification'

import 'vue-toastification/dist/index.css'

// Crea una instancia de Pinia
const pinia = createPinia()

// Aplica el plugin de persistencia a Pinia (así el estado puede mantenerse al recargar la página)
pinia.use(piniaPluginPersistedstate)

// Crea una instancia de la app Vue usando el componente App como raíz
const app = createApp(App)

// Le dice a Vue que use Pinia como gestor de estado
app.use(pinia)

// Le dice a Vue que use el sistema de rutas
app.use(router)

app.use(Toast, {
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    hideProgressBar: false,
  })

// Monta la aplicación dentro del elemento <div id="app"> del archivo index.html
app.mount('#app')
