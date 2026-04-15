export default function App() {
  return (
    <>
      <header>
        <h1>Meu Portfólio</h1>
      </header>

      <main>
        <section className="sobre-mim">
          <h2>Sobre Mim</h2>
          <p>
            ola, meu nome é Gessica sou estudante de Tecnologia em Sistemas para Internet, apaixonada por
            desenvolvimento web e em constante aprendizado nas tecnologias HTML,
            CSS, JavaScript e React. Busco aprimorar minhas habilidades na criação
            de interfaces modernas, responsivas e funcionais para me tornar uma
            desenvolvedora web qualificada.
          </p>
        </section>

        <section className="projetos">
          <h2>Meus Projetos</h2>

          <div className="container">
            <div className="card">
              <h3>Sistema de Fiscalização</h3>
              <p>Sistema web para cadastro e consulta de fiscalizações.</p>
            </div>

            <div className="card">
              <h3>Dashboard de Irregularidades</h3>
              <p>Dashboard com filtros, gráficos e estatísticas.</p>
            </div>

            <div className="card">
              <h3>Automação Google Drive</h3>
              <p>Automação de documentos e envio de e-mails.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 – Desenvolvido por Gessica Flor</p>
      </footer>
    </>
  );
}
