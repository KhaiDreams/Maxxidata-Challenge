import connection from "./config/database";
connection()

import { app } from "./app";

app.listen(5000, () => {
    console.log(`Server listen on port 5000 🚀`)
});