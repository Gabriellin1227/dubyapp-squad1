const BASE_URL = 'http://localhost:3001/duby'

export enum BancoStatus {
    Ativo = 'ativo',
    Inativo = 'inativo',
    Pendente = 'pendente',
}

export interface Banco {
    id: number
    nome: string
    agencia: string
    conta: string
    status: BancoStatus
}

export const getAllBancos = async (): Promise<Banco[]> => {
    return await $fetch(`${BASE_URL}/bancos`)
}