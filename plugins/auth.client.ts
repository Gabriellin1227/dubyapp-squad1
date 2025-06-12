import { useAuth } from '@/stores/useAuth'

export default defineNuxtPlugin(() => {
    const auth = useAuth();
    auth.loadUserFromStorage()
})