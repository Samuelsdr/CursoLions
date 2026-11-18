import dotenv from 'dotenv';
dotenv.config();

import Contato from './models/contato.js';
import express from 'express';
import conectarBanco from './database.js';

conectarBanco();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Contatos!");
});

app.post("/contato", async (req, res) => {
    try {
        const dados = req.body;
        const novo_contato = {
            nome: dados.nome,
            email: dados.email,
            telefones: dados.telefones
        };
        const contato = await Contato.create(novo_contato);
        res.status(201).json(contato);
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao cadastrar contato: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`Aplicação iniciada na porta: ${port}`);
});
