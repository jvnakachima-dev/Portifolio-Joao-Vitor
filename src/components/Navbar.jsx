import { useState } from "react"
function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const fecharMenu = () => {setMenuAberto(false)}
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <a href="#inicio" className="logo" aria-label="Voltar ao início">
        JV
      </a>

      <div id="menu-principal" className={`nav-links ${menuAberto ? 'nav-links--open' : ''}`}>
        
        <a href="#projetos" onClick={fecharMenu}>Projetos</a>
        <a href="#servicos" onClick={fecharMenu}>Serviços</a>
        <a href="#sobre" onClick={fecharMenu}>Sobre</a>
        <a href="#contato" onClick={fecharMenu}>Contato</a>
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        ☰
      </button>
      
      <a href="#contato" className="nav-button">
        Vamos conversar ↗
      </a>
    </nav>
  )
}

export default Navbar
