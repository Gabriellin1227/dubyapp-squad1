<script setup>
import { ref, computed, defineAsyncComponent } from 'vue';

const activeTab = ref('profile');
const editionMode = ref(false);

const tabs = [
    { label: 'Perfil', value: 'profile' },
    { label: 'Sistema', value: 'system' },
    { label: 'Conciliação', value: 'conciliation' },
    { label: 'Notificações', value: 'notification' },
];

const componentsMap = {
    profile: defineAsyncComponent(() => import('@/components/Settings/profileSettings.vue')),
    system: defineAsyncComponent(() => import('@/components/Settings/systemSettings.vue')),
    conciliation: defineAsyncComponent(() => import('@/components/Settings/conciliationSettings.vue')),
    notification: defineAsyncComponent(() => import('@/components/Settings/notificationSettings.vue'))
};

const currentTabComponent = computed(() => componentsMap[activeTab.value]);

const toggleEditionMode = () => {
    editionMode.value = !editionMode.value;
};
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="header-title">Configurações</div>
            <div class="header-subtitle">Configure sua conta e gerencia suas informações de login.</div>
        </div>
        <div class="main-container">
            <div class="settings-menu">
                <div class="settings-areas">
                    <div
                        v-for="tab in tabs"
                        :key="tab.value"
                        class="setting-area"
                        :class="{ active: activeTab === tab.value }"
                        @click="activeTab = tab.value"
                    >
                        {{ tab.label }}
                        <div class="area-highlight"></div>
                    </div>
                </div>
                <div class="settings-actions">
                    <div class="setting-action" v-if="activeTab == 'profile'" @click="toggleEditionMode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="#f6f6f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                                <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                            </g>
                        </svg>
                    </div>
                    <div class="setting-action" v-if="editionMode" @click="toggleEditionMode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#f6f6f6" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" stroke-width="0" stroke="#f6f6f6" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="settings-container">
                <component :is="currentTabComponent" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
    
    height: 100%;
    width: 100%;
    max-width: 100%;

    margin: 0;
    padding: 16px;
}

.main-container {
    display: flex;
    flex-direction: column;
    gap: 40px;

    height: 100%;
    width: 100%;

    .settings-menu {
        display: flex;
        justify-content: space-between;

        width: 100%;

        border-bottom: 1px solid rgba(65, 40, 132, 0.2);

        .settings-areas {
            display: flex;
            justify-content: space-evenly;

            height: 40px;
            width: 100%;
            max-width: 600px;

            .setting-area {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2px;

                height: 100%;

                color: rgba(18, 40, 64, 0.5);
                font-weight: 600;

                cursor: pointer;

                .area-highlight {
                    display: none;

                    height: 4px;
                    width: 100%;

                    background-color: var(--principal);

                    border-radius: 5px 5px 0 0;
                }
            }

            .setting-area:hover {
                color: var(--principal);
            }

            .setting-area.active {
                color: var(--principal);

                .area-highlight {
                    display: block;
                }
            }
        }

        .settings-actions {
            display: flex;
            gap: 24px;

            .setting-action {
                display: flex;
                justify-content: center;
                align-items: center;

                height: 32px;
                width: 32px;

                background-color: var(--principal);

                border-radius: 5px;

                cursor: pointer;
            }
        }
    }

    .settings-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
}

.header-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);

    .header-title {
        color: var(--principal);
        font-size: var(--font-xxl);
        font-weight: 600;
        line-height: 64px;
    }

    .header-subtitle {
        color: rgb(18, 40, 63, 0.6);
        font-size: var(--font-snd);
        line-height: 24px;
    }
}
</style>