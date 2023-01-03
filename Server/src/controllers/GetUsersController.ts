import { Professional } from "../entities/Professional";
import { Request, Response } from "express";

import { dataSource } from "../config/database";

import { ProfessionalType } from "../entities/ProfessionalType";

interface IRequest {
    nome: string;
    telefone: string;
    email: string;
    profissionalId: string;
    situacao: boolean;
}

export async function GetUsersController(request: Request, response: Response) {
    const professionalRepository = dataSource.getRepository(Professional);

    const professional = await professionalRepository.find();

    return response.status(200).send(professional);
}