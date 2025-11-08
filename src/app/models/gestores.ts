export interface Gestores {
    id: string
    nome: string
    email: string
    cargo: string
    departamentoId: string
}

export type GestoresParaCriar = Omit<Gestores,'id'>
