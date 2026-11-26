import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
  {
    nomeCliente: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    item: {
      type: String,
      required: [true, "O item é obrigatório"],
      enum: {
        values: ["Salgado", "Suco", "Combo", "Bolo"],
        message: "{VALUE} não é um item válido",
      },
      trim: true,
    },
    quantidade: {
      type: Number,
      required: [true, "A quantidade é obrigatória"],
      min: [1, "A quantidade mínima é 1"],
    },
    formaPagamento: {
      type: String,
      required: [true, "Método de pagamento é obrigatório"],
      enum: {
        values: ["Cartão", "Dinheiro", "Pix"],
        message: "{VALUE} não é um método de pagamento válido",
      },
      trim: true,
    },
    observacao: {
      type: String,
      trim: true,
      default: null,
    },
    valorUnitario: {
      type: Number,
      required: true,
    },
    valorTotal: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pendente", "Pago", "Entregue"],
      default: "Pendente",
    },
  },
  { timestamps: true }
);

const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;
