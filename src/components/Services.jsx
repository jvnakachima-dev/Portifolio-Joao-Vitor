const services = [
  {
    number: '01',
    title: 'Landing Pages',
    description:
      'Páginas focadas em apresentar uma oferta, serviço ou campanha e transformar visitantes em contatos.',
  },
  {
    number: '02',
    title: 'Sites Institucionais',
    description:
      'Sites completos para empresas que precisam apresentar sua marca, serviços, localização e formas de contato.',
  },
  {
    number: '03',
    title: 'Sites Personalizados',
    description:
      'Projetos desenvolvidos sob medida para negócios que precisam de uma experiência digital mais exclusiva.',
  },
]

function Services() {
  return (
    <section className="services" id="servicos" aria-labelledby="services-title">
      <header className="services__header">
        <p className="services__eyebrow">O que eu faço</p>

        <h2 id="services-title">
          Tudo que você precisa para colocar sua empresa na internet.
        </h2>
      </header>

      <div className="services__grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-card__number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services