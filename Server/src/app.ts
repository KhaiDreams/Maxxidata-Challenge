import "reflect-metadata";
import "dotenv/config"

import cors from "cors";

import express from "express";
import "express-async-errors";

import { routes } from "./routes";
import { HandleError } from "./middlewares/HandleError";

import swagger from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use(routes);

app.use("/docs", swagger.serve, swagger.setup(swaggerDocument));

app.use(HandleError);

export { app };