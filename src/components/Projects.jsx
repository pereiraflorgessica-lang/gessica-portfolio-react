function Projects() {
  const projetos = [
    {
      titulo: "Sistema de Fiscalização",
      descricao: "Sistema web para cadastro e consulta de fiscalizações."
    },
    {
      titulo: "Dashboard de Irregularidades",
      descricao: "Dashboard com filtros e gráficos."
    },
    {
      titulo: "Automação Google Drive",
      descricao: "Automação de documentos e envio de e-mails."
    }
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((projeto, index) => (
        <div key={index}>
          <h3>{projeto.titulo}</h3>
          <p>{projeto.descricao}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
