<template>
    <div class="modal-backdrop" @click="$emit('fechar')">
        <div class="container-principal">
            <div class="container-conteudo" @click.stop>
                <div class="titulo">
                    <h1>Antecipação</h1>
                    <p>Cadastre e edite em massa taxas de antecipação.</p>
                </div>
                <div class="conteudo">

                    <div class="container-itens">
                        <div class="input-group">
                            <div class="group">
                                <label for="bandeira">Forma de pagamento</label>
                                <select v-model="form.bandeira" id="bandeira" class="modal-input">
                                    <option disabled value="">Selecione a bandeira</option>
                                    <option v-for="bandeira in opcoesBandeiras" :key="bandeira" :value="bandeira">
                                        {{ bandeira }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="input-group2">
                            <div class="group2">
                                <label for="inicioVigencia">Início da vigência</label>
                                <input v-model="form.inicioVigencia" type="date" id="inicioVigencia"
                                    class="modal-input" />
                            </div>

                            <div class="group2">
                                <label for="fimVigencia">Fim da vigência</label>
                                <input v-model="form.fimVigencia" type="date" id="fimVigencia" class="modal-input" />
                            </div>
                        </div>

                        <div class="input-group3">
                            <div class="group3">
                                <label for="debito">Débito</label>
                                <input v-model="form.debito" type="text" id="debito" class="modal-input"
                                    placeholder="00,00" />
                            </div>
                            <div class="group3">
                                <label for="credito">Crédito à vista</label>
                                <input v-model="form.credito" type="text" id="credito" class="modal-input"
                                    placeholder="00,00" />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="button">
                    <button class="save-button2" @click="$emit('fechar')">Voltar</button>
                    <button class="save-button" @click="mostrarEditTaxas2 = true">Próximo</button>
                </div>
            </div>
        </div>
    </div>

    <TaxasEditTaxas2 v-if="mostrarEditTaxas2" @fechar="mostrarEditTaxas2 = false" />
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { defineEmits } from 'vue'
import { getTaxasByAdquirenteId, type Taxas } from '~/services/taxasService'

const emit = defineEmits(['fechar', 'atualizarLista'])
const route = useRoute()
const router = useRouter()
const adquirenteId = Number(route.params.id)

const cardSelecionado = ref<number | null>(0)
const etapa = 1

const taxa = ref<Taxas[]>([])

const form = reactive({
    bandeira: '',
    inicioVigencia: '',
    fimVigencia: '',
    debito: '',
    credito: ''
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

const mostrarEditTaxas2 = ref(false)

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
    height: 536px;
    display: flex;
    flex-direction: column;
    animation: slideIn 0.3s ease-out forwards;
}

.conteudo {
    display: flex;
    gap: 24px;
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

#inicioVigencia,
#fimVigencia,
#debito,
#credito {
  display: flex;
  flex-direction: column;
  width: 272px;
}

#bandeira {
  border-radius: 5px;
  height: 40px;
  font-size: 10px;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  width: 568px;
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

/* ------------------ Containers ------------------ */
.container-itens {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
}
</style>
