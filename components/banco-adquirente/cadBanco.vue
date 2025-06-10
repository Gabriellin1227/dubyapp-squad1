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
            <label for="nomeBanco">Nome do Banco</label>
            <input type="text" id="nomeBanco" class="modal-input" placeholder="Ex: Banco do Brasil" />
          </div>
          <div class="input-group">
            <label for="razaoSocial">Razão Social</label>
            <input type="text" id="razaoSocial" class="modal-input" placeholder="Ex: Banco do Brasil S.A." />
          </div>
          <div class="input-group">
            <label for="cnpj">CNPJ</label>
            <input type="text" id="cnpj" class="modal-input" placeholder="Ex: 00.000.000/0001-00" />
          </div>
          <div class="input-group">
            <label for="codBanco">Código do Banco</label>
            <input type="text" id="codBanco" class="modal-input" placeholder="Ex: 001" />
          </div>
          <div class="input-group">
            <label for="agencia">Agência</label>
            <input type="text" id="agencia" class="modal-input" placeholder="Ex: 1234-5" />
          </div>
          <div class="input-group">
            <label for="conta">Conta</label>
            <input type="text" id="conta" class="modal-input" placeholder="Ex: 98765-4" />
          </div>
          <!-- Botão de Salvar, se houver -->
          <button class="save-button">Salvar Banco</button>
        </div>
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
/* Estilos para o fundo cinza (backdrop) que cobre apenas a área do conteúdo principal */
.modal-backdrop {
  position: absolute; /* Posicionado em relação ao pai mais próximo com position: relative */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3); /* Fundo cinza escuro, opacidade 30% */
  display: flex; /* Para centralizar o modal filho */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  z-index: 1000; /* Garante que fique acima de todos os outros elementos no seu contexto */
  transition: opacity 0.3s ease; /* Transição suave para o backdrop */
  /* Removido width e height fixos aqui, pois top/left/right/bottom o preenchem */
}

/* Estilos para o container principal do modal (a caixa branca com o formulário) */
.container-principal {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  width: 90%; /* Responsivo: 90% da largura do pai */
  max-width: 624px; /* Largura máxima definida no seu código anterior */
  min-height: 504px; /* Altura mínima similar ao seu código anterior */
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease-out forwards; /* Animação de entrada */
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
  flex-grow: 1; /* Permite que o conteúdo ocupe o espaço disponível */
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Espaçamento entre os grupos de input */
}

.titulo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; /* Espaçamento abaixo do título */
}

.titulo h1 {
  font-size: 1.8rem;
  color: #333;
}

.icon-button {
  background-color: #007bff; /* Cor de fundo para o botão de fechar */
  border: none;
  border-radius: 50%; /* Torna o botão redondo */
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.icon-button:hover {
  background-color: #0056b3;
}

.container-itens {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaçamento entre os grupos de input */
  flex-grow: 1; /* Faz com que o container-itens preencha o espaço vertical restante */
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-weight: 500;
  color: #555;
  font-size: 0.95rem;
}

.modal-input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px; /* Cantos arredondados para inputs */
  font-size: 1rem;
  box-sizing: border-box; /* Inclui padding e borda na largura total */
}

.modal-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

.save-button {
  background-color: #28a745; /* Cor verde para o botão salvar */
  color: white;
  padding: 0.9rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: auto; /* Empurra o botão para o final do container-itens */
  transition: background-color 0.2s ease, transform 0.2s ease;
  align-self: flex-end; /* Alinha o botão à direita */
}

.save-button:hover {
  background-color: #218838;
  transform: translateY(-2px);
}
</style>
