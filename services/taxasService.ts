import { BASE_URL } from "./shared/baseUrl";
import type { Status, TipoTX } from "./shared/statusEnum";

const API_URL = BASE_URL

export type TipoTaxa = TipoTX

export interface Taxas {
    id: number;
    adquirente_id: number;
    nome: string;
    tipo_transacao: TipoTX;
    parcelas: number;
    bandeira: string;
    percentual_taxa: number;
    taxa_fixa: number;
    vigente_a_partir: Date;
    criado_em: Date;
}

export const getAllTaxas = async (): Promise<Taxas[]> => {
    return await $fetch(`${API_URL}/taxas`);
};

export const getTaxasByAdquirenteId = async (id: number): Promise<Taxas[]> => {
    return await $fetch(`${API_URL}/taxas/adquirente/${id}`);
};
