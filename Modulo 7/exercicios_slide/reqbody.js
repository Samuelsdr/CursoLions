import express from "express";

const app = express();
const port = 3000;


app.use(express.json());

app.post('/body',(req,res) => {
    const titulo = req.body.titulo;
    res.status(200).json({
        "Mensagem": "Dados recebidos pelo req.body",
        "Titulo" : titulo
    })
})

app.listen((port), () => {
    console.log(`Servidor rodando na porta ${port}`);
})


