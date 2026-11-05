
import baralhos from './baralho.js';
import flashcards from './flashcard.js';

export function listarBaralhos() {
  if (baralhos.length === 0) {
    console.log("Nenhum baralho cadastrado.");
    return [];
  }
  return baralhos;
}


export function listarFlashcards() {
  if (flashcards.length === 0) {
    console.log("Nenhum flashcard cadastrado.");
    return [];
  }
  return flashcards;
}


export function listarFlashcardsPorBaralho(idBaralho) {
  const filtrados = flashcards.filter((flashcard) => flashcard.idbaralho === idBaralho);
  
  if (filtrados.length === 0) {
    console.log(`Nenhum flashcard encontrado para o baralho com ID: ${idBaralho}`);
  }
  
  return filtrados;
}
