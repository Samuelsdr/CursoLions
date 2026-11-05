import promptSync from 'prompt-sync';
import { adicionarBaralho, adicionarFlashcard } from './criacaobaralho.js';
import { listarBaralhos, listarFlashcards, listarFlashcardsPorBaralho } from './leiturabaralho.js';
import { buscarFlashcardsPorPergunta } from './buscabaralho.js';
import { atualizarBaralho, atualizarFlashcard } from './atualizarbaralho.js';
import { deletarBaralho, deletarFlashcard } from './deletar.js'; 

const prompt = promptSync();


function exibirMenu() {
    console.log("\n=================================");
    console.log("     SISTEMA DE FLASHCARDS       ");
    console.log("=================================");
    console.log("1. Adicionar Baralho");
    console.log("2. Adicionar Flashcard");
    console.log("3. Listar Todos os Baralhos");
    console.log("4. Listar Todos os Flashcards");
    console.log("5. Listar Flashcards por Baralho");
    console.log("6. Buscar Flashcard por Pergunta");
    console.log("7. Atualizar Baralho");
    console.log("8. Atualizar Flashcard");
    console.log("9. Deletar Baralho (e seus cards)");
    console.log("10. Deletar Flashcard Individual");
    console.log("0. Sair");
    console.log("=================================");
}

function iniciarSistema() {
    let ligado = true;

    while (ligado) {
        exibirMenu(); // Corrigido o erro de digitação anterior!
        const opcao = prompt("Escolha uma opção: ");
        console.log(""); 

        switch (opcao) {
            case "1": {
                const titulo = prompt("Digite o título do novo baralho: ");
                const b = adicionarBaralho(titulo);
                console.log(`\nSucesso! Baralho "${b.titulo}" criado com o ID: ${b.id}`);
                break;
            }
            case "2": {
                const pergunta = prompt("Digite a pergunta do Flashcard: ");
                const resposta = prompt("Digite a resposta do Flashcard: ");
                const idBaralho = parseInt(prompt("Digite o ID do baralho de destino: "), 10);
                const f = adicionarFlashcard(pergunta, resposta, idBaralho);
                if (f) console.log(`\nSucesso! Flashcard criado com o ID: ${f.id}`);
                break;
            }
            case "3": {
                console.log("--- BARALHOS CADASTRADOS ---");
                console.table(listarBaralhos());
                break;
            }
            case "4": {
                console.log("--- TODOS OS FLASHCARDS ---");
                console.table(listarFlashcards());
                break;
            }
            case "5": {
                const idBaralho = parseInt(prompt("Digite o ID do baralho para filtrar: "), 10);
                console.log(`--- FLASHCARDS DO BARALHO ID ${idBaralho} ---`);
                console.table(listarFlashcardsPorBaralho(idBaralho));
                break;
            }
            case "6": {
                const termo = prompt("Digite o termo ou pergunta que deseja buscar: ");
                console.log(`--- RESULTADOS DA BUSCA POR: "${termo}" ---`);
                console.table(buscarFlashcardsPorPergunta(termo));
                break;
            }
            case "7": {
                const id = parseInt(prompt("Digite o ID do baralho que deseja atualizar: "), 10);
                const novoTitulo = prompt("Digite o novo título: ");
                const b = atualizarBaralho(id, novoTitulo);
                if (b) console.log(`\nBaralho ID ${id} atualizado com sucesso!`);
                break;
            }
            case "8": {
                const id = parseInt(prompt("Digite o ID do flashcard que deseja atualizar: "), 10);
                const novaPergunta = prompt("Digite a nova pergunta: ");
                const novaResposta = prompt("Digite a nova resposta: ");
                const f = atualizarFlashcard(id, novaPergunta, novaResposta);
                if (f) console.log(`\nFlashcard ID ${id} atualizado com sucesso!`);
                break;
            }
            case "9": {
                const id = parseInt(prompt("Digite o ID do baralho que quer DELETAR: "), 10);
                const confirmacao = prompt(`Tem certeza que deseja apagar o baralho ${id} e TODOS os seus cards? (s/n): `);
                if (confirmacao.toLowerCase() === 's') {
                    deletarBaralho(id);
                } else {
                    console.log("Ação cancelada.");
                }
                break;
            }
            case "10": {
                const id = parseInt(prompt("Digite o ID do flashcard que quer DELETAR: "), 10);
                deletarFlashcard(id);
                break;
            }
            case "0": {
                console.log("Saindo do sistema... Até logo!");
                ligado = false;
                break;
            }
            default:
                console.log("Opção inválida! Digite um número de 0 a 10.");
                break;
        }
        
        if (ligado) {
            prompt("\nPressione ENTER para continuar...");
            console.clear(); 
        }
    }
}

iniciarSistema();
