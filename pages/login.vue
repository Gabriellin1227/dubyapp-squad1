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

function handleLogin() {
    const success = auth.login(form.email, form.password);

    if (success) {
        router.push('/');
    } else {
        alert('Login inválido'); // aqui posso adicionar o modal de aviso
    }
}
</script>

<template>
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
                    <a href="#"><span>Esqueci minha senha</span></a>
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
}

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

form > div {
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
</style>