import { defineStore } from 'pinia';

export const useAuth = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null as null | { email: string }
    }),
    actions: {
        login(email: string, password: string) {
            if (email === 'admin@duby.com' && password === 'admin@duby2025') {
                this.isAuthenticated = true
                this.user = { email }
                localStorage.setItem('auth', JSON.stringify(this.user))
                return true
            }

            return false
        },
        logout() {
            this.isAuthenticated = false
            this.user = null
            localStorage.removeItem('auth')
        },
        loadUserFromStorage() {
            const stored = localStorage.getItem('auth')
            if (stored) {
                this.user = JSON.parse(stored)
                this.isAuthenticated = true
            }
        }
    }
})