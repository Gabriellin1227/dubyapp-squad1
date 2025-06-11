<script setup></script>

<template>
    <div class="setting-group">
        <div class="group-title">Aparência</div>
        <div class="group-content">
            <div class="setting-card">
                <div class="card-title">Tema</div>
                <div class="card-content">
                    <select name="theme-select" id="themeSelect">
                        <option value="" selected disabled>Selecione um tema</option>
                        <option value="lightTheme">Claro</option>
                        <option value="darkTheme">Escuro</option>
                        <option value="computerTheme">Padrão do sistema</option>
                    </select>
                </div>
            </div>
            <div class="setting-card">
                <div class="card-title">Idioma</div>
                <div class="card-content">
                    <select name="idiom-select" id="idiomSelect">
                        <option value="" selected disabled>Selecione um idioma</option>
                        <option value="portuguese">Português</option>
                        <option value="english">Inglês</option>
                        <option value="spanish">Espanhol</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.setting-group {
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: 100%;

    .group-title {
        color: var(--texto);
        font-size: 24px;
        font-weight: 500;
    }

    .group-content {
        display: flex;
        flex-flow: row wrap;
        gap: 24px 64px;

        .setting-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 8px;

            width: 100%;
            max-width: 296px;

            .card-title {
                color: var(--texto);
                font-size: 16px;
            }

            .card-content {
                color: rgba(18, 40, 64, 0.75);
                font-size: 14px;
            }

            select {
                height: 40px;
                width: 100%;

                color: var(--placeholder);
                font-size: 14px;

                background-color: var(--background);

                border: 1px solid rgba(65, 40, 132, 0.2);
                border-radius: 5px;
            }
        }
    }
}
</style>