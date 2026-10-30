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

let idAtualizar = parseInt(prompt("Insira o ID do contato que deseja atualizar:"));

let confirmar = prompt("Deseja realmente atualizar este contato? (s/n):").toLowerCase();

if (confirmar === 's') {
    console.log("Escolha o que deseja alterar. Deixe em branco o que quiser manter igual.");
    
    let novoNome = prompt("Novo Nome (ou Enter para manter o atual):");
    let novoEmail = prompt("Novo Email (ou Enter para manter o atual):");
    let novoTel = prompt("Novo Telefone (ou Enter para manter o atual):");
    
    let novosDados = {};
    
    if (novoNome) novosDados.nome = novoNome;
    if (novoEmail) novosDados.email = novoEmail;
    if (novoTel) novosDados.telefones = [novoTel];
    

    if (Object.keys(novosDados).length > 0) {
        atualizarContato(contatos, idAtualizar, novosDados);
        console.log("Campos selecionados atualizados com sucesso!");
    } else {
        console.log("Nenhuma alteração foi feita.");
    }
} else {
    console.log("Atualização cancelada pelo usuário.");
}

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
