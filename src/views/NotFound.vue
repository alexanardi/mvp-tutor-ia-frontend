<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-6xl md:text-8xl font-bold text-primary-500">404</h1>
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mt-4">
      Página No Encontrada
    </h2>
    <p class="text-lg text-gray-600 dark:text-gray-300 mt-2 mb-8">
      Lo sentimos, la página que buscas no existe o ha sido movida.
    </p>
    <div class="flex flex-col sm:flex-row gap-4">
      <button @click="goBack" class="btn-outline">
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Volver
        </span>
      </button>
      <button @click="goHome" class="btn-primary">
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-7-7v14" />
          </svg>
          Ir al Inicio
        </span>
      </button>
    </div>
  </div>
</template>