import promptSync from 'prompt-sync';
const prompt = promptSync();
/*
1. Calculadora de Bônus de RH

let SalarioAtual =  Number(prompt("Qual é o seu salário?: R$ "));
let niveldecargo =  (prompt("Qual é o seu nivel de cargo?: "));


calcularBonus(SalarioAtual,niveldecargo)

function calcularBonus (SalarioAtual,niveldecargo)
{
    switch(niveldecargo)
    {
       case "Estagiario":
        
            console.log(`Seu salário de Estagiario com bonus é: ${SalarioAtual * 1.1}`);
       break;
       case "Junior":
          console.log(`Seu salário de Junior com bonus é:  ${SalarioAtual * 1.15}`);
          break;
       case "Pleno":
           console.log(`Seu salário de Pleno com bonus é: ${SalarioAtual *1.2}`);
          break;
          default :
          
          console.log("Cargo nao mapeado,ou seja nao tera bonus!");
          break;
        
    }
}*/

/*

2. Validador de Acesso Rápido

let usuario = prompt("Informe seu nome: ");
let codigoCracha = parseInt(prompt("Informe o seu codigo do cracha: "));

const validador = (usuario, codigoCracha) => {
    
    switch (true) {
        case (codigoCracha > 1000 && usuario.length > 5):
            return true;
    }

    return false;
};

if(validador(usuario,codigoCracha))
    {
    console.log("Acesso concedido.");
} else{
    console.log("Acesso negado.");
}

*/


/*

3. Menu de Loja de Eletrônicos


console.log("Escolha um produto cadastrado no sistema:" +
    "\n[1] - Fone "+
    "\n[2] - teclado" +
    "\n[3] - Mouse " 
    
    
);

let escolha = Number(prompt("Qual produto deseja comprar:? "));

let registropedido = {
    produto:  "",
    preço_fixo: 0

}

switch(escolha){
     case 1:
        registropedido.produto = "Fone";
        registropedido.preço_fixo = 100
        break;

    case 2:
        registropedido.produto = "teclado";
        registropedido.preço_fixo = 200
        break;

   case 3:
     registropedido.produto = "Mouse";
     registropedido.preço_fixo = 300
     break;

     default:
        registropedido.produto = "Produto Desconhecido";
        registropedido.preço_fixo= 0 
        break;

}
console.table(registropedido);
          

    */

/*

4. Monitoramento Climático

const  avaliartemperaturas = (temperaturas) =>
{
 const media =(temperaturas[0] + temperaturas[1] + temperaturas[2])/3 ;

 if (media >30)
 {
   return ("Alerta de aquecimento ");

 }else if (media <=30 )
 {
    return ("Clima estavel ");

 }

}

let temperaturas = [];

temperaturas.push((parseFloat(prompt("digite uma temperatura: "))));
temperaturas.push((parseFloat(prompt("digite uma temperatura: "))));
temperaturas.push((parseFloat(prompt("digite uma temperatura: "))));

const resposta = avaliartemperaturas(temperaturas);

console.table(resposta);
*/


/*

5. Status de Encomenda Logística

function rastrear_pacote (codigo)
{

    switch (codigo)
    {
        case  "P":
             return "Pendente de envio";
             break;
        case "E":
           return "Em rota de entrega";
           break;
       case "C":
          return "Cancelado ";

      default: 
         return "Status invalido ";
    }
}  
   let encomenda = {
      id: 123
   };
   
   let CodigoStatus = (prompt("Codigo Status: "));

encomenda.CodigoStatus = rastrear_pacote(CodigoStatus);

console.log(encomenda);



*/

/*

6. Sistema de Pontuação de Games


const lista =(pontuaçoes) =>
{
   const media = (pontuaçoes[0 ] + pontuaçoes [1]+ pontuaçoes[2]);
   if(media >200 || pontuaçoes[2] > 90 )
   { 
     return "veterano ";
     
   }else
   {
    return "Iniciante ";
   }
}


let pontuaçoes = [];

pontuaçoes.push(parseFloat(prompt("Pontução jogo um: ")));
pontuaçoes.push(parseFloat(prompt("Pontução jogo dois: ")));
pontuaçoes.push(parseFloat(prompt("Pontução jogo tres: ")));


const classificação_final = lista(pontuaçoes);

console.table(classificação_final);
*/
/*
7. Conversor Universal de Moedas

let valorReais = parseFloat(prompt("Digite o valor em reais: "));
let moedaDestino = (prompt("Moeda de destino:"));

const taxas = (valor,moeda) =>
{
    switch(moeda)
    {
        case  "USD":
            return valorReais/ 5;
        case    
       
    
           
    }
    
    
*/

/*
8. 

  class  servidor {
     constructor(nome,espaço_total,espaço_ocupado)
     {
        this.nome = nome;
        this.espaço_total = parseInt(espaço_total);
        this.espaço_ocupado = parseInt(espaço_ocupado);
     }
    }
     function  realizarUpload(servidor,tamanhodoArquivo)
     {
        const tamanhointeiro = parseInt(`${tamanhodoArquivo}`);

     
    
    if(servidor.espaço_ocupado + tamanhointeiro <= servidor.espaço_total ){
    
        servidor.espaço_ocupado += tamanhointeiro;
        return true;

}

    return false;
     }

    const servidorWeb = new servidor("Servidor-Backup", 500, 400);
    const tamanhoDoNovoArquivo = 20; // Arquivo de 50GB


const uploadAceito = realizarUpload(servidorWeb, tamanhoDoNovoArquivo);

if (uploadAceito) {
  console.log(` Upload aceito! Arquivo salvo com sucesso no ${servidorWeb.nome}.`);
  console.log(`Novo espaço ocupado: ${servidorWeb.espaço_ocupado} GB de ${servidorWeb.espaço_total} GB.`);
} else {
  console.log(` Upload rejeitado! Espaço insuficiente no ${servidorWeb.nome}.`);
}
*/
/*
9.Roteamento de Chamados de TI
let fila_de_atendimento = [];

function descobrirSetor(criticidade) {
    switch(criticidade) {
        case "1":
            return "Atendimento Básico";
        case "2":
            return "Equipe Especializada";
        case "3":
            return "Gestão de Crise";
        default:
            return "Nível inválido";
    }
}

let nivelUsuario = prompt("Digite a criticidade do novo problema (1, 2 ou 3):");

// 4. Descobre o setor responsável usando a função
let setorResponsavel = descobrirSetor(nivelUsuario);

if (setorResponsavel !== "Nível inválido") {
    fila_de_atendimento.push(setorResponsavel);
} else {
    console.log("Não foi possível adicionar à fila: Nível inválido informado.");
}
console.log("Fila de Atendimento atualizada:", fila_de_atendimento);

   
/*
let  Caixa_de_loja ={
     nomeoperador: "Operador Padrao",
     saldo: 200,
     historico: []
}

function registrarvenda(valor){
    Caixa_de_loja.saldo += valor;
    console.log(`Venda registrada. Novo saldo: R$ ${Caixa_de_loja.saldo}`);
    

}function registrardespesa(valor){
    Caixa_de_loja.saldo -= valor;
    console.log(`Despesa registrada. Novo saldo: R$ ${Caixa_de_loja.saldo}`);
}
    while (true)
    {
        let operacao = prompt("Digite 'v' para venda, 'd' para despesa ou 's' para sair: ");
        if( operacao === null)
            break;

        if(operacao ==='v')
        {
            console.log("Encerrando registros...");
            break;

        }
        let valor;

        switch(operacao)
        {
            case 'v':
                valor = parseFloat(prompt("Digite o valor da venda:"));
                if(!isNaN(valor && valor > 0))
                {
                    registrarvenda(valor);
                    Caixa_de_loja.historico.push(`Entrada: R$ ${valor.toFixed(2)}`);

                }
                break;
            case 'd':
                valor = parseFloat(prompt("Digite o valor da despesa:"));
                if(!isNaN(valor && valor > 0 ))
                {
                    registrardespesa(valor);
                    Caixa_de_loja.historico.push(`Saida: R$ ${valor.toFixed(2)}`);
                    
                }else
                {
                    console.log("Valor inválido.");

                }
                break;

        }
    }

    console.log("--------------------AUDITORIA CAIXA ----------------------");
    console.log(Caixa_de_loja);
    console.log("---------------------------------------");


*/
