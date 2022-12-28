import { CreateUserController } from "../controllers/CreateUserController";
import { 
    Router,
} from "express";

const accountsRoutes = Router()

accountsRoutes.post("/create", CreateUserController)

export{
    accountsRoutes
}