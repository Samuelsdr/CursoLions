import promptSync from 'prompt-sync';
const prompt = promptSync();
/*

let peso = parseFloat(prompt("Digite o peso (kg): "));
let altura = parseFloat(prompt("Digite a altura (m): "));

let imc = peso / (altura * altura);

if(imc <=18.5){
    console.log('Abaixo do peso');
}else if(imc <=24.9){
    console.log('Peso normal');
}else if(imc  <= 29.9)
{
    console.log('Sobrepeso');
}else if (imc >= 30)
{
    console.log('Obesidade grau 1');
}

console.log(`peso: ${peso} kg altura: ${altura} m IMC: ${imc.toFixed(2)}`);*/

/*
let idade = parseInt(prompt("Digite sua idade: "));
let vip= prompt("Você é VIP? (sim/não): ").toLowerCase();

if (idade < 18)
{
    console.log("Você não pode entrar na balada.");
} else if( idade >= 18 && vip ==="sim") {
   console.log("Voce pode entrar na balada");
}else if (idade >18 && vip ==="nao") {
    console.log("Entrada liberada na areca comum");
}

console.log(`idade: ${idade} anos VIP: ${vip}`); */
/*

1) MARGEM DE LUCRO

let custo_deprodução  = parseFloat(prompt("Digite o custo de produção do produto: "));
let valor_venda = parseFloat(prompt("Digite o valor de venda do produto: "));

if(valor_venda > custo_deprodução){
    console.log("O produto está com lucro");
}else if(valor_venda < custo_deprodução){
    console.log("O produto está com prejuízo");
}else{
    console.log("O produto está no ponto de equilíbrio");
}

console.log(`Custo de produção: ${custo_deprodução} Valor de venda: ${valor_venda}`);*/

/*

2) ORÇAMENTO DE PROJETOS

let quantidade_de_horas = parseFloat(prompt("Digite a quantidade de horas trabalhadas: "));
let ONG =   prompt("O cliente é uma ONG? (sim/não): ").toLowerCase();

let valor_hora = 45;
let valor_total = quantidade_de_horas * valor_hora;

if(valor_total >5000 && ONG === "sim"){
    valor_total = valor_total * 0.9;
    console.log("O cliente é uma ONG e o valor total com desconto é: " + valor_total);
}else{
    console.log("O valor total é: " + valor_total);
}*/

/*3. Rendimento de Fundos Imobiliarios 

let cotas = parseInt(prompt("Digite a quantidade de cotas: "));
let valor_dividendo= parseFloat(prompt("Digite o valor do dividendo: "));

let valor_total = cotas * valor_dividendo;

if(valor_total >= 100){
    console.log("Voce  ja tem saldo suficiente para comprar uma cota e  reinvestir ");
}else{
    console.log(`Rendimento insuficiente para reinvestir, valor total: ${valor_total}`);
}*/

/*4. Consumo de Combustível

let distancia = parseFloat(prompt("Digite a distância percorrida (km): "));
let combustivel = parseFloat(prompt("Digite a quantidade de combustível consumido (L): "));

let consumo_medio = distancia / combustivel;

if (consumo_medio < 10)
{
    console.log("ALERTA: Veículo  consumindo muito combustível.");
}else{
    console.log("Veículo com consumo médio adequado.");
}*/


/*5. Análise de Risco de Crédito Bancário

let salario = parseFloat(prompt("Digite o salário do funcionário: "));
let valor_parcela = parseFloat(prompt("Digite o valor da parcela do empréstimo: "));
let clienete = prompt("O cliente possui restrição (sim/não): ").toLowerCase();

let limite = salario * 0.3;

if(valor_parcela  <=limite && clienete === "não")
    {
        console.log("Credito Aprovado: ");
    } else
    {
        console.log("Credito Negado ou restrições no CPF");
    }
*/

/*
6. Gestão de Ponto e Horas Extras

let valor_ganho_por_hora = parseFloat(prompt("Digite o valor ganho por hora: "));
let horas_extras = parseFloat(prompt("Digite a quantidade de horas extras trabalhadas: "));

let hora_extra = valor_ganho_por_hora * 1.5;


console.log(`Valor ganho por hora: ${valor_ganho_por_hora} Horas extras: ${horas_extras} Valor da hora extra: ${hora_extra}`);

*/

/*7. Alerta de Reposição de Estoque

let quantidade_atual = parseInt(prompt("Digte a quantidade atual de produtos em estoque:"));
let quantidade_minima = parseInt(prompt("Digite a quantidade mínima de produtos em estoque:"));


if(quantidade_atual < quantidade_minima){
    let quantidade_a_comprar = quantidade_minima - quantidade_atual;
     console.log(`Alerta: Estoque abaixo do mínimo. Quantidade a comprar: ${quantidade_a_comprar}`);
}else
{
    console.log("Estoque regularizado");
}

*/
/*
8. 

let distancia = parseFloat(prompt("Informe a distancia em km "));
let risco= prompt("A entrega  é considera de risco ou urgente ? ");

let valor_final =  20 + (1.50 * distancia)


if (distancia > 100 || risco ==="sim"){
     valor_final =  valor_final + 15
     console.log(`Esse é o valor ${valor_final}`);

} else{
    console.log("Esse é o valor");
}

*/
/*
9. Sistema de Comissão de Vendas

let  valor_total_vendas = parseInt(prompt("Digite  o valor total de vendas realizado no mes: "));
let comissao = 0 ;

if (valor_total_vendas >= 20000){
    comissao = valor_total_vendas *0.05;
       console.log(`Esse é sua comissão total ${comissao}`);

}else{
    comissao = valor_total_vendas * 0.02;
    console.log(`Esse é sua comissão total ${comissao}`);
}
*/
/*
let condominio = parseFloat(prompt("Digite o valor original: "));
let atraso =  parseInt(prompt("Quatidade de dias atrasado:"));
let vencimento = prompt("O vencimento original caiu em um feriado ou final de semana? (s/n): ");
let multa = 0;
let valor_juros = 0 ;
let valor_total = condominio;


if(atraso > 0 && vencimento === "n" )
{ 
    multa = condominio * 0.02 ;
    valor_juros = condominio *(0.00033 * atraso);
    valor_total = condominio + valor_juros + multa;

    console.log('--- Boleto Em Atraso ---');
    console.log(`Valor original: R$ ${condominio}`);
    console.log(`Multa 2%: R$${multa}`);
    console.log(`Valor juros: R$${valor_juros} `);
    console.log(`Valor total: R$${valor_total}`);

    }else{
        console.log("------- Boleto sem multa --------");
        console.log(`Total a pagar ${condominio}`);
    }

*/

