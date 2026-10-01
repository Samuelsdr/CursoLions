import  PromptSync from "prompt-sync";
const prompt = PromptSync();

const nome = prompt("Digite seu nome: ");
const idade = parseInt(prompt("Digite sua idade: "));

if(idade >= 18){
    console.log(`${nome}, voce é maior de idade`);
}else{
     const quantoFalta = 18 - idade;
     console.log(`${nome}, voce vai ser maior de idade em ${quantoFalta} anos`);
}


