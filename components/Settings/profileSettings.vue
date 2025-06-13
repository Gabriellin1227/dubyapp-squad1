<script setup>
import { useAuth } from '@/stores/useAuth';

const auth = useAuth();
</script>

<template>
    <div class="setting-group profile-infos">
        <div class="group-title">Informações pessoais</div>
        <div class="group-content">
            <div class="setting-card">
                <div class="card-title">Nome completo</div>
                <div v-if="auth.userRole === 'gestor'" class="card-content">Jonathan Curvelo Campos Azevedo</div>
                <div v-if="auth.userRole === 'admin'" class="card-content">Ronald Paiva Reis</div>
            </div>
            <div class="setting-card">
                <div class="card-title">E-mail</div>
                <div v-if="auth.userRole === 'gestor'" class="card-content">gestor@gmail.com</div>
                <div v-if="auth.userRole === 'admin'" class="card-content">admin@duby.com</div>
            </div>
            <div class="setting-card">
                <div class="card-title">Rede social</div>
                <div v-if="auth.userRole === 'gestor'" class="card-content">@jonathancurvelo</div>
                <div v-if="auth.userRole === 'admin'" class="card-content">@ronaldpaiva</div>
            </div>
            <div class="setting-card">
                <div class="card-title">CPF</div>
                <div class="card-content">000.000.000-00</div>
            </div>
            <div class="setting-card">
                <div class="card-title">Telefone</div>
                <div class="card-content">(79) 9 0000-0000</div>
            </div>
            <div class="setting-card">
                <img v-if="auth.userRole === 'gestor'" src="/public/assets/images/photo-pexels.jpg" alt="Foto de perfil">
                <img v-if="auth.userRole === 'admin'" src="/public/assets/images/photo-pexels-2.png" alt="Foto de perfil">
                <div class="card-content">
                    <div class="card-title">Foto de perfil</div>
                    <div>Max. 200x200, 5MB</div>
                </div>
            </div>
        </div>
    </div>
    <div class="setting-group change-password">
        <div class="group-title">Alterar senha</div>
        <div class="group-content">
            <div class="setting-card">
                <div class="card-title">Senha atual</div>
                <div class="card-content">
                    <input type="password" name="password" id="ipassword" placeholder="Digite sua senha atual">
                </div>
            </div>
            <div class="setting-card">
                <div class="card-title">Nova senha</div>
                <div class="card-content">
                    <input type="password" name="password" id="inewPassword" placeholder="Digite a nova senha">
                </div>
            </div>
            <div class="setting-card">
                <div class="card-title">Confirmar senha</div>
                <div class="card-content">
                    <input type="password" name="password" id="iConfirmNewpassword" placeholder="Confirme a nova senha">
                    <button>Salvar</button>
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

            input {
                height: 40px;
                width: 100%;

                padding: 8px;

                background-color: var(--background);

                border: 1px solid rgba(65, 40, 132, 0.2);
                border-radius: 5px;
            }
        }
        

    }
}

.profile-infos {
    .setting-card:last-child {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        img {
            height: 56px;
            width: 56px;

            border-radius: 5px;
        }
    }
}

.change-password {
    .setting-card {
        height: min-content;
    }
    .setting-card:last-child {
        .card-content {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 8px;

            button {
                height: 32px;
                width: 72px;

                color: var(--background);

                background-color: var(--principal);

                border: 0;
                border-radius: 5px;
            }
        }
    }
}
</style>