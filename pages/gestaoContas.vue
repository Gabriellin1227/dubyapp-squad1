<script setup>
import menuGestaoContas1 from '~/components/banco-adquirente/menuGestaoContas.vue';
import tabelaGCBancos from '~/components/banco-adquirente/tabelaGCBancos.vue';
import tabelaGCAdquirentes from '~/components/banco-adquirente/tabelaGCAdquirentes.vue'
import cadBanco from '~/components/banco-adquirente/cadBanco.vue';
import cadAdquirente from '~/components/banco-adquirente/cadAdquirente.vue';
import { getAllBancos } from '@/services/bancoService';


const tabelaAtiva = ref('bancos') // controla qual tabela mostrar
const mostrarModal = ref(false)
const tipoFormulario = ref('banco') // controle do tipo de modal

function trocarTabela(nomeTabela) {
        tabelaAtiva.value = nomeTabela
}

function abrirModal() {
        tipoFormulario.value = tabelaAtiva.value === 'bancos' ? 'banco' : 'adquirente' // atualiza o tipo
        mostrarModal.value = true
}

function fecharModal() {
        mostrarModal.value = false
}

</script>

<template>
        <div class="container-principal">
                <menuGestaoContas1 @toggleTabela="trocarTabela" @abrirModal="abrirModal" />

                <tabelaGCBancos v-if="tabelaAtiva === 'bancos'" />
                <tabelaGCAdquirentes v-else />

                <cadBanco v-if="mostrarModal && tipoFormulario === 'banco'" @fechar="fecharModal"
                        @atualizarLista="buscarBancos" />

                <cadAdquirente v-if="mostrarModal && tipoFormulario === 'adquirente'" @fechar="fecharModal"
                        @atualizarLista="buscarBancos" />
        </div>
</template>

<style scoped>
.container-principal {
        display: flex;
        flex-direction: column;
        gap: 2rem;
}
</style>