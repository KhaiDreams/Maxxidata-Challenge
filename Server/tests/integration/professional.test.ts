import request from "supertest";

import { app } from "./../../src/app";
import { dataSource } from "../../src/config/database";

export interface IProfessionalType {
    id: string;
    descricao: string;
    situacao: boolean;
    updatedAt: Date;
    createdAt: Date;
}

describe('Professional', () => {
    beforeAll(async () => {
        await dataSource.initialize();
    });

    afterAll(async () => {
        await dataSource.destroy();
        // await dataSource.dropDatabase();
    })

    describe('[POST] Professional', () => {
        it('should create a professional', async () => {
            const response = await request(app)
                .post("/profissional/criar").send({
                    nome: "John",
                    telefone: "11 99434-59693",
                    email: "john@gmail.com",
                    profissionalId: '74dc0726-8b7a-11ed-a1eb-0242ac120002',
                    situacao: true
                })

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
        });
        it('must edit a created professional', async () => {
            const response = await request(app)
                .post('/profissional/editar')
                .send({
                    id: "74dc0d16-8b7a-11ed-a1eb-0242ac120003",
                    nome: "John",
                    telefone: "11 99434-59693",
                    email: "john@gmail.com",
                    situacao: false
                })
    
            expect(response.status).toBe(200);
            expect(response.body.situacao).toBe(false);
        });
    })

    describe("[GET] Professional", () =>  {
        it('get a created professional', async () => {
            const response = await request(app)
                .get('/profissionais')
            
            expect(response.status).toBe(200);
            expect(response.body[0]).toHaveProperty('id');
        });
    })
})