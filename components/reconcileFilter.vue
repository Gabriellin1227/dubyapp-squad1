<script setup></script>

<template>
    <div class="table-filter">
        <input type="text" name="search" id="search" placeholder="Pesquise algo">
        <select name="anticipation" id="anticipation">
            <option value="" disabled selected>Antecipação</option>
            <option value="yes">Antecipado</option>
            <option value="no">Não antecipado</option>
        </select>
        <select name="status" id="status">
            <option value="" disabled selected>Status</option>
            <option value="noReconciled">Não conciliada</option>
            <option value="reconciled">Conciliada</option>
        </select>
        <select name="modality" id="modality">
            <option value="" disabled selected>Modalidade</option>
            <option value="mastercard">Mastercard</option>
            <option value="alelo">Alelo</option>
            <option value="pix">Pix</option>
            <option value="visa">Visa</option>
            <option value="elo">Elo</option>
        </select>
        <select name="productType" id="productTypeSelect">
            <option value="" disabled selected>Tipo de Produto</option>
            <option value="debito">Débito</option>
            <option value="creditoAVista">Crédito à vista</option>
            <option value="creditoParcelado">Crédito parcelado</option>
            <option value="pix">Pix</option>
            <option value="voucher">Voucher</option>
            <option value="carteiraDigital">Carteira Digital</option>
        </select>
        <button @click="emit('handlerModal')">Filtros Avançados</button>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                <g fill="none" stroke="#12283F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1">
                    <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                    <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                </g>
            </svg>
            <div class="title-button">Editar</div>
        </button>
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
        display: flex;
        gap: 8px;

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