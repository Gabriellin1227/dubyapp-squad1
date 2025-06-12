<script setup>
defineProps({
    isOpen: Boolean
});

const emit = defineEmits(['exit']);
</script>

<template>
    <div v-show="isOpen" id="menu-dropdown" class="show" @click.stop>
        <div class="menu-content">
            <div class="menu-user-resume">
                <img src="../assets/images/photo-pexels.jpg" alt="Foto de Perfil">
                <div class="menu-info-user">
                    <div class="menu-name-user">Jonathan Curvelo</div>
                    <div class="menu-email-user">jonathancurvelo@gmail.com</div>
                </div>
            </div>
            <div class="menu-features">
                <div class="menu-features-settings">
                    <NuxtLink to="/configuracoes">
                        <div class="menu-feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#12283fe6" d="m12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578V6.423zm0 2.31L4.34 7.577v8.846L12 20.845l7.66-4.422V7.577zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0" />
                            </svg>
                            <div class="menu-feature-title">Configurações da conta</div>
                        </div>
                    </NuxtLink>
                    <a href="" @click.prevent="emit('exit')">
                        <div class="menu-feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                <path fill="none" stroke="#12283fe6" stroke-linecap="round" stroke-linejoin="round" stroke-width="38" d="M320 176v-40a40 40 0 0 0-40-40H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h192a40 40 0 0 0 40-40v-40m64-160l80 80l-80 80m-193-80h273" />
                            </svg>
                            <div class="menu-feature-title">Sair</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#menu-dropdown {
    display: none;
    position: absolute;
    top: 80px;
    right: 5px;

    width: 320px;

    padding: var(--spacing-sm) 0;

    color: var(--texto);

    background-color: #FFFFFF;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    z-index: 1000;
    overflow: hidden;

    .menu-content {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);

        height: 100%;
        width: 320px;

        .menu-user-resume {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);

            height: 96px;
            width: 304px;

            padding: var(--spacing-md);
            margin: 0 var(--spacing-sm);

            background-color: rgba(18, 40, 63, 0.05);

            border-radius: 2px;

            img {
                height: 64px;
                width: 64px;

                border-radius: 90px;
            }

            .menu-info-user {
                display: flex;
                flex-direction: column;
                justify-content: center;

                width: 100%;

                .menu-name-user {
                    font-size: var(--font-slg);
                    font-weight: 500;
                }

                .menu-email-user {
                    font-size: var(--font-snd);
                    font-weight: 400;
                }
            }
        }

        a {
            height: 100%;
            
            color: var(--texto);
            text-decoration: none;
        }

        .menu-features {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);

            .menu-feature {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: var(--spacing-md);

                height: 40px;
                width: 100%;

                padding: 0 var(--spacing-md);

                cursor: pointer;
            }

            .menu-feature:hover {
                background-color: rgba(18, 40, 63, 0.05);
            }
        }

        .menu-features > div {
            display: flex;
            flex-direction: column;
        }
    }
}

#menu-dropdown.show {
    display: block;
}
</style>