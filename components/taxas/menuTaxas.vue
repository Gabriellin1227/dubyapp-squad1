<template>
    <div class="container-geral">
        <div class="container-conteudo1">
            <div class="titulo">
                <h1>Gestão de Taxas</h1>
            </div>
            <div class="botoes">
                <div class="button1">
                    <button>
                        Exportar
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 7.5H7C6.60218 7.5 6.22064 7.65804 5.93934 7.93934C5.65804 8.22064 5.5 8.60218 5.5 9V17C5.5 17.3978 5.65804 17.7794 5.93934 18.0607C6.22064 18.342 6.60218 18.5 7 18.5H15C15.3978 18.5 15.7794 18.342 16.0607 18.0607C16.342 17.7794 16.5 17.3978 16.5 17V12"
                                stroke="#12283F" stroke-linecap="round" />
                            <path d="M12.5 11.5L18.864 5.136M14.5 4.5H19.5V9.5" stroke="#12283F" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="button2">
                    <button>
                        Imprimir
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 7.5H7C6.60218 7.5 6.22064 7.65804 5.93934 7.93934C5.65804 8.22064 5.5 8.60218 5.5 9V17C5.5 17.3978 5.65804 17.7794 5.93934 18.0607C6.22064 18.342 6.60218 18.5 7 18.5H15C15.3978 18.5 15.7794 18.342 16.0607 18.0607C16.342 17.7794 16.5 17.3978 16.5 17V12"
                                stroke="#12283F" stroke-linecap="round" />
                            <path d="M12.5 11.5L18.864 5.136M14.5 4.5H19.5V9.5" stroke="#12283F" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="button3">
                    <button>
                        Edição Manual
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.2734 6.9829L17.0168 8.7263M16.3943 5.44703L11.6779 10.1633C11.4335 10.4062 11.2672 10.7164 11.2003 11.0544L10.7646 13.2351L12.9453 12.7986C13.283 12.7311 13.5926 12.5656 13.8364 12.3218L18.5527 7.60549C18.6944 7.46376 18.8069 7.29551 18.8836 7.11033C18.9603 6.92516 18.9997 6.72669 18.9997 6.52626C18.9997 6.32583 18.9603 6.12736 18.8836 5.94218C18.8069 5.75701 18.6944 5.58876 18.5527 5.44703C18.411 5.3053 18.2427 5.19288 18.0576 5.11618C17.8724 5.03948 17.6739 5 17.4735 5C17.2731 5 17.0746 5.03948 16.8894 5.11618C16.7042 5.19288 16.536 5.3053 16.3943 5.44703Z"
                                stroke="#12283F" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M17.3529 14.8822V17.3528C17.3529 17.7896 17.1793 18.2085 16.8704 18.5174C16.5616 18.8263 16.1426 18.9998 15.7058 18.9998H6.64705C6.21022 18.9998 5.79129 18.8263 5.48241 18.5174C5.17353 18.2085 5 17.7896 5 17.3528V8.29402C5 7.8572 5.17353 7.43826 5.48241 7.12938C5.79129 6.8205 6.21022 6.64697 6.64705 6.64697H9.11762"
                                stroke="#12283F" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="button4">
                    <button>
                        Edição em massa
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.2734 6.9829L17.0168 8.7263M16.3943 5.44703L11.6779 10.1633C11.4335 10.4062 11.2672 10.7164 11.2003 11.0544L10.7646 13.2351L12.9453 12.7986C13.283 12.7311 13.5926 12.5656 13.8364 12.3218L18.5527 7.60549C18.6944 7.46376 18.8069 7.29551 18.8836 7.11033C18.9603 6.92516 18.9997 6.72669 18.9997 6.52626C18.9997 6.32583 18.9603 6.12736 18.8836 5.94218C18.8069 5.75701 18.6944 5.58876 18.5527 5.44703C18.411 5.3053 18.2427 5.19288 18.0576 5.11618C17.8724 5.03948 17.6739 5 17.4735 5C17.2731 5 17.0746 5.03948 16.8894 5.11618C16.7042 5.19288 16.536 5.3053 16.3943 5.44703Z"
                                stroke="#12283F" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M17.3529 14.8822V17.3528C17.3529 17.7896 17.1793 18.2085 16.8704 18.5174C16.5616 18.8263 16.1426 18.9998 15.7058 18.9998H6.64705C6.21022 18.9998 5.79129 18.8263 5.48241 18.5174C5.17353 18.2085 5 17.7896 5 17.3528V8.29402C5 7.8572 5.17353 7.43826 5.48241 7.12938C5.79129 6.8205 6.21022 6.64697 6.64705 6.64697H9.11762"
                                stroke="#12283F" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="button5">
                    <button @click="abrirModal" class="botao-config">
                        Taxas
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1435_273)">
<path d="M17.475 5.40783L19.592 7.52483M18.836 3.54283L13.109 9.26983C12.8122 9.56467 12.6102 9.94144 12.529 10.3518L12 12.9998L14.648 12.4698C15.058 12.3878 15.434 12.1868 15.73 11.8908L21.457 6.16383C21.6291 5.99173 21.7656 5.78742 21.8588 5.56256C21.9519 5.33771 21.9998 5.09671 21.9998 4.85333C21.9998 4.60994 21.9519 4.36895 21.8588 4.14409C21.7656 3.91923 21.6291 3.71492 21.457 3.54283C21.2849 3.37073 21.0806 3.23421 20.8557 3.14108C20.6309 3.04794 20.3899 3 20.1465 3C19.9031 3 19.6621 3.04794 19.4373 3.14108C19.2124 3.23421 19.0081 3.37073 18.836 3.54283Z" stroke="#F6F6F6" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 15V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H7C6.46957 20 5.96086 19.7893 5.58579 19.4142C5.21071 19.0391 5 18.5304 5 18V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H10" stroke="#F6F6F6" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1435_273" x="-3" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1435_273"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1435_273" result="shape"/>
</filter>
</defs>
</svg>

                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['abrir-modal'])

const abrirModal = () => {
    emit('abrir-modal')
}
</script>

<style lang="scss" scoped>
.container-conteudo1 {
    display: flex;
    justify-content: space-between;
    color: #412884;
}

.titulo {
    width: 336px;
}

.titulo h1 {
    font-size: 40px;
    font-weight: 600;
}

.botoes {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.botoes button {
    border: none;
    font-size: 12px;
    font-weight: 400;
    padding: 8px;
}

.button1 {
    display: flex;
    justify-content: center;
    width: 97px;
    height: 40px;
    border: 1px solid #12283F1A;
    border-radius: 8px;
}

.button2 {
    display: flex;
    justify-content: center;
    width: 94px;
    height: 40px;
    border: 1px solid #12283F1A;
    border-radius: 8px;
}

.button3 {
    display: flex;
    justify-content: center;
    width: 131px;
    height: 40px;
    border: 1px solid #12283F1A;
    border-radius: 8px;
}

.button4 {
    display: flex;
    justify-content: center;
    width: 147px;
    height: 40px;
    border: 1px solid #12283F1A;
    border-radius: 8px;
}

.button5 {
    display: flex;
    justify-content: center;
    width: 80px;
    height: 40px;
}

.button5 svg {
    color: #fff;
}

.button5 button {
    background: #412884;
    color: #fff;
    border-radius: 8px;
}
</style>