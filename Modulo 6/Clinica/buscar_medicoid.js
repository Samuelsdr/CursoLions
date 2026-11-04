import dados from "./dados.js";

function buscarMedicoId(id)
{
    const medicoEncontrado = dados.medicos.find((medico) => medico.id === id);
    return medicoEncontrado;
}

export default buscarMedicoId