import { Professional } from "../entities/Professional";
import { Request, Response } from "express";

import { dataSource } from "../config/database";

import { ProfessionalType } from "../entities/ProfessionalType";

import { AppError } from "../helpers/AppError";
import { IsUUID } from "../helpers/IsUUID";

interface IRequest {
    nome: string;
    telefone: string;
    email: string;
    profissionalId: string;
    situacao: boolean;
}

export async function CreateUserController(request: Request, response: Response) {
    const {
        nome,
        telefone,
        email,
        profissionalId,
        situacao
    }: IRequest = request.body;

    if(!IsUUID(profissionalId || '')) {
        throw new AppError("ID inválido", 400);
    }

    if(
        !nome ||
        !telefone ||
        !email ||
        !profissionalId
    ) {
        return response.status(400).send({
            status: 400,
            message: "Você precisa preencher o campo nome"
        });
    }

    const professionalTypeRepository = dataSource.getRepository(ProfessionalType);

    const profissionalType = await professionalTypeRepository.findOne({
        where: {
            id: profissionalId
        }
    });

    if(!profissionalType) {
        throw new AppError("ID inválido", 400)
    }

    const professionalRepository = dataSource.getRepository(Professional);

    const professional = professionalRepository.create({
        nome,
        email,
        profissionalId,
        situacao: situacao,
        telefone,
    });

    await professionalRepository.save(professional);

    return response.status(201).json(professional);
}