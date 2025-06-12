<template>
  <div class="modal-backdrop" @click="$emit('fechar')">
    <div class="container-principal" @click.stop>
      <div class="container-conteudo">
        <div class="titulo">
          <h1>Cadastrar Banco</h1>
          <!-- Botão de fechar o modal, emite o evento 'fechar' -->
          <button class="icon-button" @click="$emit('fechar')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1162_133)">
                <path d="M5 19L12 12M12 12L19 5M12 12L5 5M12 12L19 19" stroke="#F6F6F6" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1162_133">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div class="container-itens">
          <div v-if="etapa === 1" class="container-itens">
  <div class="input-group">
    <label for="nomeBanco">Nome</label>
    <input v-model="form.nome" type="text" id="nomeBanco" class="modal-input" placeholder="Digite o nome do banco" />
  </div>
  <div class="input-group">
    <label for="razaoSocial">Razão Social</label>
    <input v-model="form.razaoSocial" type="text" id="razaoSocial" class="modal-input" placeholder="Digite a razão social do banco" />
  </div>
  <div class="input-group2">
    <div class="group2">
      <label for="cnpj">CNPJ</label>
      <input v-model="form.cnpj" type="text" id="cnpj" class="modal-input" placeholder="00.000.000/0000-00" />
    </div>
    <div class="group2">
      <label for="codBanco">Código do Banco</label>
      <input v-model="form.codigoBanco" type="text" id="codBanco" class="modal-input" placeholder="Digite o código numérico do banco" />
    </div>
  </div>
  <div class="input-group3">
    <div class="group3">
      <label for="agencia">Agência</label>
      <input v-model="form.agencia" type="text" id="agencia" class="modal-input" placeholder="Digite o número da agência" />
    </div>
    <div class="group3">
      <label for="conta">Conta</label>
      <input v-model="form.conta" type="text" id="conta" class="modal-input" placeholder="Digite o número da conta e o dígito verificador" />
    </div>
  </div>
</div>

<!-- Segunda Etapa -->
<div v-else-if="etapa === 2" class="container-itens">
  <div class="input-group">
    <label for="imagemBanco">Imagem do Banco</label>
    <input type="file" id="imagemBanco" @change="handleImageUpload" />
  </div>
  <div class="input-group">
    <label for="observacoes">Observações</label>
    <textarea v-model="form.observacoes" id="observacoes" class="modal-input" rows="4" placeholder="Digite observações adicionais"></textarea>
  </div>
</div>
        </div>
        <div style="display: flex; justify-content: center; gap: 1rem">
  <button v-if="etapa === 1" class="save-button" @click="proximaEtapa">Próximo</button>

  <template v-else>
    <button class="save-button2" @click="voltar">Voltar</button>
    <button class="save-button" @click="enviarFormulario">Salvar</button>
  </template>
</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineEmits } from 'vue';
import { createBanco } from '@/services/bancoService'; // ajuste caminho
import type { BancoStatus } from '@/services/bancoService';
import { Status } from '~/services/shared/statusEnum';

const emit = defineEmits(['fechar', 'atualizarLista']);
const router = useRouter();

// Etapas do formulário (1 = dados bancários, 2 = imagem e observações)
const etapa = ref(1);

// Status padrão inicial
const STATUS_INICIAL: Status = Status.Ativo;

// Substitua pelo ID real da empresa (de login, store, etc)
const empresaId = 1;

const form = ref({
  nome: '',
  razaoSocial: '',
  cnpj: '',
  codigoBanco: '',
  agencia: '',
  conta: '',
  observacoes: '',
  imagem: null as File | null,
});

function proximaEtapa() {
  etapa.value = 2;
}

function handleImageUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    form.value.imagem = file;
  }
}

async function enviarFormulario() {
  try {
    const payload = {
  empresa_id: empresaId,
  nome: form.value.nome,
  razao_social: form.value.razaoSocial,
  cnpj: form.value.cnpj,
  codigo: form.value.codigoBanco,
  agencia: form.value.agencia,
  conta_corrente: form.value.conta,
  status: STATUS_INICIAL,
  observacoes: form.value.observacoes,
  logo_url: '', // ou nulo, ou backend preenche
};

await createBanco(payload);
    emit('atualizarLista');
    emit('fechar');
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    alert('Erro ao salvar banco. Verifique os dados e tente novamente.');
  }
}

const voltar = () => {
  etapa.value = 1;
}
</script>

<style scoped>
/* ------------------ Inputs (Agrupados por tipo) ------------------ */
.input-group {
  display: flex;
  flex-direction: column;
}

.input-group2,
.input-group3 {
  display: flex;
  gap: 2rem;
}

.input-group label,
.input-group2 label,
.input-group3 label {
  font-weight: 500;
  font-size: 0.95rem;
}

.modal-input,
#nomeBanco,
#razaoSocial,
#cnpj,
#codBanco,
#agencia,
#conta {
  border-radius: 5px;
  height: 40px;
  font-size: 10px;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  width: 100%;
}

#cnpj,
#codBanco,
#agencia,
#conta {
  display: flex;
  flex-direction: column;
  width: 256px;
}

.modal-input:focus {
  outline: none;
  border-color: #22027a;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

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
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  width: 624px;
  height: 504px;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease-out forwards;
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
  padding: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color:#12283F;
}

/* ------------------ Títulos ------------------ */
.titulo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.titulo h1 {
  font-size: 1.8rem;
  color: #333;
}

/* ------------------ Botões ------------------ */
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #412884;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.icon-button:hover {
  background-color: #22027a;
}

.save-button,
.save-button2 {
  width: 104px;
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
