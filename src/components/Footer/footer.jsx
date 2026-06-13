import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          (c) {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer