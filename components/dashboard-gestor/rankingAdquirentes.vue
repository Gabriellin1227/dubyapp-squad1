<script setup>
const rankings = [
    {
        position: 1,
        imgUrl: 'logo-sumup.png',
        name: 'Sumup',
        divergencePercent: '35,6%',
        growth: true,
        divergence: 296
    },
    {
        position: 2,
        imgUrl: 'logo-bin.png',
        name: 'Bin',
        divergencePercent: '22,3%',
        growth: false,
        divergence: 234
    },
    {
        position: 3,
        imgUrl: 'logo-cielo.png',
        name: 'Cielo',
        divergencePercent: '21,5%',
        growth: false,
        divergence: 196
    },
    {
        position: 4,
        imgUrl: 'logo-sicredi.png',
        name: 'Sicredi',
        divergencePercent: '14,2%',
        growth: true,
        divergence: 123
    },
    {
        position: 5,
        imgUrl: 'logo-pagseguro.png',
        name: 'Pagseguro',
        divergencePercent: '12,95%',
        growth: true,
        divergence: 101
    },
    {
        position: 6,
        imgUrl: 'logo-stone.png',
        name: 'Stone',
        divergencePercent: '7,546%',
        growth: false,
        divergence: 76
    },
    {
        position: 7,
        imgUrl: 'logo-getnet.png',
        name: 'Getnet',
        divergencePercent: '3,546%',
        growth: false,
        divergence: 34
    },
];
</script>

<template>
    <div class="ranking-container">
        <div class="ranking-header">
            <div class="ranking-title">Ranking de adquirentes</div>
            <div class="ranking-filter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="#412884" d="M6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m3 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
                </svg>
                Filtrar
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th class="row-gap"></th>
                    <th class="row-gap"></th>
                    <th>Nome do adquirente</th>
                    <th>Total divergente</th>
                    <th>Discrepâncias</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ranking in rankings">
                    <td>{{ ranking.position }}</td>
                    <td>
                        <img :src="`/assets/images/icons/${ranking.imgUrl}`" alt="Logo da adquirente">
                    </td>
                    <td>{{ ranking.name }}</td>
                    <td :class="ranking.growth ? 'growth' : 'degrowth'" >{{ ranking.divergencePercent }}</td>
                    <td>{{ ranking.divergence }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
div.ranking-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;

    height: 426px;
    width: 100%;

    padding: 40px 24px;

    background-color: #ffffff;

    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

    cursor: pointer;

    .ranking-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .ranking-title {
            color: var(--principal);
            font-weight: 600;
            font-size: 16px;
        }

        .ranking-filter {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            height: 24px;
            width: 64px;

            color: var(--principal);
            font-size: 12px;

            border: 1px solid var(--principal);
            border-radius: 5px;

            cursor: pointer;
        }
    }

    table {
        display: flex;
        flex-direction: column;
        gap: 8px;

        height: 296px;
        width: 100%;

        thead {
            display: flex;
            justify-content: flex-end;

            color: rgba(18, 40, 64, 0.8);
            font-size: 10px;

            tr {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 16px;

                width: 100%;
            }
        }

        .row-gap {
            width: 24px;
        }

        tbody {
            display: flex;
            flex-direction: column;
            gap: 16px;

            tr {
                display: flex;
                justify-content: space-between;
                font-size: 14px;

                td {
                    color: rgba(18, 40, 64, 0.8);
                }

                td:nth-last-of-type(2) {
                    font-weight: 600;
                }
            }
        }

        td:nth-of-type(1) {
            width: 24px;
        }

        td:nth-of-type(2) {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 24px;
            width: 24px;

            border: 1px solid rgba(18, 40, 64, 0.3);
            border-radius: 50%;
        }

        td:nth-of-type(3), th:nth-of-type(3) {
            width: 104px;
        }

        td:nth-of-type(4), th:nth-of-type(4) {
            width: 72px;
            text-align: right;
        }
        
        td:nth-of-type(5), th:nth-of-type(5) {
            width: 72px;
            text-align: right;
        }

        .growth {
            color: #73BA60;
        }

        .degrowth {
            color: #D43343;
        }
    }
}
</style>