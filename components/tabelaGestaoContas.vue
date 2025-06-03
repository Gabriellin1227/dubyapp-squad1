<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Nome</th>
                    <th>Agência</th>
                    <th>Conta</th>
                    <th>Ativo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="banco in bancos" :key="banco.id">
                    <td><input type="checkbox" /></td>
                    <td class="nome">
                        <img :src="banco.logo_url" alt="Logo" />
                        {{ banco.razao_social }}
                    </td>
                    <td>{{ banco.agencia }}</td>
                    <td>{{ banco.conta_corrente }}</td>
                    <td>
                        {{ banco.status === 'ativo' ? 'Sim' : 'Não' }}
                    </td>
                    <td>
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
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAllBancos, type Banco } from '~/services/bancoService';

const bancos = ref < Banco[] > ([]);

const fetchBancos = async () => {
    try {
        bancos.value = await getAllBancos();
    } catch (error) {
        console.error('Erro ao buscar bancos:', error);
    }
};

onMounted(() => {
    fetchBancos();
});
</script>

<style scoped>
.table-container {
    background-color: #3f297e;
    padding: 38px 0 0 64px;
    border-radius: 12px;
    overflow-x: auto;
    width: 1617px;
    height: 750px;
}

table,
th,
td {
    border: none;
}

table {
    display: flex;
    flex-direction: column;
    gap: 48px;
}

tbody tr {
    display: flex;
    border-top: none;
}

thead {
    display: flex;
    color: white;
    font-weight: 600;
    font-size: var(--font-md);

}

td.nome {
    display: flex;
    align-items: center;
    gap: 10px;
}

td.nome img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

input[type="checkbox"] {
    width: 18px;
    height: 18px;
}

.btn-view {
    background: none;
    border: none;
    cursor: pointer;
}
</style>