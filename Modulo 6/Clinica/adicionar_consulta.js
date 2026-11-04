import dados from "./dados.js";
import buscarMedicoId from "./buscar_medicoid.js";
import buscarPacienteId  from "./buscar_pacienteid.js";

function adicionarConsulta(idMedico, idPaciente, data, descricao) {
  const medico = buscarMedicoId(idMedico);
  const paciente = buscarPacienteId(idPaciente);

  if (!medico) {
    console.log("Erro: Médico não encontrado.");
    return false;
  }
  if (!paciente) {
    console.log("Erro: Paciente não encontrado.");
    return false;
  }

  let novoId = 1;
  if (dados.consultas.length > 0) {
    novoId = dados.consultas[dados.consultas.length - 1].id + 1;
  }

  const novaConsulta = {
    id: novoId,
    idMedico: idMedico,
    idPaciente: idPaciente,
    data: data,
    descricao: descricao,
  };

  dados.consultas.push(novaConsulta);
  console.log("Consulta agendada com sucesso!");
  return true;
}

export default adicionarConsulta;