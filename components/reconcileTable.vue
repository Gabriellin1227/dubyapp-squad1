<script setup>
import { ref, computed } from 'vue';

const transactionsDB = [
    {
        saleDate: '12/12/2024',
        creditDate: '12/01/2025',
        totalDays: '30',
        grossValue: 'R$ 1.234,52',
        netValue: 'R$ 1.156,21',
        anticipation: 'SIM',
        expectedRate: '6,1',
        rate: '6,34',
        rateAmount: 'R$ 78,31',
        modality: 'MASTERCARD',
        productType: 'CRÉDITO',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '29/02/2025',
        creditDate: '29/03/2025',
        totalDays: '28',
        grossValue: 'R$ 3.929,94',
        netValue: 'R$ 3.631,26',
        anticipation: 'SIM',
        expectedRate: '7.32',
        rate: '7.6',
        rateAmount: 'R$ 298,68',
        modality: 'MASTERCARD',
        productType: 'CRÉDITO',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '01/02/2025',
        creditDate: '01/02/2025',
        totalDays: '0',
        grossValue: 'R$ 2.177,80',
        netValue: 'R$ 2.177,80',
        anticipation: 'NÃO',
        expectedRate: '0.0',
        rate: '0.0',
        rateAmount: 'R$ 0,00',
        modality: 'PIX',
        productType: 'PIX',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '12/02/2025',
        creditDate: '12/02/2025',
        totalDays: '0',
        grossValue: 'R$ 2.758,13',
        netValue: 'R$ 2.758,13',
        anticipation: 'NÃO',
        expectedRate: '0.0',
        rate: '0.0',
        rateAmount: 'R$ 0,00',
        modality: 'PIX',
        productType: 'PIX',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '01/03/2025',
        creditDate: '11/03/2025',
        totalDays: '10',
        grossValue: 'R$ 2.070,23',
        netValue: 'R$ 2.049,53',
        anticipation: 'NÃO',
        expectedRate: '1.0',
        rate: '1.0',
        rateAmount: 'R$ 20,70',
        modality: 'VISA',
        productType: 'CRÉDITO',
        installments: 'SIM',
        totalInstallments: '1/12'
    },
    {
        saleDate: '12/03/2025',
        creditDate: '28/03/2025',
        totalDays: '16',
        grossValue: 'R$ 2.893,81',
        netValue: 'R$ 2.756,35',
        anticipation: 'SIM',
        expectedRate: '4.55',
        rate: '4.75',
        rateAmount: 'R$ 137,46',
        modality: 'SODEXO',
        productType: 'VOUCHER',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '10/02/2025',
        creditDate: '15/02/2025',
        totalDays: '5',
        grossValue: 'R$ 1.380,00',
        netValue: 'R$ 1.320,00',
        anticipation: 'SIM',
        expectedRate: '4.0',
        rate: '4.35',
        rateAmount: 'R$ 60,00',
        modality: 'ALELO',
        productType: 'VOUCHER',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '04/03/2025',
        creditDate: '04/03/2025',
        totalDays: '0',
        grossValue: 'R$ 720,00',
        netValue: 'R$ 720,00',
        anticipation: 'NÃO',
        expectedRate: '0.0',
        rate: '0.0',
        rateAmount: 'R$ 0,00',
        modality: 'PIX',
        productType: 'PIX',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '26/02/2025',
        creditDate: '27/03/2025',
        totalDays: '29',
        grossValue: 'R$ 639,62',
        netValue: 'R$ 609,17',
        anticipation: 'SIM',
        expectedRate: '4,76',
        rate: '4,76',
        rateAmount: 'R$ 30,45',
        modality: 'VISA',
        productType: 'CRÉDITO',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '03/03/2025',
        creditDate: '05/03/2025',
        totalDays: '2',
        grossValue: 'R$ 1.855,03',
        netValue: 'R$ 1.832,40',
        anticipation: 'NÃO',
        expectedRate: '1,22',
        rate: '1,22',
        rateAmount: 'R$ 22,63',
        modality: 'VISA',
        productType: 'CRÉDITO',
        installments: 'SIM',
        totalInstallments: '1/3'
    },
    {
        saleDate: '04/02/2025',
        creditDate: '04/03/2025',
        totalDays: '28',
        grossValue: 'R$ 421,01',
        netValue: 'R$ 416,00',
        anticipation: 'NÃO',
        expectedRate: '1,19',
        rate: '1,19',
        rateAmount: 'R$ 5,01',
        modality: 'ALELO',
        productType: 'VOUCHER',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '09/02/2025',
        creditDate: '18/02/2025',
        totalDays: '9',
        grossValue: 'R$ 1.811,53',
        netValue: 'R$ 1.766,42',
        anticipation: 'SIM',
        expectedRate: '2,49',
        rate: '2,49',
        rateAmount: 'R$ 45,11',
        modality: 'VISA',
        productType: 'CRÉDITO',
        installments: 'SIM',
        totalInstallments: '1/2'
    },
    {
        saleDate: '20/02/2025',
        creditDate: '05/03/2025',
        totalDays: '13',
        grossValue: 'R$ 1.314,18',
        netValue: 'R$ 1.237,96',
        anticipation: 'SIM',
        expectedRate: '5,8',
        rate: '5,8',
        rateAmount: 'R$ 76,22',
        modality: 'MASTERCARD',
        productType: 'CRÉDITO',
        installments: 'NÃO',
        totalInstallments: '1/1'
    },
    {
        saleDate: '18/02/2025',
        creditDate: '20/02/2025',
        totalDays: '2',
        grossValue: 'R$ 980,00',
        netValue: 'R$ 962,78',
        anticipation: 'NÃO',
        expectedRate: '1.8',
        rate: '1.76',
        rateAmount: 'R$ 17,22',
        modality: 'ELO',
        productType: 'DÉBITO',
        installments: 'NÃO',
        totalInstallments: '1/1'
    }
];

const transactions = transactionsDB.map((t, idx) => ({
    id: idx + 1,
    ...t
}));

const selectedTransaction = ref([]);

const isAllSelected = computed(() => {
    return transactions.length > 0 &&
    transactions.every((t) => selectedTransaction.value.includes(t.id));
});

const setAllSelected = (value) => {
  selectedTransaction.value = value
    ? transactions.map((t) => t.id)
    : [];
};

const toggleTransaction = (id) => {
  const i = selectedTransaction.value.indexOf(id);
  if (i > -1) {
    selectedTransaction.value.splice(i, 1);
  } else {
    selectedTransaction.value.push(id);
  }
};

const reconcileTest = (expected, rate) => expected === rate ? 'reconciled' : 'no-reconciled';
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
                    <th>Data de Venda</th>
                    <th>Data de Crédito</th>
                    <th>Qtd. Dias</th>
                    <th>Valor Bruto</th>
                    <th>Valor Líquido</th>
                    <th>Antecipação</th>
                    <th>Taxa Prevista %</th>
                    <th>Taxa %</th>
                    <th>Valor da Taxa</th>
                    <th>Modalidade</th>
                    <th>Tipo de Produto</th>
                    <th>Parcelado</th>
                    <th>Parcela</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="transaction in transactions" :key="transaction.id" :class="reconcileTest(transaction.expectedRate, transaction.rate)">
                    <td>
                        <label class="custom-checkbox">
                            <input
                            type="checkbox"
                            :checked="selectedTransaction.includes(transaction.id)"
                            @change="() => toggleTransaction(transaction.id)"
                            />
                            <span class="checkbox-box"></span>
                        </label>
                    </td>
                    <td>{{ transaction.saleDate }}</td>
                    <td>{{ transaction.creditDate }}</td>
                    <td>{{ transaction.totalDays }}</td>
                    <td>{{ transaction.grossValue }}</td>
                    <td>{{ transaction.netValue }}</td>
                    <td>{{ transaction.anticipation }}</td>
                    <td>{{ transaction.expectedRate }}</td>
                    <td>{{ transaction.rate }}</td>
                    <td>{{ transaction.rateAmount }}</td>
                    <td>{{ transaction.modality }}</td>
                    <td>{{ transaction.productType }}</td>
                    <td>{{ transaction.installments }}</td>
                    <td>{{ transaction.totalInstallments }}</td>
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
                width: 112px;
            }

            th:nth-of-type(3), td:nth-of-type(3) {
                width: 112px;
            }

            th:nth-of-type(4), td:nth-of-type(4) {
                width: 64px;
            }

            th:nth-of-type(5), td:nth-of-type(5) {
                width: 112px;
                text-align: right;
            }

            th:nth-of-type(6), td:nth-of-type(6) {
                width: 112px;
                text-align: right;
            }

            th:nth-of-type(7), td:nth-of-type(7) {
                width: 88px;
            }

            th:nth-of-type(8), td:nth-of-type(8) {
                width: 112px;
            }

            th:nth-of-type(9), td:nth-of-type(9) {
                width: 72px;
            }

            th:nth-of-type(10), td:nth-of-type(10) {
                width: 104px;
                text-align: right;
            }

            th:nth-of-type(11), td:nth-of-type(11) {
                width: 144px;
            }

            th:nth-of-type(12), td:nth-of-type(12) {
                width: 112px;
            }

            th:nth-of-type(13), td:nth-of-type(13) {
                width: 80px;
            }

            th:nth-of-type(14), td:nth-of-type(14) {
                width: 64px;
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

                td {
                    text-align: left;
                }
            }

            .status-reconcile {
                padding: 0 8px;

                color: var(--background);
                font-size: 12px;

                border-radius: 10px;
            }

            .reconciled {
                background-color: rgb(54, 255, 0, 0.2);
            }

            .no-reconciled {
                background-color: rgb(255, 0, 26, 0.2);
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