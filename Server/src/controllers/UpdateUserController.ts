import { Request, Response } from "express";

import { ProfessionalType } from "../entities/ProfessionalType";

import { dataSource } from "../config/database";
import { Professional } from "../entities/Professional";
import { AppError } from "../helpers/AppError";
import { IsUUID } from "../helpers/IsUUID";

interface IRequest {
    id: string;
    nome: string;
    telefone: string;
    email: string;
    profissionalId: string;
    situacao: boolean;
}

export async function UpdateUserController(request: Request, response: Response) {
    const { 
        id,
        nome,
        email,
        situacao,
        telefone
    }: IRequest = request.body;

    if(!IsUUID(id) || '') {
        throw new AppError("ID inválido", 400);
    }

    const professionalRepository = dataSource.getRepository(Professional);

    const professional = await professionalRepository.findOne({
        where: {
            id
        }
    });

    if(!professional) {
        throw new AppError("ID inválido")
    };

    const updateUser = {
        nome,
        email,
        situacao,
        telefone
    }

    Object.assign(professional, updateUser);
    
    await professionalRepository.save(professional);

    return response.status(200).json(professional);
}