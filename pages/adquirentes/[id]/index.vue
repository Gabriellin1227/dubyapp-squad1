<template>
    <div class="container-principal">
        <div class="tab-principal">
            <div class="titulo-banco">
                <h1>{{ adquirente?.razao_social }}</h1>
            </div>
            <div class="menu-interativo">
                <statusToggle v-if="adquirente?.id && adquirente?.status" :id="adquirente.id"
                    :status-inicial="adquirente.status" tipo="adquirente" />
                <button class="icon-button">
                    <svg width="24" height="24" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1162_128)">
                            <path
                                d="M17.475 5.40783L19.592 7.52483M18.836 3.54283L13.109 9.26983C12.8122 9.56467 12.6102 9.94144 12.529 10.3518L12 12.9998L14.648 12.4698C15.058 12.3878 15.434 12.1868 15.73 11.8908L21.457 6.16383C21.6291 5.99173 21.7656 5.78742 21.8588 5.56256C21.9519 5.33771 21.9998 5.09671 21.9998 4.85333C21.9998 4.60994 21.9519 4.36895 21.8588 4.14409C21.7656 3.91923 21.6291 3.71492 21.457 3.54283C21.2849 3.37073 21.0806 3.23421 20.8557 3.14108C20.6309 3.04794 20.3899 3 20.1465 3C19.9031 3 19.6621 3.04794 19.4373 3.14108C19.2124 3.23421 19.0081 3.37073 18.836 3.54283Z"
                                stroke="#F6F6F6" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M20 15V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H7C6.46957 20 5.96086 19.7893 5.58579 19.4142C5.21071 19.0391 5 18.5304 5 18V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H10"
                                stroke="#F6F6F6" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1162_128" x="-3" y="0" width="32" height="32"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1162_128" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1162_128"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>

                <button class="icon-button" @click="voltar">
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
        </div>
        <div class="todo-conteudo">
        <div class="info-banco">
            <div class="titulo">
                <p>Informações do adquirente</p>
            </div>
            <div class="container-banco">
                <div class="img-banco">
                    <img :src="adquirente?.logo_url" alt="Logo" />
                </div>
                <div class="nome-banco">
                    <h6>{{ adquirente?.nome }}</h6>
                    <p>{{ adquirente?.razao_social }}</p>
                </div>
                <div class="cnpj-banco">
                    <h6>Conta de Repasse</h6>
                    <p>{{ adquirente?.conta_transferencia }}</p>
                </div>
                <div class="cod-banco">
                    <h6>CNPJ</h6>
                    <p>{{ adquirente?.cnpj }}</p>
                </div>
            </div>
        </div>

        <div class="info-empresa">
            <div class="titulo">
                <p>Alerta de renovação de taxas</p>
                <button  @click="toGestaoTaxas">
                    Gestão de taxas
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8.33301L8 4.33301" stroke="#F6F6F6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.33333 4.99967C4.51743 4.99967 4.66667 4.85044 4.66667 4.66634C4.66667 4.48225 4.51743 4.33301 4.33333 4.33301C4.14924 4.33301 4 4.48225 4 4.66634C4 4.85044 4.14924 4.99967 4.33333 4.99967Z" fill="#F6F6F6" stroke="#F6F6F6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.66634 8.33366C7.85044 8.33366 7.99967 8.18442 7.99967 8.00033C7.99967 7.81623 7.85044 7.66699 7.66634 7.66699C7.48225 7.66699 7.33301 7.81623 7.33301 8.00033C7.33301 8.18442 7.48225 8.33366 7.66634 8.33366Z" fill="#F6F6F6" stroke="#F6F6F6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.33301 13V2.33333C1.33301 1.97971 1.47348 1.64057 1.72353 1.39052C1.97358 1.14048 2.31272 1 2.66634 1H9.33301C9.68663 1 10.0258 1.14048 10.2758 1.39052C10.5259 1.64057 10.6663 1.97971 10.6663 2.33333V13L8.66634 11.6667L7.33301 13L5.99967 11.6667L4.66634 13L3.33301 11.6667L1.33301 13Z" stroke="#F6F6F6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="container-empresa">
                <div class="agencia-banco">
                    <p>Agência</p>
                    <p>{{ adquirente?.cnpj }}</p>
                </div>
                <div class="cc-banco">
                    <p>Conta Corrente</p>
                    <p>{{ adquirente?.conta_transferencia }}</p>
                </div>
            </div>
        </div>

        <div class="info-obs">
            <div class="titulo">
                <p>Observações</p>
            </div>
            <div class="container-obs">
                <div class="obs-banco">
                    <p>{{ adquirente?.observacoes }}</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import StatusToggle from '~/components/banco-adquirente/statusToggle.vue';
import { getAdquirentesById, type Adquirentes } from '~/services/adquirentesService'; // atenção: singular

const route = useRoute();
const router = useRouter();
const adquirente = ref<Adquirentes | null>(null);
const id = Number(route.params.id);

const fetchAdquirente = async () => {
    const id = Number(route.params.id);
    if (isNaN(id)) {
        console.error("ID inválido na rota:", route.params.id);
        return;
    }
    try {
        const resultado = await getAdquirentesById(id);
        adquirente.value = Array.isArray(resultado) ? resultado[0] : resultado;
        console.log("Adquirente carregado:", adquirente.value);
    } catch (error) {
        console.error("Erro ao buscar adquirente:", error);
    }
};

function toGestaoTaxas() {
    console.log("Navegando para gestão de taxas");
    console.log("ID a navegar:", id)
  router.push(`/adquirentes/${id}/gestaoTaxas`)
}

console.log(fetchAdquirente)
onMounted(() => {
    fetchAdquirente();
});

const voltar = () => {
    router.back();
}
</script>


<style scoped>
.container-principal {
    padding: 16px;
}

.tab-principal {
    display: flex;
    margin: 0 0 40px;
    justify-content: space-between;
}

.container-banco {
    display: flex;
    width: 1104px;
    height: 160px;
    padding: 0 16px;
    border: 1px #41288433 solid;
    border-radius: 10px;
    gap: 16px;
}

.menu-interativo {
    display: flex;
    align-items: center;
    gap: 32px;
}

.todo-conteudo {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.icon-button {
    background-color: #412884;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 10px;
}

.info-empresa {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.titulo {
    display: flex;
    justify-content: space-between;
}

.titulo button {
    border: none;
    border-radius: 5px;
    padding: 8px;
    background-color: #412884;
    color: #fff;
    font-size: 12px;
}

.titulo p {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    gap: auto;
}

.img-banco {
    display: flex;
    align-items: center;
}

.img-banco img {
    display: flex;
    width: 128px;
    border: 1px #41288433 solid;
    border-radius: 10px;
}

.nome-banco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 208px;
    gap: 8px;
}

.nome-banco h6 {
    font-size: 32px;
    font-weight: 600;
    color: #12283F;
}

.nome-banco p {
    color: #12283FE5;
    font-weight: 400;
}

.cnpj-banco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 308px;
    gap: 8px;
}

.cnpj-banco h6,
.cod-banco h6 {
    color: #12283F80;
    font-weight: 400;
}

.cod-banco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 308px;
    gap: 8px;
}

.titulo-banco {
    display: flex;
    height: 48px;
}

.titulo-banco h1 {
    color: #412884;
    font-weight: 600;
    font-size: var(--font-xxl);
}

.container-empresa {
    display: flex;
    flex-direction: column;
    width: 1104px;
    height: 256px;
    padding: 16px;
    border: 1px #41288433 solid;
    border-radius: 10px;
    gap: 24px;
}

.agencia-banco {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.cc-banco {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.agencia-banco p,
.cc-banco p {
    margin: 0;
}

.container-obs {
    display: flex;
    flex-direction: column;
    width: 1104px;
    height: 92px;
    padding: 16px;
    border: 1px #41288433 solid;
    border-radius: 10px;
}

.obs-banco p {
    margin: 0;
    font-size: var(--font-snd);
}
</style>
