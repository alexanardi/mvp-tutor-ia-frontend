<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { computed, ref } from 'vue'
import { BookOpen, Mail, LogIn, LogOut, Users, Building2, ChevronDown } from 'lucide-vue-next'

const router = useRouter()
const authStore = useAuthStore()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const isLoggedIn = computed(() => authStore.isLoggedIn)
const showAdminDropdown = ref(false)

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
  <transition name="fade">
    <div class="fixed inset-0 z-50 md:hidden">
      <!-- Fondo oscuro -->
      <div
        class="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        @click="emit('close')"
      />

      <!-- Menú lateral izquierdo -->
      <aside
        class="absolute top-0 left-0 w-72 h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg transform transition-transform duration-300 ease-in-out"
      >
        <div class="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-2">
            <Building2 class="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <span class="text-lg font-bold text-left">Tutor IA</span>
          </div>
          <button @click="emit('close')" class="text-gray-600 dark:text-gray-300 hover:text-primary-500">
            ✕
          </button>
        </div>

        <!-- Enlaces -->
        <nav class="px-4 py-6 space-y-2">
          <router-link
            to="/guia"
            @click="emit('close')"
            class="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-700"
          >
            <BookOpen class="w-5 h-5" /> Guía
          </router-link>
          <router-link
            to="/contacto"
            @click="emit('close')"
            class="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-700"
          >
            <Mail class="w-5 h-5" /> Contacto
          </router-link>

          <!-- Dropdown Admin -->
          <div
            class="relative"
            @mouseenter="showAdminDropdown = true"
            @mouseleave="showAdminDropdown = false"
          >
            <button
              class="flex items-center justify-start gap-2 px-3 py-2 w-full rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-700"
            >
              <Users class="w-5 h-5" /> Admin
              <ChevronDown class="w-4 h-4 ml-auto" />
            </button>
            <div
              v-if="showAdminDropdown"
              class="absolute left-0 mt-1 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg z-10"
            >
              <router-link
                to="/organizaciones"
                @click="emit('close')"
                class="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-700"
              >
              <Building2 class="w-4 h-4" /> Organizaciones
              </router-link>
            </div>
          </div>
        </nav>

        <!-- Acciones -->
        <div class="absolute bottom-0 w-full px-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex flex-col gap-2">
            <button
              v-if="!isLoggedIn"
              @click="login"
              class="btn-primary flex items-center gap-2 justify-center"
            >
              <LogIn class="w-5 h-5" /> Iniciar sesión
            </button>
            <button
              v-else
              @click="logout"
              class="btn-outline flex items-center gap-2 justify-center"
            >
              <LogOut class="w-5 h-5" /> Cerrar sesión
            </button>
          </div>
        </div>
      </aside>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>