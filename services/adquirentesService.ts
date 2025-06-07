export const BASE_URL = 'http://localhost:3001/duby';

export enum AdquirentesStatus {
    Ativo = 'ativo',
    Inativo = 'inativo',
}

export interface Adquirentes {
    id: number;
    empresa_id: number;
    nome: string;
    razao_social: string;
    cnpj: string;
    conta_transferencia: string;
    status: AdquirentesStatus;
    observacoes: string;
    logo_url: string;
    criado_em: Date;
    banco_id: number;
}

export const getAllAdquirentes = async (): Promise<Adquirentes[]> => {
    return await $fetch(`${BASE_URL}/adquirentes`);
};

export const getAdquirentesById = async (id: number): Promise<Adquirentes> => {
    return await $fetch(`${BASE_URL}/adquirentes/id/${id}`);
};