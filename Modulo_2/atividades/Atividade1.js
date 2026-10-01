import  promptSync  from "prompt-sync"
const prompt= promptSync()


let numero;

console.log("Digite um número: ");

process.stdin.on("data", (data) => {
    numero = parseFloat(data.toString().trim());

    if(numero==0)
    {
        console.log(`O número é ${numero}`);
    }
    else if(numero % 2 === 0)
    {
        console.log(`O número é ${numero} e é par`);
    }
    else
    {
        console.log(`O número é ${numero} e é ímpar`);
    }
    process.exit();
});