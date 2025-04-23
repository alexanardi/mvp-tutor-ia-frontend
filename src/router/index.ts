// Importa funciones de Vue Router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Importa el store de autenticación para proteger rutas
import { useAuthStore } from '@/stores/auth'

// Importa los componentes de vistas y layout
import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/Home.vue'
import Guia from '@/views/Guia.vue'
import Contacto from '@/views/Contacto.vue'
import Organizaciones from '@/views/Organizaciones.vue'
import NotFound from '@/views/NotFound.vue'

// Define todas las rutas del sistema
const routes: RouteRecordRaw[] = [
  {
    // Ruta raíz, usa el layout principal
    path: '/',
    component: MainLayout,

    // Rutas hijas que se renderizan dentro del <RouterView /> del layout
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: { title: 'Home' } // título de la página
      },
      {
        path: 'guia',
        name: 'guia',
        component: Guia,
        meta: { title: 'Guía' }
      },
      {
        path: 'contacto',
        name: 'contacto',
        component: Contacto,
        meta: { title: 'Contacto' }
      },
      {
        path: 'organizaciones',
        name: 'organizaciones',
        component: Organizaciones,
        meta: { 
          title: 'Organizaciones',
          requiresAuth: true // solo se puede acceder si el usuario está autenticado
        }
      }
    ]
  },
  {
    // Ruta comodín para cualquier ruta no encontrada
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: { title: 'Page Not Found' }
  }
]

// Crea la instancia del router con historial HTML5
const router = createRouter({
  history: createWebHistory(),
  routes,

  // Controla el comportamiento del scroll al navegar entre páginas
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition // si usó el botón "atrás", restaura la posición
    } else {
      return { top: 0 } // si es nueva navegación, parte arriba
    }
  }
})

// Middleware que se ejecuta antes de cada cambio de ruta
router.beforeEach((to, _from, next) => {
  // Cambia el título del documento según el meta definido en la ruta
  document.title = `${to.meta.title ? to.meta.title + ' | ' : ''}Tutor IA`

  // Si la ruta requiere autenticación
  if (to.meta.requiresAuth) {
    const authStore = useAuthStore()
    // Si el usuario no está logueado, redirige a Home
    if (!authStore.isLoggedIn) {
      next({ name: 'home' })
      return
    }
  }

  // Continúa normalmente
  next()
})

// Exporta el router para usarlo en main.ts
export default router
