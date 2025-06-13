<script setup>
import BarChart from '~/components/dashboard-gestor/BarChart.vue'

const labels = ['JAN/24', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
const values = [2000, 4300, 9100, 2900, 7000, 5600, 8500, 1200, 4400, 3300, 6000, 6800]
</script>

<template>
    <div class="totalSales-container">
        <div class="totalSales-header">
            <div class="totalSales-title">Vendas mensais</div>
            <div class="totalSales-average">Valor médio: R$ 5.510,00</div>
        </div>
        <div class="totalSales-graph-container">
            <div class="flex justify-center items-center p-8">
                <BarChart :labels="labels" :values="values" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.totalSales-container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    height: 302px;
    width: 100%;

    padding: 24px;

    background-color: #ffffff;

    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

    cursor: pointer;

    .totalSales-header {
        display: flex;
        justify-content: space-between;

        width: 100%;

        .totalSales-title {
            color: var(--principal);
            font-size: 16px;
            font-weight: 600;
        }

        .totalSales-average {
            color: rgba(18, 40, 64, 0.8);
            font-size: 14px;
            font-weight: 500;
        }
    }
}
</style>