<script setup>
import { useAuth } from '@/stores/useAuth';
import cardsTotalGestor from '~/components/dashboard-gestor/cardsTotais.vue';

const auth = useAuth();
</script>

<template>
    <div v-if="auth.userRole === 'gestor'" class="dashboard-container">
        <!-- <component :is="cardsTotalGestor" /> -->
    </div>
</template>

<style scoped></style>