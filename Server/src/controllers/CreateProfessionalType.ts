import { Request, Response } from "express";

import { dataSource } from "../config/database";
import { ProfessionalType } from "../entities/ProfessionalType";

interface IRequest {
    descricao: string,
    situacao: boolean
}

export async function CreateProfessionalType(request: Request, response: Response) {
    const {
        descricao,
        situacao
    }: IRequest = request.body;

    const professionalType = dataSource.getRepository(ProfessionalType);

    const professional = professionalType.create({
        descricao,
        situacao
    })

    await professionalType.save(professional);

    return response.status(201).json(professional);
}