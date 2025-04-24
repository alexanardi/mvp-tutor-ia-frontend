<script setup lang="ts">
const props = defineProps<{
  busqueda: string
}>()

const emit = defineEmits<{
  (e: 'update:busqueda', payload: string): void
  (e: 'crear'): void
}>()
</script>

<template>
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
    <!-- Título -->
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
      Organizaciones
    </h1>

    <!-- Buscador + Botón -->
    <div class="flex flex-col sm:flex-row w-full md:w-auto space-y-4 sm:space-y-0 sm:space-x-4">
      <!-- Input de búsqueda -->
      <div class="relative w-full sm:w-72">
        <input :value="props.busqueda" @input="emit('update:busqueda', ($event.target as HTMLInputElement)?.value)"
          type="text" placeholder="Buscar organizaciones..."
          class="w-full py-2 pl-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition" />
        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>

      <!-- Botón crear -->
      <button @click="emit('crear')" class="btn-primary w-full sm:w-auto">
        <span class="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Crear
        </span>
      </button>
    </div>
  </div>
</template>
