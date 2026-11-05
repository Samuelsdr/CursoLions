import baralho from './baralho.js';
import flashcard from './flashcard.js';


export function deletarBaralho(idBaralho) {
    const indiceBaralho = baralhos.findIndex(b => b.id === idBaralho);

    if (indiceBaralho === -1) {
        console.error(`Erro: Baralho com ID ${idBaralho} não foi encontrado.`);
        return false;
    }


    baralhos.splice(indiceBaralho, 1);


    let cardsDeletados = 0;
    

    for (let i = flashcards.length - 1; i >= 0; i--) {
        if (flashcards[i].idbaralho === idBaralho) {
            flashcards.splice(i, 1);
            cardsDeletados++;
        }
    }

    console.log(`Sucesso: Baralho ID ${idBaralho} removido. (${cardsDeletados} flashcards associados foram apagados).`);
    return true;
}

export function deletarFlashcard(idFlashcard) {

    const indiceFlashcard = flashcards.findIndex(f => f.id === idFlashcard);

    if (indiceFlashcard === -1) {
        console.error(`Erro: Flashcard com ID ${idFlashcard} não foi encontrado.`);
        return false;
    }


    flashcards.splice(indiceFlashcard, 1);
    console.log(`Sucesso: Flashcard ID ${idFlashcard} foi removido.`);
    return true;
}
