<script setup>
import { ref } from 'vue';
import importarArquivo from '~/components/importarArquivo.vue';

const step = ref(1);

const steps = [
    {
        title: 'Adicionar Extrato Bancário',
        labelSelector: 'Banco',
        options: ['Banco do Brasil', 'Santander', 'Bradesco', 'Itaú', 'Banese']
    },
    {
        title: 'Adicionar Transações do Adquirente',
        labelSelector: 'Adquirente',
        options: ['Cielo', 'Stone', 'Rede', 'Bin', 'Sumup', 'Getnet']
    }
];

const nextStep = () => {
    if (step.value < steps.length) step.value++;
};

const backStep = () => {
    if (step.value == steps.length) step.value--;
}
</script>

<template>
    <div class="main-container">
        <importarArquivo
        :key="step"
        :title="steps[step - 1].title"
        :labelSelector="steps[step - 1].labelSelector"
        :options="steps[step - 1].options"
        @next="nextStep"
        @back="backStep"
        />
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>