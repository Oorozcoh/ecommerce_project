import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{totalItems}</span>
    </div>
  );
};

export default CartWidget;