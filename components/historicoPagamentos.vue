<script setup>
import { ref } from 'vue';

const emit = defineEmits(['closeHistModal']);

const formRef = ref(null);

const payments = [
    {
        value: 'R$ 59,90',
        maturity: '11/06/2025',
        date: '--/--/----',
        status: 'pendente'
    },
    {
        value: 'R$ 59,90',
        maturity: '11/05/2025',
        date: '--/--/----',
        status: 'atrasado'
    },
    {
        value: 'R$ 59,90',
        maturity: '11/04/2025',
        date: '11/04/2025',
        status: 'pago'
    },
    {
        value: 'R$ 59,90',
        maturity: '11/03/2025',
        date: '11/03/2025',
        status: 'pago'
    },
    {
        value: 'R$ 59,90',
        maturity: '11/02/2025',
        date: '11/02/2025',
        status: 'pago'
    },
    {
        value: 'R$ 59,90',
        maturity: '11/01/2025',
        date: '11/01/2025',
        status: 'pago'
    },
    {
        value: 'R$ 59,90',
        maturity: '11/12/2024',
        date: '11/12/2024',
        status: 'pago'
    },
    {
        value: 'R$ 59,90',
        maturity: '11/11/2024',
        date: '11/11/2024',
        status: 'pago'
    },
    {
        value: 'R$ 59,90',
        maturity: '11/10/2024',
        date: '11/10/2024',
        status: 'pago'
    },
    {
        value: 'R$ 59,90',
        maturity: '11/09/2024',
        date: '11/09/2024',
        status: 'pago'
    }
];

const getStatus = (status) => {
    if (status == 'pago') {
        return 'Pago'
    } else {
        return 'Dar baixa'
    }
};
</script>

<template>
    <div class="modal-overlay">
        <dialog open class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">Histórico de Pagamentos</div>
                    <div class="modal-subtitle">Confira os pagamentos e dê baixa manualmente.</div>
                </div>
                <div class="modal-main">
                    <table>
                        <thead>
                            <tr>
                                <th>Valor</th>
                                <th>Vencimento</th>
                                <th>Pagamento</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :class="payment.status" v-for="payment in payments">
                                <td>{{ payment.value }}</td>
                                <td>{{ payment.maturity }}</td>
                                <td>{{ payment.date }}</td>
                                <td class="status-payment">{{ getStatus(payment.status) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-buttons">
                    <button @click="emit('closeHistModal')" class="next-button">Voltar</button>
                </div>
            </div>
        </dialog>
    </div>
</template>

<style scoped>

.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;

    width: calc(100vw - 256px);
    height: var(--total-height);

    background: rgba(0, 0, 0, 0.3);
}

.modal-dialog {
    all: unset;
    z-index: 1000;

    width: 624px;

    padding: 40px;

    background-color: var(--background);

    border-radius: 20px;
}

.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    height: 100%;
    width: 100%;
}

.modal-main {
    display: flex;
    flex-direction: column;
    gap: 24px;

    height: 336px;
    width: 100%;

    color: var(--texto);

    table {
        display: flex;
        flex-direction: column;
        gap: 8px;
        height: 100%;
        width: 100%;

        th {
            color: var(--texto);
            font-weight: 400;
        }

        td {
            color: rgba(18, 40, 64, 0.75);
            font-size: 14px;
        }

        tr {
            display: flex;
            justify-content: space-between;

            border-bottom: 1px solid rgba(18, 40, 64, 0.2);
        }

        .status-payment {
            width: 96px;

            color: var(--background) !important;
            text-align: center;

            border-radius: 15px;

            cursor: pointer;
        }

        .pendente {
            td {
                color: #F79E1B;
            }

            .status-payment {
                background-color: #F79E1B;
            }
        }

        .atrasado {
            td {
                color: #D43343;
            }

            .status-payment {
                background-color: #D43343;
            }
        }

        .pago {
            .status-payment {
                background-color: var(--comp-4);
            }
        }

        tbody {
            display: flex;
            flex-direction: column;
            gap: 8px;

            height: 304px;

            overflow: auto;
            scrollbar-width: thin;
        }

        td, th {
            width: 112px;
        }
    }
}

.modal-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    width: 100%;

    .modal-title {
        color: var(--principal);
        font-size: 28px;
        font-weight: 600;
    }

    .modal-subtitle {
        color: rgba(18, 40, 64, 0.6);
        font-size: 14px;
    }

    button {
        height: 28px;
        width: 28px;

        color: var(--background);
        background-color: var(--principal);

        border-radius: 5px;
        border: 0;
    }
}

.modal-buttons {
    display: flex;
    justify-content: center;
    gap: 16px;

    width: 100%;

    button {
        height: 40px;
        width: 104px;

        padding: 8px 16px;

        font-size: 14px;
        font-weight: 500;

        border: 0;
        border-radius: 8px;

        transition: background-color 0.3s ease;
    }

    .secondary-button {
        color: var(--principal);
        border: 1px solid var(--principal);
    }

    .secondary-button:hover {
        background-color: #e5dff8;
    }
    
    .next-button {
        color: var(--background);
        background-color: var(--principal);
    }
    
    .next-button:hover {
        background-color: var(--comp-2);
    }
}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;

    .input-wrap-container {
        display: flex;
        gap: 32px;

        width: 100%;
    }
}

.input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;

    color: var(--texto);
    font-size: 14px;

    input {
        height: 40px;
        width: 100%;

        padding: 8px;

        background-color: var(--background);

        border: 1px solid rgba(18, 40, 64, 0.3);
        border-radius: 5px;
    }
}

.orientation-message {
    color: rgba(18, 40, 64, 0.6);
    font-size: 14px;
}
</style>