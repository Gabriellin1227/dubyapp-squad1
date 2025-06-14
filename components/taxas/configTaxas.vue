<template>
    <div class="modal-backdrop" @click="$emit('fechar')" v-if="etapa === 1">
        <div class="container-principal">
            <div class="container-conteudo" @click.stop>
                <div class="titulo">
                    <h1>Editar taxas</h1>
                    <p>Cadastre novas taxas e edite várias ao mesmo tempo.</p>
                </div>
                <div class="conteudo">
                    <div class="card" :class="{ ativo: cardSelecionado === 0, desativado: mostrarEditTaxas }"
                        @click="!mostrarEditTaxas && (cardSelecionado = 0)">

                        <div class="card-img">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 15H18.5C18.1024 15.0008 17.7213 15.1591 17.4402 15.4402C17.1591 15.7213 17.0008 16.1024 17 16.5C17.0008 16.8976 17.1591 17.2787 17.4402 17.5598C17.7213 17.8409 18.1024 17.9992 18.5 18H19.5C19.8976 18.0008 20.2787 18.1591 20.5598 18.4402C20.8409 18.7213 20.9992 19.1024 21 19.5C20.9992 19.8976 20.8409 20.2787 20.5598 20.5598C20.2787 20.8409 19.8976 20.9992 19.5 21H17M19 21V22M19 14V15M13 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8M20 10.12V9C20 8.46957 19.7893 7.96086 19.4142 7.58579C19.0391 7.21071 18.5304 7 18 7H16"
                                    stroke="#412884" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16 10V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V10M16 10H8M16 10H17M8 10H7M8 14V14.01M8 17V17.01M12 13.99V14M12 17V17.01"
                                    stroke="#412884" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div class="card-texto">
                            <h6>Editar taxas</h6>
                            <p>Cadastre novas taxas e edite várias ao mesmo tempo.</p>
                        </div>
                    </div>
                    <div class="card" :class="{ ativo: cardSelecionado === 1, desativado: mostrarEditTaxas }"
                        @click="!mostrarEditTaxas && (cardSelecionado = 1)">

                        <div class="card-img">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.00007 14.7856V17.357M12.2144 13.4999V16.0713M5.78578 13.4999V16.0713M10.3681 4.35715C10.2948 4.14773 10.1581 3.96634 9.97702 3.83822C9.7959 3.7101 9.57935 3.64161 9.3575 3.64229H8.52821C8.29302 3.64312 8.06638 3.73058 7.89159 3.88794C7.7168 4.0453 7.60611 4.26154 7.58066 4.49535C7.55521 4.72916 7.61679 4.96415 7.75363 5.15543C7.89048 5.34671 8.093 5.48087 8.3225 5.53229L9.58636 5.81C9.84371 5.86739 10.0709 6.01759 10.2245 6.23189C10.3781 6.4462 10.4474 6.70958 10.4191 6.97173C10.3907 7.23388 10.2668 7.4764 10.071 7.65297C9.87518 7.82953 9.62117 7.92775 9.3575 7.92886H8.64264C8.42079 7.92954 8.20424 7.86105 8.02312 7.73293C7.84199 7.60481 7.70531 7.42342 7.63207 7.214M9.00007 3.64229V2.57129M9.00007 8.99986V7.92886M3.53578 6.107C3.45054 6.107 3.36878 6.07314 3.3085 6.01286C3.24822 5.95258 3.21436 5.87082 3.21436 5.78558C3.21436 5.70033 3.24822 5.61857 3.3085 5.55829C3.36878 5.49801 3.45054 5.46415 3.53578 5.46415C3.62103 5.46415 3.70279 5.49801 3.76307 5.55829C3.82335 5.61857 3.85721 5.70033 3.85721 5.78558C3.85721 5.87082 3.82335 5.95258 3.76307 6.01286C3.70279 6.07314 3.62103 6.107 3.53578 6.107ZM14.4644 6.107C14.3791 6.107 14.2974 6.07314 14.2371 6.01286C14.1768 5.95258 14.1429 5.87082 14.1429 5.78558C14.1429 5.70033 14.1768 5.61857 14.2371 5.55829C14.2974 5.49801 14.3791 5.46415 14.4644 5.46415C14.5496 5.46415 14.6314 5.49801 14.6916 5.55829C14.7519 5.61857 14.7858 5.70033 14.7858 5.78558C14.7858 5.87082 14.7519 5.95258 14.6916 6.01286C14.6314 6.07314 14.5496 6.107 14.4644 6.107Z"
                                    stroke="#412884" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16.0716 0.642578H1.92878C1.58779 0.642578 1.26076 0.778037 1.01964 1.01916C0.778525 1.26027 0.643066 1.5873 0.643066 1.92829V9.64258C0.643066 9.98357 0.778525 10.3106 1.01964 10.5517C1.26076 10.7928 1.58779 10.9283 1.92878 10.9283H16.0716C16.4126 10.9283 16.7397 10.7928 16.9808 10.5517C17.2219 10.3106 17.3574 9.98357 17.3574 9.64258V1.92829C17.3574 1.5873 17.2219 1.26027 16.9808 1.01916C16.7397 0.778037 16.4126 0.642578 16.0716 0.642578Z"
                                    stroke="#412884" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </div>
                        <div class="card-texto">
                            <h6>Antecipação</h6>
                            <p>Cadastre e edite em massa taxas de antecipação.</p>
                        </div>
                    </div>
                    <div class="card" :class="{ ativo: cardSelecionado === 2, desativado: mostrarEditTaxas }"
                        @click="!mostrarEditTaxas && (cardSelecionado = 2)">

                        <div class="card-img">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.117 12.539C4.335 12.539 4.51767 12.465 4.665 12.317C4.81167 12.1697 4.885 11.9867 4.885 11.768C4.885 11.5493 4.811 11.3667 4.663 11.22C4.515 11.0733 4.332 11 4.114 11C3.896 11 3.71333 11.074 3.566 11.222C3.41867 11.37 3.34533 11.553 3.346 11.771C3.34667 11.989 3.42067 12.1713 3.568 12.318C3.71533 12.4647 3.89833 12.539 4.117 12.539ZM4.117 8.769C4.335 8.769 4.51767 8.69533 4.665 8.548C4.81167 8.4 4.885 8.21667 4.885 7.998C4.885 7.77933 4.811 7.597 4.663 7.451C4.515 7.305 4.332 7.23167 4.114 7.231C3.896 7.23033 3.71333 7.304 3.566 7.452C3.41867 7.6 3.34533 7.78333 3.346 8.002C3.34667 8.22067 3.42067 8.403 3.568 8.549C3.71533 8.695 3.89833 8.76833 4.117 8.769ZM4.117 5C4.335 5 4.51767 4.92633 4.665 4.779C4.81167 4.631 4.885 4.44767 4.885 4.229C4.885 4.01033 4.811 3.828 4.663 3.682C4.515 3.536 4.332 3.46267 4.114 3.462C3.896 3.46133 3.71333 3.535 3.566 3.683C3.41933 3.831 3.346 4.014 3.346 4.232C3.346 4.45 3.42 4.63267 3.568 4.78C3.716 4.92733 3.899 5.00067 4.117 5ZM7.192 12.27H12.577V11.27H7.192V12.27ZM7.192 8.5H12.577V7.5H7.192V8.5ZM7.192 4.73H12.577V3.73H7.192V4.73ZM1.616 16C1.15533 16 0.771 15.846 0.463 15.538C0.155 15.23 0.000666667 14.8453 0 14.384V1.616C0 1.15533 0.154333 0.771 0.463 0.463C0.771667 0.155 1.156 0.000666667 1.616 0H14.385C14.845 0 15.2293 0.154333 15.538 0.463C15.8467 0.771667 16.0007 1.156 16 1.616V14.385C16 14.845 15.846 15.2293 15.538 15.538C15.23 15.8467 14.8453 16.0007 14.384 16H1.616ZM1.616 15H14.385C14.5383 15 14.6793 14.936 14.808 14.808C14.9367 14.68 15.0007 14.5387 15 14.384V1.616C15 1.462 14.936 1.32067 14.808 1.192C14.68 1.06333 14.5387 0.999333 14.384 1H1.616C1.462 1 1.32067 1.064 1.192 1.192C1.06333 1.32 0.999333 1.46133 1 1.616V14.385C1 14.5383 1.064 14.6793 1.192 14.808C1.32 14.9367 1.461 15.0007 1.615 15"
                                    fill="#412884" />
                            </svg>


                        </div>
                        <div class="card-texto">
                            <h6>Taxas cadastradas</h6>
                            <p>Última atualização, vigência e exclusão.</p>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button class="save-button2" @click="$emit('fechar')">Voltar</button>
                    <button class="save-button" @click="mostrarEditTaxas = true">Próximo</button>
                </div>
            </div>
        </div>
    </div>

    <EditTaxas v-if="mostrarEditTaxas" @fechar="mostrarEditTaxas = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Corrigido aqui
import EditTaxas from './editTaxas.vue'

// Emitir eventos
const emit = defineEmits(['fechar', 'atualizarLista'])

const etapa = ref(1)
const cardSelecionado = ref<number | null>(null)
const router = useRouter()

function selecionarCard(index: number) {
    cardSelecionado.value = index
}

const mostrarEditTaxas = ref(false)

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
    width: 624px;
    height: 432px;
    display: flex;
    flex-direction: column;
    animation: slideIn 0.3s ease-out forwards;
}

.conteudo {
    display: flex;
    gap: 24px;
}

.card {
    display: flex;
    align-items: center;
    width: 160px;
    border: 1px solid #41288426;
    padding: 24px 8px;
    gap: 16px;
}

.card.ativo {
    border: 1px solid #412884;
    border-radius: 8px;
}

.card-img {
    display: flex;
    justify-content: center;
    border: 1px solid #4128841A;
    border-radius: 20px;
    padding: 8px;
    width: 40px;
}

.card-texto h6 {
    color: #412884;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
}

.card-texto p {
    color: rgba(18, 40, 63, 0.60);
    text-align: center;
    font-size: 10px;
    font-weight: 400;
    margin: 0;
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
