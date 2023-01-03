import { 
    Router,
} from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { UpdateProfessionalType } from "../controllers/UpdateProfessionalType";
import { CreateProfessionalType } from "../controllers/CreateProfessionalType";
import { GetUsersController } from "../controllers/GetUsersController";
import { GetProfesssionalType } from "../controllers/GetProfessionalType";

const accountsRoutes = Router()

accountsRoutes.post("/profissional/criar", CreateUserController)
accountsRoutes.post("/profissional/editar", UpdateUserController);
accountsRoutes.get("/profissionais", GetUsersController)

accountsRoutes.post("/profissional/tipo/criar", CreateProfessionalType);
accountsRoutes.post("/profissional/tipo/editar", UpdateProfessionalType);
accountsRoutes.get("/profissional/tipos", GetProfesssionalType);

export{
    accountsRoutes
}