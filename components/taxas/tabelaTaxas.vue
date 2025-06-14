<template>
    <div class="overflow-x-auto">
        <div class="scroll-container">
            <table class="min-w-full border-collapse text-center">
                <thead>
                    <tr class="cabecalho-bandeiras">
                        <th class="col-parcelas">
                            <div class="th-wrapper"># Parcelas</div>
                        </th>
                        <th v-for="bandeira in bandeiras" :key="bandeira" class="col-bandeira">
                            <div class="th-wrapper">
                                {{ bandeira }}
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(linha, index) in linhas" :key="index"
                        :class="[index % 2 === 0 ? 'bg-1a' : 'bg-26', 'linha-taxa']">
                        <td class="col-parcelas">
                            <div class="td-wrapper">
                                {{
                                    linha.parcelas === 0
                                        ? 'Débito'
                                        : linha.parcelas === 1
                                            ? 'Crédito à vista'
                                            : `${linha.parcelas}x`
                                }}
                            </div>
                        </td>
                        <td v-for="(bandeira, idx) in bandeiras" :key="bandeira">
                            <div class="td-wrapper">
                                {{ linha.valores[bandeira] || '-' }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getTaxasByAdquirenteId, type Taxas } from '@/services/taxasService'

const bandeiras = [
    'Visa',
    'Mastercard',
    'Elo',
    'Hipercard',
    'Alelo',
    'Amex',
    'Maestro',
    'Diners',
    'PIX'
]

const route = useRoute()
const adquirenteId = Number(route.params.id)
const taxa = ref<Taxas[]>([])

const carregarTaxas = async () => {
    try {
        taxa.value = await getTaxasByAdquirenteId(adquirenteId)
    } catch (error) {
        console.error('Erro ao carregar taxas:', error)
    }
}

const linhas = computed(() => {
    const agrupado: Record<string, any> = {}

    for (const t of taxa.value) {
        const chave = `${t.tipo_transacao}_${t.parcelas}`

        if (!agrupado[chave]) {
            agrupado[chave] = {
                tipo: t.tipo_transacao,
                parcelas: t.parcelas,
                valores: {}
            }
        }

        agrupado[chave].valores[t.bandeira] = `${t.percentual_taxa}%`
    }

    return Object.values(agrupado).sort((a, b) => a.parcelas - b.parcelas)
})

onMounted(() => {
    carregarTaxas()
})
</script>

<style scoped>
/* Wrapper para cada <th> */
.th-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 100%;
}

.scroll-container {
    max-height: 608px;
    overflow-y: auto;
}


/* Estilização do cabeçalho */
.cabecalho-bandeiras th {
    background-color: #EAEBEC;
    border: none;
    font-size: 14px;
    font-weight: 400;
}

/* Estilo específico para a primeira coluna */
.col-parcelas {
    padding: 16px 24px;
}

/* Adiciona gap visual entre os <th> com wrapper */
.cabecalho-bandeiras {
    display: table-row;
}

/* Adiciona gap entre colunas por margem entre divs */
.cabecalho-bandeiras th:not(:first-child) .th-wrapper {
    gap: 16px;
}

/* Coluna de parcelas no cabeçalho */
.col-parcelas {
    padding: 16px 23px;
    background-color: #EAEBEC;
    text-align: left;
    border: none;
}

/* Linhas alternadas */
.bg-1a {
    background-color: #4128841A;
}

.bg-26 {
    background-color: #41288426;
}

.linha-taxa {
    font-size: 14px;
}

.td-wrapper {
    width: 120px;
    height: 32px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}


/* Remove bordas padrão */
table,
th,
td {
    border: none;
}
</style>
