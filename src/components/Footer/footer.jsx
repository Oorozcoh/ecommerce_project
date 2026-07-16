import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          (c) {new Date().getFullYear()} OorozcoH, 2.o.H. All Rights Reserved. - Mi Tienda.
        </p>
        <p>
          By using this website, you are agreeing to the Terms of Service and Privacy Policy.
        </p>
      </div>
    </footer>
  )
}

export default Footer