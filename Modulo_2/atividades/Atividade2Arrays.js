import PromptSync from "prompt-sync";
const prompt = PromptSync();


const prova1=   parseFloat(prompt("Digite a nota da prova 1: "));
const prova2=   parseFloat(prompt("Digite a nota da prova 2: "));

const notas = [];
notas.push(prova1);
notas.push(prova2);

const media = (notas[0] + notas[1]) / notas.length;  // notas.length retorna o tamanho do array, que nesse caso é 2

console.log(`A media do aluno é: ${media}`);


