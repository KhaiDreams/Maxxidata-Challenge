import { Router } from "express";
import { accountsRoutes } from "./accountRoutes";

const routes = Router();

routes.use(accountsRoutes);

export { routes };