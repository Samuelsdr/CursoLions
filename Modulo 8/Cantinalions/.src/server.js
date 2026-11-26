import express from "express";
import Pedido from "./models/pedido.js";
import conectarBanco from "./db.js";

conectarBanco();

const app = express();
app.use(express.json());

const TABELA_PRECOS = {
  Salgado: 8,
  Suco: 6,
  Combo: 12,
  Bolo: 5,
};

// 3.1 Criar Pedido (CREATE)
app.post("/pedidos", async (req, res) => {
  try {
    const { nomeCliente, item, quantidade, formaPagamento, observacao } = req.body;

    const valorUnitario = TABELA_PRECOS[item];

    if (!valorUnitario) {
      return res.status(400).json({
        erro: "Item inválido. Escolha entre: Salgado, Suco, Combo ou Bolo.",
      });
    }

    let valorTotal = valorUnitario * quantidade;
    if (quantidade >= 5) {
      valorTotal = valorTotal * 0.9;
    }

    const novoPedido = await Pedido.create({
      nomeCliente,
      item,
      quantidade,
      formaPagamento,
      observacao,
      valorUnitario,
      valorTotal,
    });

    return res.status(201).json(novoPedido);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ erro: error.message });
    }
    return res.status(500).json({ erro: "Erro interno no servidor." });
  }
});

// 3.2 Listar Todos os Pedidos (READ)
app.get("/pedidos", async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    return res.status(200).json(pedidos);
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno no servidor." });
  }
});

// 3.3 Buscar Pedidos por Cliente (QUERY PARAMS)
app.get("/pedidos/busca", async (req, res) => {
  try {
    const { cliente } = req.query;

    const filtro = {};
    if (cliente) {
    
      filtro.nomeCliente = { $regex: cliente, $options: "i" };
    }

    const pedidos = await Pedido.find(filtro);
    return res.status(200).json(pedidos);
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno no servidor." });
  }
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
