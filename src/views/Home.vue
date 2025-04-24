<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <div class="space-y-20">
    <!-- Hero Section -->
    <section class="py-12 md:py-20">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Organiza tu Colegio, <span class="text-primary-500">Simplifica tu día</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Optimice la gestión de su organización con nuestra plataforma potente e intuitiva.
          Tome el control de sus operaciones comerciales hoy mismo.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link 
            v-if="!authStore.isLoggedIn"
            to="/" 
            @click="() => authStore.login({
              id: '1',
              name: 'Demo User',
              email: 'demo@example.com'
            })" 
            class="btn-primary text-center"
          >
            Get Started
          </router-link>
          <router-link 
            v-else
            to="/organizaciones" 
            class="btn-primary text-center"
          >
            Gestionar Organizaciones
          </router-link>
          <router-link to="/guia" class="btn-outline text-center">
            Aprender más
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Benefits Section -->
    <section class="py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          ¿Por qué elegir nuestra Plataforma?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubra cómo nuestra herramienta de gestión organizacional puede transformar las operaciones de su negocio.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <!-- Benefit 1 -->
        <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <div class="h-12 w-12 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fácil de usar</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Interfaz intuitiva que facilita la gestión de organizaciones para equipos de cualquier tamaño.
          </p>
        </div>
        
        <!-- Benefit 2 -->
        <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <div class="h-12 w-12 mx-auto mb-4 bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Funciones Potentes</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Herramientas organizacionales avanzadas que se adaptan a su flujo de trabajo y necesidades empresariales.
          </p>
        </div>
        
        <!-- Benefit 3 -->
        <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <div class="h-12 w-12 mx-auto mb-4 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Seguro y Confiable</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Diseñado con la seguridad en mente, asegurando que los datos de su organización permanezcan protegidos.
          </p>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-12 text-center">
      <div class="bg-primary-50 dark:bg-primary-900 p-8 rounded-xl max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Listo para Comenzar?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Únete a miles de empresas que han optimizado la gestión de sus organizaciones.
        </p>
        <router-link 
          v-if="!authStore.isLoggedIn"
          to="/" 
          @click="() => authStore.login({
            id: '1',
            name: 'Demo User',
            email: 'demo@example.com'
          })" 
          class="btn-primary inline-block"
        >
            Comienza a Organizar Hoy
        </router-link>
        <router-link 
          v-else
          to="/organizations" 
          class="btn-primary inline-block"
        >
            Gestiona tus Organizaciones
        </router-link>
      </div>
    </section>
  </div>
</template>