<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import ThemeToggle from './ThemeToggle.vue'
import { Users, ChevronDown, Building2 } from 'lucide-vue-next'


const router = useRouter()
const authStore = useAuthStore()
const adminDropdownOpen = ref(false)
let adminDropdownTimeout: ReturnType<typeof setTimeout>

const openAdminDropdown = () => {
  clearTimeout(adminDropdownTimeout)
  adminDropdownOpen.value = true
}

const delayedCloseAdminDropdown = () => {
  adminDropdownTimeout = setTimeout(() => {
    adminDropdownOpen.value = false
  }, 300) // puedes ajustar el delay aquí
}



// Controla si el menú móvil está abierto (se emitirá al layout)
const isMobileMenuOpen = ref(false)

// Emitimos un evento al layout para que muestre u oculte el menú móvil
const emit = defineEmits<{
  (e: 'toggle-mobile'): void
}>()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  emit('toggle-mobile')
}

// Login simulado
const login = () => {
  authStore.login({
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com'
  })

  if (router.currentRoute.value.path === '/') {
    router.push('/organizaciones')
  }
}

// Logout y redirección si la ruta es privada
const logout = () => {
  authStore.logout()
  if (router.currentRoute.value.meta.requiresAuth) {
    router.push('/')
  }
}

const isLoggedIn = computed(() => authStore.isLoggedIn)
</script>

<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">

        <!-- Izquierda: Logo + Botón móvil -->
        <div class="flex items-center space-x-4">
          <!-- Botón móvil visible solo en pantallas pequeñas -->
          <button @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700">
            <span class="sr-only">Abrir menú</span>
            <!-- Icono hamburguesa -->
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <!-- Logo + Título -->
          <router-link to="/" class="flex items-center">
            <svg class="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span class="ml-2 text-xl font-bold text-gray-800 dark:text-white">Tutor IA</span>
          </router-link>
        </div>

        <!-- Centro: navegación solo en escritorio -->
        <nav class="hidden md:flex space-x-6">
          <router-link to="/guia"
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700">
            Guía
          </router-link>
          <router-link to="/contacto"
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700">
            Contacto
          </router-link>
          <!-- Admin dropdown solo si está logueado -->
          <div v-if="isLoggedIn" class="relative" @mouseenter="openAdminDropdown"
            @mouseleave="delayedCloseAdminDropdown">
            <button
              class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-700">
              <Users class="w-5 h-5" />
              <span class="text-left flex-1">Admin</span>
              <ChevronDown class="w-4 h-4 ml-auto" />
            </button>

            <transition name="fade">
              <div v-if="adminDropdownOpen"
                class="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                <router-link to="/organizaciones"
                  class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  @click="adminDropdownOpen = false">
                  <Building2 class="w-4 h-4" />
                  Organizaciones
                </router-link>
              </div>
            </transition>
          </div>






        </nav>

        <!-- Derecha: modo oscuro y login/logout -->
        <div class="flex items-center space-x-4">
          <!-- Botón para cambiar tema -->
          <ThemeToggle />

          <!-- Botones de login/logout solo visibles en escritorio -->
          <button v-if="!isLoggedIn" @click="login" class="hidden md:block ml-2 btn-primary">
            Inciar sesión
          </button>
          <button v-else @click="logout" class="hidden md:block ml-2 btn-outline">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
