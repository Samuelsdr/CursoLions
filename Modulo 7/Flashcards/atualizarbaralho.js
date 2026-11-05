
import baralho from './baralho.js';
import flashcard from './flashcard.js';


export function atualizarBaralho(id, novoTitulo) {

    const baralho = baralhos.find(b => b.id === id);

    if (!baralho) {
        console.error(`Erro: Baralho com ID ${id} não foi encontrado.`);
        return false;
    }

    baralho.titulo = novoTitulo;
    return baralho;
}

export function atualizarFlashcard(id, novaPergunta, novaResposta) {

    const flashcard = flashcards.find(f => f.id === id);

    if (!flashcard) {
        console.error(`Erro: Flashcard com ID ${id} não foi encontrado.`);
        return null;
    }

    
    flashcard.pergunta = novaPergunta;
    card.resposta = novaResposta;
    return flashcard;
}
