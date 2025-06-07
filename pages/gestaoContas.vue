<script setup>
import menuGestaoContas1 from '~/components/banco-adquirente/menuGestaoContas.vue';
import tabelaGCBancos from '~/components/banco-adquirente/tabelaGCBancos.vue';
import tabelaGCAdquirentes from '~/components/banco-adquirente/tabelaGCAdquirentes.vue'
import { getAllBancos } from '~/services/bancoService';

const tabelaAtiva = ref('bancos') // controla qual tabela mostrar

function trocarTabela(nomeTabela) {
        tabelaAtiva.value = nomeTabela
}
</script>

<template>
        <div class="container-principal">
                <menuGestaoContas1 @toggleTabela="trocarTabela" />

                <tabelaGCBancos v-if="tabelaAtiva === 'bancos'" />
                <tabelaGCAdquirentes v-else />
        </div>
</template>

<style scoped>
.container-principal {
        display: flex;
        flex-direction: column;
        gap: 2rem;
}
</style>