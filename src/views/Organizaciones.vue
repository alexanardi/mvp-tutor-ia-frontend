<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { api } from '@/utils/api'

import type { Organizacion } from '@/types/organizacion'


import { useToast } from 'vue-toastification'
const toast = useToast()

// Componentes
import OrganizacionBuscar from '@/components/organizaciones/OrganizacionBuscar.vue'
import OrganizacionTabla from '@/components/organizaciones/OrganizacionTabla.vue'
import OrganizacionModal from '@/components/organizaciones/OrganizacionModal.vue'
import OrganizacionEliminar from '@/components/organizaciones/OrganizacionEliminar.vue'

// Estado principal
const organizaciones = ref<Organizacion[]>([])
const isLoading = ref(true)
const searchQuery = ref('')

// Control de modal y organización seleccionada
const modal = ref<null | 'crear' | 'editar' | 'eliminar'>(null)
const organizacionSeleccionada = ref<Organizacion | null>(null)

// Filtrar por búsqueda
const organizacionesFiltradas = computed(() => {
  if (!searchQuery.value) return organizaciones.value
  const q = searchQuery.value.toLowerCase()
  return organizaciones.value.filter(org =>
    org.nombre.toLowerCase().includes(q) ||
    org.rut.toLowerCase().includes(q)
  )
})

// Cargar desde API
onMounted(async () => {
  try {
    const response = await api.get('/organizaciones')
    organizaciones.value = response.data
  } catch (error) {
    console.error('Error al cargar organizaciones', error)
  } finally {
    isLoading.value = false
  }
})

// Abrir acciones
const abrirCrear = () => {
  organizacionSeleccionada.value = null
  modal.value = 'crear'
}

const abrirEditar = (org: Organizacion) => {
  organizacionSeleccionada.value = org
  modal.value = 'editar'
}

const abrirEliminar = (org: Organizacion) => {
  organizacionSeleccionada.value = org
  modal.value = 'eliminar'
}

// Guardar
const guardarOrganizacion = async (data: { nombre: string; rut: string }) => {
  try {
    if (modal.value === 'editar' && organizacionSeleccionada.value) {
      await api.put(`/organizaciones/${organizacionSeleccionada.value.id}`, data)
      const index = organizaciones.value.findIndex(org => org.id === organizacionSeleccionada.value!.id)
      if (index !== -1) organizaciones.value[index] = { ...organizaciones.value[index], ...data }
      toast.success('Organización actualizada')
    } else {
      const response = await api.post('/organizaciones', { ...data, email_contacto: null })
      organizaciones.value.unshift(response.data)
      toast.success('Organización creada')
    }
    cerrarModal()
  } catch (error) {
    console.error('Error al guardar organización:', error)
    toast.error('Ocurrió un error al guardar.')
  }
}

// Eliminar
const confirmarEliminar = async () => {
  if (!organizacionSeleccionada.value) return
  try {
    await api.delete(`/organizaciones/${organizacionSeleccionada.value.id}`)
    organizaciones.value = organizaciones.value.filter(
      org => org.id !== organizacionSeleccionada.value!.id
    )
    cerrarModal()
  } catch (error) {
    console.error('Error al eliminar organización:', error)
  }
}

// Cerrar todo
const cerrarModal = () => {
  modal.value = null
  organizacionSeleccionada.value = null
}
</script>

<template>
  <div class="space-y-6">
    <!-- Buscador -->
    <OrganizacionBuscar v-model:busqueda="searchQuery" @crear="abrirCrear" />

    <!-- Cargando -->
    <div v-if="isLoading" class="card flex justify-center items-center p-12">
      <span class="text-gray-600 dark:text-gray-300">Cargando organizaciones...</span>
    </div>

    <!-- Tabla -->
    <OrganizacionTabla
      v-else-if="organizacionesFiltradas.length > 0"
      :organizaciones="organizacionesFiltradas"
      @editar="abrirEditar"
      @eliminar="abrirEliminar"
    />

    <!-- Sin resultados -->
    <div
      v-else
      class="card flex justify-center items-center p-12"
    >
      <div class="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Sin coincidencias</h3>
        <p class="text-gray-600 dark:text-gray-300">No hay registros.</p>
      </div>
    </div>

    <!-- Modal Crear / Editar -->
    <OrganizacionModal
      v-if="modal === 'crear' || (modal === 'editar' && organizacionSeleccionada)"
      :modo-edicion="modal === 'editar'"
      :organizacion="organizacionSeleccionada ?? null"
      @cerrar="cerrarModal"
      @guardar="guardarOrganizacion"
    />

    <!-- Modal Eliminar -->
    <OrganizacionEliminar
      v-if="modal === 'eliminar' && organizacionSeleccionada"
      :organizacion="organizacionSeleccionada"
      @cerrar="cerrarModal"
      @confirmar="confirmarEliminar"
    />
  </div>
</template>

