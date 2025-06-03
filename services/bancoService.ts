export const BASE_URL = 'http://localhost:3001/duby';

export enum BancoStatus {
    Ativo = 'ativo',
    Inativo = 'inativo',
}

export interface Banco {
    id: number;
    empresa_id: number;
    nome: string;
    razao_social: string;
    cnpj: string;
    codigo: string;
    agencia: string;
    conta_corrente: string;
    status: BancoStatus;
    observacoes: string;
    logo_url: string;
    criado_em: Date; 
}

export const getAllBancos = async (): Promise<Banco[]> => {
    return await $fetch(`${BASE_URL}/bancos`);
};