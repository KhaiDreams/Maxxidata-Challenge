import { DataSource, DataSourceOptions } from "typeorm";

import { Professional } from "../entities/Professional";
import { ProfessionalType } from "../entities/ProfessionalType";

const connectionOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "postgres",
    synchronize: false,
    entities: [
      Professional,
      ProfessionalType
    ],
    migrations: [__dirname + '../../entities/migrations/*{.ts,.js}'],
  };

export const dataSource = new DataSource(connectionOptions);

export default async () => {
    await dataSource
      .initialize().then(() => console.log("Conexação Estabelecida.")).catch((err) => console.log(err))
};