import { BASE_URL } from "./shared/baseUrl";
import type { Status } from "./shared/statusEnum";

const API_URL = BASE_URL

export type BancoStatus = Status

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
    return await $fetch(`${API_URL}/bancos`);
};

export const getBancosById = async (id: number): Promise<Banco> => {
    return await $fetch(`${API_URL}/bancos/id/${id}`);
};

export async function buscarBancoPorNome(nome: string): Promise<Banco[]> {
    const response = await fetch(`http://localhost:3001/duby/bancos/nome/${encodeURIComponent(nome)}`)
    if (!response.ok) throw new Error('Erro ao buscar banco por nome')
    return await response.json()
}

export const updateBancoStatus = async (id: number, status: BancoStatus) => {
    return await $fetch(`${API_URL}/bancos/${id}/status`, {
        method: 'PUT',
        body: { status }
    })
}