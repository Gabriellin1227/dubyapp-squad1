<script setup>
import { ref } from 'vue';

const emit = defineEmits(['closeModal']);

const formRef = ref(null);
</script>

<template>
    <div class="modal-overlay">
        <dialog open class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title"><slot name="title"></slot> Cargo</div>
                    <button @click="emit('closeModal')">x</button>
                </div>
                <div class="modal-main">
                    <form ref="formRef" action="" method="post" novalidate>
                        <div class="input-container">
                            <div class="input-title">Nome do cargo</div>
                            <input type="text" name="name" id="ipositionName" required placeholder="Digite o nome do cargo">
                        </div>
                        <div class="orientation-message">
                            Obs.: configure as permissões após cadastrar o nome do cargo.
                        </div>
                    </form>
                </div>
                <div class="modal-buttons">
                    <button class="next-button">Finalizar</button>
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

.orientation-message {
    color: rgba(18, 40, 64, 0.6);
    font-size: 14px;
}
</style>