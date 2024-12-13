import express from "express";
import connectDatabase from "./src/database/db.js";
import cors from "cors"
import dotenv from "dotenv";

import productsRoute from "./src/routes/products.route.js";

dotenv.config();

const app = express();
const PORT = 3000;

connectDatabase();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use("/", productsRoute);

// Iniciar o servidor
app.listen(PORT, () =>
    console.log(`Servidor rodando em http://localhost:${PORT}`)
);
