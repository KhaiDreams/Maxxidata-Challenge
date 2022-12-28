import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1672269622747 implements MigrationInterface {
    name = 'migration1672269622747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, "tipoDeProfissional" character varying NOT NULL, "situacao" boolean NOT NULL DEFAULT true, "uptatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
