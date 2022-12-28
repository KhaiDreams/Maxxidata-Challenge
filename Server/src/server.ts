import "reflect-metadata";
import "dotenv/config"
import express from "express"; 

import connection from "./config/database";
connection()

import { routes } from "./routes";

const app = express();
app.use(express.json());

app.use(routes);

app.listen(5000, () => {
    console.log(`Server listen on port 5000 🚀`)
});

export { app };