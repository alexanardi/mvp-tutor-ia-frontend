<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'


const router = useRouter()
const authStore = useAuthStore()

// Emitimos un evento al hacer clic para cerrar el menú en el layout padre
const emit = defineEmits<{
  (e: 'close'): void
}>()

const isLoggedIn = computed(() => authStore.isLoggedIn)

const login = () => {
  authStore.login({
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com'
  })
  router.push('/organizaciones')
  emit('close')
}

const logout = () => {
  authStore.logout()
  router.push('/')
  emit('close')
}
</script>

<template>
  <!-- Visible solo en móviles -->
  <div class="md:hidden bg-white dark:bg-gray-800 shadow-md animate-slide-in">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <router-link
        to="/guia"
        @click="emit('close')"
        class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50
               dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Guía
      </router-link>
      <router-link
        to="/contacto"
        @click="emit('close')"
        class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50
               dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Contacto
      </router-link>
      <router-link
        v-if="isLoggedIn"
        to="/organizaciones"
        @click="emit('close')"
        class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50
               dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Organizaciones
      </router-link>

      <!-- Línea separadora -->
      <div class="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
        <button
          v-if="!isLoggedIn"
          @click="login"
          class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:text-primary-800
                 hover:bg-gray-50 dark:text-primary-400 dark:hover:text-primary-300 dark:hover:bg-gray-700"
        >
          Iniciar sesión
        </button>
        <button
          v-else
          @click="logout"
          class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900
                 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>
</template>
