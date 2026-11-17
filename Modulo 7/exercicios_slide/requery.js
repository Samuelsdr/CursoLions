import  express from 'express';

const app = express();
const port = 3000;


app.use(express.json());


app.post('/contatos',(req,res) => {
    const termo = req.query.termo;
    res.status(200).json({
        "Mensagem": "Dados recebidos pelo req.query",
        "termo" : termo,
    })
})

app.listen(port, () =>
{
    console.log(`Servidor rodando na porta ${port}`);
})
