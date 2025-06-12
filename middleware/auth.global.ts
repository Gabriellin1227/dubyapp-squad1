export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuth()

    const publicPages = ['/login', '/recuperarSenha']
    const isPublicPage = publicPages.includes(to.path)

    if (!auth.isAuthenticated && !isPublicPage) {
        return navigateTo('/login')
    }

    if (auth.isAuthenticated && to.path === '/login') {
        return navigateTo('/')
    }
});