<template>
    <footer class="bg-white dark:bg-gray-800 shadow-inner">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Texto legal -->
          <div class="mb-4 md:mb-0">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              &copy; {{ new Date().getFullYear() }} Tutor IA. Todos los derechos reservados.
            </p>
          </div>
  
          <!-- Enlaces -->
          <div class="flex space-x-6">
            <a href="#" class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <span class="sr-only">Política de privacidad</span>
              Privacidad
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <span class="sr-only">Términos del servicio</span>
              Términos
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <span class="sr-only">Soporte</span>
              Soporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  