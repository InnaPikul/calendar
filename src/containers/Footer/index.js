import './index.modules.sass'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <a href="/" className="logo logo--lg footer__logo">
            logo
          </a>
          <nav className="footer__nav">
            <a href="/" className="footer__navItem">
              Main
            </a>
            <a href="/" className="footer__navItem">
              Events
            </a>
            <a href="/" className="footer__navItem">
              Calendar
            </a>
            <a href="/" className="footer__navItem">
              FAQ
            </a>
          </nav>
          <div className="copyright">© 2022 All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
