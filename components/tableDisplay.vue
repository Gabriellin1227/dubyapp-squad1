<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const reconcileHistory = [
    {
        date: '23/03/2025',
        id: '250323-01',
        period: '01/02 - 20/03',
        analyst: 'Ana Souza',
        acquirer: 'Stone',
        bank: 'Santander',
        totalSold: 'R$ 150.000,00',
        totalReceived: 'R$ 148.000,00',
        divergence: 'R$ 2.000,00',
        status: 'Em conciliação'
    },
    {
        date: '01/04/2025',
        id: '250401-01',
        period: '01/03 - 31/03',
        analyst: 'Marcos Silva',
        acquirer: 'Rede',
        bank: 'Bradesco',
        totalSold: 'R$ 200.000,00',
        totalReceived: 'R$ 200.000,00',
        divergence: 'R$ 0,00',
        status: 'Conciliada'
    },
    {
        date: '05/04/2025',
        id: '250405-01',
        period: '10/03 - 30/03',
        analyst: 'Fernanda Lima',
        acquirer: 'Cielo',
        bank: 'Banco do Brasil',
        totalSold: 'R$ 180.000,00',
        totalReceived: 'R$ 177.500,00',
        divergence: 'R$ 2.500,00',
        status: 'Não conciliada'
    },
    {
        date: '06/04/2025',
        id: '250406-01',
        period: '15/03 - 31/03',
        analyst: 'Lucas Amaral',
        acquirer: 'Getnet',
        bank: 'Itaú',
        totalSold: 'R$ 95.000,00',
        totalReceived: 'R$ 95.000,00',
        divergence: 'R$ 0,00',
        status: 'Conciliada'
    },
    {
        date: '06/04/2025',
        id: '250406-02',
        period: '01/03 - 25/03',
        analyst: 'Julia Mendes',
        acquirer: 'Stone',
        bank: 'Santander',
        totalSold: 'R$ 210.000,00',
        totalReceived: 'R$ 208.000,00',
        divergence: 'R$ 2.000,00',
        status: 'Em conciliação'
    },
    {
        date: '10/04/2025',
        id: '250410-01',
        period: '01/04 - 07/04',
        analyst: 'Bruno Costa',
        acquirer: 'Cielo',
        bank: 'Bradesco',
        totalSold: 'R$ 70.000,00',
        totalReceived: 'R$ 69.700,00',
        divergence: 'R$ 300,00',
        status: 'Não conciliada'
    },
    {
        date: '15/04/2025',
        id: '250415-01',
        period: '01/03 - 31/03',
        analyst: 'Marina Torres',
        acquirer: 'Rede',
        bank: 'Banco do Brasil',
        totalSold: 'R$ 160.000,00',
        totalReceived: 'R$ 160.000,00',
        divergence: 'R$ 0,00',
        status: 'Conciliada'
    },
    {
        date: '15/04/2025',
        id: '250415-02',
        period: '05/03 - 25/03',
        analyst: 'Thiago Alves',
        acquirer: 'Getnet',
        bank: 'Caixa',
        totalSold: 'R$ 140.000,00',
        totalReceived: 'R$ 138.000,00',
        divergence: 'R$ 2.000,00',
        status: 'Em conciliação'
    },
    {
        date: '18/04/2025',
        id: '250418-01',
        period: '01/04 - 10/04',
        analyst: 'Camila Ribeiro',
        acquirer: 'Cielo',
        bank: 'Santander',
        totalSold: 'R$ 120.000,00',
        totalReceived: 'R$ 119.000,00',
        divergence: 'R$ 1.000,00',
        status: 'Não conciliada'
    },
    {
        date: '20/04/2025',
        id: '250420-01',
        period: '01/03 - 31/03',
        analyst: 'Rodrigo Lima',
        acquirer: 'Stone',
        bank: 'Bradesco',
        totalSold: 'R$ 250.000,00',
        totalReceived: 'R$ 250.000,00',
        divergence: 'R$ 0,00',
        status: 'Conciliada'
        // como o link de "ações" será feito a partir do id, não adicionei url.
    }
];

const reconcileStatus = (status) => {
    if (status === 'Conciliada') {
        return 'reconciled';
    } else if (status === 'Em conciliação') {
        return 'in-conciliation';
    } else {
        return 'no-reconciled';
    }
};

const selectedRows = ref([]);

const isAllSelected = computed(() => {
    reconcileHistory.every(row => selectedRows.value.includes(row.id));
});

const setAllSelected = (value) => {
    selectedRows.value = value
    ? reconcileHistory.map(row => row.id)
    : [];
};

const toggleRow = (id) => {
    const index = selectedRows.value.indexOf(id);
    if (index > -1) {
        selectedRows.value.splice(index, 1);
    } else {
        selectedRows.value.push(id);
    }
};
</script>

<template>
    <div class="table-container">
        <table class="table-content">
            <thead>
                <tr>
                    <th>
                        <label class="custom-checkbox">
                            <input
                            type="checkbox"
                            :checked="isAllSelected"
                            @change="(e) => setAllSelected(e.target.checked)"
                            />
                            <span class="checkbox-box"></span>
                        </label>
                    </th>
                    <th>Data</th>
                    <th>ID</th>
                    <th>Período analisado</th>
                    <th>Analista</th>
                    <th>Adquirente</th>
                    <th>Banco</th>
                    <th>Total vendido</th>
                    <th>Total recebido</th>
                    <th>Divergência</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in reconcileHistory" :key="row.id">
                    <td>
                        <label class="custom-checkbox">
                            <input
                            type="checkbox"
                            :checked="selectedRows.includes(row.id)"
                            @change="() => toggleRow(row.id)"
                            />
                            <span class="checkbox-box"></span>
                        </label>
                    </td>
                    <td>{{ row.date }}</td>
                    <td>{{ "#" + row.id }}</td>
                    <td>{{ row.period }}</td>
                    <td>{{ row.analyst }}</td>
                    <td>{{ row.acquirer }}</td>
                    <td>{{ row.bank }}</td>
                    <td>{{ row.totalSold }}</td>
                    <td>{{ row.totalReceived }}</td>
                    <td>{{ row.divergence }}</td>
                    <td><div class="status-reconcile" :class="reconcileStatus(row.status)">{{ row.status }}</div></td>
                    <td>
                        <NuxtLink :to="`/consultas/${row.id}`">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <g fill="none" stroke="#6D7A88" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#6D7A88">
                                    <path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045" />
                                    <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0" />
                                </g>
                            </svg>
                        </NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
div.table-container {
    height: 100%;
    width: calc(100vw - 336px);

    table.table-content {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);

        height: 100%;
        width: calc(100vw - 336px);

        overflow-x: auto;
        scrollbar-width: thin;

        tr th:nth-of-type(1), td:nth-of-type(1) {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .checkbox {
            height: 24px;
            width: 24px;

            border: 1px solid rgba(65, 40, 132, 0.6);
            border-radius: 5px;
        }

        thead {
            display: flex;
            align-items: center;

            height: 64px;
            width: min-content;

            padding: 16px;

            background-color: rgba(65, 40, 132, 0.05);

            border-radius: 10px;
        }

        tr {
            display: flex;
            align-items: center;
            gap: 24px;

            width: 100%;

            font-size: 14px;
            
            th {
                color: hsla(211, 56%, 16%, 0.8);
                font-weight: 400;
            }

            th:nth-of-type(2), td:nth-of-type(2) {
                width: 88px;
            }

            th:nth-of-type(3), td:nth-of-type(3) {
                width: 96px;
            }

            th:nth-of-type(4), td:nth-of-type(4) {
                width: 120px;
            }

            th:nth-of-type(5), td:nth-of-type(5) {
                width: 144px;
            }

            th:nth-of-type(6), td:nth-of-type(6) {
                width: 120px;
            }

            th:nth-of-type(7), td:nth-of-type(7) {
                width: 112px;
            }

            th:nth-of-type(8), td:nth-of-type(8) {
                width: 144px;
                text-align: right;
            }

            th:nth-of-type(9), td:nth-of-type(9) {
                width: 144px;
                text-align: right;
            }

            th:nth-of-type(10), td:nth-of-type(10) {
                width: 144px;
                text-align: right;
            }

            th:nth-of-type(11), td:nth-of-type(11) {
                width: 120px;
                text-align: center;
            }

            th:nth-of-type(12), td:nth-of-type(12) {
                width: 64px;
                text-align: center;
                cursor: pointer;
            }
        }

        tbody {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);

            height: calc(100vh - 454px);
            width: min-content;

            overflow-y: auto;
            scrollbar-width: thin;

            tr {
                padding: 8px 16px;

                border: 1px solid hsla(211, 56%, 16%, 0.1);
                border-radius: 8px;
            }

            .status-reconcile {
                padding: 0 8px;

                color: var(--background);
                font-size: 12px;

                border-radius: 10px;
            }

            .reconciled {
                background-color: #73BA60;
            }

            .no-reconciled {
                background-color: #D43343;
            }

            .in-conciliation {
                background-color: #F79E1B;
            }
        }
    }
}

.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.checkbox-box {
  width: 24px;
  height: 24px;
  border: 1px solid rgba(65, 40, 132, 0.2);
  border-radius: 5px;
  background-color: var(--background);
  transition: all 0.2s ease-in-out;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-box {
  background-color: var(--principal);
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-box::after {
  content: '';
  position: absolute;
  left: 8px;
  top: 4px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.custom-checkbox input[type="checkbox"]:not(:checked) + .checkbox-box::after {
  content: '';
  opacity: 0;
}

.checkbox-label {
  margin-left: 8px;
  color: var(--texto);
}
</style>