import { 
    Router,
} from "express";

const accountsRoutes = Router()

accountsRoutes.get("/accounts", () => [])

export{
    accountsRoutes
}