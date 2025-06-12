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
            <div class="header-title">Cargo Cadastrado</div>
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
                    <div class="info-content">
                        <div class="info-title">Nome</div>
                        <div class="info-description">Analista Estagiário</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Qtd. de usuários</div>
                        <div class="info-description">3</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Data de criação</div>
                        <div class="info-description">01/04/2022</div>
                    </div>
                    <div class="info-content">
                        <div class="info-title">Permissões ativas</div>
                        <div class="info-description">7</div>
                    </div>
                </div>
            </div>
            <div class="infos-container">
                <div class="infos-title">Permissões do cargo</div>
                <div class="infos-content">
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Acessar o módulo de gestão de contas</div>
                            <div class="permission-description">
                                Permite que o usuário consiga visualizar o módulo de gestão de contas e o cadastro de adquirentes e bancos. Contudo, não garente que o mesmo possa editá-los.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Impotar arquivos</div>
                            <div class="permission-description">
                                Permite que o usuário consiga fazer importação de arquivos. Caso esteja desativada, ele apenas conseguirá fazer o uso de arquivos já importados.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Adicionar e excluir contas</div>
                            <div class="permission-description">
                                Permite que o usuário consiga excluir e realizar o cadastro de bancos e adquirentes no sistema.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Visualizar histórico de conciliação</div>
                            <div class="permission-description">
                                Permite que o usuário consiga visualizar o histórico de conciliações feitas no módulo de consultas.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Editar contas</div>
                            <div class="permission-description">
                                Permite que o usuário consiga editar as informações de bancos e adquirentes cadastrados.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Excluir conciliações</div>
                            <div class="permission-description">
                                Permite que o usuário consiga excluir conciliações no módulo de consultas.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Realizar conciliação</div>
                            <div class="permission-description">
                                Permite que o usuário consiga realizar conciliações no módulo de conciliação.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Editar itens de conciliação</div>
                            <div class="permission-description">
                                Permite que o usuário consiga realizar edições nos itens de cada transação na análise de conciliações.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Exportar/Imprimir resultado de conciliação</div>
                            <div class="permission-description">
                                Permite que o usuário exporte ou imprima os resultados das conciliações realizadas. Caso esteja desativada, os resultados poderão ser visualizar apenas no sistema.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Acessar taxas do adquirente</div>
                            <div class="permission-description">
                                Permite que o usuário consiga acessar a área de gestão de taxas, localizada no cadastro de cada adquirente.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Editar taxas</div>
                            <div class="permission-description">
                                Permite que o usuário consiga editar as taxas de cada adquirente na área de gestão de taxas.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="permission-content">
                        <div class="permission-text">
                            <div class="permission-title">Exportar/Imprimir taxas de adquirente</div>
                            <div class="permission-description">
                                Permite que o usuário exporte ou imprima os resultados das taxas de cada adquirente. Caso seja desativada, as taxas poderão ser visualizadas apenas no sistema.
                            </div>
                        </div>
                        <label class="toggle-switch permission">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <cadCargo v-if="showModal" @closeModal="closeModal">
        <template #title>Editar</template>
    </cadCargo>
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

        width: 100%;

        .infos-title {
            color: var(--texto);
            font-size: 20px;
        }

        .infos-content {
            display: flex;
            flex-flow: row wrap;
            gap: 32px;

            width: 100%;

            padding: 16px;

            border: 1px solid rgba(65, 40, 132, 0.2);
            border-radius: 10px;

            .info-content {
                display: flex;
                flex-direction: column;
                gap: 8px;

                flex: 1;

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

    .infos-container:nth-of-type(2) {
        .infos-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            
            height: calc(100vh - 451px);

            overflow: auto;
            scrollbar-width: thin;

            .permission-content {
                display: flex;
                justify-content: space-around;
                align-items: center;
                gap: 8px;

                width: 100%;

                .permission-text {
                    width: 85%;

                    text-align: justify;

                    .permission-title {
                        color: var(--texto);
                        font-size: 16px;
                    }

                    .permission-description {
                        color: rgba(18, 40, 64, 0.5);
                        font-size: 14px;
                    }
                }
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

.toggle-switch.permission {
    height: 24px;
    width: 64px;

    .slider::before {
        height: 16px;
        width: 16px;
    }

    input:checked + .slider::before {
        transform: translateX(40px);
    }
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