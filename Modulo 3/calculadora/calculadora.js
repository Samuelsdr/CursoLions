import promptSync from 'prompt-sync';
const prompt = promptSync()

import numeros from './numeros.js';
import adicionarNumero from './adicionar.js';
import removerNumero from './remover.js';
import calcularMedia from './media.js';



let opcao = -1;
let num = -1;

do{
    console.log("------MENU------");
    console.log("1 - Adicionar numero: ");
    console.log("2 - Remover numero: ");
    console.log("3 - Listar numeros: ");
    console.log("4 - Calcular media: ");
    console.log("5 - Calcular mediana: ");
    console.log("0 - Sair:");

    opcao = parseInt(prompt("Digite a opção desejada: "));

    switch(opcao){
        case 1: 
        console.log("Qual o numero voce deseja adicionar?: ");
        num = parseFloat(prompt("R: "));
        adicionarNumero(num);
       
        break;
        case 2:
            console.log("Qual o numero voce deseja remover?:");
            removerNumero(num);
            break;
        
        case 3 :
            console.table(numeros);
            break;
        case 4:
            console.log(`A media dos numeros é: ${calcularMedia()}`);
            break;

        case 0 :
            console.log("Fechando o programa...");
            break;

            default:
                console.log("Opção inválida!");
                break;
    }
} while(opcao != 0);

