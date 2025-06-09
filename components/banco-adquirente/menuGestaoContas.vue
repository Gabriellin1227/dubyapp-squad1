<template>

    <div class="container-1">
        <div class="tabs">
            <button :class="['toggle-button', {ativo: mostrar === 'bancos'}]"@click="mudarToggle('bancos')">
                Bancos
            </button>
            <button :class="['toggle-button', {ativo: mostrar === 'adquirentes'}]"
                @click="mudarToggle('adquirentes')">
                Adquirentes
            </button>
        </div>

        <div class="flex-spacer"></div>


        <div class="acoes">
            <button id="btn-filtrar" class="btn filtrar" @click="$emit('filtrar')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 2h12v2H2V2zm0 5h12v2H2V7zm0 5h12v2H2v-2z" />
                </svg>
                Filtrar
            </button>
            <button id="btn-excluir" class="btn excluir" @click="$emit('excluir')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 
2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2H5V1.5A1.5 1.5 0 0 
1 6.5 0h3A1.5 1.5 0 0 1 11 1.5V2h2.5a1 1 0 0 1 
1 1zM6 2v-.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 
.5.5V2H6zm6 1H4v9a1 1 0 0 0 1 1h6a1 1 0 0 0 
1-1V3z" />
                </svg>
                Excluir
            </button>
            <button id="btn-add" class="btn adicionar" @click="$emit('adicionar')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 
    0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 
    0 0 1 8 4z" />
                </svg>
                Adicionar
            </button>
        </div>
    </div>



</template>

<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'

const mostrar = ref('bancos') // estado interno só para UI se quiser

const emit = defineEmits(['toggleTabela'])

function mudarToggle(valor) {
    mostrar.value = valor
    emit('toggleTabela', valor)
}
</script>

<style lang="scss" scoped>
.container-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
}


.acoes {
    display: flex;
    gap: 1rem;
}

#btn-filtrar {
    background-color: var(--principal);
    font-size: var(--font-md);
    color: #ffff;
    padding: 1rem;
    width: 136px;
    height: 56px;
}

#btn-excluir {
    background-color: #D43343;
    font-size: var(--font-md);
    color: #ffff;
    padding: 1rem;
    width: 136px;
    height: 56px;
}

#btn-add {
    background-color: var(--comp-4);
    font-size: var(--font-md);
    color: #ffff;
    padding: 1rem;
    width: 136px;
    height: 56px;
}

.tabs {
    display: flex;
    width: 400px;
    height: 56px;
    border: 1px solid #ccc;
    border-radius: 12px;
    overflow: hidden;
}

.toggle-button {
    flex: 1;
    padding: 12px 24px;
    border: none;
    background-color: white;
    color: #3f297e;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.toggle-button.ativo {
    background-color: var(--principal);
    color: white;
}

.toggle-button:not(.ativo):hover {
    background-color: #f2f2f2;
}
</style>