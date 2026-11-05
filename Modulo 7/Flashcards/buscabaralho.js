
import baralho from './baralho.js';
import flashcard from './flashcard.js';



export function buscarFlashcardsPorPergunta(termoBusca) {

    const termoMinusculo = termoBusca.toLowerCase();

    const resultados = flashcards.filter(flashcard => 
        flashcard.pergunta.toLowerCase().includes(termoMinusculo)
    );

    if (resultados.length === 0) {
        console.log(`Nenhum flashcard encontrado com o termo: "${termoBusca}"`);
    }

    return resultados;
}
