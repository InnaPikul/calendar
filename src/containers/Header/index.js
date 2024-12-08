import Container from '../../components/Container'
import './index.modules.sass'

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <a href="/" className="logo">
            logo
          </a>
          <nav className="header__nav">
            <a className="header__navItem" href="/">
              Main
            </a>
            <a className="header__navItem" href="/">
              Events
            </a>
            <a className="header__navItem header__navItem--active" href="/">
              Calendar
            </a>
            <a className="header__navItem" href="/">
              FAQ
            </a>
          </nav>
        </div>
        <hr className="separator" />
      </Container>
    </header>
  )
}

export default Header
