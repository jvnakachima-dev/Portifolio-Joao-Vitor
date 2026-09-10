const projects = [
  {
    category: 'Barbearia',
    title: 'Barbearia Alpha',
    description:
      'Uma presença digital marcante para uma barbearia contemporânea, com foco em serviços, estilo e agendamento.',
  },
  {
    category: 'Advocacia',
    title: 'Advocacia Martins',
    description:
      'Uma interface sóbria e confiável para apresentar áreas de atuação e facilitar o primeiro contato.',
  },
  {
    category: 'Saúde e bem-estar',
    title: 'Clínica Aura',
    description:
      'Uma experiência acolhedora para comunicar especialidades, cuidado e formas de atendimento.',
  },
]

function Projects() {
  return (
    <section className="projects" id="projetos" aria-labelledby="projects-title">
      <header className="projects__header">
        <p className="projects__eyebrow">Projetos selecionados</p>

        <h2 id="projects-title">
          Alguns projetos que mostram o que posso criar.
        </h2>
      </header>

      <div className="projects__grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card__preview" aria-hidden="true">
              <span>Projeto conceitual</span>
              <strong>{project.title}</strong>
            </div>

            <div className="project-card__content">
              <p className="project-card__category">
                Projeto conceitual — {project.category}
              </p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <a href="#contato" className="project-card__link">
                Quero algo assim ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects