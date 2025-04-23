<script setup lang="ts">
// Props: v-model personalizado (busqueda)
const props = defineProps<{
  busqueda: string
}>()

const emit = defineEmits<{
  (e: 'update:busqueda', valor: string): void
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
      <div class="relative w-full sm:w-64">
        <input
          :value="props.busqueda"
          @input="emit('update:busqueda', $event.target.value)"
          type="text"
          placeholder="Buscar organizaciones..."
          class="input pr-10 w-full"
        >
        <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>

      <!-- Botón crear -->
      <button @click="emit('crear')" class="btn-primary w-full sm:w-auto">
        <span class="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Crear
        </span>
      </button>
    </div>
  </div>
</template>
