<script setup>
import { ref } from 'vue'

const movements = [
    {
        type: 'American Express',
        soldTotal: 'R$ 1.200,00',
        receiveTotal: 'R$ 1.050,00',
        ratesTotal: 'R$ 100,00',
        divergenceTotal: 'R$ 50,00',
        divergenceAmount: 10
    },
    {
        type: 'Pix',
        soldTotal: 'R$ 3.500,00',
        receiveTotal: 'R$ 3.500,00',
        ratesTotal: 'R$ 0,00',
        divergenceTotal: 'R$ 0,00',
        divergenceAmount: 0
    },
    {
        type: 'Sodexo',
        soldTotal: 'R$ 800,00',
        receiveTotal: 'R$ 720,00',
        ratesTotal: 'R$ 80,00',
        divergenceTotal: 'R$ 0,00',
        divergenceAmount: 0
    },
    {
        type: 'Visa',
        soldTotal: 'R$ 2.000,00',
        receiveTotal: 'R$ 1.900,00',
        ratesTotal: 'R$ 80,00',
        divergenceTotal: 'R$ 20,00',
        divergenceAmount: 5
    },
    {
        type: 'Mastercard',
        soldTotal: 'R$ 2.800,00',
        receiveTotal: 'R$ 2.600,00',
        ratesTotal: 'R$ 150,00',
        divergenceTotal: 'R$ 50,00',
        divergenceAmount: 3
    },
    {
        type: 'Elo',
        soldTotal: 'R$ 1.500,00',
        receiveTotal: 'R$ 1.400,00',
        ratesTotal: 'R$ 80,00',
        divergenceTotal: 'R$ 20,00',
        divergenceAmount: 2
    },
    {
        type: 'Ticket',
        soldTotal: 'R$ 900,00',
        receiveTotal: 'R$ 850,00',
        ratesTotal: 'R$ 30,00',
        divergenceTotal: 'R$ 20,00',
        divergenceAmount: 1
    },
    {
        type: 'Alelo',
        soldTotal: 'R$ 1.100,00',
        receiveTotal: 'R$ 1.000,00',
        ratesTotal: 'R$ 70,00',
        divergenceTotal: 'R$ 30,00',
        divergenceAmount: 4
    },
    {
        type: 'Hiper',
        soldTotal: 'R$ 700,00',
        receiveTotal: 'R$ 650,00',
        ratesTotal: 'R$ 30,00',
        divergenceTotal: 'R$ 20,00',
        divergenceAmount: 2
    },
    {
        type: 'Dinheiro',
        soldTotal: 'R$ 4.500,00',
        receiveTotal: 'R$ 4.500,00',
        ratesTotal: 'R$ 0,00',
        divergenceTotal: 'R$ 0,00',
        divergenceAmount: 0
    },
    {
        type: 'VR',
        soldTotal: 'R$ 600,00',
        receiveTotal: 'R$ 570,00',
        ratesTotal: 'R$ 20,00',
        divergenceTotal: 'R$ 10,00',
        divergenceAmount: 1
    },
    {
        type: 'American Express',
        soldTotal: 'R$ 1.800,00',
        receiveTotal: 'R$ 1.650,00',
        ratesTotal: 'R$ 100,00',
        divergenceTotal: 'R$ 50,00',
        divergenceAmount: 5
    },
    {
        type: 'Pix',
        soldTotal: 'R$ 5.200,00',
        receiveTotal: 'R$ 5.200,00',
        ratesTotal: 'R$ 0,00',
        divergenceTotal: 'R$ 0,00',
        divergenceAmount: 0
    },
    {
        type: 'Visa',
        soldTotal: 'R$ 3.000,00',
        receiveTotal: 'R$ 2.850,00',
        ratesTotal: 'R$ 100,00',
        divergenceTotal: 'R$ 50,00',
        divergenceAmount: 6
    },
    {
        type: 'Mastercard',
        soldTotal: 'R$ 2.300,00',
        receiveTotal: 'R$ 2.150,00',
        ratesTotal: 'R$ 100,00',
        divergenceTotal: 'R$ 50,00',
        divergenceAmount: 3
    }
];

const isActive = ref(true)

const showModal = ref(false);

const handlerModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="header-title">Análise dos Totais</div>
            <div class="header-actions">
                <div class="header-export">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#12283F" stroke-linecap="round" stroke-width="1.5">
                            <path d="M12 7.5H7A1.5 1.5 0 0 0 5.5 9v8A1.5 1.5 0 0 0 7 18.5h8a1.5 1.5 0 0 0 1.5-1.5v-5" />
                            <path stroke-linejoin="round" d="m12.5 11.5l6.364-6.364M14.5 4.5h5v5" />
                        </g>
                    </svg>
                    Exportar
                </div>
                <div class="header-export">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#12283F"
                            d="M16 8.616v-3H8v3H7v-4h10v4zm-11.423 1h14.846zm13.038 2.5q.425 0 .713-.288t.287-.712t-.287-.713t-.713-.288t-.712.288t-.288.713t.288.712t.713.288M16 19v-4.538H8V19zm1 1H7v-4H3.577v-5.384q0-.85.577-1.425t1.423-.576h12.846q.85 0 1.425.576t.575 1.424V16H17zm2.423-5v-4.384q0-.425-.287-.713t-.713-.288H5.577q-.425 0-.712.288t-.288.713V15H7v-1.538h10V15z" />
                    </svg>
                    Imprimir
                </div>
                <NuxtLink to="/dashboard">
                    <div class="header-action">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7" />
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="main-container">
            <div class="infos-container">
                <div class="infos-header">
                    <div class="infos-title">Análise de taxas por modalidade</div>
                    <div class="infos-filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="#412884"
                                d="M6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m3 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
                        </svg>
                        Filtrar
                    </div>
                </div>
                <div class="infos-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Total vendido</th>
                                <th>Total recebido</th>
                                <th>Total de taxas</th>
                                <th>Total divergente</th>
                                <th>Qtd. de discrepâncias</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="movement in movements">
                                <td>{{ movement.type }}</td>
                                <td>{{ movement.soldTotal }}</td>
                                <td>{{ movement.receiveTotal }}</td>
                                <td>{{ movement.ratesTotal }}</td>
                                <td>{{ movement.divergenceTotal }}</td>
                                <td>{{ movement.divergenceAmount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="infos-container">
                <div class="infos-header">
                    <div class="infos-title">Resumo das divergências</div>
                    <div class="infos-filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="#412884"
                                d="M6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m3 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
                        </svg>
                        Filtrar
                    </div>
                </div>
                <div class="infos-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Total vendido</th>
                                <th>Total recebido</th>
                                <th>Total de taxas</th>
                                <th>Total divergente</th>
                                <th>Qtd. de discrepâncias</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="movement in movements">
                                <td>{{ movement.type }}</td>
                                <td>{{ movement.soldTotal }}</td>
                                <td>{{ movement.receiveTotal }}</td>
                                <td>{{ movement.ratesTotal }}</td>
                                <td>{{ movement.divergenceTotal }}</td>
                                <td>{{ movement.divergenceAmount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    height: 100%;
    width: 100%;
    max-width: 100%;

    margin: 0;
    padding: 16px;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    
    .header-title {
        color: var(--principal);
        font-size: var(--font-xxl);
        font-weight: 600;
        line-height: 64px;
    }

    .header-actions {
        display: flex;
        gap: 32px;

        .header-action {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 40px;
            width: 40px;

            background-color: var(--principal);

            border-radius: 10px;

            cursor: pointer;
        }

        .header-export {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            width: 104px;
            
            padding: 8px;

            color: var(--texto);
            font-size: 12px;

            border: 1px solid rgba(18, 40, 64, 0.1);
            border-radius: 10px;

            cursor: pointer;
        }
    }
}

.main-container {
    display: flex;
    flex-direction: column;
    gap: 24px;

    height: 100%;
    width: 100%;

    .infos-container {
        display: flex;
        flex-direction: column;
        gap: 16px;

        width: 100%;

        .infos-header {
            display: flex;
            justify-content: space-between;

            .infos-title {
                color: var(--texto);
                font-size: 20px;
            }

            .infos-filter {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;

                width: 104px;

                padding: 8px;

                color: var(--texto);
                font-size: 12px;

                border: 1px solid rgba(18, 40, 64, 0.1);
                border-radius: 5px;

                cursor: pointer;
            }
        }
    }

    .infos-container {
        .infos-content {
            table {
                display: flex;
                flex-direction: column;
                gap: 24px;
                height: calc(100vh - 684px);
                width: 100%;

                padding: 16px;

                border: 1px solid rgba(65, 40, 132, 0.2);
                border-radius: 10px;

                overflow: auto;
                scrollbar-width: thin;

                thead tr,
                tbody tr {
                    display: flex;
                    justify-content: space-between;

                    width: 100%;

                    padding: 0 8px;

                    border-radius: 4px;
                }

                thead tr {
                    color: rgba(18, 40, 64, 0.5);
                    font-size: 14px;
                    
                    th {
                        font-weight: 500;
                    }
                }

                tbody tr {
                    display: flex;
                    align-items: center;

                    height: 32px;

                    color: var(--texto);
                    font-size: 14px;

                    cursor: pointer;
                }

                tbody tr:hover {
                    background-color: rgba(65, 40, 132, 0.05);
                }

                td,
                th {
                    width: 128px;
                }

                td:last-child,
                th:last-child {
                    width: 160px;
                }

                tbody {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            }
        }
    }
}
</style>