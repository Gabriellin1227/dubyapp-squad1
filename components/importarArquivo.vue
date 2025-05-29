<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps<{
    title: string;
    labelSelector: string;
    options: string[];
}>();

const emit = defineEmits(['next', 'back', 'showImportedArchives']);
const archive = ref<File | null>(null);
const archiveInput = ref<HTMLInputElement | null>(null);
const showModal = ref(false);
const router = useRouter();

const handleDrop = (event: DragEvent) => {
    const files = event.dataTransfer?.files;
    if(files && files.length) {
        archive.value = files[0];
    }
};

const handleFileInput = (event: Event) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length) {
        archive.value = files[0];
    }
};

const handleAreaClick = (event: MouseEvent) => {
    if (archive.value) {
        return;
    }

    emit('showImportedArchives');
};

const removeArchive = () => {
    archive.value = null;
    if (archiveInput.value) archiveInput.value.value = '';
};

const openModal = () => {
    showModal.value = true;
};

const newReconcile = () => {
    router.back();
};
</script>

<template>
    <div class="container">
        <div v-if="showModal" class="modal-overlay">
            <dialog open class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-title">Conciliação realizada</div>
                    </div>
                    <div class="modal-description">
                        Conciliação finalizada. Você pode consultá-la agora ou iniciar uma nova.
                    </div>
                    <div class="modal-buttons">
                        <button @click="newReconcile">Voltar</button>
                        <button>Ir para consultas</button>
                    </div>
                </div>
            </dialog>
        </div>
        <div class="content-wrapper">
        <div class="titulo">{{ title }}</div>

        <div class="container-content">
            <div class="boxAdd">
                <h2>{{ labelSelector }}</h2>
                <div class="selecionarConta">
                <select class="selectAdquirenteOuBanco">
                    <option value="#" disabled selected class="opt-placeholder">
                    Selecione a instituição correspondente
                    </option>
                    <option v-for="option in options" :key="option">{{ option }}</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="selectSeta">
                    <path fill="none" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6" />
                </svg>
                </div>
            </div>
            <div class="seletorArquivo">
                <div>
                <h2>Importar Arquivo</h2>
                <p>
                    Certifique-se de que o arquivo adicionado esteja com as informações
                    corretas.
                </p>
                </div>
                <div class="areaDeUpload" @dragover.prevent @dragenter.prevent @drop.prevent="handleDrop">
                    <label
                    for="inputArquivo"
                    id="areaDeUpload"
                    role="button"
                    tabindex="0"
                    @click.prevent="handleAreaClick"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="#979797" fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 0 0-5.02 3.25a23 23 0 0 1-.186.41l-.068.132a.5.5 0 0 1-.127.14a.5.5 0 0 1-.18.058c-.036.007-.11.01-.419.01a3.5 3.5 0 1 0 0 7h.672l1-1H6a2.5 2.5 0 0 1 0-5h.054c.226 0 .413 0 .562-.03c.18-.036.358-.09.526-.2c.168-.108.29-.248.398-.398c.058-.08.11-.184.157-.283q.074-.159.193-.424l.002-.005a4.501 4.501 0 0 1 8.216 0l.002.006q.119.264.193.423c.047.099.099.202.157.283c.107.15.23.29.398.399s.346.163.526.2c.149.03.336.03.562.029H18a2.5 2.5 0 0 1 0 5h-1.672l1 1H18a3.5 3.5 0 1 0 0-7c-.309 0-.383-.003-.418-.01a.5.5 0 0 1-.18-.059a.5.5 0 0 1-.128-.14l-.016-.027l-.052-.105a23 23 0 0 1-.186-.409A5.5 5.5 0 0 0 12 2.5" clip-rule="evenodd" />
                            <path fill="#979797" d="m12 12l-.354-.354l.354-.353l.354.353zm.5 9a.5.5 0 0 1-1 0zm-4.854-5.354l4-4l.708.708l-4 4zm4.708-4l4 4l-.708.708l-4-4zM12.5 12v9h-1v-9z" />
                        </svg>
                        <div class="textoUpload" v-if="archive">
                            <div class="textoPrincipal">
                                {{ archive.name }}
                            </div>
                            <button @click.stop.prevent="removeArchive" class="remove-archive-button">x</button>
                        </div>
                        <div class="textoUpload" v-else>
                            <div class="textoPrincipal">
                                Solte o arquivo ou clique para buscar
                            </div>
                            <div class="texto2" id="arquivos">
                                Arquivo CSV ou OFX de até 50MB
                            </div>
                        </div>
                        <input
                        type="file"
                        id="inputArquivo"
                        accept=".csv,.ofx"
                        hidden
                        @change="handleFileInput"
                        />
                    </label>
                </div>
            </div>
        </div>
        <div class="botao">
            <button class="importButton" v-if="labelSelector == 'Adquirente'" @click="emit('back')">Cancelar</button>
            <button class="importButton" v-if="labelSelector != 'Adquirente'" @click="emit('next')">Próximo</button>
            <button class="importButton" v-if="labelSelector == 'Adquirente'" @click="openModal">Conciliar</button>
        </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 944px;
    height: min-content; 

    padding: var(--spacing-xl);

    background: var(--principal);

    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    h2 {
        width: 100%;
        
        color: var(--background); 
        font-size: var(--font-slg);
        font-family: var(--fonte-padrao);
        font-weight: 400;
    }
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    
    width: 880px;
}

.container-content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
}

.titulo {
    width: 556px;
    height: 40px;

    color: var(--background); 
    text-align: center;
    font-size: var(--font-xl);
    font-family: var(--fonte-padrao);
    font-weight: 400;
}

.boxAdd {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);

    width: 100%;

    h2 {
        margin: 0;
    }
}

.selecionarConta {
    position: relative;

    height: 52px;
    width: 100%;
}

.selectAdquirenteOuBanco {
    height: 100%;
    width: 100%;

    padding: 12px;

    border-radius: 8px;
    
    color: var(--placeholder);
    font-size: var(--font-md);
    font-weight: 400;

    background-color: var(--background);

    appearance: none;

    cursor: pointer;
    outline: 2px solid transparent;
    transition: outline 0.3s ease-in-out;
}

.selectAdquirenteOuBanco:focus {
    outline: 2px solid var(--comp-4);
}

.opt-placeholder {
    color: var(--placeholder);
}

.selectSeta {
    position: absolute;

    right: 15px;
    top: 50%;

    transform: translateY(-50%);

    pointer-events: none;
}

.seletorArquivo {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: var(--spacing-sm);

}

.seletorArquivo h2 {
    line-height: 24px;
    margin: 0;
}

.seletorArquivo p {
    margin: 0;
    
    color: rgba(256, 256, 256, 0.6);
    font-size: var(--font-snd);
    font-family: var(--fonte-padrao);
    line-height: 24px;
}

.areaDeUpload {
    height: 144px;
    width: 100%;
    padding: 12px;

    background: var(--background); 
    border-radius: 10px;

    transition: background 1s ease;
}

#areaDeUpload {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 12px;

    background: var(--background); 
    border-radius: 10px;
    border: 1px dashed var(--texto);

    outline: 1px solid transparent;
    transition: outline 0.3s ease-in-out;
}

#areaDeUpload:hover {
    cursor: pointer;
}

#areaDeUpload:focus {
    outline: 2px solid var(--comp-4);
}

.textoUpload {
    text-align: center;
    color: var(--texto);
    font-family: var(--fonte-padrao);
}

.centerFileInput {
    display: flex;
    justify-content: center;
    align-content: center;
}

.textoPrincipal {
    line-height: 32px;
    font-size: var(--font-md);
}

.texto2 {
    color: #979797;
    line-height: 24px;
    font-size: var(--font-snd);
}

.remove-archive-button {
    height: min-content;
    width: 26px;

    color: var(--background);
    background-color: var(--principal);

    border: 0;
    border-radius: 5px;
}

.botao {
    display: flex;
    gap: var(--spacing-xl);
}

.botao button {
    border: 0;
}

#botao1 {
    width: 152px;
    height: 56px;
    padding: 11px 30px; 
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: var(--font-md);
    font-family: var(--fonte-padrao);
    font-weight: 500;

    background: var(--principal);
    color: #F5F5F5;

    border: 1px solid var(--background);

    outline: 2px solid transparent;
    transition: outline 0.3s ease-in-out;
}

#botao1:hover {
    cursor: pointer;
    background: var(--comp-1);
}

#botao1:focus {
    outline: 2px solid var(--comp-4);
}

.importButton {

    width: 152px;
    height: 56px;
    padding: 11px 30px; 
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: var(--font-md);
    font-family: var(--fonte-padrao);
    font-weight: 500;

    background: var(--background);
    color: var(--principal);

    outline: 2px solid transparent;
    transition: outline 0.3s ease-in-out;
}

.importButton:hover {
    cursor: pointer;
    background-color: #e6e6e6;
}

.importButton:focus {
    outline: 2px solid var(--comp-4);
}

.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;

    width: calc(100vw - 256px);
    height: var(--total-height);

    background: rgba(0, 0, 0, 0.3);
}

.modal-dialog {
    all: unset;
    z-index: 1000;

    width: 424px;

    padding: 40px;

    background-color: var(--background);

    border-radius: 20px;
}

.modal-header {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
    width: 100%;

    .modal-title {
        color: var(--principal);
        font-size: 28px;
        font-weight: 600;
    }
}

.modal-description {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);

    height: min-content;
    width: 100%;

    color: var(--texto);
    font-size: var(--font-snd);
    text-align: center;

    padding: 24px 0;
}

.modal-buttons {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);

    height: 40px;
    width: 100%;

    button {
        height: 100%;
        width: 144px;

        padding: 0 16px;

        font-size: var(--font-snd);

        border-radius: 5px;
    }

    button:nth-of-type(1) {
        color: var(--principal);

        border: 1px solid var(--principal);
    }

    button:nth-of-type(2) {
        color: var(--background);

        background-color: var(--principal);

        border: 0;
    }
}
</style>