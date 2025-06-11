<script setup></script>

<template>
    <div class="setting-group">
        <div class="group-title">Meios de envio</div>
        <div class="group-content">
            <div class="setting-card">
                <div class="card-content">
                    <label class="toggle-container">
                        <div class="toggle">
                        <input type="checkbox">
                        <span class="slider"></span>
                        </div>
                        <span class="label-text">E-mail</span>
                    </label>
                    <label class="toggle-container">
                        <div class="toggle">
                        <input type="checkbox">
                        <span class="slider"></span>
                        </div>
                        <span class="label-text">Sistema</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div class="setting-group notification-preferences">
        <div class="group-title">Preferências de notificação</div>
        <div class="group-content">
            <div class="setting-card">
                <div class="card-content">
                    <label class="toggle-container">
                        <div class="toggle">
                        <input type="checkbox">
                        <span class="slider"></span>
                        </div>
                        <span class="label-text">Ao ser realizada uma conciliação.</span>
                    </label>
                    <label class="toggle-container">
                        <div class="toggle">
                        <input type="checkbox">
                        <span class="slider"></span>
                        </div>
                        <span class="label-text">Quando está próximo o vencimento de uma vigência.</span>
                    </label>
                    <label class="toggle-container">
                        <div class="toggle">
                        <input type="checkbox" disabled>
                        <span class="slider"></span>
                        </div>
                        <span class="label-text">Quando uma conta é cadastrada/excluída/alterada.</span>
                    </label>
                    <label class="toggle-container">
                        <div class="toggle">
                        <input type="checkbox">
                        <span class="slider"></span>
                        </div>
                        <span class="label-text">Quando as taxas são alteradas.</span>
                    </label>
                    <label class="toggle-container">
                        <div class="toggle">
                        <input type="checkbox" disabled>
                        <span class="slider"></span>
                        </div>
                        <span class="label-text">Quando a taxa Selic sofre uma mudança.</span>
                    </label>
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

            .card-content {
                display: flex;
                gap: 24px 40px;
                
                color: rgba(18, 40, 64, 0.75);
                font-size: 14px;
            }
        }
    }
}

.notification-preferences {
    .card-content {
        flex-direction: column;
    }
}

.toggle-container {
      display: flex;
      align-items: center;
      font-family: sans-serif;
    }

    .toggle {
      position: relative;
      width: 56px;
      height: 24px;
    }

    .toggle input {
      display: none;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      background-color: #412884;
      border-radius: 34px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: 0.4s;
    }

    .slider::before {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      left: 4px;
      top: 2px;
      background-color: #f6f6f6;
      border-radius: 50%;
      transition: 0.4s;
    }

    input:checked + .slider::before {
      transform: translateX(32px);
    }

    .label-text {
      margin-left: 16px;
      color: #1f2e45;
      font-size: 16px;
    }

    input:disabled + .slider {
      /* This is the corrected line */
      background-color: rgba(65, 40, 132, 0.2); /* 20% opacity of #412884 */
    }

    input:disabled + .slider::before {
      background-color: #f6f6f6;
    }
</style>