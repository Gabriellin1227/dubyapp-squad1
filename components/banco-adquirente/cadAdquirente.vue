<template>
  <div class="modal-backdrop" @click="$emit('fechar')">
    <div class="container-principal" @click.stop>
      <div class="container-conteudo">
        <div class="titulo">
          <h1>Cadastrar Adquirente</h1>
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
                <div class="group">
              <label for="nomeBanco">Nome</label>
              <input v-model="form.nome" type="text" id="nomeBanco" class="modal-input"
                placeholder="Digite o nome do banco" />
                </div>
            </div>
            <div class="input-group">
                <div class="group">
              <label for="razaoSocial">Razão Social</label>
              <input v-model="form.razaoSocial" type="text" id="razaoSocial" class="modal-input"
                placeholder="Digite a razão social do banco" />
                </div>
            </div>
            <div class="input-group2">
              <div class="group2">
                <label for="cnpj">CNPJ</label>
                <input v-model="form.cnpj" type="text" id="cnpj" class="modal-input" placeholder="00.000.000/0000-00" />
              </div>
              <div class="group2">
                <label for="codBanco">Conta de Repasse</label>
                <input v-model="form.contarepasse" type="text" id="codBanco" class="modal-input"
                  placeholder="Digite o código numérico do banco" />
              </div>
            </div>
          </div>

          <!-- Segunda Etapa -->
          <div v-else-if="etapa === 2" class="container-itens">
            <div class="input-group4">
              <div class="custom-file-label">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M43.3066 9.33301H20.64C17.1038 9.33301 13.7124 10.7378 11.2119 13.2383C8.7114 15.7387 7.30664 19.1301 7.30664 22.6663V41.333C7.30664 43.084 7.65152 44.8178 8.32158 46.4355C8.99164 48.0531 9.97377 49.523 11.2119 50.7611C13.7124 53.2616 17.1038 54.6663 20.64 54.6663H43.3066C45.0576 54.6663 46.7914 54.3215 48.4091 53.6514C50.0268 52.9813 51.4966 51.9992 52.7347 50.7611C53.9728 49.523 54.955 48.0531 55.625 46.4355C56.2951 44.8178 56.64 43.084 56.64 41.333V22.6663C56.64 20.9154 56.2951 19.1816 55.625 17.5639C54.955 15.9462 53.9728 14.4764 52.7347 13.2383C51.4966 12.0001 50.0268 11.018 48.4091 10.3479C46.7914 9.67788 45.0576 9.33301 43.3066 9.33301Z"
                    stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M7.97339 45.3333L15.3067 36.7999C16.2663 35.8469 17.5257 35.2547 18.8717 35.1235C20.2178 34.9923 21.5678 35.3301 22.6934 36.0799C23.8189 36.8297 25.169 37.1676 26.515 37.0364C27.8611 36.9052 29.1205 36.313 30.0801 35.3599L36.2934 29.1466C38.0787 27.3552 40.4424 26.2565 42.9628 26.0465C45.4832 25.8364 47.9962 26.5288 50.0534 27.9999L56.6934 33.1466M21.3067 27.1199C21.888 27.1199 22.4637 27.0054 23.0007 26.783C23.5378 26.5605 24.0258 26.2344 24.4368 25.8234C24.8479 25.4123 25.174 24.9243 25.3964 24.3873C25.6189 23.8502 25.7334 23.2746 25.7334 22.6933C25.7334 22.112 25.6189 21.5363 25.3964 20.9993C25.174 20.4622 24.8479 19.9742 24.4368 19.5631C24.0258 19.1521 23.5378 18.826 23.0007 18.6036C22.4637 18.3811 21.888 18.2666 21.3067 18.2666C20.1327 18.2666 19.0068 18.733 18.1766 19.5631C17.3464 20.3933 16.8801 21.5192 16.8801 22.6933C16.8801 23.8673 17.3464 24.9932 18.1766 25.8234C19.0068 26.6536 20.1327 27.1199 21.3067 27.1199Z"
                    stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="aviso"><p>Máx.: 200x200, 5MB</p></div>
              <div class="add-remove">
                <input type="file" id="imagemBanco" class="file-upload" @change="handleImageUpload" />
                <button for="imagemBanco" class="save-button">Adicionar</button>
                <button class="save-button2" onclick="removeFiles()">Remover</button>
              </div>
            </div>
            <div class="input-group">
              <label for="observacoes">Observações</label>
              <textarea v-model="form.observacoes" id="observacoes" class="modal-input" rows="4" style="resize: none;"
                placeholder="Digite observações adicionais"></textarea>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: center; gap: 1rem">
          <button v-if="etapa === 1" class="save-button" @click="proximaEtapa">Próximo</button>

          <template v-else>
            <button class="save-button2" @click="voltar">Voltar</button>
            <button class="save-button" @click="enviarFormulario">Finalizar</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineEmits } from 'vue';
import type { BancoStatus } from '@/services/bancoService';
import { Status } from '~/services/shared/statusEnum';
import { createAdquirente } from '~/services/adquirentesService';

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
  contarepasse: '',
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
      contarepasse: form.value.contarepasse,
      status: STATUS_INICIAL,
      observacoes: form.value.observacoes,
      logo_url: '', // ou nulo, ou backend preenche
    };

    await createAdquirente(payload);
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

.modal-input #observacoes {
  display: flex;
  height: 72px;
  border-radius: 5px
}

#observacoes {
  border-radius: 5px;
}

.file-upload {
  display: none;
}

.input-group4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.aviso p{
  margin: 0;
  color: #412884;
}

.add-remove {
  display: flex;
  gap: 1rem;
}

.custom-file-label {
  padding: 28px;
  border-radius: 30px;
  width: 120px;
  background-color: #412884;
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
  color: #12283F;
}

/* ------------------ Títulos ------------------ */
.titulo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.titulo h1 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #412884;
  margin: 0;
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
