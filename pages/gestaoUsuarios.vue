<script setup>
import { ref } from 'vue';
import tabelaUsuarios from '~/components/usuarios-cargos/tabelaUsuarios.vue';
import tabelaCargos from '~/components/usuarios-cargos/tabelaCargos.vue';

const currentTable = ref(tabelaUsuarios);
const activeArea = ref('usuarios');

const setTable = (area) => {
    if (area === 'usuarios') {
        currentTable.value = tabelaUsuarios;
        activeArea.value = 'usuarios';
    } else if (area === 'cargos') {
        currentTable.value = tabelaCargos;
        activeArea.value = 'cargos';
    }
};

const showModal = ref(false);

const handlerModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <div class="main-container">
        <div class="crud-actions">
            <div class="toggle-area">
                <a href="" @click.prevent>
                    <div
                        id="crud-analyst-area"
                        :class="{ 'active-area': activeArea === 'usuarios' }"
                        @click="setTable('usuarios')"
                    >
                        Analistas
                    </div>
                </a>
                <a href="" @click.prevent>
                    <div
                        id="crud-position-area"
                        :class="{ 'active-area': activeArea === 'cargos' }"
                        @click="setTable('cargos')"
                    >
                        Cargos
                    </div>
                </a>
            </div>
            <div class="action-buttons">
                <button class="order-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#F6F6F6" d="M6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m3 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
                    </svg>
                    Ordenar
                </button>
                <button class="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#F6F6F6" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                    Excluir
                </button>
                <button class="add-button" @click="handlerModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#F6F6F6" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                    </svg>
                    Adicionar
                </button>
            </div>
        </div>
        <div class="crud-table">
            <component :is="currentTable" />
        </div>
    </div>
    <cadAnalista v-if="showModal && activeArea === 'usuarios'" @closeModal="closeModal" />
    <cadCargo v-if="showModal && activeArea === 'cargos'" @closeModal="closeModal" />
</template>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);

    height: 100%;
    width: 100%;
}

.crud-actions {
    height: 56px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    .toggle-area {
        display: flex;

        height: 56px;
        width: 400px;

        border: 1px solid rgb(65, 41, 133, 0.2);
        border-radius: 10px;

        a {
            height: 100%;
            width: 50%;

            text-decoration: none;

            outline: 2px solid transparent;
            transition: outline 0.3s ease-in-out;
        }

        a:focus {
            outline: 2px solid var(--comp-4);
        }

        a:nth-of-type(1) {
            border-radius: 10px 0 0 10px;
        }
        
        a:nth-of-type(2) {
            border-radius: 0 10px 10px 0;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;


            font-size: var(--font-md);
            font-weight: 500;
        }

        #crud-analyst-area {
            height: 100%;

            color: var(--principal);

            border-radius: 10px 0 0 10px;
        }
        
        #crud-position-area {
            height: 100%;

            color: var(--principal);

            border-radius: 0 10px 10px 0;
        }

        .active-area {
            color: var(--background) !important;
            
            background: var(--principal);
        }
    }

    .action-buttons {
        display: flex;
        gap: var(--spacing-md);

        width: 428px;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: var(--spacing-sm);

            width: 132px;

            color: var(--background);
            font-size: var(--font-md);
            font-weight: 500;

            border: 0;
            border-radius: 10px;

            cursor: pointer;

            outline: 2px solid transparent;
            transition: outline 0.3s ease-in-out;
        }

        .order-button {
            background-color: var(--principal);
        }

        .order-button:focus {
            outline: 2px solid var(--comp-4);
        }
    
        .delete-button {
            background-color: var(--red-highlight);
        }

        .delete-button:focus {
            outline: 2px solid var(--principal);
        }
    
        .add-button {
            background-color: var(--comp-4);
        }

        .add-button:focus {
            outline: 2px solid var(--principal);
        }
    }
}

.crud-table {
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: calc(100vh - 208px);

    padding: 38px 64px;

    background-color: var(--principal);

    border-radius: 10px;
}
</style>