<script setup>
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Title,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title)

const props = defineProps({
    labels: Array,
    values: Array,
});

const chartData = {
    labels: props.labels,
    datasets: [
        {
            data: props.values,
            backgroundColor: '#412884',
            barThickness: 40,
            borderRadius: 8,
        },
    ],
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: 0
    },
    scales: {
        x: {
            ticks: {
                font: {
                    size: 12,
                },
                color: 'rgba(18, 40, 64, 0.6)',
            },
            grid: {
                display: false
            },
            border: {
                display: false
            },
            barPercentage: 1.0,
            categoryPercentage: 1.0,
        },
        y: {
            ticks: {
                stepSize: 2000,
                font: {
                    size: 12,
                },
                color: 'rgba(18, 40, 64, 0.6)',
                callback: (value) => `${value / 1000}k`,
            },
            grid: {
                color: 'rgba(18, 40, 64, 0.15)',
                lineWidth: 1,
            },
            border: {
                display: false,
            },
        },
    },
    plugins: {
        legend: { display: false },
        tooltip: {
            enabled: true,
            callbacks: {
                label: (context) => `R$ ${context.raw.toLocaleString('pt-Br')}`,
            },
        },
    },
};
</script>

<template>
  <div class="graph">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<style scoped>
.graph {
    height: 216px;
    width: 100%;
}
</style>