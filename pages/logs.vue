<script setup>
const logs = [
    {
        risk: 'Alto',
        date: '10/06/2024',
        hour: '16:20',
        module: 'Gestão de Contas',
        user: 'Amanda Ribeiro',
        description: 'Remoção de conta bancária: Bradesco'
    },
    {
        risk: 'Médio',
        date: '09/06/2024',
        hour: '11:00',
        module: 'Gestão de Taxas',
        user: 'Carlos Mendes',
        description: 'Inclusão de taxa: Cielo'
    },
    {
        risk: 'Baixo',
        date: '08/06/2024',
        hour: '10:30',
        module: 'Configurações',
        user: 'Fernanda Souza',
        description: 'Alteração de senha'
    },
    {
        risk: 'Médio',
        date: '07/06/2024',
        hour: '15:50',
        module: 'Consultas',
        user: 'Jonathan Curvelo',
        description: 'Exportação de relatório de conciliações'
    },
    {
        risk: 'Alto',
        date: '06/06/2024',
        hour: '18:15',
        module: 'Gestão de Contas',
        user: 'Amanda Ribeiro',
        description: 'Substituição de conta primária da Rede'
    },
    {
        risk: 'Baixo',
        date: '05/06/2024',
        hour: '09:10',
        module: 'Dashboard',
        user: 'Carlos Mendes',
        description: 'Visualização de detalhamento do dashboard'
    },
    {
        risk: 'Médio',
        date: '04/06/2024',
        hour: '14:05',
        module: 'Gestão de Taxas',
        user: 'Fernanda Souza',
        description: 'Correção de taxa aplicada para Getnet'
    },
    {
        risk: 'Baixo',
        date: '03/06/2024',
        hour: '08:55',
        module: 'Configurações',
        user: 'Jonathan Curvelo',
        description: 'Alteração de informação: Telefone'
    },
    {
        risk: 'Alto',
        date: '02/06/2024',
        hour: '17:40',
        module: 'Gestão de Contas',
        user: 'Carlos Mendes',
        description: 'Exclusão de credenciadora inativa: Vero'
    },
    {
        risk: 'Médio',
        date: '01/06/2024',
        hour: '12:20',
        module: 'Consultas',
        user: 'Fernanda Souza',
        description: 'Consulta detalhada de transações com divergência'
    },
    {
        risk: 'Baixo',
        date: '31/05/2024',
        hour: '16:00',
        module: 'Dashboard',
        user: 'Jonathan Curvelo',
        description: 'Comparativo de taxas por adquirente'
    },
    {
        risk: 'Médio',
        date: '30/05/2024',
        hour: '13:15',
        module: 'Gestão de Taxas',
        user: 'Amanda Ribeiro',
        description: 'Cadastro de nova regra de antecipação'
    },
    {
        risk: 'Alto',
        date: '29/05/2024',
        hour: '11:35',
        module: 'Gestão de Contas',
        user: 'Carlos Mendes',
        description: 'Alteração de agência e conta para recebíveis'
    },
    {
        risk: 'Baixo',
        date: '28/05/2024',
        hour: '10:10',
        module: 'Configurações',
        user: 'Fernanda Souza',
        description: 'Atualização do e-mail de contato principal'
    },
    {
        risk: 'Médio',
        date: '27/05/2024',
        hour: '15:30',
        module: 'Consultas',
        user: 'Amanda Ribeiro',
        description: 'Geração de relatório'
    }
];

const getRiskClass = (risk) => {
    if (risk === 'Alto') {
        return 'high-risk'
    } else if (risk === 'Médio') {
        return 'medium-risk'
    } else {
        return 'low-risk'
    }
};
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="header-title">Logs do sistema</div>
            <div class="header-subtitle">Confira os logs e clique duas vezes para visualizar seus detalhes.</div>
        </div>
        <div class="main-container">
            <div class="filter-container">
                <div class="filter-content">
                    <div class="table-filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="#12283F" stroke-linecap="round" stroke-width="1.5">
                                <path d="M12 7.5H7A1.5 1.5 0 0 0 5.5 9v8A1.5 1.5 0 0 0 7 18.5h8a1.5 1.5 0 0 0 1.5-1.5v-5" />
                                <path stroke-linejoin="round" d="m12.5 11.5l6.364-6.364M14.5 4.5h5v5" />
                            </g>
                        </svg>
                        Exportar
                    </div>
                    <div class="table-filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#12283F" d="M16 8.616v-3H8v3H7v-4h10v4zm-11.423 1h14.846zm13.038 2.5q.425 0 .713-.288t.287-.712t-.287-.713t-.713-.288t-.712.288t-.288.713t.288.712t.713.288M16 19v-4.538H8V19zm1 1H7v-4H3.577v-5.384q0-.85.577-1.425t1.423-.576h12.846q.85 0 1.425.576t.575 1.424V16H17zm2.423-5v-4.384q0-.425-.287-.713t-.713-.288H5.577q-.425 0-.712.288t-.288.713V15H7v-1.538h10V15z" />
                        </svg>
                        Imprimir
                    </div>
                    <div class="table-filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#12283F" d="M6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m3 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
                        </svg>
                        Filtrar
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Risco</th>
                        <th>Data e hora</th>
                        <th>Módulo</th>
                        <th>Usuário</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="log in logs">
                        <td :class="getRiskClass(log.risk)">{{ log.risk }}</td>
                        <td>{{ `${log.date} - ${log.hour}` }}</td>
                        <td>{{ log.module }}</td>
                        <td>{{ log.user }}</td>
                        <td>{{ log.description }}</td>
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
    gap: 8px;

    height: 100%;
    width: 100%;
}

.filter-container {
    display: flex;
    justify-content: flex-end;

    .filter-content {
        display: flex;
        gap: 16px;
        
        .table-filter {
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

table {
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: calc(100vh - 346px);
    width: 100%;

    padding: 16px;

    border: 1px solid rgba(65, 40, 132, 0.2);
    border-radius: 10px;

    overflow: auto;
    scrollbar-width: thin;

    thead tr, tbody tr {
        display: flex;
        justify-content: space-between;

        width: 100%;

        padding: 0 8px;

        border-radius: 4px;
    }

    thead tr {
        color: rgba(18, 40, 64, 0.5);
        font-size: 14px;
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

    td, th {
        text-align: left;
    }

    tbody {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    td:nth-of-type(1) {
        color: var(--background);
        text-align: center;

        border-radius: 10px;
    }

    .high-risk {
        background-color: #D43343;
    }

    .medium-risk {
        background-color: #F79E1B;
    }

    .low-risk {
        background-color: #73BA60;
    }

    td:nth-of-type(1), th:nth-of-type(1) {
        width: 64px;
    }

    td:nth-of-type(2), th:nth-of-type(2) {
        width: 160px;
    }

    td:nth-of-type(3), th:nth-of-type(3) {
        width: 160px;
    }

    td:nth-of-type(4), th:nth-of-type(4) {
        width: 144px;
    }

    td:nth-of-type(5), th:nth-of-type(5) {
        width: 400px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
    }
}
</style>