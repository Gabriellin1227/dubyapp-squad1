<template>
    <div class="container-principal">
        <menuTaxas @abrir-modal="abrirModal" />
        <tabelaTaxas />

        <!-- Modal -->
        <configTaxas v-if="mostrarModal" @fechar="fecharModal" :adquirente-id="id" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import menuTaxas from '~/components/taxas/menuTaxas.vue'
import tabelaTaxas from '~/components/taxas/tabelaTaxas.vue'
import configTaxas from '~/components/taxas/configTaxas.vue'

const route = useRoute()
const id = route.params.id

const mostrarModal = ref(false)

const abrirModal = () => {
    mostrarModal.value = true
}

const fecharModal = () => {
    mostrarModal.value = false
}
</script>



<style lang="scss" scoped>
.container-principal {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>