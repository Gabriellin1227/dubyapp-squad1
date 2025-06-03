<script setup>
import menuGestaoContas1 from '~/components/menuGestaoContas.vue';
import tabelaGestaoContas from '~/components/tabelaGestaoContas.vue';

</script>

<template>
        <div class="container-principal">
        <menuGestaoContas1 />
        <tabelaGestaoContas />
        </div>
</template>

<style scoped>

.container-principal {
        display: flex;
        flex-direction: column;
        gap: 2rem;
}
</style>