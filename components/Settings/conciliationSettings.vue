<script setup></script>

<template>
    <div class="setting-group">
        <div class="group-title">Formatação</div>
        <div class="group-content">
            <div class="setting-card">
                <div class="card-title">Moeda</div>
                <div class="card-content">
                    <select name="moneyFormat-select" id="moneyFormatSelect">
                        <option value="" selected disabled>Selecione um tipo de moeda</option>
                        <option value="brl">BRL</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
                </div>
            </div>
            <div class="setting-card">
                <div class="card-title">Valores</div>
                <div class="card-content">
                    <select name="formatValues-select" id="formatValuesSelect">
                        <option value="" selected disabled>Selecione um formato</option>
                        <option value="format1">0.000,00</option>
                        <option value="format2">0,000.00</option>
                        <option value="format3">0 000,00</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="setting-group">
        <div class="group-title">Algoritmo de matching</div>
        <div class="group-content">
            <div class="setting-card">
                <div class="card-title">Tolerância máxima (R$)</div>
                <div class="card-content">
                    <input type="text" name="matchingAlgorithm" id="matchingAlgorithm" placeholder="0,00">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.setting-group {
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: 100%;

    .group-title {
        color: var(--texto);
        font-size: 24px;
        font-weight: 500;
    }

    .group-content {
        display: flex;
        flex-flow: row wrap;
        gap: 24px 64px;

        .setting-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 8px;

            width: 100%;
            max-width: 296px;

            .card-title {
                color: var(--texto);
                font-size: 16px;
            }

            .card-content {
                color: rgba(18, 40, 64, 0.75);
                font-size: 14px;
            }

            select {
                height: 40px;
                width: 100%;

                color: var(--placeholder);
                font-size: 14px;

                background-color: var(--background);

                border: 1px solid rgba(65, 40, 132, 0.2);
                border-radius: 5px;
            }

            input {
                height: 40px;
                width: 100%;

                padding: 8px;

                background-color: var(--background);

                border: 1px solid rgba(65, 40, 132, 0.2);
                border-radius: 5px;
            }
        }
    }
}
</style>