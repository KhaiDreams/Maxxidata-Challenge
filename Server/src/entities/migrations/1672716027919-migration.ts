import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1672716027919 implements MigrationInterface {
    name = 'migration1672716027919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ProfissionalTipo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "descricao" character varying NOT NULL, "situacao" boolean NOT NULL DEFAULT true, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7733fb9e16d61af7dbfb310b73c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Profissionais" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, "profissionalId" uuid NOT NULL, "situacao" boolean NOT NULL DEFAULT true, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7bfdc9a7a3c780e56c18a767981" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Profissionais" ADD CONSTRAINT "FK_9514d68e849537054a6d60618b7" FOREIGN KEY ("profissionalId") REFERENCES "ProfissionalTipo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Profissionais" DROP CONSTRAINT "FK_9514d68e849537054a6d60618b7"`);
        await queryRunner.query(`DROP TABLE "Profissionais"`);
        await queryRunner.query(`DROP TABLE "ProfissionalTipo"`);
    }

}
