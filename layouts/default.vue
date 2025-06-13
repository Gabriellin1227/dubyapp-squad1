<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '@/stores/useAuth';
import menuReduzido from '~/components/menuReduzido.vue';
import notificacoes from '~/components/notificacoes.vue';

const isMenuOpen = ref(false);
const isNotificationOpen = ref(false);
const route = useRoute();

onMounted(() => {
    document.body.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.body.removeEventListener('click', handleClickOutside);
});

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function toggleNotifications() {
    isNotificationOpen.value = !isNotificationOpen.value;
}

function handleClickOutside(event) {
    const menu = document.getElementById('menu-dropdown');
    const menuToggle = document.getElementById('menu-toggle');
    const notification = document.getElementById('notification-dropdown');
    const notificationToggle = document.getElementById('notification-toggle');
    
    if (isMenuOpen.value && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
        isMenuOpen.value = false;
    }

    if (isNotificationOpen.value && !notification.contains(event.target) && !notificationToggle.contains(event.target)) {
        isNotificationOpen.value = false;
    };
}

const auth = useAuth();
const router = useRouter();

function handleLogout() {
    auth.logout()
    router.push('/login')
}
</script>

<template>
    <header>
        <div class="logo-container">
            <NuxtLink to="/dashboard" tabindex="-1">
                <img src="/assets/images/logo-duby-header.png" alt="Logo Branca da Duby">
            </NuxtLink>
        </div>
        <div class="header-actions">
            <div class="search-bar">
                <span class="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <path fill="#412884"
                            d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37" />
                    </svg>
                </span>
                <input type="text" id="search-bar">
            </div>
            <div class="header-icons">
                <div id="notification-module" class="action-button">
                    <a href="" id="notification-toggle" @click.prevent="toggleNotifications">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                <path fill="#F6F6F6"
                                    d="M5 9a7 7 0 0 1 14 0v3.764l1.822 3.644A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592L5 12.764zm5.268 9a2 2 0 0 0 3.464 0zM12 4a5 5 0 0 0-5 5v3.764a2 2 0 0 1-.211.894L5.619 16h12.763l-1.17-2.342a2 2 0 0 1-.212-.894V9a5 5 0 0 0-5-5"
                                    stroke-width="0.5" stroke="#F6F6F6" />
                            </g>
                        </svg>
                    </a>
                </div>
                <div id="help-module" class="action-button">
                    <NuxtLink to="/ajuda">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="#F6F6F6"
                                d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                                stroke-width="0.5" stroke="#F6F6F6" />
                        </svg>
                    </NuxtLink>
                </div>
                <div id="settings-module" class="action-button">
                    <NuxtLink to="/configuracoes">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="#F6F6F6"
                                d="m12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578V6.423zm0 2.31L4.34 7.577v8.846L12 20.845l7.66-4.422V7.577zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                                stroke-width="0.5" stroke="#F6F6F6" />
                        </svg>
                    </NuxtLink>
                </div>
                <div id="profile-settings" class="action-button">
                    <a href="" id="menu-toggle" @click.prevent="toggleMenu">
                        <img v-if="auth.userRole === 'gestor'" src="/public/assets/images/photo-pexels.jpg" alt="Foto de Perfil">
                        <img v-if="auth.userRole === 'admin'" src="/public/assets/images/photo-pexels-2.png" alt="Foto de Perfil">
                    </a>
                </div>
            </div>
        </div>
    </header>
    <aside>
        <div id="menu-profile">
            <img v-if="auth.userRole === 'gestor'" src="/public/assets/images/photo-pexels.jpg" alt="Foto de Perfil">
            <img v-if="auth.userRole === 'admin'" src="/public/assets/images/photo-pexels-2.png" alt="Foto de Perfil">
            <div id="profile-info">
                <div v-if="auth.userRole === 'gestor'" id="username">Jonathan Curvelo</div>
                <div v-if="auth.userRole === 'admin'" id="username">Ronald Paiva</div>
                <div v-if="auth.userRole === 'gestor'" id="userwork">Gestor Financeiro</div>
                <div v-if="auth.userRole === 'admin'" id="userwork">Administrador Duby</div>
            </div>
            <div id="quick-actions">
                <NuxtLink to="/configuracoes">
                    <div class="action-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.67" height="16" viewBox="0 0 25 24">
                            <path fill="#F6F6F6" fill-rule="evenodd"
                                d="M1.62 24h4.11l.01.01c.55 0 .75-.01.97-.06c.21-.05.41-.13.59-.24c.2-.12.34-.26.73-.65l13.8-13.8c.61-.61 1.05-1.05 1.38-1.44c.35-.41.54-.73.65-1.06c.2-.61.2-1.26 0-1.87c-.11-.34-.3-.65-.65-1.06c-.33-.39-.79-.86-1.38-1.44l-.21-.21c-.59-.59-1.05-1.05-1.44-1.38c-.41-.35-.73-.54-1.06-.65c-.61-.2-1.26-.2-1.87 0c-.34.11-.65.3-1.06.65c-.354.292-.756.695-1.25 1.19l-.193.193l-13.8 13.8c-.37.37-.53.53-.65.73c-.11.18-.19.37-.24.58c-.06.22-.06.44-.06.97v4.12c0 .31 0 .51.01.66c.02.18.05.3.1.4c.1.19.26.35.44.44c.11.06.23.09.41.1c.15.01.35.01.66.01zm15.9-22.9c.21-.07.42-.1.63-.1l.01-.02c.21 0 .42.03.63.1c.2.07.42.21.72.46c.36.3.81.75 1.38 1.32l.21.21c.57.57 1.02 1.02 1.32 1.38c.25.3.4.52.46.72c.13.41.13.85 0 1.26c-.07.2-.21.42-.46.72c-.3.36-.73.79-1.32 1.38l-.447.447l-5.66-5.66l.431-.432c.57-.57 1.02-1.01 1.38-1.32c.3-.25.52-.4.72-.46zm-3.24 2.92l-12.7 12.7c-.34.34-.45.45-.5.54c-.06.09-.1.19-.12.29s-.03.26-.03.74v4.12c0 .27 0 .45.01.58c.16.04.34.04.61.03h4.12c.45 0 .63 0 .74-.03c.11-.02.21-.07.3-.12c.09-.06.22-.18.54-.5l12.7-12.7l-5.66-5.66z"
                                clip-rule="evenodd" stroke-width="0.5" stroke="#F6F6F6" />
                        </svg>
                    </div>
                </NuxtLink>
                <NuxtLink to="/configuracoes">
                    <div class="action-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path fill="#F6F6F6" d="M3 8.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
                            <path fill="#F6F6F6" fill-rule="evenodd"
                                d="M4.5 3c1.56 0 2.94.794 3.75 2h5.26a1 1 0 0 1 .807.409l1.49 2.04a.99.99 0 0 1 .033 1.13l-1.26 1.95a.997.997 0 0 1-1.41.276L12.02 10l-1.19.812a1 1 0 0 1-1.13 0L8.51 10h-.258c-.808 1.21-2.18 2-3.75 2a4.5 4.5 0 0 1 0-9zm3.75 6a1 1 0 0 0-.832.444c-.63.94-1.7 1.56-2.91 1.56c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5c1.21 0 2.28.616 2.91 1.56c.186.277.498.444.832.444h5.26L15 8.048l-1.26 1.95l-1.15-.805a1 1 0 0 0-1.14-.005L10.26 10l-1.19-.812a1 1 0 0 0-.566-.175h-.258z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </NuxtLink>
                <NuxtLink to="/suaAtividade">
                    <div class="action-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="#F6F6F6"
                                d="M11.962 20q-3.046 0-5.311-1.99q-2.264-1.989-2.62-5.01h1.011q.408 2.58 2.351 4.29T11.962 19q2.925 0 4.962-2.037T18.962 12t-2.038-4.963T11.962 5q-1.553 0-2.918.656q-1.365.655-2.41 1.805h2.481v1H4.962V4.309h1v2.388q1.16-1.273 2.718-1.984T11.962 4q1.663 0 3.118.626t2.542 1.714t1.714 2.542t.626 3.118t-.626 3.118t-1.714 2.542t-2.542 1.714t-3.118.626m3.204-4.146l-3.647-3.646V7h1v4.792l3.354 3.354z"
                                stroke-width="0.5" stroke="#F6F6F6" />
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div id="system-modules">
            <NuxtLink to="/dashboard">
                <div id="dashboard-link" class="menu-item" :class="{ active: route.path.startsWith('/dashboard') }">
                    <div class="menu-highlight"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#412884" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z" />
                    </svg>
                    <div class="module-title">Dashboard</div>
                </div>
            </NuxtLink>
            <NuxtLink v-if="auth.userRole === 'gestor'" to="/conciliacao">
                <div id="conciliacao-link" class="menu-item" :class="{ active: route.path.startsWith('/conciliacao') }">
                    <div class="menu-highlight"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#412884"
                            d="M16 2H8a4.75 4.75 0 0 0-4.75 4.75v10.5A4.75 4.75 0 0 0 8 22h8a4.76 4.76 0 0 0 4.75-4.75V6.75A4.76 4.76 0 0 0 16 2M8.5 18.75h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m4 5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m4 5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m1.25-5.36a1.71 1.71 0 0 1-1.67 1.75H7.91a1.7 1.7 0 0 1-1.66-1.75v-2a1.71 1.71 0 0 1 1.66-1.75h8.17a1.72 1.72 0 0 1 1.67 1.75z" />
                    </svg>
                    <div class="module-title">Conciliação</div>
                </div>
            </NuxtLink>
            <NuxtLink v-if="auth.userRole === 'gestor'" to="/consultas">
                <div id="consultas-link" class="menu-item" :class="{ active: route.path.startsWith('/consultas') }">
                    <div class="menu-highlight"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                        <g fill="none" stroke="#412884" stroke-linejoin="round" stroke-width="4">
                            <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" />
                            <path stroke-linecap="round"
                                d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485" />
                        </g>
                    </svg>
                    <div class="module-title">Consultas</div>
                </div>
            </NuxtLink>
            <NuxtLink v-if="auth.userRole === 'gestor'" to="/gestaoContas">
                <div id="gestao-contas-link" class="menu-item"
                    :class="{ active: route.path.startsWith('/gestaoContas') }">
                    <div class="menu-highlight"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#412884" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z" />
                    </svg>
                    <div class="module-title">Gestão de Contas</div>
                </div>
            </NuxtLink>
            <NuxtLink v-if="auth.userRole === 'gestor'" to="/gestaoUsuarios">
                <div id="gestao-usuarios-link" class="menu-item"
                    :class="{ active: route.path.startsWith('/gestaoUsuarios') }">
                    <div class="menu-highlight"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#412884" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="18" cy="15" r="3" />
                            <circle cx="9" cy="7" r="4" />
                            <path
                                d="M10 15H6a4 4 0 0 0-4 4v2m19.7-4.6l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4" />
                        </g>
                    </svg>
                    <div class="module-title">Gestão de Usuários</div>
                </div>
            </NuxtLink>
            <NuxtLink v-if="auth.userRole === 'admin'" to="/gestaoClientes">
                <div id="gestao-usuarios-link" class="menu-item"
                    :class="{ active: route.path.startsWith('/gestaoClientes') }">
                    <div class="menu-highlight"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#412884" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="18" cy="15" r="3" />
                            <circle cx="9" cy="7" r="4" />
                            <path
                                d="M10 15H6a4 4 0 0 0-4 4v2m19.7-4.6l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4" />
                        </g>
                    </svg>
                    <div class="module-title">Gestão de Clientes</div>
                </div>
            </NuxtLink>
            <NuxtLink v-if="auth.userRole === 'gestor'" to="/logs">
                <div id="logs-usuarios-link" class="menu-item" :class="{ active: route.path.startsWith('/logs') }">
                    <div class="menu-highlight"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="#412884" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2.5" d="M4 12h.01M4 6h.01M4 18h.01M8 18h2m-2-6h2M8 6h2m4 0h6m-6 6h6m-6 6h6" />
                    </svg>
                    <div class="module-title">Logs</div>
                </div>
            </NuxtLink>
        </div>
        <div id="logout-button" @click.prevent="handleLogout">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                <path fill="none" stroke="#F6F6F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                    d="M320 176v-40a40 40 0 0 0-40-40H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h192a40 40 0 0 0 40-40v-40m64-160l80 80l-80 80m-193-80h273" />
            </svg>
            <div class="exit-text">Sair</div>
        </div>
    </aside>
    <main>
        <notificacoes :is-open="isNotificationOpen" />
        <menuReduzido :is-open="isMenuOpen" @exit="handleLogout" />
        <NuxtPage />
    </main>
    <div class="small-screen-message">
        Utilize um computador com a dimensão mínima <strong>1440 x 900</strong>.
    </div>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: var(--spacing-xl);

    height: 80px;
    width: 100vw;

    padding: 16px 32px;

    background-color: var(--principal);

    div {
        display: flex;
        align-items: center;
    }

    .header-actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .search-bar {
        position: relative;
        display: flex;
        align-items: center;
        
        input {
            height: 40px;
            width: 312px;

            padding-left: 40px;
            padding-right: var(--spacing-md);
            
            color: var(--texto);
            font-size: var(--font-md);
            
            background-color: var(--background);
            
            border: 0;
            border-radius: 30px;

            outline: 2px solid transparent;
            transition: outline 0.3s ease-in-out;
        }

        input:focus {
            outline: 2px solid var(--comp-4);
        }

        .search-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);

            color: var(--principal);

            cursor: pointer;
        }
    }

    .header-icons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        height: 40px;
        width: 224px;

        a {
            height: 32px;

            border-radius: 5px;

            outline: 2px solid transparent;
            transition: outline 0.3s ease-in-out;
        }

        a:focus {
            outline: 2px solid var(--comp-4);
        }
        
        .action-button {
            transition: padding 0.2s ease;
        }

        .action-button:hover {
            padding-bottom: 5px;
        }

        img {
            height: 32px;
            width: 32px;
            
            border-radius: 90px;
        }
    }
}

aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: var(--spacing-lg);
    position: fixed;

    height: var(--total-height);
    width: 256px;

    padding: 32px 16px;

    background-color: var(--principal);

    a {
        text-decoration: none;
        
        border-radius: 8px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    a:focus {
        outline: 2px solid var(--comp-4);
    }

    #menu-profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-md);

        img {
            height: 176px;
            width: 176px;

            border-radius: 90px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        #profile-info {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);

            color: var(--background);
            text-align: center;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);

            #username {
                font-size: var(--font-lg);
                line-height: 24px;
            }

            #userwork {
                font-size: var(--font-md);
                font-weight: 200;
                line-height: 16px;
            }
        }

        #quick-actions {
            display: flex;
            flex-direction: row;
            gap: var(--spacing-md);

            a {
                border-radius: 20px;
            }

            .action-button {
                display: flex;
                justify-content: center;
                align-items: center;

                height: 40px;
                width: 40px;

                padding: var(--spacing-sm);

                border: 1px solid var(--background);
                border-radius: 20px;
            }

            .action-button:hover {
                border: 2px solid var(--comp-4);
            }
        }
    }

    #system-modules {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: var(--spacing-md);

        height: min-content;
        width: 100%;

        overflow: auto;
        scrollbar-width: none;

        a {
            border-radius: 8px;
        }

        .menu-item {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: var(--spacing-sm);

            height: 56px;
            width: 100%;

            padding: var(--spacing-md);

            background-color: var(--background);

            border-radius: 8px;

            cursor: pointer;

            .module-title {
                color: var(--principal);
                font-size: 15px;
            }
        }

        .active {
         .menu-highlight {
            display: block;}
        }

        .menu-highlight {
            display: none;

            height: 20px;
            width: 4px;

            background-color: var(--principal);

            border-radius: 6px;
        }
    }

    #logout-button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--spacing-sm);

        height: 40px;
        width: 96px;
      
        padding: 8px 16px;

        cursor: pointer;

        .exit-text {
            color: var(--background);
            font-size: var(--font-md);
        }
    }
}

main {
    height: var(--total-height);

    margin-left: 256px;
    padding: var(--spacing-lg);

    background-color: var(--background);

    .main-container {
        height: 100%;
        width: 100%;
    }
}

.small-screen-message {
  display: none;
}

@media screen and (max-height: 770px), (max-width: 1439px) {
    header {
        display: none;
    }

    aside {
        display: none;
    }

    main {
        display: none;
    }

    div.small-screen-message {
        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        z-index: 9999;
        inset: 0;

        height: 100vh;

        color: var(--background);
        text-align: center;
        font-size: var(--font-md);
    }
}


@media screen and (min-height: 770px) and (max-height: 945px) { 
    aside #menu-profile #quick-actions {
        display: none;
    }
}

@media screen and (max-height: 824px) {
    div#system-modules {
        height: 344px;
    }
}
</style>