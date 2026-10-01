import promptSync from 'prompt-sync';
const prompt = promptSync();


let listaTarefas = [];


const Tarefa1 = prompt('Digite a primeira tarefa: ');
listaTarefas.push(Tarefa1);

const Tarefa2 = prompt('Digite a segunda tarefa: ');
listaTarefas.push(Tarefa2);

const Tarefa3 = prompt('Digite a terceira tarefa: ');
listaTarefas.push(Tarefa3);

console.table(listaTarefas); // exibe o array em formato de tabela no console

console.log(`Voce tem ${listaTarefas.length} tarefas na sua lista.`); // listaTarefas.length retorna o tamanho do array

listaTarefas.pop(); // remove o ultimo elemento do array

console.table(listaTarefas);

