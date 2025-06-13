<script setup>
import { useAuth } from '@/stores/useAuth';
import cardsTotalGestor from '~/components/dashboard-gestor/cardsTotais.vue';
import totalVendasGestor from '~/components/dashboard-gestor/totalVendas.vue';
import rankingAdquirentesGestor from '~/components/dashboard-gestor/rankingAdquirentes.vue';

const auth = useAuth();
</script>

<template>
    <div v-if="auth.userRole === 'gestor'" class="dashboard-container">
        <!-- <component :is="cardsTotalGestor" /> -->
        <!-- <component :is="totalVendasGestor" /> -->
        <!-- <component :is="rankingAdquirentesGestor" /> -->
    </div>
</template>

<style scoped></style>