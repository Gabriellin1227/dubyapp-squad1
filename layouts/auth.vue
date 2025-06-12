<script setup>
</script>

<template>
    <div class="auth-layout-container">
        <NuxtPage />
    </div>
    <div class="small-screen-message">
      Utilize um computador com a dimensão mínima <strong>1440 x 900</strong>.
    </div>
</template>

<style scoped>
div.auth-layout-container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;

    background-color: var(--principal);
}

.small-screen-message {
    display: none;
}

@media screen and (max-height: 770px), (max-width: 1439px) {
    div.auth-layout-container {
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
        width: 100vw;

        color: var(--background);
        text-align: center;
        font-size: var(--font-md);

        background-color: var(--principal);
    }
}
</style>