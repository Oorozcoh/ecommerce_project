import { Link } from "react-router-dom";
import logo from "../../assets/LogoOscar.png";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">

    <div className="navbar-logo">
      <img 
        src={logo} 
        alt="logo" 
        className="logo-img"
      />
      <h2 className="glow">Mi Tienda</h2>
    </div>


      <ul className="navbar-menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/Lácteos">Lácteos</Link></li>
        <li><Link to="/category/Fruver">Frutas y verduras</Link></li>
        <li><Link to="/category/Panadería">Panadería</Link></li>
        <li><Link to="/category/Despensa">Despensa</Link></li>
        <li><Link to="/category/Bebidas">Bebidas</Link></li>
        <li><Link to="/category/otros">Otros</Link></li>
      </ul>

      <CartWidget/>
    </nav>
  );
};

export default NavBar;