import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />

        <section id="projetos" aria-label="Projetos" />
        <section id="servicos" aria-label="Serviços" />
        <section id="sobre" aria-label="Sobre João Vitor" />
        <section id="contato" aria-label="Contato" />
      </main>
    </>
  )
}

export default App