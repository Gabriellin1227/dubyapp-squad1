<script setup>
import menuGestaoContas1 from '~/components/banco-adquirente/menuGestaoContas.vue';
import tabelaGCBancos from '~/components/banco-adquirente/tabelaGCBancos.vue';
import tabelaGCAdquirentes from '~/components/banco-adquirente/tabelaGCAdquirentes.vue'
import CadBanco from '~/components/banco-adquirente/cadBanco.vue';


const tabelaAtiva = ref('bancos') // controla qual tabela mostrar
const mostrarModal = ref(false)

function trocarTabela(nomeTabela) {
        tabelaAtiva.value = nomeTabela
}

function abrirModal() {
        mostrarModal.value = true
}

function fecharModal() {
        mostrarModal.value = false
}

</script>

<template>
        <div class="container-principal">
                <menuGestaoContas1 @toggleTabela="trocarTabela" @abrirModal="abrirModal"/>

                <tabelaGCBancos v-if="tabelaAtiva === 'bancos'" />
                <tabelaGCAdquirentes v-else />

                <CadBanco v-if="mostrarModal" @fechar="fecharModal" />
        </div>
</template>

<style scoped>
.container-principal {
        display: flex;
        flex-direction: column;
        gap: 2rem;
}
</style>