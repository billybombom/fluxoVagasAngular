export interface Departamentos {
    id: string
    departamento: string
}

export type DepartamentoCriar = Omit<Departamentos,'id'>
