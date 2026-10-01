import promptSync from 'prompt-sync';
const prompt = promptSync();

const anoAtual = 2026;

const nome = prompt("Digite seu nome: ");
const idade = parseInt(prompt("Digite sua idade: "));
const mesNascimento = parseInt(prompt("Digite o mês do seu nascimento (1-12): "));

const anoNascimento = anoAtual - idade;

if (idade <= 0 || mesNascimento < 1 || mesNascimento > 12) { // Verifica se a idade é inválida ou se o mês de nascimento está fora do intervalo válido
    console.log("Dados inválidos.");
} else {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Ano de Nascimento: ${anoNascimento}`);

    const mesAtual = 9; // Setembro

    if (mesNascimento > mesAtual) {
        console.log("Ainda não fez aniversário esse ano.");
    } else {
        console.log("Já fez aniversário esse ano.");
    }
}