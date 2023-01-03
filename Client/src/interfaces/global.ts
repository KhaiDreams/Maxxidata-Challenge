export interface IProfessional {
    id: string;
    nome: string;
    telefone: string;
    email: string;
    profissionalId: string;
    situacao: boolean;
    updatedAt: Date;
    createdAt: Date;
}

export interface IProfessionalType {
    id: string;
    descricao: string;
    situacao: boolean;
    updatedAt: Date;
    createdAt: Date;
}