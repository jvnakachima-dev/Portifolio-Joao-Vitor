import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Intro from './components/Intro'
import Services from './components/Services'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Intro />
        <Services />
        <Projects />

        <section id="sobre" aria-label="Sobre João Vitor" />
        <section id="contato" aria-label="Contato" />
      </main>
    </>
  )
}

export default App