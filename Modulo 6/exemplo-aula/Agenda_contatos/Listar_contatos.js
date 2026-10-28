function ListarContatos(contatos)
{
    if(contatos.length ===0)
    {
        console.log("Nenhum contato cadastrado");
        return;

    }
    contatos.forEach(contatos => {
        console.log(`\nID: ${contatos.id}`);
        console.log(`Nome: ${contatos.nome}`);
        console.log(`Email: ${contatos.email}`);
        console.log(`Telefones: ${contatos.telefones.join(' | ')}`);

        
    });

}

export default ListarContatos;
