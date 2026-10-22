import numeros from './numeros.js';

function calcularMediana() {
    // 1. Verifica se a lista está vazia
    if (numeros.length === 0) {
        return "A lista está vazia";
    }

    // 2. Cria uma cópia e ordena os números de forma crescente
    const ordenados = numeros.slice().sort((a, b) => a - b);
    
    // 3. Descobre a posição do meio
    const meio = Math.floor(ordenados.length / 2);

    // 4. Se a quantidade de números for ÍMPAR
    if (ordenados.length % 2 !== 0) {
        return ordenados[meio];
    } 
    
    // 5. Se a quantidade de números for PAR
    return (ordenados[meio - 1] + ordenados[meio]) / 2;
}

export default calcularMediana;
