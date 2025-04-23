// Importa la función principal de Pinia para crear un store
import { defineStore } from 'pinia'

// Define la interfaz del objeto usuario (estructura del dato que se guardará)
interface User {
  id: string
  name: string
  email: string
}

// Define el estado que manejará este store
interface AuthState {
  user: User | null         // El usuario logueado, o null si no hay sesión
  isLoggedIn: boolean       // Bandera que indica si hay sesión activa
}

// Crea y exporta el store con el nombre 'auth'
export const useAuthStore = defineStore('auth', {
  // Estado inicial del store
  state: (): AuthState => ({
    user: null,             // No hay usuario al iniciar
    isLoggedIn: false       // Tampoco hay sesión activa
  }),

  // Métodos para cambiar el estado
  actions: {
    // Al loguearse, se guarda el usuario y se marca sesión activa
    login(user: User) {
      this.user = user
      this.isLoggedIn = true
    },

    // Al cerrar sesión, se borra el usuario y se desactiva la sesión
    logout() {
      this.user = null
      this.isLoggedIn = false
    }
  },

  // Habilita persistencia automática (usa localStorage por defecto)
  persist: true
})
