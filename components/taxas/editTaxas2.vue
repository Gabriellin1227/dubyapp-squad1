<template>
    <div class="modal-backdrop" @click="$emit('fechar')">
        <div class="container-principal">
            <div class="container-conteudo" @click.stop>
                <div class="titulo">
                    <h1>Configuração de Taxas</h1>
                    <p>Área de gerenciamento das taxas de adquirentes.</p>
                </div>
                <div class="conteudo">

                    <div class="container-itens">
                        <div class="input-group2">
                            <div class="group2">
                                <label for="valor">Valor</label>
                                <input v-model="form.valor" type="number" id="valor" class="modal-input"
                                    placeholder="00,00" />
                            </div>
                            <div class="group2">
                                <label for="parcelaInicial">Parcela inicial</label>
                                <input v-model="form.parcelaInicial" type="number" id="parcelaInicial"
                                    class="modal-input" placeholder="0" />
                            </div>
                        </div>
                        <div class="input-group3">
                            <div class="group3">
                                <label for="parcelaFinal">Parcela final</label>
                                <input v-model="form.parcelaFinal" type="number" id="parcelaFinal" class="modal-input"
                                    placeholder="0" />
                            </div>
                        </div>
                    </div>
                    <div class="conteudo-btn">
                        <button class="save-button22">Limpar</button>
                        <button class="save-button1">Salvar</button>
                    </div>
                </div>
                <div class="tabela-intervalos">
                    <div class="tb-titulo">
                        <p>Intervalos aplicados</p>
                    </div>
                    <div class="linha" v-for="(intervalo, i) in intervalos" :key="i">
                        <span class="coluna">{{ intervalo.de }} - {{ intervalo.ate }}x</span>
                        <span class="coluna">{{ intervalo.percentual }}%</span>
                        <span class="coluna">{{ intervalo.parcelas }} parcelas</span>
                        <button class="botao-remover">
                            <span class="icone">−</span>
                        </button>
                    </div>
                </div>
                <div class="button">
                    <button class="save-button2" @click="$emit('fechar')">Voltar</button>
                    <button class="save-button" @click="mostrarEditTaxas3 = true">Próximo</button>
                </div>
            </div>
        </div>
    </div>

    <TaxasEditTaxas3 v-if="mostrarEditTaxas3" @fechar="mostrarEditTaxas3 = false" />
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { defineEmits } from 'vue'
import { getTaxasByAdquirenteId, type Taxas } from '~/services/taxasService'
import { TaxasEditTaxas3 } from '#components'

const emit = defineEmits(['fechar', 'atualizarLista'])
const route = useRoute()
const router = useRouter()
const adquirenteId = Number(route.params.id)

const cardSelecionado = ref<number | null>(0)
const etapa = 1

const taxa = ref<Taxas[]>([])

const form = reactive({
    bandeira: '',
    valor: '',
    parcelaInicial: '',
    parcelaFinal: ''
})

const opcoesBandeiras = [
    'Visa',
    'Mastercard',
    'Elo',
    'Hipercard',
    'Amex',
    'Cabal',
    'Banese',
    'Sorocred'
]

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

const mostrarEditTaxas = ref(false)
const intervalos = ref([
  { de: 2, ate: 4, percentual: '2,34', parcelas: 3 },
  { de: 5, ate: 8, percentual: '2,87', parcelas: 4 },
  { de: 9, ate: 12, percentual: '3,05', parcelas: 4 },
  { de: 13, ate: 14, percentual: '5,67', parcelas: 2 },
  { de: 15, ate: 18, percentual: '7,56', parcelas: 4 },
])

const mostrarEditTaxas3 = ref(false)

onMounted(() => {
    carregarTaxas()
})
</script>


<style scoped>
/* ------------------ Modal ------------------ */
.modal-backdrop {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: opacity 0.3s ease;
}

.container-principal {
    background-color: white;
    border-radius: 20px;
    width: 680px;
    height: 584px;
    display: flex;
    flex-direction: column;
    animation: slideIn 0.3s ease-out forwards;
}

.conteudo {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.input-group2,
.input-group3 {
    display: flex;
    gap: 2rem;
}

.group,
.group2,
.group3 {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-group label,
.input-group2 label,
.input-group3 label {
    font-weight: 500;
    font-size: 0.95rem;
}

.modal-input {
    border-radius: 5px;
    font-size: 10px;
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: 100%;
}

#parcelaInicial,
#parcelaFinal {
    display: flex;
    flex-direction: column;
    width: 124px;
    height: 46px;
}

#valor {
    border-radius: 5px;
    height: 46px;
    font-size: 10px;
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: 272px;
}

@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.container-conteudo {
    padding: 56px 48px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #12283F;
}

/* ------------------ Títulos ------------------ */
.titulo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.titulo h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #412884;
    margin: 0;
}

.titulo p {
    margin: 0;
}

/* ------------------ Botões ------------------ */
.button {
    display: flex;
    justify-content: center;
    gap: 16px;
}

.save-button,
.save-button2 {
    width: 152px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    transition: background-color 0.2s ease;
    align-self: center;
}

.save-button {
    background-color: #412884;
    color: white;
    border: none;
}

.save-button:hover {
    background-color: #22027a;
}

.save-button2 {
    background-color: white;
    color: #412884;
    border: 1px solid #412884;
}

.save-button2:hover {
    background-color: rgb(156, 156, 156);
}

.conteudo-btn {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
}

.save-button1,
.save-button22 {
    width: 80px;
    height: 24px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 10px;
    font-weight: 400;
    transition: background-color 0.2s ease;
    align-self: center;
}

.save-button1 {
    background-color: #412884;
    color: white;
    border: none;
}

.save-button1:hover {
    background-color: #22027a;
}

.save-button22 {
    background-color: white;
    color: #412884;
    border: 1px solid #412884;
}

.save-button22:hover {
    background-color: rgb(156, 156, 156);
}

/* ------------------ Containers ------------------ */
.container-itens {
    display: flex;
    gap: 24px;
    flex-grow: 1;
}

.tabela-intervalos {
    display: flex;
    flex-direction: column;
    width: 568px;
    height: 192px;
    gap: 8px;
}

.linha {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  font-size: 12px;
  width: 568px;
  height: 24px;
  gap: 8px;
}

.coluna {
  flex: 1;
  color: #333;
  font-size: 14px;
}

.botao-remover {
  background-color: #4b0082;
  border: none;
  border-radius: 2px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.botao-remover:hover {
  background-color: #36005f;
}

.icone {
  line-height: 1;
  font-weight: bold;
  margin-top: -2px;
}

.tb-titulo p {
    color: #412884;
    font-size: 14px;
    font-weight: 600;
}
</style>
