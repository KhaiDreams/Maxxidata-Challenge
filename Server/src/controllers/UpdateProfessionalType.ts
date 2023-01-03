import { Request, Response } from "express";

import { ProfessionalType } from "../entities/ProfessionalType";
import { dataSource } from "../config/database";
import { AppError } from "../helpers/AppError";

import { IsUUID } from "../helpers/IsUUID";

interface IRequest {
    id: string,
    descricao: string;
    situacao: boolean;
}

export async function UpdateProfessionalType(request: Request, response: Response) {
    const {
        id,
        descricao,
        situacao
    }: IRequest = request.body;

    if(!IsUUID(id)) {
        throw new AppError("ID inválido", 400);
    }

    const professionalRepository = dataSource.getRepository(ProfessionalType);
    
    const professionalType = await professionalRepository.findOne({
        where: {
            id
        }
    });

    if(!professionalType) {
        throw new AppError("ID inválido", 400);
    }

    const UpdateProfessionalType = {
        descricao,
        situacao
    }

    Object.assign(professionalType, UpdateProfessionalType);

    await professionalRepository.save(professionalType);

    return response.status(200).json(professionalType);
}