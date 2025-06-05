<template>
    <div class="container-principal">
        <div class="tab-principal">
            <div class="titulo-banco">
                <h1>{{ banco?.razao_social }}</h1>
            </div>
            <div class="menu-interativo">
                <p>Status: {{ banco?.status === 'ativo' ? 'Ativo' : 'Inativo' }}</p>
            </div>
        </div>
        <div class="info-banco">
            <div class="titulo">
                <p>Informações do banco</p>
            </div>
            <div class="container-banco">
                <div class="img-banco">
                    <img :src="banco?.logo_url" alt="Logo" />
                </div>
                <div class="nome-banco">
                    <h6>{{ banco?.nome }}</h6>
                    <p>{{ banco?.razao_social }}</p>
                </div>
                <div class="cnpj-banco">
                    <h6>CNPJ</h6>
                    <p>{{ banco?.cnpj }}</p>
                </div>
                <div class="cod-banco">
                    <h6>Código do banco</h6>
                    <p>{{ banco?.codigo }}</p>
                </div>
            </div>
        </div>

        <div class="info-empresa">
            <div class="titulo">
                    <p>Informações da Empresa</p>
                </div>
            <div class="container-empresa">
                <div class="agencia-banco">
                    <p>Agência</p>
                    <p>{{ banco?.agencia }}</p>
                </div>
                <div class="cc-banco">
                    <p>Conta Corrente</p>
                    <p>{{ banco?.conta_corrente }}</p>
                </div>
            </div>
        </div>

        <div class="info-obs">
            <div class="titulo">
                <p>Observações</p>
            </div>
                <div class="container-obs">
                    <div class="obs-banco">
                        <p>{{ banco?.observacoes }}</p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getBancosById, type Banco } from '~/services/bancoService';

const route = useRoute();
const banco = ref<Banco | null>(null);

const fetchBanco = async () => {
    const id = Number(route.params.id);
    try {
        banco.value = await getBancosById(id);
    } catch (error) {
        console.error('Erro ao buscar banco:', error);
    }
};

onMounted(() => {
    fetchBanco();
});
</script>

<style scoped>
.container-principal {
    padding: 16px;
}

.tab-principal {
    display: flex;
    margin: 0 0 40px;
}

.container-banco {
    display: flex;
    width: 1104px;
    height: 160px;
    padding: 0 16px;
    border: 1px #41288433 solid;
    border-radius: 10px;
    gap: 16px;
}

.titulo p{
    font-size: 20px;
    font-weight: 400;
    margin: 0;
}

.img-banco {
    display: flex;
    align-items: center;
}

.img-banco img {
    display: flex;
    width: 128px;
    border: 1px #41288433 solid;
    border-radius: 10px;
}

.nome-banco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 208px;
    gap: 8px;
}

.nome-banco h6 {
    font-size: 32px;
    font-weight: 600;
    color: #12283F;
}

.nome-banco p {
    color: #12283FE5;
    font-weight: 400;
}

.cnpj-banco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 308px;
    gap: 8px;
}

.cnpj-banco h6,
.cod-banco h6 {
    color: #12283F80;
    font-weight: 400;
}

.cod-banco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 308px;
    gap: 8px;
}

.titulo-banco {
    display: flex;
    height: 48px;
}

.titulo-banco h1 {
    color: #412884;
    font-weight: 600;
    font-size: var(--font-xxl);
}

.container-empresa {
    display: flex;
    flex-direction: column;
    width: 1104px;
    height: 170px;
    padding: 16px;
    border: 1px #41288433 solid;
    border-radius: 10px;
    gap: 24px;
}

.agencia-banco {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.cc-banco {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.agencia-banco p, .cc-banco p{
    margin: 0;
}

.info-empresa {
    margin: 56px 0 0 0;
}

.container-obs {
    display: flex;
    flex-direction: column;
    width: 1104px;
    height: 136px;
    padding: 16px;
    border: 1px #41288433 solid;
    border-radius: 10px;
}

.info-obs {
    margin: 56px 0 0 0;
}

.obs-banco p {
    margin: 0;
    font-size: var(--font-snd);
}

</style>
