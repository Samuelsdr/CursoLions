import promptSync from 'prompt-sync';
const prompt = promptSync();


const produtos =  [
    {
     id: 1,
     nome: "Mouse"
     },
     {
        id: 2,
        nome: "Teclado"
     }
    ];
 produtos.push({id : 3, nome: 'Monitor'});

console.log("Exercicio 2",produtos.length);

const produtoid2 =  produtos.find((p)=> p.id === 2);
console.log("Exercicio 3: ",produtoid2);

const produtosmaiorque1 = produtos.filter((p) =>p.id >1);
   console.log("Exercicio 4: ",produtosmaiorque1);

   const posicaoproduto = produtos.findIndex((p) => p.id === 1);
   console.log("Exercicio 5: ",posicaoproduto);
 
   const novoarray = produtos.filter((p)=>p.id !==2)
   console.log("Exercicio 6: ",novoarray);

   for(let i  = 0 ; i< produtos.length; i++)
   {
     console.log("Exercicio7:  ",produtos[i].nome);
   }

function Existeid(id)
{
    return produtos.find ((p)=> p.id === id) !== undefined;

}
console.log("Exercicio8: Existe id 2 ?",Existeid(2));
console.log("Exercicio8: Existe id 5 ?:",Existeid(5));

console.log("Exercicio9: ",produtos[0].nome);

produtos[0].nome = "Webcam";

console.log("Exercicio10: ",produtos[0].nome);