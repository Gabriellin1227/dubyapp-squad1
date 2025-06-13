<script setup>
import { ref } from 'vue'

const isActive = ref(true);
const showModal = ref(false);
const stepPage = ref(1);

const handlerModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

const nextStep = () => {
    if (stepPage.value < 3) stepPage.value++;
};

const backStep = () => {
    if (stepPage.value > 1) stepPage.value--;
};

const goToStep = (n) => {
    stepPage.value = n;
};
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="header-title">Cliente Cadastrado</div>
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
                <NuxtLink to="/gestaoClientes">
                    <div class="header-action">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7" />
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div v-if="stepPage === 1" class="main-container">
            <div class="infos-container">
                <div class="infos-title">Perfil do cliente</div>
                <div class="infos-content">
                    <img src="/public/assets/images/logo-nexora.png" alt="Logo da empresa">
                    <div class="credentials-container">
                        <div class="analyst-name">Nexora</div>
                        <div class="analyst-email">NEX00001</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Situação</div>
                        <div class="info-description"><div class="status-tag">Inadimplente</div></div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Última conciliação</div>
                        <div class="info-description">13:24</div>
                    </div>
                </div>
            </div>
            <div class="infos-container">
                <div class="infos-title">Informações da empresa</div>
                <div class="infos-content wrap-2">
                    <div class="info-content">
                        <div class="info-title">Nome fantasia</div>
                        <div class="info-description">Nexora</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Área</div>
                        <div class="info-description">Logística</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Razão social</div>
                        <div class="info-description">NEXORA DISTRIBUIÇÃO E LOGÍSTICA LTDA.</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">E-mail</div>
                        <div class="info-description">adm@nexora.com.br</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">CNPJ</div>
                        <div class="info-description">00.000.000/0000-00</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Telefone</div>
                        <div class="info-description">(00) 0 0000-0000</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="stepPage === 2" class="main-container">
            <div class="infos-container">
                <div class="infos-title">Observações</div>
                <div class="infos-content">
                    A empresa possui uma reunião semanal com a equipe financeira da Duby, responsável por avaliar as tomadas de decisões e seus impactos na receita. Em caso de falha no contato através do e-mail ou telefone, entrar em contato através do número (00) 0 0000-0000.
                </div>
            </div>
            <div class="infos-container">
                <div class="infos-title">Informações de cobrança</div>
                <div class="infos-content wrap-2">
                    <div class="info-content">
                        <div class="info-title">Plano contratado</div>
                        <div class="info-description">Comum</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Dia do vencimento</div>
                        <div class="info-description">3</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Valor mensal</div>
                        <div class="info-description">R$ 59,90</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Forma de pagamento</div>
                        <div class="info-description">Boleto bancário</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">E-mail de cobrança</div>
                        <div class="info-description">financeiro@nexora.com.br</div>
                    </div>
                </div>
                <button id="paymentsManager">Gestão de pagamentos</button>
            </div>
        </div>
        <div v-if="stepPage === 3" class="main-container">
            <div class="infos-container">
                <div class="infos-title">Informações do endereço</div>
                <div class="infos-content wrap-2">
                    <div class="info-content">
                        <div class="info-title">Rua/Avenida</div>
                        <div class="info-description">Avenida Tancredo Neves</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">CEP</div>
                        <div class="info-description">49048-530</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Complemento</div>
                        <div class="info-description">Sala 24</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Número</div>
                        <div class="info-description">000</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Cidade</div>
                        <div class="info-description">Aracaju</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Estado</div>
                        <div class="info-description">Sergipe</div>
                    </div>
                </div>
            </div>
            <div class="infos-container">
                <div class="infos-title">Informações do gestor</div>
                <div class="infos-content wrap-2">
                    <div class="info-content">
                        <div class="info-title">Nome completo</div>
                        <div class="info-description">Jonathan Curvelo Campos Azevedo</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">E-mail</div>
                        <div class="info-description">gestor@gmail.com</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">CPF</div>
                        <div class="info-description">000.000.000-00</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Telefone</div>
                        <div class="info-description">(79) 9 0000-0000</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination-toggle">
            <div
            class="pagination-button"
            :class="{ disabled: stepPage === 1 }"
            @click="stepPage !== 1 && backStep()"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                    <path fill="none" stroke="#412884" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 36L19 24l12-12" />
                </svg>
            </div>
            <div
            v-for="n in 3"
            :key="n"
            class="pagination-button"
            :class="{ active: stepPage === n }"
            @click="goToStep(n)"
            >
            {{ n }}
            </div>
            <div
            class="pagination-button"
            :class="{ disabled: stepPage === 3 }"
            @click="stepPage !== 3 && nextStep()"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                    <path fill="none" stroke="#412884" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m19 12l12 12l-12 12" />
                </svg>
            </div>
        </div>
    </div>
    <cadCliente v-if="showModal" @closeModal="closeModal">
        <template #title>Editar</template>
    </cadCliente>
</template>

<style scoped>
.pagination-toggle {
    display: flex;
    align-self: center;
    gap: 24px;

    height: 40px;
    width: 296px;

    .pagination-button {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 40px;
        width: 40px;

        color: var(--texto);
        font-size: 16px;

        border-radius: 5px;

        cursor: pointer;
        user-select: none;
    }

    .active {
        color: var(--background);
        background-color: var(--principal);
    }

    .pagination-button.disabled {
        opacity: 0.3;
        pointer-events: none;
    }

    .pagination-button:nth-of-type(2):hover, .pagination-button:nth-of-type(3):hover, .pagination-button:nth-of-type(4):hover {
        color: var(--background);
        background-color: rgba(65, 40, 132, 0.3);
    }
}

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

        width: 100%;

        button#paymentsManager {
            width: 212px;

            padding: 4px 16px;

            color: var(--background);

            background-color: var(--principal);

            border: 0;
            border-radius: 10px;
        }

        .infos-title {
            color: var(--texto);
            font-size: 20px;
        }

        .infos-content {
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

            .status-tag {
                color: var(--background);
                width: min-content;
                padding: 0 8px;
                background-color: #D43343;
                border-radius: 15px;
            }
        }
    }

    div.infos-content.wrap-2 {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }

    .infos-container:nth-of-type(1) {
        img {
            height: 128px;
            width: 128px;

            border: 1px solid rgba(65, 40, 132, 0.2);
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