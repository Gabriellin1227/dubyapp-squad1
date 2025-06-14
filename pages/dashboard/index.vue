<script setup>
import { useAuth } from '@/stores/useAuth';
import cardsTotalGestor from '~/components/dashboard-gestor/cardsTotais.vue';
import totalVendasGestor from '~/components/dashboard-gestor/totalVendas.vue';
import rankingAdquirentesGestor from '~/components/dashboard-gestor/rankingAdquirentes.vue';
import taxasAplicadas from '~/components/dashboard-gestor/taxasAplicadas.vue';

const auth = useAuth();
</script>

<template>
    <div v-if="auth.userRole === 'gestor'" class="dashboard-container">
        <div class="wrap-3">
            <div class="wrap-2">
                <div class="wrap-1">
                    <NuxtLink to="/dashboard/analiseTotais">
                        <component :is="cardsTotalGestor" />
                    </NuxtLink>
                    <component :is="totalVendasGestor" />
                </div>
                <NuxtLink to="/dashboard/rankingAdquirentes">
                    <component :is="rankingAdquirentesGestor" />
                </NuxtLink>
            </div>
            <component :is="taxasAplicadas" />
        </div>
    </div>
</template>

<style scoped>
.dashboard-container {
    height: 100%;
    width: 100%;
}

.wrap-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    flex: 1.7;

    height: 100%;
    width: 100%;
}

.wrap-2 {
    display: flex;
    gap: 24px;

    height: 100%;
}

.wrap-3 {
    display: flex;
    flex-direction: column;
    gap: 24px;

    height: 100%;
    width: 100%;
}
</style>