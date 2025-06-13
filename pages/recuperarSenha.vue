<script setup>
import { useHead } from '#imports';

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
    }
  ]
});

definePageMeta({
    layout: 'auth'
});

const step = ref(1);

const nextStep = () => {
    step.value++;
};

function toggleSenha(idCampo, idIcone) {
  const campo = document.getElementById(idCampo);
  const icone = document.getElementById(idIcone);

  if (campo.type === "password") {
    campo.type = "text";
    icone.classList.remove("fa-eye");
    icone.classList.add("fa-eye-slash");
  } else {
    campo.type = "password";
    icone.classList.remove("fa-eye-slash");
    icone.classList.add("fa-eye");
  }
}
</script>

<template>
    <div v-if="step === 1" class="container-1">
        <div id="esqueceu">
            Esqueceu a senha?
        </div>
        <div id="sem_problemas">
            Sem problemas! Nós enviaremos as instruções para redefinição.
        </div>
        <form class="input" id="formulario" action="#" method="post">
            <label id="label" for="email">E-mail ou CPF</label>
            <input id="email" type="email" placeholder="Digite seu e-mail ou CPF" autocomplete="email" required>
            <button id="botao" type="submit" @click.prevent="nextStep">Recuperar senha</button>
        </form>
        <NuxtLink to="/login" id="voltarLogin">
            <div id="botaoVoltar">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                    <g fill="none" stroke="#12283F" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
                        <path d="M14 23.9917H42" />
                        <path d="M26 36L14 24L26 12" />
                        <path d="M5 36V12" />
                    </g>
                </svg>
                <span>Voltar para Entrar</span>
            </div>
        </NuxtLink>
    </div>
    <div v-if="step === 2" class="container-2">
        <div id="titulo">
            Verifique sua caixa de e-mail
        </div>
        <div class="descricao">
            Enviamos um e-mail para <span class="destaque">example@gmail.com</span>.
            Verifique sua caixa de entrada e siga as instruções para redefinir a
            senha.
        </div>
        <NuxtLink to="/login" id="botaoVoltar">
            <button>Voltar para Entrar</button>
        </NuxtLink>
        <div>
            Não recebeu o e-mail? <a href="#" class="destaque">reenviar e-mail</a>
        </div>
        <div>
            Endereço de e-mail errado?
            <a href="" @click.prevent="nextStep" class="destaque">alterar endereço de e-mail</a>
        </div>
    </div>
    <div v-if="step === 3" class="container-3">
        <div class="content-box">
            <div class="title">Insira sua nova senha</div>
            <div class="subtitle">Deve possuir, ao menos, <span class="destaque">8 caracteres</span>, incluindo letras e números.</div>
            <form action="#" method="post">
                <div>
                    <div class="senha-container">
                        <label for="ipass">Nova senha</label>
                        <input id="senha1" type="password" required placeholder="Digite sua nova senha" minlength="8">
                        <span class="toggle-senha" @click="toggleSenha('senha1', 'icone1')">
                            <i id="icone1" class="fa-solid fa-eye"></i>
                        </span>
                    </div>
                    <div id="progress-bar">
                        <div class="level"></div>
                        <div class="level"></div>
                        <div class="level"></div>
                        <div class="level"></div>
                    </div>
                </div>
                <div class="senha-container">
                    <label for="iconfirmPass">Confirmar senha</label>
                    <input id="senha2" type="password" required placeholder="Confirme sua senha" minlength="8">
                    <span class="toggle-senha" @click="toggleSenha('senha2', 'icone2')">
                        <i id="icone2" class="fa-solid fa-eye"></i>
                    </span>
                </div>
                <button type="submit" @click.prevent>Redefinir senha</button>
            </form>
            <NuxtLink to="/login" id="voltarLogin">
                <div id="botaoVoltar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                        <g fill="none" stroke="#12283F" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M14 23.9917H42" />
                            <path d="M26 36L14 24L26 12" />
                            <path d="M5 36V12" />
                        </g>
                    </svg>
                    <span>Voltar para Entrar</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.container-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-md);

    width: 100%;
    max-width: 864px;

    padding: 64px 144px;

    background: var(--background);

    border-radius: 28px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);

    #esqueceu {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 100%;

        color: var(--principal);
        text-align: center;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
    }

    #sem_problemas {
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 24px;
        width: 100%;

        color: var(--texto);
        text-align: center;
        font-size: var(--font-md);
        font-weight: 400;
        line-height: 24px;
    }

    .input {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);

        width: 560px;
    }

    #label {
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 24px;

        color: var(--texto);
        font-size: var(--font-md);
        font-weight: 400;
    }

    #email {
        display: flex;
        padding: var(--spacing-md);
        align-items: center;

        height: 56px;

        color: var(--texto);
        text-indent: var(--spacing-sm);
        font-size: var(--font-md);
        font-weight: 400;

        background: var(--input);

        border: none;
        border-radius: 10px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    #botao {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 560px;
        height: 56px;

        padding: var(--spacing-sm);

        color: var(--background);
        text-align: center;
        font-size: var(--font-md);

        background: var(--principal);

        border: none;
        border-radius: 10px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    #voltarLogin {
        height: 32px;
        width: 176px;

        text-decoration: none;

        border-radius: 2px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    #botaoVoltar {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    #botaoVoltar span {
        width: 100%;

        color: var(--texto);
        text-align: center;
        font-size: var(--font-md);
    }

    #email::placeholder {
        color: var(--placeholder);
        font-size: var(--font-smd);
        font-weight: 400;
    }

    #email:focus {
        background-color: var(--background);

        outline: 2px solid var(--principal);
    }

    #botao:hover {
        cursor: pointer;
        background-color: var(--comp-1);
    }

    #botao:focus {
        outline: 2px solid var(--comp-4);
    }

    #voltarLogin:focus {
        outline: 2px solid var(--principal);
    }
}

.container-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    max-height: 448px;
    max-width: 864px;

    width: 100%;
    height: 100%;

    padding: 64px 144px;

    background-color: var(--background);

    border-radius: 28px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);

    #titulo {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 100%;

        color: var(--principal);
        text-align: center;
        font-size: 40px;
        font-family: var(--fonte-padrao);
        font-weight: 700;
        line-height: 48px;
    }

    div.descricao {
        height: 24px;
        width: 100%;

        color: var(--texto);
        text-align: center;
        font-size: var(--font-md);
        font-weight: 400;
    }

    div.descricao {
        height: 40px;
    }

    #botaoVoltar {
        width: 100%;
    }

    button {
        height: 56px;
        width: 100%;
        padding: var(--spacing-sm);

        background: var(--principal);

        color: var(--background);
        text-align: center;
        font-size: var(--font-md);

        border: none;
        border-radius: 10px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    button:hover {
        cursor: pointer;
        background-color: var(--comp-1);
    }

    button:focus {
        outline: 2px solid var(--comp-4);
    }

    a {
        color: var(--principal);
        font-size: var(--font-md);
        text-decoration: none;

        border-radius: 2px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    a:hover {
        text-decoration: underline;
    }

    a:focus {
        outline: 2px solid var(--principal);
    }

    .destaque {
        color: var(--principal);
        font-weight: bold;
    }
}

.container-3 {
    width: 100%;
    max-width: 864px;

    padding: 64px 152px;

    background-color: var(--background);

    border-radius: 28px;

    .content-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-md);
    }

    .title {
        line-height: 48px;
        width: 100%;

        color: var(--principal);
        text-align: center;
        font-size: var(--font-xxl);
        font-weight: 700;
    }

    div.subtitle {
        width: 100%;

        color: var(--texto);
        text-align: center;
        font-size: var(--font-md);
        line-height: 24px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);

        width: 100%;

        div {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);
        }

        div.senha-container {
            position: relative;
        }

        div#progress-bar {
            display: flex;
            flex-direction: row;
            gap: var(--spacing-md);

            padding: 0 var(--spacing-md);
        }

        div.level {
            height: 8px;
            width: 100%;

            background-color: var(--input);

            border-radius: 10px;
        }

        /* Apenas para demonstração: */
        div.level:first-of-type {
            background-color: var(--principal);
        }

        label {
            line-height: 24px;
        }

        input {
            display: flex;
            padding: var(--spacing-md);
            align-items: center;

            height: 56px;
            width: 100%;

            padding-right: 50px;

            color: var(--texto);
            text-indent: var(--spacing-sm);
            font-family: var(--fonte-padrao), sans-serif;
            font-size: var(--font-md);
            font-weight: 400;

            background: var(--input);

            border: none;
            border-radius: 10px;

            outline: 2px solid transparent;
            transition: outline 0.3s ease-in-out;
        }

        input::placeholder {
            color: var(--placeholder);
            font-family: var(--fonte-padrao);
            font-size: var(--font-smd);
            font-weight: 400;
        }

        input:focus {
            background-color: var(--background);

            outline: 2px solid var(--principal);
        }

        .toggle-senha {
            position: absolute;
            right: 10px;
            top: 56%;
            transform: translateX(-50%);
            cursor: pointer;
            text-align: center;
            font-size: var(--font-md);
        }

        i {
            width: 20px;

            color: var(--principal);
        }

        button {
            height: 56px;
            width: 100%;

            padding: var(--spacing-sm);

            color: var(--background);
            font-size: var(--font-md);

            background-color: var(--principal);

            border: 0;
            border-radius: 10px;

            outline: 2px solid transparent;
            transition: outline 0.3s ease-in-out;
            cursor: pointer;
        }

        button:hover {
            cursor: pointer;
            background-color: var(--comp-1);
        }

        button:focus {
            outline: 2px solid var(--comp-4);
        }
    }

    #voltarLogin {
        height: 32px;
        width: 176px;

        text-decoration: none;

        border-radius: 2px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    #botaoVoltar {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    #botaoVoltar span {
        width: 100%;

        color: var(--texto);
        text-align: center;
        font-family: var(--fonte-padrao);
        font-size: var(--font-md);
    }

    #voltarLogin:focus {
        outline: 2px solid var(--principal);
    }

    .destaque {
        color: var(--principal);
        font-weight: 700;
    }
}
</style>