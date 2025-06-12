<script setup>
import { ref } from 'vue'

const isActive = ref(true)

const showModal = ref(false);

const handlerModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="header-title">Analista Cadastrado</div>
            <div class="header-actions">
                <label class="toggle-switch">
                    <input type="checkbox" v-model="isActive" />
                    <span class="slider"></span>
                </label>
                <div class="header-action" @click="handlerModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                            <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                            <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                        </g>
                    </svg>
                </div>
                <NuxtLink to="/gestaoUsuarios">
                    <div class="header-action">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7" />
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="main-container">
            <div class="infos-container">
                <div class="infos-title">Informações gerais</div>
                <div class="infos-content">
                    <img src="/public/assets/images/photo-pexels.jpg" alt="Foto do Analista">
                    <div class="credentials-container">
                        <div class="analyst-name">Jonathan Curvelo</div>
                        <div class="analyst-email">jonathancurvelo@gmail.com</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">CPF</div>
                        <div class="info-description">123.456.789-10</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Último acesso</div>
                        <div class="info-description">13:24</div>
                    </div>
                </div>
            </div>
            <div class="infos-container">
                <div class="infos-title">Informações de contato</div>
                <div class="infos-content">
                    <div class="info-content">
                        <div class="info-title">Telefone</div>
                        <div class="info-description">(12) 3 4567-8910</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Rede social</div>
                        <div class="info-description">@jonathancurvelo</div>
                    </div>
                </div>
            </div>
            <div class="infos-container">
                <div class="infos-title">Observações</div>
                <div class="infos-content">
                    Responsável pelas conciliações no setor de alimentícios.
                </div>
            </div>
        </div>
    </div>
    <cadAnalista v-if="showModal" @closeModal="closeModal">
        <template #title>Editar</template>
    </cadAnalista>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    height: 100%;
    width: 100%;
    max-width: 100%;

    margin: 0;
    padding: 16px;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    
    .header-title {
        color: var(--principal);
        font-size: var(--font-xxl);
        font-weight: 600;
        line-height: 64px;
    }

    .header-actions {
        display: flex;
        gap: 32px;

        .header-action {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 40px;
            width: 40px;

            background-color: var(--principal);

            border-radius: 10px;

            cursor: pointer;
        }
    }
}

.main-container {
    display: flex;
    flex-direction: column;
    gap: 24px;

    height: 100%;
    width: 100%;

    .infos-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;

        width: 100%;

        .infos-title {
            color: var(--texto);
            font-size: 20px;
        }

        .infos-content {
            flex: 1;
            width: 100%;

            padding: 16px;

            border: 1px solid rgba(65, 40, 132, 0.2);
            border-radius: 10px;

            .info-content {
                display: flex;
                flex-direction: column;
                gap: 8px;

                .info-title {
                    color: rgba(18, 40, 64, 0.5);
                    font-size: 14px;
                }

                .info-description {
                    color: var(--texto);
                }
            }
        }
    }

    .infos-container:nth-of-type(1) {
        img {
            height: 128px;
            width: 128px;

            border-radius: 10px;
        }

        .infos-content {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 32px;

            .credentials-container {
                display: flex;
                flex-direction: column;
                flex: 1;

                .analyst-name {
                    color: var(--texto);
                    font-size: 32px;
                    font-weight: 600;
                }

                .analyst-email {
                    color: rgba(18, 40, 64, 0.8);
                    font-size: 16px;
                }
            }

            .info-content {
                flex: 1;
            }
        }
    }

    .infos-container:nth-of-type(2) {
        .infos-content {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    }
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 112px;
  height: 40px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  background-color: #d1cfe0;
  transition: 0.4s;
  border-radius: 40px;
  width: 100%;
  height: 100%;
}

.slider::before {
  content: "";
  position: absolute;
  height: 32px;
  width: 32px;
  left: 4px;
  bottom: 4px;
  background-color: #F6F6F6;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #412884;
}

input:checked + .slider::before {
  transform: translateX(72px);
}
</style>