<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['showImportedArchives']);
const showingImporteds = ref(false);
const archive = ref<File | null>(null);
const archiveInput = ref<HTMLInputElement | null>(null);
const showModal = ref(false);
const selectedArchive = ref<Archive | null>(null);

interface Archive {
    name: string;
    type: string;
    size: string;
    period: string;
    importDate: string;
    importedBy: string;
}

const importedArchives = [
    {
        name: 'arquivo001',
        type: 'OFX',
        size: '12MB',
        period: '01.04.2024 - 02.05.2024',
        importDate: '03.05.2024',
        importedBy: 'Jonathan Curvelo'
    },
    {
        name: 'transacoes_fevereiro',
        type: 'CSV',
        size: '8MB',
        period: '01.02.2024 - 29.02.2024',
        importDate: '01.03.2024',
        importedBy: 'Jonathan Curvelo'
    },
    {
        name: 'recebimentos_marco',
        type: 'OFX',
        size: '25MB',
        period: '01.03.2024 - 31.03.2024',
        importDate: '02.04.2024',
        importedBy: 'Jonathan Curvelo'
    },
    {
        name: 'clientes_novos',
        type: 'CSV',
        size: '15MB',
        period: '15.03.2024 - 15.04.2024',
        importDate: '16.04.2024',
        importedBy: 'Jonathan Curvelo'
    },
    {
        name: 'movimentacao_banco',
        type: 'OFX',
        size: '42MB',
        period: '10.04.2024 - 30.04.2024',
        importDate: '01.05.2024',
        importedBy: 'Jonathan Curvelo'
    },
    {
        name: 'relatorio_maio',
        type: 'CSV',
        size: '33MB',
        period: '01.05.2024 - 20.05.2024',
        importDate: '21.05.2024',
        importedBy: 'Jonathan Curvelo'
    },
    {
        name: 'relatorio_maio',
        type: 'CSV',
        size: '33MB',
        period: '01.05.2024 - 20.05.2024',
        importDate: '21.05.2024',
        importedBy: 'Jonathan Curvelo'
    }
];

defineProps({
    title: String,
    labelSelector: String,
    options: Array
});

const handleDrop = (event: DragEvent) => {
    const files = event.dataTransfer?.files;
    if (files && files.length) {
        archive.value = files[0];
    }
};

const handleFileInput = (event: Event) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length) {
        archive.value = files[0];
    }
};

const removeArchive = () => {
    archive.value = null;
    if (archiveInput.value) archiveInput.value.value = '';
};


const toggleArea = () => {
    showingImporteds.value = !showingImporteds.value;
};

const openModal = (archive: Archive) => {
    selectedArchive.value = archive;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    selectedArchive.value = null;
};
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="title-container">
                <img src="~/assets/images/logo-duby-branca.png">
                <h1>Selecionar um arquivo</h1>
            </div>
            <a href="#">
                <div class="iconeCancelar" @click="emit('showImportedArchives')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="none" stroke="#412884" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7" />
                    </svg>
                </div>
            </a>
        </div>
        <div class="header-table">
            <div class="select-area">
                <a href="#" @click="toggleArea">
                    <div :class="['area-select', { active: !showingImporteds }]" id="uploadArea">
                        Upload
                        <div class="selected-area-bar"></div>
                    </div>
                </a>
                <a href="#" @click="toggleArea">
                    <div :class="['area-select', { active: showingImporteds }]" id="importedArea">
                        Importados
                        <div class="selected-area-bar"></div>
                    </div>
                </a>
            </div>
            <div id="tableImportedTitles" class="table-titles" v-show="showingImporteds">
                <div class="table-title">Nome</div>
                <div class="table-title">Período</div>
                <div class="table-title">Data de importação</div>
                <div class="table-title">Importado por</div>
            </div>
        </div>
        <div id="tableImportedContainer" class="table-container" tabindex="-1" v-show="showingImporteds">
            <table>
                <tbody>
                    <tr v-for="(archive, index) in importedArchives" :key="index">
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#F6F6F6"
                                    d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m7 2h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zM6 7h2v2H6zm0 4h2v2H6zm0 4h2v2H6z" />
                            </svg>
                        </td>
                        <td class="fade-text">{{ archive.name }}</td>
                        <td>{{ archive.period }}</td>
                        <td>{{ archive.importDate }}</td>
                        <td>{{ archive.importedBy }}</td>
                        <td>
                            <a href="#" @click.prevent="openModal(archive)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                                    <g fill="none" stroke="#C5BED7" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.7" color="#C5BED7">
                                        <path
                                            d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045" />
                                        <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0" />
                                    </g>
                                </svg>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
                <dialog open class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="modal-title">Arquivo importado</div>
                            <button @click="closeModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#F6F6F6" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.5" d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7" />
                                </svg>
                            </button>
                        </div>
                        <div class="modal-archive-description">
                            <div class="modal-name-container">
                                <div class="modal-info-name">{{ selectedArchive?.name }}</div>
                                <div class="edit-info-name">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                        <g fill="none" stroke="#412884" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2.5">
                                            <path
                                                d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                                            <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="modal-info"><strong>Tipo:</strong> {{ selectedArchive?.type }}</div>
                            <div class="modal-info"><strong>Tamanho:</strong> {{ selectedArchive?.size }}</div>
                            <div class="modal-info"><strong>Período:</strong> {{ selectedArchive?.period }}</div>
                            <div class="modal-info"><strong>Data de importação:</strong> {{ selectedArchive?.importDate
                                }}</div>
                            <div class="modal-info"><strong>Importado por:</strong> {{ selectedArchive?.importedBy }}
                            </div>
                        </div>
                        <div class="modal-buttons">
                            <button>Excluir</button>
                            <button>Baixar</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
        <div id="fieldUpload" class="areaDeUpload" @dragover.prevent @dragenter.prevent @drop.prevent="handleDrop"
            v-show="!showingImporteds">
            <label for="inputArquivosimportados" id="areaDeUpload" role="button" tabindex="0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="#979797" fill-rule="evenodd"
                        d="M12 2.5a5.5 5.5 0 0 0-5.02 3.25a23 23 0 0 1-.186.41l-.068.132a.5.5 0 0 1-.127.14a.5.5 0 0 1-.18.058c-.036.007-.11.01-.419.01a3.5 3.5 0 1 0 0 7h.672l1-1H6a2.5 2.5 0 0 1 0-5h.054c.226 0 .413 0 .562-.03c.18-.036.358-.09.526-.2c.168-.108.29-.248.398-.398c.058-.08.11-.184.157-.283q.074-.159.193-.424l.002-.005a4.501 4.501 0 0 1 8.216 0l.002.006q.119.264.193.423c.047.099.099.202.157.283c.107.15.23.29.398.399s.346.163.526.2c.149.03.336.03.562.029H18a2.5 2.5 0 0 1 0 5h-1.672l1 1H18a3.5 3.5 0 1 0 0-7c-.309 0-.383-.003-.418-.01a.5.5 0 0 1-.18-.059a.5.5 0 0 1-.128-.14l-.016-.027l-.052-.105a23 23 0 0 1-.186-.409A5.5 5.5 0 0 0 12 2.5"
                        clip-rule="evenodd" />
                    <path fill="#979797"
                        d="m12 12l-.354-.354l.354-.353l.354.353zm.5 9a.5.5 0 0 1-1 0zm-4.854-5.354l4-4l.708.708l-4 4zm4.708-4l4 4l-.708.708l-4-4zM12.5 12v9h-1v-9z" />
                </svg>
                <div class="textoUpload" v-if="archive">
                    <div class="textoPrincipal">
                        {{ archive.name }}
                    </div>
                    <div class="action-button-upload">
                        <button @click.stop.prevent="removeArchive" class="remove-archive-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="#F6F6F6" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2.5" d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7" />
                            </svg>
                        </button>
                        <button @click="toggleArea" class="remove-archive-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#F6F6F6" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
                                    stroke-width="0." stroke="#F6F6F6" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="textoUpload" v-else>
                    <div class="textoPrincipal">
                        Solte o arquivo ou clique para buscar
                    </div>
                    <div class="texto2" id="arquivos">
                        Arquivo CSV ou OFX de até 50MB
                    </div>
                </div>
                <input type="file" id="inputArquivosimportados" ref="archiveInput" accept=".csv,.ofx" hidden
                    @change="handleFileInput" />
            </label>
        </div>
    </div>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--font-xl);

    width: 944px;
    height: 552px;

    padding: var(--spacing-xl) 0;

    background: var(--principal);

    border-radius: 20px;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 32px;
    width: 880px;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xl);

    a {
        border-radius: 10px;

        outline: 2px solid transparent;
        transition: outline 0.3s ease-in-out;
    }

    a:focus {
        outline: 2px solid var(--comp-4);
    }

    .title-container {
        display: flex;
        align-items: center;
        gap: var(--spacing-lg);

        img {
            width: 32px;
            height: 32px;
        }

        h1 {
            display: flex;
            align-items: center;
            gap: var(--spacing-lg);

            width: 272px;

            margin: 0;

            color: var(--background);
            font-size: var(--font-lg);
            font-family: var(--fonte-padrao);
            font-weight: 600;
            line-height: 32px;
        }
    }

    .iconeCancelar {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 32px;
        height: 32px;

        background-color: var(--background);
        border-radius: 10px;
    }
}

.header-table {
    display: flex;
    flex-direction: column;

    width: 100%;

    .select-area {
        display: flex;

        width: 100%;

        padding: 0 32px;

        border-bottom: 1px solid rgb(246, 246, 246, 0.1);



        .area-select {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 40px;
            width: 136px;

            padding: var(--spacing-sm) var(--spacing-md);

            color: var(--background);
            font-size: var(--font-snd);
            font-weight: 500;

            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
        }

        .area-select:hover {
            background-color: rgba(246, 246, 246, 0.1);

        }

        .area-select.active {
            position: relative;

            width: 136px;

            background: rgba(246, 246, 246, 0.10);

            .selected-area-bar {
                width: 54px;
                height: 3px;
                border-radius: 10px 10px 0 0;
                background: #F6F6F6;
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
            }
        }
    }

    .table-titles {
        display: flex;
        align-items: center;
        gap: var(--spacing-lg);

        height: 40px;
        width: 100%;

        padding: 0 84px;

        border-bottom: 1px solid rgb(246, 246, 246, 0.1);

        .table-title {
            color: rgb(246, 246, 246, 0.7);
            font-size: var(--font-md);
            font-weight: 400;
        }

        .table-title {
            width: 160px;
        }

        .table-title:nth-of-type(2) {
            width: 224px;
        }
    }
}

.table-container {
    display: block;

    height: 312px;
    width: 880px;

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: none;

    table {
        width: 100%;

        tbody {
            display: flex;
            flex-direction: column;
            gap: 24px;

            width: 100%;

            tr,
            td {
                height: 32px;
            }

            tr {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: var(--spacing-lg);

                border-radius: 5px;

                cursor: pointer;

                td:nth-of-type(2),
                td:nth-of-type(4) {
                    width: 160px;
                }

                td:nth-of-type(3) {
                    width: 224px;
                }

                td:nth-of-type(5) {
                    width: 152px;
                }
            }

            tr:hover {
                background-color: rgb(246, 246, 246, 0.1);
            }

            .fade-text {
                max-width: 100%;
                /* Ajuste conforme seu layout */
                white-space: nowrap;
                overflow: hidden;

                -webkit-mask-image: linear-gradient(to right, black 70%, transparent 100%);
                mask-image: linear-gradient(to right, black 70%, transparent 100%);
            }

            td {
                display: flex;
                align-items: center;

                color: var(--background);
                font-size: var(--font-md);
                font-weight: 400;

                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                a {
                    display: flex;
                    align-items: center;
                    height: 25px;

                    border-radius: 5px;

                    outline: 2px solid transparent;
                    transition: outline 0.3s ease-in-out;
                }

                a:focus {
                    outline: 2px solid var(--comp-4);
                }
            }
        }
    }
}

.areaDeUpload {
    height: 100%;
    width: 880px;
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

#botao2 {

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

#botao2:hover {
    cursor: pointer;
    background-color: #e6e6e6;
}

#botao2:focus {
    outline: 2px solid var(--comp-4);
}

.action-button-upload {
    display: flex;
    justify-content: center;
    gap: var(--spacing-sm);
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

    height: 320px;
    width: 424px;

    padding: 40px;

    background-color: var(--background);

    border-radius: 20px;
}

.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    width: 100%;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;
    width: 100%;

    .modal-title {
        color: var(--principal);
        font-size: 28px;
        font-weight: 600;
    }

    button {
        height: 28px;
        width: 28px;

        background-color: var(--principal);

        border-radius: 5px;
        border: 0;
    }
}

.modal-archive-description {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);

    height: min-content;
    width: 100%;

    .modal-name-container {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);

        height: 32px;

        .modal-info-name {
            color: var(--principal);
            font-size: var(--font-slg);
            font-weight: 600;
        }
    }

    .modal-info {
        display: flex;
        align-items: center;

        height: 24px;

        color: rgb(18, 40, 63, 0.6);
    }
}

.modal-buttons {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);

    height: 40px;
    width: 100%;

    button {
        height: 100%;
        width: 104px;

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