const medicos =[
      {id: 1, nome: "Dr. Samuel", especialidade : "Pediatria", telefone: "42 999455589"},
      {id: 2, nome: "Dra. Eliana", especialidade: "Cardiologia", telefone:"42 999245789"},
];

const pacientes = [
    {id: 1, nome: "Joao", DataNascimento: "2003/12/07"},
    {id: 2, nome: "Eliel", DataNascimento: "2001/07/21"}
];

let consultas = [
    {id: 1, data: "2026/11/01", idMedico: 1, idPaciente: 1, descricao: "Consulta Inicial"},
    {id: 2, data: "2026/11/03", idMedico: 2, idPaciente: 1, descricao: "Seguimento da Consulta"},
    {id: 3, data: "2026/11/04", idMedico: 1, idPaciente: 2, descricao: "Consulta de rotina "}
    
];  

export default { medicos, pacientes, consultas };