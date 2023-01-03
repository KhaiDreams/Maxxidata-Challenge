import { Request, Response } from "express";

import { dataSource } from "../config/database";

import { ProfessionalType } from "../entities/ProfessionalType";

export async function GetProfesssionalType(request: Request, response: Response) {
    const professionalRepository = dataSource.getRepository(ProfessionalType);

    const professionalTypeList = await professionalRepository.find();

    return response.status(200).send(professionalTypeList);
}