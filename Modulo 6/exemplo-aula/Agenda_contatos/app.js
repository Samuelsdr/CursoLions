import promptSync from 'prompt-sync';
const prompt = promptSync();


import contatos from './contatos.js';
import ListarContatos from './Listar_contatos.js';
import atualizarContato from './atualizar_contatos.js';
import adicionarContato from './adicionar_contatos.js';
import removerContatos from './excluir_contatos.js';

let opcao = -1;

do {
    console.log("\n---- MENU ------");
    console.log("1 - Adicionar um contato");
    console.log("2 - Remover um contato");
    console.log("3 - Atualizar um contato");
    console.log("4 - Listar contatos");
    console.log("0 - Sair do programa");
    
    opcao = parseInt(prompt("Insira a opção desejada: "));

    switch(opcao) {
        case 1:
         console.log("[Adicionar Contato]");
              let nome = prompt("Nome: ");
              let email = prompt("Email: ");
              let resposta = "n";    
              let telefones = [];
              let telefoneDigitado = "";

do {
    telefoneDigitado = prompt("Qual o número de telefone você deseja inserir: ");
    telefones.push(telefoneDigitado);
    
    resposta = prompt("Deseja inserir mais um telefone? (s/n): ");
} while (resposta.toLowerCase() === "s");

        let novoContato = { 
            id: 0, 
             nome: nome,
             email: email,
            telefones: telefones
};
            let adicionou = adicionarContato(contatos, novoContato);
            if (adicionou) {
                console.log("Contato adicionado com sucesso!");
            }
            break;
            

        case 2:
            console.log("\n[Remover Contato]");
            let idRemover = parseInt(prompt("Insira o ID do contato que deseja remover: "));
      
            removerContatos(contatos, idRemover); 
            break;
            
        case 3:
            console.log("\n[Atualizar Contato]");
            let idAtualizar = parseInt(prompt("Insira o ID do contato que deseja atualizar: "));
            
            console.log("Deixe em branco os campos que não deseja alterar.");
            let novoNome = prompt("Novo Nome: ");
            let novoEmail = prompt("Novo Email: ");
            let novoTel = prompt("Novo Telefone: ");

            let novosDados = {};
            if (novoNome) novosDados.nome = novoNome;
            if (novoEmail) novosDados.email = novoEmail;
            if (novoTel) novosDados.telefones = [novoTel];

            atualizarContato(contatos, idAtualizar, novosDados);
            break;
            
        case 4:
            console.log("\n[Lista de Contatos]");
            ListarContatos(contatos); 
            break;
            
        case 0:
            console.log("Fechando o programa...");
            break;
            
        default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }
} while(opcao !== 0);
