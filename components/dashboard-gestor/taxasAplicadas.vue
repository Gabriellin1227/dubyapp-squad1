<script setup>
const rateApplieds = [
    {
        method: 'Débito',
        flag: 'American Express',
        economy: 'R$ 512,25',
        value: 'R$ 12.342,00',
        percent: 25
    },
    {
        method: 'Crédito à vista',
        flag: 'Elo',
        economy: 'R$ 421,25',
        value: 'R$ 12.342,00',
        percent: 50
    },
    {
        method: 'Crédito parcelado',
        flag: 'Visa',
        economy: 'R$ 412,00',
        value: 'R$ 12.342,00',
        percent: 30
    },
    {
        method: 'Voucher',
        flag: 'Sodexo',
        economy: 'R$ 312,23',
        value: 'R$ 12.342,00',
        percent: 21
    },
    {
        method: 'Carteira digital',
        flag: 'Mercado Pago',
        economy: 'R$ 204,25',
        value: 'R$ 12.342,00',
        percent: 6
    },
    {
        method: 'PIX',
        flag: '-',
        economy: 'R$ 152,25',
        value: 'R$ 12.342,00',
        percent: 13
    },
];
</script>

<template>
    <div class="rates-container">
        <div class="rates-header">
            <div class="rates-title">Taxas aplicadas</div>
            <div class="rates-actions">
                <div class="rates-economy">Economize R$ 1.249,00</div>
                <div class="rates-filter">
                    <div class="ranking-filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="#412884"
                                d="M6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m3 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
                        </svg>
                        Filtrar
                    </div>
                </div>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Modalidade</th>
                    <th>Bandeira</th>
                    <th>Economia</th>
                    <th>Valor</th>
                    <th>Vendas (%)</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="rateApplied in rateApplieds">
                    <td>{{ rateApplied.method }}</td>
                    <td>{{ rateApplied.flag }}</td>
                    <td>{{ rateApplied.economy }}</td>
                    <td>{{ rateApplied.value }}</td>
                    <td class="salesBar-container">
                        {{ `${rateApplied.percent}%` }}
                        <div class="salesBar">
                            <div class="salesBar-fill" :style="{ width: `${rateApplied.percent}%` }"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.rates-container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    height: 100%;
    width: 100%;

    padding: 24px;

    background-color: #ffffff;

    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

    cursor: pointer;

    .rates-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .rates-title {
            color: var(--principal);
            font-size: 16px;
            font-weight: 600;
        }

        .rates-actions {
            display: flex;
            align-items: center;
            gap: 24px;

            .rates-economy {
                color: rgba(18, 40, 64, 0.8);
                font-size: 14px;
                font-weight: 500;
            }

            .rates-filter {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;

                height: 24px;
                width: 64px;

                color: var(--principal);
                font-size: 12px;

                border: 1px solid var(--principal);
                border-radius: 5px;

                cursor: pointer;
            }
        }
    }

    table {
        display: flex;
        flex-direction: column;
        gap: 16px;

        height: 100%;

        padding: 16px;

        border: 1px solid rgba(18, 40, 64, 0.1);
        border-radius: 10px;

        thead {
            color: rgba(18, 40, 64, 0.5);

            th {
                font-weight: 400;
            }
        }

        tr {
            display: flex;
            justify-content: space-between;

            padding: 0 8px;

            font-size: 14px;

            border-radius: 5px;
        }

        tbody {
            display: flex;
            flex-direction: column;
            gap: 8px;

            color: var(--texto);

            tr:hover {
                background-color: #e6e6e64f;
                cursor: pointer;
            }
        }

        th:nth-of-type(1), td:nth-of-type(1) {
            width: 128px;
        }

        th:nth-of-type(2), td:nth-of-type(2) {
            width: 128px;
        }

        th:nth-of-type(3), td:nth-of-type(3) {
            width: 144px;

            text-align: right;
        }
        
        th:nth-of-type(4), td:nth-of-type(4) {
            width: 144px;

            text-align: right;
        }
        
        th:nth-of-type(5), td:nth-of-type(5) {
            display: flex;
            justify-content: flex-end;
            width: 144px;

            text-align: right;
        }
    }
}

.salesBar-container {
    display: flex;
    align-items: center;
    gap: 8px;

    .salesBar {
        width: 100px;
        height: 20px;
        background-color: #e6def5;
        border-radius: 6px;
        overflow: hidden;
    }

    .salesBar-fill {
        height: 100%;
        background-color: #412884;
        border-radius: 6px 0 0 6px;
        transition: width 0.3s ease;
    }
}
</style>