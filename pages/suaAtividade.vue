<script setup>
import { useAuth } from '@/stores/useAuth';

const auth = useAuth();

const actions = [
    {
        date: '05/02/2023',
        hour: '13:20',
        module: 'Gestão de Contas',
        description: 'Remoção de adquirente inativa: Rede'
    },
    {
        date: '04/02/2023',
        hour: '11:35',
        module: 'Dashboard',
        description: 'Exportação do ranking de adquirentes'
    },
    {
        date: '03/02/2023',
        hour: '14:10',
        module: 'Configurações',
        description: 'Alteração de senha'
    },
    {
        date: '02/02/2023',
        hour: '09:00',
        module: 'Consultas',
        description: 'Exportação da conciliação #230201-01'
    },
    {
        date: '01/02/2023',
        hour: '10:45',
        module: 'Conciliação',
        description: 'Início do processo de conciliação'
    },
    {
        date: '31/01/2023',
        hour: '15:00',
        module: 'Gestão de Contas',
        description: 'Edição de dados da Getnet'
    },
    {
        date: '30/01/2023',
        hour: '12:25',
        module: 'Dashboard',
        description: 'Exportação dos detalhamentos de totais'
    },
    {
        date: '29/01/2023',
        hour: '17:40',
        module: 'Configurações',
        description: 'Atualização do algoritmo de matching'
    },
    {
        date: '28/01/2023',
        hour: '08:30',
        module: 'Consultas',
        description: 'Exportação de relatório'
    },
    {
        date: '27/01/2023',
        hour: '13:50',
        module: 'Conciliação',
        description: 'Importação de novos arquivos'
    },
    {
        date: '26/01/2023',
        hour: '10:15',
        module: 'Gestão de Contas',
        description: 'Inclusão de nova adquirente: Cielo'
    },
    {
        date: '25/01/2023',
        hour: '16:05',
        module: 'Dashboard',
        description: 'Exportação de dados do dashboard'
    },
    {
        date: '24/01/2023',
        hour: '11:20',
        module: 'Configurações',
        description: 'Atualização do número de telefone'
    },
    {
        date: '23/01/2023',
        hour: '14:30',
        module: 'Consultas',
        description: 'Exportação da conciliação #250123-01'
    },
    {
        date: '22/01/2023',
        hour: '09:45',
        module: 'Conciliação',
        description: 'Início do processo de conciliação'
    },
    {
        date: '20/01/2023',
        hour: '19:10',
        module: 'Gestão de Contas',
        description: 'Atualização das taxas da Stone'
    }
];

const adminActions = [
    {
        date: '05/02/2023',
        hour: '13:20',
        module: 'Gestão de Clientes',
        description: 'Novo cliente adicionado: Nexora'
    },
    {
        date: '04/02/2023',
        hour: '11:35',
        module: 'Dashboard',
        description: 'Exportação de relatório'
    },
    {
        date: '03/02/2023',
        hour: '14:10',
        module: 'Configurações',
        description: 'Alteração de telefone'
    }
];
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="header-title">Sua atividade</div>
            <div class="header-subtitle">Confira suas últimas atividades no sistema.</div>
        </div>
        <div class="main-container">
            <table>
                <thead>
                    <tr>
                        <th>Data e hora</th>
                        <th>Módulo</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="auth.userRole === 'gestor'" v-for="action in actions">
                        <td>{{ `${action.date} - ${action.hour}` }}</td>
                        <td>{{ action.module }}</td>
                        <td>{{ action.description }}</td>
                    </tr>
                    <tr v-if="auth.userRole === 'admin'" v-for="action in adminActions">
                        <td>{{ `${action.date} - ${action.hour}` }}</td>
                        <td>{{ action.module }}</td>
                        <td>{{ action.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
    
    height: 100%;
    width: 100%;
    max-width: 100%;

    margin: 0;
    padding: 16px;
}

.header-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    
    .header-title {
        color: var(--principal);
        font-size: var(--font-xxl);
        font-weight: 600;
        line-height: 64px;
    }
    
    .header-subtitle {
        color: rgb(18, 40, 63, 0.6);
        font-size: var(--font-snd);
        line-height: 24px;
    }
}

.main-container {
    display: flex;
    flex-direction: column;
    gap: 40px;

    height: 100%;
    width: 100%;
}

table {
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    height: calc(100vh - 296px);
    width: 100%;

    padding: 16px;

    border: 1px solid rgba(65, 40, 132, 0.2);
    border-radius: 10px;

    overflow: auto;
    scrollbar-width: thin;

    tr {
        height: 24px;
        padding: 0 8px;

        font-size: 14px;
    }

    thead tr th:nth-last-child(n+2) {
        width: 152px;
    }

    tbody tr td:nth-last-child(n+2) {
        width: 152px;
    }

    thead tr {
        display: flex;
        gap: 80px;

        color: rgba(18, 40, 64, 0.5);
    }

    tbody tr {
        display: flex;
        gap: 80px;

        border-radius: 5px;
    }

    tbody tr:hover {
        background-color: rgba(65, 40, 132, 0.05);
    }

    tbody {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>