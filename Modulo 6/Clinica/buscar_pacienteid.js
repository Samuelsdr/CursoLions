import dados from './dados.js';

function buscarPacienteId(id)
{
    const pacienteEncontrado = dados.pacientes.find((paciente) => paciente.id === id);
    return pacienteEncontrado;
}

export default buscarPacienteId;
