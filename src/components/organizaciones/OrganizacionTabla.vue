<script setup lang="ts">
const props = defineProps<{
  organizaciones: Organizacion[]
}>()

const emit = defineEmits<{
  (e: 'editar', organizacion: Organizacion): void
  (e: 'eliminar', organizacion: Organizacion): void
}>()

const formatFecha = (fecha: string) => {
  return new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(fecha))
}
</script>

<template>
  <!-- Estado vacío -->
  <div v-if="organizaciones.length === 0" class="card flex justify-center items-center p-12">
    <div class="text-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No se encontraron organizaciones</h3>
      <p class="text-gray-600 dark:text-gray-300">Prueba con otro término de búsqueda.</p>
    </div>
  </div>

  <!-- Tabla de organizaciones -->
  <div v-else class="table-container">
    <table class="table w-full">
      <thead class="table-header">
        <tr>
          <th class="table-header-cell">Nombre</th>
          <th class="table-header-cell">RUT</th>
          <th class="table-header-cell">Creado</th>
          <th class="table-header-cell w-20">Acciones</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="org in organizaciones" :key="org.id" class="table-row">
          <td class="table-cell font-medium">
            {{ org.nombre }}
          </td>
          <td class="table-cell">
            {{ org.rut }}
          </td>
          <td class="table-cell">
            {{ formatFecha(org.creado_en) }}
          </td>
          <td class="table-cell">
            <div class="flex space-x-2">
              <!-- Editar -->
              <button 
                @click="emit('editar', org)"
                class="p-1 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                title="Editar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5
                    m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>

              <!-- Eliminar -->
              <button 
                @click="emit('eliminar', org)"
                class="p-1 text-gray-600 hover:text-error-600 dark:text-gray-300 dark:hover:text-error-400"
                title="Eliminar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7
                    m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
