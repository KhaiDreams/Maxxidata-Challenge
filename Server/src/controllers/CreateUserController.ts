import { User } from "../entities/account";
import { Request, Response } from "express";

import { dataSource } from "../config/database";

interface IRequest {
    nome: string;
    telefone: string;
    email: string;
    tipoDeProfissional: string;
    situacao: boolean;
}

export async function CreateUserController(request: Request, response: Response) {
    try {
        const {
            nome,
            telefone,
            email,
            tipoDeProfissional,
            situacao
        }: IRequest = request.body;

        if(!nome) {
            return response.status(400).send('Você precisa preencher o campo nome');
        }

        const userRepository = dataSource.getRepository(User);

        const user = userRepository.create({
            nome,
            email,
            tipoDeProfissional,
            situacao,
            telefone,
        });

        await userRepository.save(user);

        return response.status(201).send();
    } catch(err) {
        return response.status(400).send(err);
    }
}