import { useAuth } from '@/stores/useAuth'

export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuth()

    const isLoginPage = to.path === '/login'

    if (!auth.isAuthenticated && !isLoginPage) {
        return navigateTo('/login')
    }

    if (auth.isAuthenticated && isLoginPage) {
        return navigateTo('/')
    }
})