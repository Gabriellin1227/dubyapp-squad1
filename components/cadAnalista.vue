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
                    <div class="modal-title">Cadastrar Analista</div>
                    <button @click="emit('closeModal')">x</button>
                </div>
                <div class="modal-main">
                    <!-- step 1 -->
                    <div v-if="step === 1">
                        <form ref="formRef" action="" method="post" novalidate>
                            <div class="input-container">
                                <div class="input-title">Nome completo</div>
                                <input type="text" name="name" id="ianalystName" required placeholder="Digite o nome completo">
                            </div>
                            <div class="input-container">
                                <div class="input-title">E-mail corporativo</div>
                                <input type="email" name="email" id="ianalystEmail" required placeholder="Digite o e-mail corporativo">
                            </div>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">CPF</div>
                                    <input type="text" name="cpf" id="ianalystCPF" required placeholder="000.000.000-00">
                                </div>
                                <div class="input-container">
                                    <div class="input-title">Senha inicial</div>
                                    <input type="text" name="password" id="ianalystPassword" required placeholder="Digite a senha de primeiro acesso">
                                </div>
                            </div>
                            <div class="input-wrap-container">
                                <div class="input-container">
                                    <div class="input-title">Telefone</div>
                                    <input type="tel" name="tel" id="ianalystTel" required placeholder="(00) 0 0000-0000">
                                </div>
                                <div class="input-container">
                                    <div class="input-title">Rede social</div>
                                    <input type="text" name="social-media" id="ianalystSocialMedia" placeholder="@exemplo">
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- step 2 -->
                    <div v-if="step === 2">
                        <div class="upload-image-container">
                            <img v-if="urlImg" src="" alt="">
                            <div v-if="urlImg === null" class="icon-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 36 36">
                                    <path fill="#f6f6f6" d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98" class="clr-i-solid clr-i-solid-path-1" stroke-width="1" stroke="#f6f6f6" />
                                    <circle cx="18" cy="10" r="7" fill="#f6f6f6" class="clr-i-solid clr-i-solid-path-2" stroke-width="1" stroke="#f6f6f6" />
                                    <path fill="none" d="M0 0h36v36H0z" />
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
                            <textarea name="analyst-observations" id="ianalystObservations" placeholder="Digite alguma observação sobre o analista" />
                        </div>
                    </div>
                </div>
                <div class="modal-buttons">
                    <button class="secondary-button" v-if="step === 2" @click.prevent="backStep">Voltar</button>
                    <button class="next-button" @click.prevent="nextStep">{{ step === 2 ? 'Finalizar' : 'Próximo' }}</button>
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

    color: var(--texto);

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

    input {
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