
const baralhos = [];
const flashcards = [];


let proximoIdBaralho = 1;
let proximoIdFlashcard = 1;


export function adicionarBaralho(titulo) {
    const novoBaralho = {
        id: proximoIdBaralho++,
        titulo: titulo
    };
    
    baralhos.push(novoBaralho);
    return novoBaralho;
}


export function adicionarFlashcard(pergunta, resposta, idBaralho) {

    const baralhoExiste = baralhos.some(baralho => baralho.id === idBaralho);
    
    if (!baralhoExiste) {
        console.error(`Erro: Não é possível adicionar o flashcard. O baralho com ID ${idBaralho} não existe.`);
        return null;
    }

    const novoFlashcard = {
        id: proximoIdFlashcard++,
        pergunta: pergunta,
        resposta: resposta,
        idBaralho: idBaralho
    };

    flashcards.push(novoFlashcard);
    return novoFlashcard;
}

