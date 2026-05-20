import logo from "../../assets/LogoOscar.png"
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#979393" }}>
      <div className="brand">
        <img src={logo} className="brand-img" alt="" />      
      </div> 

      <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar