<script setup>
import { ref } from 'vue';
import importarArquivo from '~/components/importarArquivo.vue';
import arquivosImportados from '~/components/arquivosImportados.vue';

const step = ref(1);
const importArchive = ref(null);
const importedArchives = ref(null);

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
    if (step.value == steps.length) {
        console.log('opa, ativou!'); // ir para conciliação
    } else if (step.value < steps.length) {
        step.value++;
    }
};

const backStep = () => {
    if (step.value == steps.length) step.value--;
};

const showImportedArchives = () => {
    if (importedArchives.value.$el.style.display != 'flex') {
        importArchive.value.$el.style.display = 'none';
        importedArchives.value.$el.style.display = 'flex';
    } else if (importedArchives.value.$el.style.display == 'flex') {
        importArchive.value.$el.style.display = 'flex';
        importedArchives.value.$el.style.display = 'none';
    }
};
</script>

<template>
    <div class="main-container">
        <importarArquivo
        ref="importArchive"
        :key="step"
        :title="steps[step - 1].title"
        :labelSelector="steps[step - 1].labelSelector"
        :options="steps[step - 1].options"
        @next="nextStep"
        @back="backStep"
        @showImportedArchives="showImportedArchives"
        />
        <arquivosImportados
        ref="importedArchives"
        class="importedArchives"
        @showImportedArchives="showImportedArchives"
        />
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.importedArchives {
    display: none;
}
</style>