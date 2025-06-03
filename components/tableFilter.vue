<script setup>
const emit = defineEmits(['handlerModal']);
</script>

<template>
    <div class="table-filter">
        <input type="text" name="search" id="search" placeholder="Pesquise algo">
        <select name="period" id="period">
            <option value="" disabled selected>Período</option>
            <option value="lastWeek">Última semana</option>
            <option value="lastMonth" selected>Último mês</option>
            <option value="lastTwoMonth" selected>Últimos dois meses</option>
            <option value="lastSemester">Último semestre</option>
        </select>
        <select name="status" id="status">
            <option value="" disabled selected>Status</option>
            <option value="noReconciled" selected>Não conciliada</option>
            <option value="inReconciliation">Em conciliação</option>
            <option value="reconciled">Conciliada</option>
        </select>
        <select name="acquirer" id="acquirer">
            <option value="" disabled selected>Adquirente</option>
            <option value="stone" selected>Stone</option>
            <option value="bin">Bin</option>
            <option value="sumup">Sumup</option>
            <option value="getnet">GetNet</option>
            <option value="pagseguro">PagSeguro</option>
        </select>
        <select name="bank" id="bank">
            <option value="" disabled selected>Banco</option>
            <option value="santander">Santander</option>
            <option value="bradesco">Bradesco</option>
            <option value="bancoDoBrasil">Banco do Brasil</option>
            <option value="banese">Banese</option>
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
        max-width: 200px;
        text-align: center;

        cursor: pointer;
    }

    button {
        max-width: 200px;
        flex: 1.5;
    }

    input {
        max-width: 400px;
        flex: 1.4;

        padding: 12px 16px;
    }
}
</style>