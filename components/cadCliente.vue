<script setup>
import { ref } from 'vue';

const step = ref(1);
const emit = defineEmits(['closeModal']);

const formRef = ref(null);

const urlImg = ref(null);

const nextStep = () => {
    if (formRef.value && formRef.value.reportValidity()) {
        step.value++;
    }
};

const backStep = () => {
    step.value--;
};
</script>

<template>
    <div class="modal-overlay">
        <dialog open class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title"><slot name="title"></slot> Cliente</div>
                    <button @click="emit('closeModal')">x</button>
                </div>
                <div class="modal-main">
                    <!-- step 1 -->
                    <div v-if="step === 1">
                        <div class="step-tag">Informações da empresa</div>
                        <form ref="formRef" action="" method="post" novalidate>
                            <div class="input-container">
                                <div class="input-title">Nome fantasia</div>
                                <input type="text" name="fantasy-name" id="ifantasyName" required placeholder="Digite o nome fantasia da empresa">
                            </div>
                            <div class="input-container">
                                <div class="input-title">Razão social</div>
                                <input type="text" name="company-name" id="icompanyName" required placeholder="Digite da razão social da empresa">
                            </div>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">CNPJ</div>
                                    <input type="text" name="cnpj" id="icompanyCNPJ" required placeholder="00.000.000/0000-00">
                                </div>
                                <div class="input-container">
                                    <div class="input-title">E-mail</div>
                                    <input type="email" name="email" id="icompanyEmail" required placeholder="empresa@exemplo.com">
                                </div>
                            </div>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">Área</div>
                                    <input type="text" name="area" id="icompanyArea" required placeholder="Digite o setor da empresa">
                                </div>
                                <div class="input-container">
                                    <div class="input-title">Telefone</div>
                                    <input type="tel" name="tel" id="ianalystTel" required placeholder="(00) 0 0000-0000">
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- step 2 -->
                    <div v-if="step === 2">
                        <div class="step-tag">Informações de cobrança</div>
                        <form ref="formRef" action="" method="post" novalidate>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">Plano contratado</div>
                                    <select name="contractedPlan" id="icontractedPlan" required>
                                        <option value="" selected disabled>Selecione o plano de contratação</option>
                                        <option value="commonPlan">Plano comum</option>
                                    </select>
                                </div>
                                <div class="input-container">
                                    <div class="input-title">Dia do vencimento</div>
                                    <input type="number" name="dueDate" id="idueDate" required placeholder="Digite o número do dia do mês" min="1" max="31">
                                </div>
                            </div>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">Forma de pagamento</div>
                                    <select name="paymentMethod" id="ipaymentMethod" required>
                                        <option value="" selected disabled>Selecione a forma de pagamento</option>
                                        <option value="boleto">Boleto</option>
                                    </select>
                                </div>
                                <div class="input-container">
                                    <div class="input-title">Valor mensal</div>
                                    <input type="tel" name="tel" id="ianalystTel" required placeholder="R$ 0,00">
                                </div>
                            </div>
                            <div class="input-container">
                                <div class="input-title">E-mail de cobrança</div>
                                <input type="email" name="billing-email" id="ibillingEmail" required placeholder="exemplo@financeiro.com">
                            </div>
                        </form>
                    </div>
                    <!-- step 3 -->
                    <div v-if="step === 3">
                        <div class="step-tag">Informações do gestor</div>
                        <form ref="formRef" action="" method="post" novalidate>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">Nome completo</div>
                                    <input type="text" name="ceoName" id="iceoName" required placeholder="Digite o nome completo do gestor">
                                </div>
                                <div class="input-container">
                                    <div class="input-title">E-mail</div>
                                    <input type="email" name="email" id="iceoEmail" required placeholder="gestor@exemplo.com">
                                </div>
                            </div>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">CPF</div>
                                    <input type="text" name="cpf" id="iceoCPF" required placeholder="000.000.000-00">
                                </div>
                                <div class="input-container">
                                    <div class="input-title">Telefone</div>
                                    <input type="tel" name="tel" id="ianalystTel" required placeholder="(00) 0 0000-0000">
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- step 4 -->
                    <div v-if="step === 4">
                        <div class="step-tag">Informações de endereço</div>
                        <form ref="formRef" action="" method="post" novalidate>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">Rua/Avenida</div>
                                    <input type="text" name="streetName" id="istreetName" required placeholder="Digite o nome da rua/avenida">
                                </div>
                                <div class="input-container">
                                    <div class="input-title">CEP</div>
                                    <input type="text" name="cep" id="icepCompany" required placeholder="00000-000">
                                </div>
                            </div>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">Complemento</div>
                                    <input type="text" name="complement" id="iaddressComplement" placeholder="Ex.: casa, apartamento, etc">
                                </div>
                                <div class="input-container">
                                    <div class="input-title">Número</div>
                                    <input type="number" name="addressNumber" id="iaddressNumber" required placeholder="Digite o número do endereço">
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- step 5 -->
                    <div v-if="step === 5">
                        <div class="upload-image-container">
                            <img v-if="urlImg" src="" alt="">
                            <div v-if="urlImg === null" class="icon-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                                    <g fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5">
                                        <path d="M16.24 3.5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h8.5a5 5 0 0 0 5-5v-7a5 5 0 0 0-5-5" />
                                        <path d="m2.99 17l2.75-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.49 1.93M7.99 10.17a1.66 1.66 0 1 0 0-3.32a1.66 1.66 0 0 0 0 3.32" />
                                    </g>
                                </svg>
                            </div>
                            <div class="upload-limits-message">
                                Máx.: 200x200, 5MB
                            </div>
                            <div class="upload-buttons">
                                <button class="remove-img-button">Remover</button>
                                <button class="add-img-button">Adicionar</button>
                            </div>
                        </div>
                        <div class="textarea-container">
                            <div class="textarea-title">Observações</div>
                            <textarea name="analyst-observations" id="ianalystObservations" placeholder="Digite alguma observação sobre a empresa" />
                        </div>
                    </div>
                </div>
                <div class="modal-buttons">
                    <button class="secondary-button" v-if="step < 5 && step > 1" @click.prevent="backStep">Voltar</button>
                    <button class="next-button" @click.prevent="nextStep">{{ step === 5 ? 'Finalizar' : 'Próximo' }}</button>
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
    gap: 16px;

    color: var(--texto);

    .step-tag {
        color: var(--principal);
        font-weight: 600;
        font-size: 16px;
    }

    .modal-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        width: 100%;

        .modal-section-options {
            display: flex;
            flex-flow: row wrap;
            gap: 16px;

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;

                height: 40px;
                padding: 8px 16px;

                color: rgba(18, 40, 64, 0.8);
                font-size: 14px;
                
                background-color: rgba(65, 40, 132, 0.05);

                border: 1px solid transparent;
                border-radius: 5px;
                transition: border-color 0.5 ease;

                .highlight-point {
                    height: 6px;
                    width: 6px;

                    background-color: rgba(18, 40, 64, 0.5);

                    border-radius: 15px;
                }
            }

            button:hover, .button-active {
                color: var(--principal);
                border: 1px solid var(--principal);

                .highlight-point {
                    background-color: var(--principal);
                }
            }
            
            input[type="date"] {
                background-color: rgba(65, 40, 132, 0.05);
                border: 1px solid transparent;
                border-radius: 8px;
                padding: 8px 12px;
                font-size: 14px;
                color: #374151;
                font-family: sans-serif;
                outline: none;
                box-shadow: none;
                transition: background-color 0.2s ease;
                cursor: pointer;
            }

            input[type="date"]:hover {
                border: 1px solid var(--principal);
            }
        }
    }

    .modal-section:last-of-type {
        .modal-section-options {
            div {
                display: flex;
                flex-direction: column;
                gap: 4px;

                color: var(--texto);
                font-size: 14px;
            }
        }
    }
}

.modal-main > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;
    width: 100%;

    .modal-title {
        color: var(--principal);
        font-size: 28px;
        font-weight: 600;
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

    input, select {
        height: 40px;
        width: 100%;

        padding: 8px;

        background-color: var(--background);

        border: 1px solid rgba(18, 40, 64, 0.3);
        border-radius: 5px;

    }
}

.upload-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    width: 100%;

    .icon-img {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 120px;
        width: 120px;

        background-color: var(--principal);

        border-radius: 30px;
    }

    .upload-limits-message {
        color: var(--principal);
        font-size: 12px;
    }

    .upload-buttons {
        display: flex;
        justify-content: center;
        gap: 16px;

        button {
            height: 24px;
            width: 80px;

            font-size: 12px;

            border: 0;
            border-radius: 5px;
        }

        .remove-img-button {
            color: var(--principal);

            background-color: var(--background);

            border: 1px solid var(--principal);
        }

        .add-img-button {
            color: var(--background);

            background-color: var(--principal);
        }
    }
}

.textarea-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;

    .textarea-title {
        color: var(--texto);

        font-size: 16px;
    }

    textarea {
        height: 72px;
        width: 100%;

        padding: 8px;

        font-size: 14px;

        background-color: var(--background);

        border: 1px solid rgba(18, 40, 64, 0.3);
        border-radius: 5px;

        resize: none;
    }
}
</style>