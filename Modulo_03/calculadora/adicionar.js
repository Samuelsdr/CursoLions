import numeros from './numeros.js';

function adicionarNumero(num){
    numeros.push(num);
    console.log(`O numero ${num} foi adicionado com sucesso!`);
}
export default adicionarNumero;