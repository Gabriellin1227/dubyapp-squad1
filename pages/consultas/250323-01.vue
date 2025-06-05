<script setup></script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="header-title-container">
                <div class="header-title">Análise de Conciliação</div>
                <div class="header-subtitle">Analise as divergêcias, edite, filtre e exporte os resultados.</div>
            </div>
            <div class="header-module-actions">
                <div class="module-action-button hollow">
                    <div class="action-button-title">Exportar</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="#12283F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" />
                    </svg>
                </div>
                <div class="module-action-button hollow">
                    <div class="action-button-title">Imprimir</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#12283F" d="M16 8.616v-3H8v3H7v-4h10v4zm-11.423 1h14.846zm13.038 2.5q.425 0 .713-.288t.287-.712t-.287-.713t-.713-.288t-.712.288t-.288.713t.288.712t.713.288M16 19v-4.538H8V19zm1 1H7v-4H3.577v-5.384q0-.85.577-1.425t1.423-.576h12.846q.85 0 1.425.576t.575 1.424V16H17zm2.423-5v-4.384q0-.425-.287-.713t-.713-.288H5.577q-.425 0-.712.288t-.288.713V15H7v-1.538h10V15z" stroke-width="0.4" stroke="#12283F" />
                    </svg>
                </div>
                <NuxtLink to="/conciliacao">
                    <div class="module-action-button filled">
                        <div class="action-button-title">Nova conciliação</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#f6f6f6" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" stroke-width="1" stroke="#f6f6f6" />
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="main-container">
            <reconcileFilter />
            <reconcileTable />
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
    gap: var(--spacing-lg);

    height: 100%;
}

.header-container {
    display: flex;
    justify-content: space-between;

    width: 100%;

    .header-title-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);

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
    
    .header-module-actions{
        display: flex;
        align-self: flex-end;
        gap: var(--spacing-lg);

        .module-action-button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: var(--spacing-sm);

            height: 40px;
            width: 144px;

            font-size: 12px;

            border-radius: 10px;

            cursor: pointer;
        }

        .hollow {
            color: var(--texto);

            border: 1px solid rgb(18, 40, 63, 0.1);
        }

        .filled {
            color: var(--background);
            font-weight: 500;

            background-color: var(--principal);
        }
    }
}
</style>