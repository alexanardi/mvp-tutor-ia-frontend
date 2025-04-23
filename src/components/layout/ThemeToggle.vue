<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Estado local para guardar el modo actual (true = dark)
const isDarkMode = ref(localStorage.getItem('darkMode') === 'true')

// Función para alternar el modo oscuro
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  updateClass()
}

// Aplica o remueve la clase `dark` en <html>
const updateClass = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Asegura que se sincronice al montar el componente
onMounted(() => {
  updateClass()
})
</script>

<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 
           dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700 
           focus:outline-none focus:ring-2 focus:ring-primary-500"
  >
    <span class="sr-only">Toggle dark mode</span>

    <!-- Sol (modo oscuro activo) -->
    <svg v-if="isDarkMode" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707
           m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>

    <!-- Luna (modo claro activo) -->
    <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21
           a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </button>
</template>
