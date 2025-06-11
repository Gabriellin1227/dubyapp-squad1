<template>
  <!-- Este é o backdrop (fundo cinza semi-transparente que cobre toda a tela) -->
  <div class="modal-backdrop" @click="$emit('fechar')">
    <!-- Este é o container principal do modal, onde o conteúdo real do formulário fica -->
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
          <div class="input-group">
            <label for="nomeBanco">Nome</label>
            <input type="text" id="nomeBanco" class="modal-input" placeholder="Digite o nome do banco" />
          </div>
          <div class="input-group">
            <label for="razaoSocial">Razão Social</label>
            <input type="text" id="razaoSocial" class="modal-input" placeholder="Digite a razão social do banco" />
          </div>
          <div class="input-group2">
            <div class="group2">
              <label for="cnpj">CNPJ</label>
              <input type="text" id="cnpj" class="modal-input" placeholder="00.000.000/0000-00" />
            </div>
            <div class="group2">
              <label for="codBanco">Código do Banco</label>
              <input type="text" id="codBanco" class="modal-input" placeholder="Digite o código numérico do banco" />
            </div>
          </div>
          <div class="input-group3">
            <div class="group3">
              <label for="agencia">Agência</label>
              <input type="text" id="agencia" class="modal-input" placeholder="Digite o número da agência" />

            </div>
            <div class="group3">
              <label for="conta">Conta</label>
              <input type="text" id="conta" class="modal-input"
                placeholder="Digite o número da conta e o dígito verificador" />
            </div>
          </div>
          <!-- Botão de Salvar, se houver -->
        </div>
        <button class="save-button">Próximo</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

// Define o evento 'fechar' que este componente pode emitir
const emits = defineEmits(['fechar']);
</script>

<style scoped>
#nomeBanco {
  border-radius: 5px;
  height: 40px;
  font-size: 10px;
}

#razaoSocial {
  border-radius: 5px;
  height: 40px;
  font-size: 10px;
}

#cnpj {
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 40px;
  font-size: 10px;
}

#codBanco {
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 40px;
  font-size: 10px;
}

#agencia {
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 40px;
  font-size: 10px;
}

#conta {
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 40px;
  font-size: 10px;
}

.input-group2 {
  display: flex;
  gap: 2rem;
}

.input-group3 {
  display: flex;
  gap: 2rem;
}

/* Estilos para o fundo cinza (backdrop) que cobre apenas a área do conteúdo principal */
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

/* Estilos para o container principal do modal (a caixa branca com o formulário) */
.container-principal {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  width: 90%;
  /* Responsivo: 90% da largura do pai */
  width: 624px;
  height: 504px;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease-out forwards;
}

/* Animação para o modal */
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

.titulo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.titulo h1 {
  font-size: 1.8rem;
  color: #333;
}

.icon-button {
  display: flex;
  background-color: #412884;
  color: #fff;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.icon-button:hover {
  background-color: #0056b3;
}

.container-itens {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* Espaçamento entre os grupos de input */
  flex-grow: 1;
  /* Faz com que o container-itens preencha o espaço vertical restante */
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-weight: 500;
  font-size: 0.95rem;
}

.input-group2 label {
  font-weight: 500;
  font-size: 0.95rem;
}

.input-group3 label {
  font-weight: 500;
  font-size: 0.95rem;
}

.modal-input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  /* Cantos arredondados para inputs */
  font-size: 1rem;
  box-sizing: border-box;
  /* Inclui padding e borda na largura total */
}

.modal-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

.save-button {
  background-color: #412884;
  color: white;
  width: 104px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
  align-self: center;
}

.save-button:hover {
  background-color: #218838;
  transform: translateY(-2px);
}
</style>
