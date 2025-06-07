<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>
                        <div class="thinput">
                            <input type="checkbox"/>
                        </div>
                    </th>
                    <th>
                        <div class="thnome">Nome</div>
                    </th>
                    <th>
                        <div class="thagencia">Conta de Repasse</div>
                    </th>
                    <th>
                        <div class="thconta">Representatividade</div>
                    </th>
                    <th>
                        <div class="thstatus">Ativo</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="adquirentes in adquirentes" :key="adquirentes.id">
                    <td>
                        <div class="checkbox-td">
                            <input type="checkbox"/>
                        </div>
                    </td>
                    <td>
                        <NuxtLink :to="`/adquirentes/${adquirentes.id}`" class="nome">
                            <img :src="adquirentes.logo_url" alt="Logo" />
                            {{ adquirentes.nome }}
                        </NuxtLink>
                    </td>
                    <td>
                        <div class="agencia">{{ adquirentes.conta_transferencia }}</div>
                    </td>
                    <td>
                        <div class="conta-corrente">{{ adquirentes.cnpj }}</div>
                    </td>
                    <td>
                        <div class="status">
                            {{ adquirentes.status === 'ativo' ? 'Sim' : 'Não' }}
                        </div>
                    </td>
                    <td>
                        <div class="botao-olho">
                            <button class="btn-view">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.544 11.045C21.848 11.471 22 11.685 22 12C22 12.316 21.848 12.529 21.544 12.955C20.178 14.871 16.689 19 12 19C7.31 19 3.822 14.87 2.456 12.955C2.152 12.529 2 12.315 2 12C2 11.684 2.152 11.471 2.456 11.045C3.822 9.129 7.311 5 12 5C16.69 5 20.178 9.13 21.544 11.045Z"
                                        stroke="#F6F6F6" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12Z"
                                        stroke="#F6F6F6" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { getAllAdquirentes, type Adquirentes } from '~/services/adquirentesService';
import { getAllBancos, type Banco } from '~/services/bancoService';

const adquirentes = ref<Adquirentes[]>([]);

const fetchAdquirentes = async () => {
    try {
        adquirentes.value = await getAllAdquirentes();
    } catch (error) {
        console.error('Erro ao buscar bancos:', error);
    }
};

onMounted(() => {
    fetchAdquirentes();
});

defineProps<{ adquirentes: Adquirentes[] }>()
</script>

<style scoped>
.table-container {
    background-color: #3f297e;
    border-radius: 12px;
    overflow-x: auto;
    width: 1136px;
    height: 692px;
}

table {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-collapse: collapse;
    gap: 48px;
}

tbody {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 32px;
    gap: 32px;
    color: #F6F6F6;
}

thead tr {
    display: flex;
    flex-direction: row;
    gap: 48px;
    color: #F6F6F6B2;
    font-weight: 600;
    font-size: var(--font-md);
    padding: 38px 0 0 32px;
}

.thinput {
    display: flex;
    align-items: center;
    width: 104px;
}

.thnome {
    display: flex;
    align-items: center;
    width: 176px;
}

.thagencia {
    display: flex;
    align-items: center;
    width: 160px;
}

.thconta {
    display: flex;
    align-items: center;
    width: 160px;
}

.thstatus {
    display: flex;
    align-items: center;
}

tbody tr {
    display: flex;
    flex-direction: row;
    gap: 48px;
}

.checkbox-td {
    display: flex;
    align-items: center;
    width: 32px;
    height: 32px;
}

.nome {
    display: flex;
    align-items: center;
    gap: 48px;
    min-width: 256px;
    color: inherit;
    text-decoration: none;
}

.nome:hover {
    opacity: 0.8;
}

.nome img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

.agencia {
    display: flex;
    align-items: center;
    width: 160px;
    height: 32px;
}

.conta-corrente {
    display: flex;
    align-items: center;
    width: 160px;
    height: 32px;
}

.status {
    display: flex;
    align-items: center;
    width: 159px;
    height: 32px;
}

.botao-olho {
    display: flex;
    align-items: center;
    gap: 48px;
    height: 32px;
    justify-content: center;
}

input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid white;
    border-radius: 6px;
    background-color: #3f2285;
    cursor: pointer;
}

input[type="checkbox"]:checked {
    background-color: white;
}

.btn-view {
    background: none;
    border: none;
    cursor: pointer;
}
</style>