function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <p className="hero__eyebrow">✦ Web Design & Front-End</p>

      <h1 id="hero-title">
        Seu negócio merece um site tão profissional quanto ele é.
      </h1>

      <p className="hero__description">
        Crio sites modernos, rápidos e responsivos que ajudam empresas a
        fortalecer sua presença digital e transformar visitantes em clientes.
      </p>

      <div className="hero__actions">
        <a href="#contato" className="button button--primary">
          Solicitar orçamento ↗
        </a>

        <a href="#projetos" className="button button--secondary">
          Ver projetos ↓
        </a>
      </div>
    </section>
  )
}

export default Hero