import express from "express"; 
import { accountsRoutes } from "./routes/account_routes";
//import "./config/connection"; //

const app = express();
app.use(express.json());

app.use(accountsRoutes);

app.listen(5000, () => {
    console.log(`Server listen on port 5000 🚀`)
});

export { app };