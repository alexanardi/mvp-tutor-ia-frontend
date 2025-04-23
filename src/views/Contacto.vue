<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

const submitForm = () => {
  isSubmitting.value = true
  error.value = ''
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    
    // Reset form
    name.value = ''
    email.value = ''
    message.value = ''
  }, 1000)
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
      Contáctanos
    </h1>
    
    <div class="card">
      <div v-if="isSubmitted" class="bg-success-50 dark:bg-success-900 border border-success-200 dark:border-success-800 rounded-md p-4 mb-6">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-success-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-success-800 dark:text-success-200">
                ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
            </p>
          </div>
        </div>
      </div>
      
      <div v-if="error" class="bg-error-50 dark:bg-error-900 border border-error-200 dark:border-error-800 rounded-md p-4 mb-6">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-error-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-error-800 dark:text-error-200">
              {{ error }}
            </p>
          </div>
        </div>
      </div>
        
      <form @submit.prevent="submitForm">
        <div class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nombre
            </label>
            <input 
              id="name" 
              v-model="name" 
              type="text" 
              required
              class="input" 
              placeholder="Tu nombre"
            >
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input 
              id="email" 
              v-model="email" 
              type="email" 
              required
              class="input" 
              placeholder="Tu email@example.com"
            >
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mensaje
            </label>
            <textarea 
              id="message" 
              v-model="message" 
              rows="5" 
              required
              class="input" 
              placeholder="¿Cómo podemos ayudarte?"
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit" 
              class="btn-primary w-full md:w-auto"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                enviando...
              </span>
              <span v-else>Mensaje enviado</span>
            </button>
          </div>
        </div>
      </form>
      
      <div class="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Otras formas de contactarnos
        </h3>
        
        <div class="space-y-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-gray-700 dark:text-gray-300">
                soporte@tutor-ia.com
              </p>
            </div>
          </div>
          
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-gray-700 dark:text-gray-300">
                +56 9 1234 5678
              </p>
            </div>
          </div>
          
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-gray-700 dark:text-gray-300">
                Los Conquistadores, 1114<br>
                Providencia, STGO 89007
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>