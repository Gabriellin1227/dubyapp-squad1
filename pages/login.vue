<script setup lang="ts">
import { useAuth } from '@/stores/useAuth'

definePageMeta({
    layout: 'auth'
});

const auth = useAuth();
const router = useRouter();

const form = reactive({
    email: '',
    password: ''
});

const showAlertModal = ref(false);

const closeModal = () => {
    showAlertModal.value = false;
};

function handleLogin() {
    const success = auth.login(form.email, form.password);

    if (success) {
        router.push('/');
    } else {
        showAlertModal.value = true;
    }
}
</script>

<template>
    <div v-if="showAlertModal" class="modal-overlay">
        <dialog open class="modal-dialog">
            <div class="modal-content">
                <div class="alert-icon-extern">
                    <div class="alert-icon-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                            <g fill="none">
                                <path stroke="#412884" stroke-linejoin="round" stroke-width="3" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" />
                                <path fill="#412884" fill-rule="evenodd" d="M24 37a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd" />
                                <path stroke="#412884" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M24 12v16" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="description-container">
                    <div class="alert-title">Credenciais inválidas</div>
                    <div class="alert-subtitle">Corrija as informações inseridas e tente novamente.</div>
                </div>
                <button @click="closeModal" class="alert-button">
                    Fechar
                </button>
            </div>
        </dialog>
    </div>
    <div class="container">
        <div id="content-box">
            <div class="logo">
                <img src="/public/assets/images/logo-duby-roxo.png" alt="DubyLogo">
            </div>

            <!-- Formulário de login -->
            <div class="form">
                <form @submit.prevent="handleLogin">
                    <!-- Labels e Inputs -->
                    <div>
                        <label for="icode">Código da empresa</label>
                        <input required type="text" id="icode" name="codigoEmpresa" placeholder="Digite o código da empresa" />
                    </div>
                    <!-- E-mail/CPF -->
                    <div>
                        <label for="iemail">E-Mail ou CPF</label>
                        <input v-model="form.email" required type="email" name="iemail" id="codigoEmailCpf" placeholder="Digite seu E-mail ou CPF" autocomplete="email" />
                    </div>
                    <!-- Senha -->
                    <div>
                        <label for="ipassword">Senha</label>
                        <input v-model="form.password" required type="password" name="codigoSenha" id="ipassword" placeholder="Digite sua senha" minlength="8" />
                    </div>
                    <!-- Botão de Login e link de esqueci a senha-->
                    <div>
                        <button type="submit" id="botaoLogin" aria-label="Fazer login">Entrar</button>
                    </div>
                </form>
                <div id="actionButtons">
                    <div id="remember-container">
                        <label class="custom-checkbox">
                            <input
                            type="checkbox"
                            />
                            <span class="checkbox-box"></span>
                        </label>
                        <div class="remember-message">Lembrar empresa</div>
                    </div>
                    <NuxtLink to="/recuperarSenha"><span>Esqueci minha senha</span></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;

    max-height: 576px;
    max-width: 864px;

    width: 100%;
    height: 100%;

    padding: 24px 136px;

    background-color: var(--background);

    border-radius: 28px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);

    #content-box {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);

        max-height: 520px;
        max-width: 592px;

        height: 100%;
        width: 100%;

        padding: var(--spacing-md);
    }

    /* LOGO */

    .logo {
        display: flex;
        justify-content: center;

        font-size: var(--spacing-md);
    }

    .logo img {
        height: 80px;
        width: 420px;
    }

    /* FORM */

    .form {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);

        height: 392px;
        max-width: 560px;

        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    form>div {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    label {
        display: flex;
        align-items: center;

        height: 24px;

        color: var(--texto);
        font-family: var(--fonte-padrao), sans-serif;
        font-size: var(--font-md);
    }

    input {
        height: 56px;
        width: 100%;

        padding: var(--spacing-slg) 0;

        color: var(--texto);
        text-indent: var(--spacing-sm);
        font-family: var(--fonte-padrao), sans-serif;
        font-size: var(--font-md);

        background-color: var(--input);

        border: none;
        border-radius: 10px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    input::placeholder {
        color: rgba(18, 40, 64, 0.5);
        text-indent: var(--spacing-sm);
        font-size: var(--font-snd);
    }

    input:focus {
        background-color: var(--background);

        outline: 2px solid var(--principal);
    }

    #botaoLogin {
        height: 56px;
        width: 100%;

        padding: var(--spacing-sm) 0;

        color: var(--background);
        line-height: 20px;
        font-family: var(--fonte-padrao), sans-serif;
        font-size: var(--font-md);
        font-weight: 700;

        background-color: var(--principal);
        border: none;
        border-radius: 10px;
        cursor: pointer;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    #botaoLogin:hover {
        background-color: var(--comp-1);
    }

    #botaoLogin:focus {
        outline: 2px solid var(--comp-4);
    }

    /* LINKS & UTILITARIOS */

    #actionButtons {
        display: flex;
        justify-content: space-between;

        height: 24px;
    }

    #actionButtons a {
        display: flex;
        align-items: center;

        height: 24px;

        color: var(--comp-1);
        font-family: var(--fonte-padrao), sans-serif;
        font-size: var(--font-md);

        border-radius: 2px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    #actionButtons span:hover {
        color: var(--comp-3);
        text-decoration: underline;
    }

    #actionButtons a:focus {
        outline: 2px solid var(--principal);
    }

    #remember-container {
        display: flex;
        gap: 8px;

        color: var(--principal);
    }
}

.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.checkbox-box {
  width: 24px;
  height: 24px;
  border: 1px solid var(--principal);
  border-radius: 5px;
  background-color: var(--background);
  transition: all 0.2s ease-in-out;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-box {
  background-color: var(--principal);
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-box::after {
  content: '';
  position: absolute;
  left: 8px;
  top: 4px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.custom-checkbox input[type="checkbox"]:not(:checked) + .checkbox-box::after {
  content: '';
  opacity: 0;
}

.checkbox-label {
  margin-left: 8px;
  color: var(--texto);
}

.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;

    height: 100vh;
    width: 100vw;

    background: rgba(0, 0, 0, 0.3);
}

.modal-dialog {
    display: flex;
    justify-content: center;
    align-items: center;

    all: unset;
    z-index: 1000;

    width: min-content;
    
    padding: 24px 56px;

    background-color: var(--background);

    border-radius: 20px;
}

.modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    height: 100%;
    width: 384px;

    .alert-icon-extern {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 56px;
        width: 56px;
        
        background-color: rgba(65, 40, 132, 0.15);
        
        border-radius: 50%;
        
        .alert-icon-medium {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 44px;
            width: 44px;

            background-color: rgba(65, 40, 132, 0.15);

            border-radius: 50%;
        }
    }

    .description-container {
        display: flex;
        flex-direction: column;
        gap: 8px;

        text-align: center;

        .alert-title {
            color: var(--principal);
            font-size: 28px;
            font-weight: 600;
        }

        .alert-subtitle {
            color: var(--texto);
            font-size: 16px;
        }
    }

    .alert-button {
        height: 40px;
        width: 160px;

        color: var(--background);

        background-color: var(--principal);

        border: 0;
        border-radius: 10px;
    }
}
</style>