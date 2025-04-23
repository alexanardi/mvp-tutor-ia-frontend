<script setup lang="ts">
import { ref } from 'vue'

// Estado del menú móvil
const isMobileMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header: con emisión para controlar menú móvil -->
    <AppHeader @toggle-mobile="isMobileMenuOpen = !isMobileMenuOpen" />

    <!-- Menú móvil: solo visible en móviles -->
    <AppMobileMenu v-if="isMobileMenuOpen" @close="isMobileMenuOpen = false" />

    <!-- Contenido principal -->
    <main class="flex-grow pt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { AppHeader, AppMobileMenu, AppFooter } from '@/components/layout'


export default {
  components: {
    AppHeader,
    AppMobileMenu,
    AppFooter,
  },
}
</script>
