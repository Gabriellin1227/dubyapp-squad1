<script setup>
const emit = defineEmits(['handlerModal']);
</script>

<template>
    <div class="table-filter">
        <input type="text" name="search" id="search" placeholder="Pesquise algo">
        <select name="period" id="period">
            <option value="" selected>Período</option>
        </select>
        <select name="status" id="status">
            <option value="" selected>Status</option>
        </select>
        <select name="acquirer" id="acquirer">
            <option value="" selected>Adquirente</option>
        </select>
        <select name="bank" id="bank">
            <option value="" selected>Banco</option>
        </select>
        <select name="analyst" id="analyst">
            <option value="" selected>Analista</option>
        </select>
        <button @click="emit('handlerModal')">Filtros Avançados</button>
    </div>
</template>

<style scoped>
.table-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-sm);

    height: 64px;

    padding: 8px 16px;

    background-color: rgba(65, 40, 132, 0.05);

    border-radius: 10px;

    select, input, button {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        
        height: 100%;
        width: 100%;

        color: var(--texto);
        font-size: 12px;
        background-color: var(--background);

        border: 1px solid var(--input);
        border-radius: 8px;
    }

    select:focus, input:focus, button:focus {
        outline: 1px solid var(--principal);
    }

    select {
        text-align: center;

        cursor: pointer;

        option {
            text-align: center;
        }
    }

    button {
        flex: 1.4;
    }

    input {
        flex: 1.5;

        padding: 12px 16px;
    }
}
</style>