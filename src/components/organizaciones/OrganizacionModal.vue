<script setup lang="ts">
import { ref, watch } from 'vue'
//import type { Organizacion } from '@/types/organizacion'


const props = defineProps<{
  modoEdicion: boolean
  organizacion: Organizacion | null
}>()

const emit = defineEmits<{
  (e: 'cerrar'): void
  (e: 'guardar', payload: { nombre: string; rut: string }): void
}>()

// Campos
const nombre = ref('')
const rut = ref('')
const errores = ref<{ nombre?: string; rut?: string }>({})

// Cargar valores si es edición
watch(
  () => props.organizacion,
  (org) => {
    nombre.value = org?.nombre ?? ''
    rut.value = org?.rut ?? ''
    errores.value = {}
  },
  { immediate: true }
)

const validar = () => {
  errores.value = {}
  if (!nombre.value.trim()) errores.value.nombre = 'El nombre es obligatorio.'
  if (!rut.value.trim()) errores.value.rut = 'El RUT es obligatorio.'
  return Object.keys(errores.value).length === 0
}

const guardar = () => {
  if (!validar()) return
  emit('guardar', {
    nombre: nombre.value.trim(),
    rut: rut.value.trim()
  })
}
</script>

<template>
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen px-4 py-12 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 dark:bg-gray-900 opacity-75 backdrop-blur-sm" @click="emit('cerrar')" />

      <div class="inline-block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full z-10 border dark:border-gray-700">
        <div class="px-6 py-5 sm:p-6">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
            {{ modoEdicion ? 'Editar organización' : 'Crear organización' }}
          </h3>

          <form @submit.prevent="guardar" class="space-y-4">
            <!-- Nombre -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Nombre</label>
              <input
                v-model="nombre"
                type="text"
                class="input w-full"
                :class="{ 'border-error-500 dark:border-error-500': errores.nombre }"
              />
              <p v-if="errores.nombre" class="text-sm text-error-600 dark:text-error-400 mt-1 text-left">{{ errores.nombre }}</p>
            </div>

            <!-- RUT -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">RUT</label>
              <input
                v-model="rut"
                type="text"
                class="input w-full"
                :class="{ 'border-error-500 dark:border-error-500': errores.rut }"
              />
              <p v-if="errores.rut" class="text-sm text-error-600 dark:text-error-400 mt-1 text-left">{{ errores.rut }}</p>
            </div>
          </form>
        </div>

        <div class="bg-gray-50 dark:bg-gray-700/50 px-6 py-4 flex justify-end gap-2 border-t dark:border-gray-600">
          <button @click="guardar" class="btn-primary">
            {{ modoEdicion ? 'Actualizar' : 'Crear' }}
          </button>
          <button @click="emit('cerrar')" class="btn-outline">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>
