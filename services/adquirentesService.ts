import { BASE_URL } from "./shared/baseUrl";
import type { Status } from "./shared/statusEnum";

const API_URL = BASE_URL

export type AdquirentesStatus = Status

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
    return await $fetch(`${API_URL}/adquirentes`);
};

export const getAdquirentesById = async (id: number): Promise<Adquirentes> => {
    return await $fetch(`${API_URL}/adquirentes/id/${id}`);
};

export const createAdquirente = async (data: any): Promise<Adquirentes> => {
    return await $fetch(`${API_URL}/adquirentes`, {
        method: 'POST',
        body: data,
    });
};

export const updateAdquirenteStatus = async (id: number, status: AdquirentesStatus) => {
    return await $fetch(`${API_URL}/adquirentes/${id}/status`, {
        method: 'PUT',
        body: { status }
    })
}