export default function Footer(){
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col footer-left">
          <img src="/logo.svg" alt="IndustrialSys" className="footer-logo" />
          <div className="copyright">© {year} IndustrialSys</div>
        </div>

        <div className="footer-col footer-center">
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
            <a href="#">Privacy</a>
          </nav>
        </div>

        <div className="footer-col footer-right">
          <div>Contact: <a href="mailto:sales@industrialsys.example">sales@industrialsys.example</a></div>
          <div className="social">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
