import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as null | { email: string },
    userRole: null as null | 'admin' | 'gestor',
  }),
  actions: {
    login(email: string, password: string) {
      const isValidAdmin = email === 'admin@duby.com' && password === 'admin@duby2025'
      const isValidGestor = email === 'gestor@gmail.com' && password === 'gestor@gmail2025'
      if (isValidAdmin || isValidGestor) {
        this.isAuthenticated = true
        this.user = { email }
        this.userRole = this.getRoleFromEmail(email)
        localStorage.setItem('auth', JSON.stringify(this.user))
        localStorage.setItem('userRole', this.userRole)
        return true
      }

      return false
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      this.userRole = null
      localStorage.removeItem('auth')
      localStorage.removeItem('userRole')
    },
    loadUserFromStorage() {
      const stored = localStorage.getItem('auth')
      const storedRole = localStorage.getItem('userRole')

      if (stored) {
        this.user = JSON.parse(stored)
        this.userRole = storedRole as 'admin' | 'gestor'
        this.isAuthenticated = true
      }
    },
    getRoleFromEmail(email: string): 'admin' | 'gestor' {
      return email.endsWith('@duby.com') ? 'admin' : 'gestor'
    }
  }
})