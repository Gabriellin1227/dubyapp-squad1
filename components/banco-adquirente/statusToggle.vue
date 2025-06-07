<template>
    <label class="switch">
        <input type="checkbox" :checked="status === 'ativo'" @change="toggleStatus" />
        <span class="slider">{{ status === 'ativo' ? 'ON' : 'OFF' }}</span>
    </label>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { BancoStatus, updateBancoStatus } from '~/services/bancoService'

const props = defineProps<{
    id: number
    statusInicial: BancoStatus
}>()

const status = ref<BancoStatus>(props.statusInicial)

const toggleStatus = async () => {
    const novoStatus = status.value === BancoStatus.Ativo
        ? BancoStatus.Inativo
        : BancoStatus.Ativo

    try {
        await updateBancoStatus(props.id, novoStatus)
        status.value = novoStatus
    } catch (err) {
        console.error('Erro ao atualizar status:', err)
    }
}
</script>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 112px;
    height: 40px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    background-color: #4B2E83;
    border-radius: 40px;
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 0.875rem;
    /* Aumentado para 14px */
    font-weight: bold;
    line-height: 40px;
    text-align: left;
    padding-left: 16px;
    transition: all 1.5s ease;
}

.slider::after {
    content: "";
    position: absolute;
    right: 6px;
    top: 6px;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.3s ease;
}

input:not(:checked)+.slider {
    background-color: #ccc;
    color: #4B2E83;
    text-align: right;
    padding-right: 16px;
}

input:not(:checked)+.slider::after {
    right: auto;
    left: 6px;
}
</style>
