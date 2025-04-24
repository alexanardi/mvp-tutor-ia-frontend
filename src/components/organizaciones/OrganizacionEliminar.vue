<script setup lang="ts">
import type { Organizacion } from '@/types/organizacion'

const { organizacion } = defineProps<{
  organizacion?: Organizacion
}>()

const emit = defineEmits<{
  (e: 'cerrar'): void
  (e: 'confirmar'): void
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="fade" appear>
      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4 py-12 text-center sm:block sm:p-0">
          <!-- Fondo oscuro -->
          <div
            class="fixed inset-0 bg-gray-500 dark:bg-gray-900 opacity-75 backdrop-blur-sm transition-opacity"
            @click="emit('cerrar')"
          />

          <!-- Modal de confirmación -->
          <Transition name="slide-up">
            <div
              class="inline-block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full z-10 border dark:border-gray-700"
            >
              <div class="px-6 py-5 sm:p-6">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-error-100 dark:bg-error-900 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-error-600 dark:text-error-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01M6.938 4h10.124c.47 0 .884.327.98.789l1.516 8.788A1 1 0 0118.563 15H5.437a1 1 0 01-.995-1.136l1.516-8.788A1 1 0 016.938 4z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                      Eliminar organización
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-600 dark:text-gray-300">
                        ¿Estás seguro de que deseas eliminar
                        <strong>{{ organizacion?.nombre }}</strong>? Esta acción no se puede deshacer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 dark:bg-gray-700/50 px-6 py-4 flex flex-col sm:flex-row justify-end gap-2 border-t dark:border-gray-600">
                <button @click="emit('confirmar')" class="btn-danger">
                  Eliminar
                </button>
                <button @click="emit('cerrar')" class="btn-outline">
                  Cancelar
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
