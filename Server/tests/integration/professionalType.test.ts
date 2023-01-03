import request from "supertest";
import { app } from "./../../src/app";
import { dataSource } from "../../src/config/database";

import { setup } from "../utils/setup";

describe('ProfessionalType', () => {
    beforeAll(async () => {
        await dataSource.initialize();
        await setup();
    });

    afterAll(async () => {
        // await dataSource.dropDatabase();
        await dataSource.destroy();
    })

    describe('[POST] Professional type', () => {
        it('should create a professional type', async () => {
            const response = await request(app)
                .post("/profissional/tipo/criar")
                .send({
                    descricao: "Engineer",
                    situacao: true
                });
            
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
        });

        it('must edit a created professional type', async () => {
            const response = await request(app)
                .post("/profissional/tipo/editar")
                .send({
                    id: "74dc0726-8b7a-11ed-a1eb-0242ac120002",
                    descricao: "Engineer",
                    situacao: false
                })

            expect(response.status).toBe(200);
            expect(response.body.situacao).toBe(false);
            expect(response.body.descricao).toBe('Engineer');
        });

        it('get all professionals', async () => {
            const response = await request(app)
                .get("/profissional/tipos")

            expect(response.status).toBe(200);
            expect(response.body[0]).toHaveProperty('id');
        });
    })
});