<script setup>
import { useAuth } from '@/stores/useAuth';

const auth = useAuth();

defineProps({
    isOpen: Boolean
});
</script>

<template>
    <div v-show="isOpen" id="notification-dropdown" class="show" @click.stop>
        <div class="notification-container">
            <div class="header-notification">
                <div class="notification-header-title">
                    Notificações
                </div>
                <div class="notification-header-actions">
                    <div class="unread-notification-action">
                        <div class="title-notification-action">
                            Apenas não lidas
                        </div>
                        <label class="switch">
                            <input type="checkbox" id="toggle-nao-lidas">
                            <span class="slider round"></span>
                        </label>
                        <span class="ion--ellipsis-vertical"></span>
                    </div>
                </div>
            </div>
            <hr>
            <div class="notification-content" tabindex="-1">
                <div v-if="auth.userRole === 'gestor'" class="notification-period-content">
                    <div class="notification-period-content-title">Hoje</div>
                    <div class="notification-box">
                        <div class="notification-info">
                            <div class="notification-title">
                                Gabriel da Costa Lin realizou uma nova conciliação <span class="notification-time">há 4 horas</span>
                            </div>
                            <div class="notification-relation-items">
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                        <path fill="#412884" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z" />
                                    </svg>
                                    Santander
                                </div>
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512">
                                        <path fill="#412884" d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56" />
                                    </svg>
                                    Stone
                                </div>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box">
                        <div class="notification-info">
                            <div class="notification-title">
                                Abraão Andrade Reis realizou uma nova conciliação <span class="notification-time">há 12 horas</span>
                            </div>
                            <div class="notification-relation-items">
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                        <path fill="#412884" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z" />
                                    </svg>
                                    Bradesco
                                </div>
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512">
                                        <path fill="#412884" d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56" />
                                    </svg>
                                    Sumup
                                </div>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                </div>
                <div v-if="auth.userRole === 'admin'" class="notification-period-content">
                    <div class="notification-period-content-title">Hoje</div>
                    <div class="notification-box">
                        <div class="notification-info">
                            <div class="notification-title">
                                Gabriel da Costa Lin cadastrou um novo cliente <span class="notification-time">há 4 horas</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box">
                        <div class="notification-info">
                            <div class="notification-title">
                                Abraão Andrade Reis exportou um relatório do dashboard <span class="notification-time">há 8 horas</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box">
                        <div class="notification-info">
                            <div class="notification-title">
                                Gabriel da Costa Lin cadastrou um novo cliente <span class="notification-time">há 10 horas</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box">
                        <div class="notification-info">
                            <div class="notification-title">
                                Abraão Andrade Reis exportou um relatório do dashboard <span class="notification-time">há 12 horas</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box">
                        <div class="notification-info">
                            <div class="notification-title">
                                Gabriel da Costa Lin cadastrou um novo cliente <span class="notification-time">há 13 horas</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                </div>
                <div v-if="auth.userRole === 'gestor'" class="notification-period-content">
                    <div class="notification-period-content-title">Ontem</div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Gabriel da Costa Lin realizou uma nova conciliação <span class="notification-time">há 18 horas</span>
                            </div>
                            <div class="notification-relation-items">
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                        <path fill="#412884" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z" />
                                    </svg>
                                    Santander
                                </div>
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512">
                                        <path fill="#412884" d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56" />
                                    </svg>
                                    Sumup
                                </div>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Levi Fabrício de Melo Pereira cadastrou um novo banco <span class="notification-time">há 19 horas</span>
                            </div>
                            <div class="notification-relation-items">
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                        <path fill="#412884" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z" />
                                    </svg>
                                    Bradesco
                                </div>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                </div>
                <div v-if="auth.userRole === 'admin'" class="notification-period-content">
                    <div class="notification-period-content-title">Ontem</div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Gabriel da Costa Lin exportou o relatório de vendas <span class="notification-time">há 18 horas</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Levi Fabrício de Melo Pereira removeu um cliente <span class="notification-time">há 19 horas</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                </div>
                <div v-if="auth.userRole === 'gestor'" class="notification-period-content">
                    <div class="notification-period-content-title">Mais antigas</div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Abraão Andrade Reis atualizou as taxas de conciliação <span class="notification-time">há 2 dias</span>
                            </div>
                            <div class="notification-relation-items">
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512">
                                        <path fill="#412884" d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56" />
                                    </svg>
                                    Sumup
                                </div>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Júlio César Conceição Gonzaga cadastrou um novo banco <span class="notification-time">há 3 dias</span>
                            </div>
                            <div class="notification-relation-items">
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                        <path fill="#412884" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z" />
                                    </svg>
                                    Itaú
                                </div>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Gabriel da Costa Lin realizou uma nova conciliação <span class="notification-time">há 4 dias</span>
                            </div>
                            <div class="notification-relation-items">
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                        <path fill="#412884" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z" />
                                    </svg>
                                    Santander
                                </div>
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512">
                                        <path fill="#412884" d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56" />
                                    </svg>
                                    Sumup
                                </div>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Levi Fabrício de Melo Pereira cadastrou um novo banco <span class="notification-time">há 7 dias</span>
                            </div>
                            <div class="notification-relation-items">
                                <div class="notification-relation-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                        <path fill="#412884" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z" />
                                    </svg>
                                    Banese
                                </div>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                </div>
                <div v-if="auth.userRole === 'admin'" class="notification-period-content">
                    <div class="notification-period-content-title">Mais antigas</div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Abraão Andrade Reis editou o cadastro de um cliente <span class="notification-time">há 2 dias</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Júlio César Conceição Gonzaga cadastrou um novo cliente <span class="notification-time">há 3 dias</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Gabriel da Costa Lin deu baixa em um pagamento <span class="notification-time">há 4 dias</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Levi Fabrício de Melo Pereira desfez um pagamento <span class="notification-time">há 7 dias</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                    <div class="notification-box notification-read">
                        <div class="notification-info">
                            <div class="notification-title">
                                Abraão Andrade Reis exportou o relatório de vendas <span class="notification-time">há 8 dias</span>
                            </div>
                        </div>
                        <div class="notification-view-status"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#notification-dropdown {
    display: none;
    position: absolute;
    top: 80px;
    right: 224px;

    height: 672px;
    width: 528px;

    padding: 32px 24px;

    color: var(--texto);

    background-color: #FFFFFF;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    z-index: 1000;
    overflow: hidden;

    .notification-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);

        height: 100%;
        width: 100%;

        .header-notification {
            display: flex;
            justify-content: space-between;

            height: 40px;
            width: 100%;

            .notification-header-title {
                height: 100%;
                width: 176px;

                color: var(--texto);
                font-size: 28px;
                font-weight: 500;
            }

            .notification-header-actions {
                display: flex;
                justify-content: space-between;
                align-items: center;

                height: 100%;
                width: 152px;

                .unread-notification-action {
                    width: 100%;
                    
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--spacing-ssm);

                    .title-notification-action {
                        width: 100%;
                        
                        color: var(--texto);
                        font-size: var(--font-snd);
                        font-weight: 400;
                    }

                    .switch {
                        position: relative;
                        display: inline-block;
                        width: 32px;
                        height: 16px;
                        
                        input {
                            opacity: 0;
                            width: 0;
                            height: 0;
                        }
                    }
                        
                        
                    .slider {
                        width: 32px;

                        position: absolute;
                        cursor: pointer;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: #e0e0e0;
                        transition: .4s;
                        border-radius: 16px;
                    }
                        
                    .slider:before {
                        position: absolute;
                        content: "";
                        height: 12px;
                        width: 12px;
                        left: 2px;
                        bottom: 2px;
                        background-color: white;
                        transition: .4s;
                        border-radius: 50%;
                    }
                        
                    input:checked + .slider {
                        background-color: #12283F;
                    }
                    
                    input:checked + .slider:before {
                        transform: translateX(16px);
                    }
                }

                .menu-dropdown-notification {
                    display: flex;
                    align-items: center;

                    cursor: pointer;
                }
            }
        }
        
        hr {
            margin: 0;
            border: 1px solid rgb(18, 40, 63, 0.15);
        }

        .notification-content {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-xl);

            width: 100%;

            overflow: auto;
            scrollbar-width: none;

            .notification-period-content {
                display: flex;
                flex-direction: column;
                gap: var(--spacing-md);

                width: 100%;

                .notification-period-content-title {
                    display: flex;
                    align-items: center;

                    height: 16px;

                    color: rgb(18, 40, 63, 0.5);
                    font-size: 12px;
                    font-weight: 600;
                }

                .notification-box {
                    display: flex;
                    gap: var(--spacing-sm);

                    width: 100%;

                    cursor: pointer;

                    .notification-info {
                        display: flex;
                        flex-direction: column;
                        gap: var(--spacing-sm);

                        width: 100%;

                        .notification-title {
                            display: flex;
                            align-items: center;
                            gap: var(--spacing-sm);

                            height: 16px;
                            width: 100%;

                            color: var(--texto);
                            font-size: 12px;
                            font-weight: 600;

                            .notification-time {
                                color: rgb(18, 40, 63, 0.5);
                                font-weight: 400;
                            }
                        }
                        .notification-relation-items {
                            display: flex;
                            flex-direction: column;
                            gap: var(--spacing-sm);

                            width: 100%;

                            .notification-relation-item {
                                display: flex;
                                align-items: center;
                                gap: var(--spacing-sm);

                                height: 16px;
                                width: 100%;

                                color: var(--texto);
                                font-size: 12px;
                                font-weight: 400;
                            }
                        }
                    }
                    .notification-view-status {
                        align-self: flex-start;
                        height: 8px;
                        width: 8px;

                        background-color: var(--principal);

                        border-radius: 50%;
                    }
                }

                .notification-read {
                    .notification-info {
                        opacity: 50%;
                    }
                    .notification-view-status {
                        background-color: rgb(18, 40, 63, 0.2);
                    }
                }
            }
        }
    }
}

#notification-dropdown.show {
    display: block;
}
</style>