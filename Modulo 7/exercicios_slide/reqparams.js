import  express from 'express';

const app = express();
const port = 3000;


app.use(express.json());


app.post('/param/:id',(req,res) =>
{
     const id = req.params.id;
     res.status(200).send({
        mensagem: "Parametro recebido com sucesso",
        id: id,
     })
})

app.listen(port, () =>
{
    console.log(`Servidor rodando na porta ${port}`);
})
