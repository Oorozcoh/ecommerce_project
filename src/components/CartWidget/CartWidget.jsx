import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import "./CartWidget.css";

const CartWidget = () => {

  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart className="cart-icon" />

      {totalItems > 0 && (
        <>
          <span className="cart-badge">
            {totalItems}
          </span>

          <span className="cart-text">
            Ir al carrito
          </span>
        </>
      )}
    </Link>
  );
};

export default CartWidget;