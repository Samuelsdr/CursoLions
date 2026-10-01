import PromptSync from "prompt-sync";
const prompt = PromptSync();

let resposta = prompt("Voce gosta de café ? (sim/nao): "); // Solicita ao usuário que responda se gosta de café

if(resposta !== "sim" && resposta !== "nao") // Verifica se a resposta é diferente de "sim" e "nao"
{
     console.log("Resposta inválida. Por favor, responda com 'sim' ou 'nao'.");
}else{

let GostadeCafe = resposta === "sim"; // Armmazena true se a resposta for "sim", caso contrário, armazena false

if(GostadeCafe)
    {
        console.log("Que bom que voce gosta de café");
    }else
    {
        console.log("Que pena que voce não gosta de café");
    }
}