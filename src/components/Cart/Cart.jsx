import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import "./Cart.css";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
const { carrito, totalCompra, eliminarItem, vaciarCarrito } = useContext(CartContext);

const handleEliminar = (id, nombre) => {

  eliminarItem(id);

  toast.info(
    `${nombre} eliminado del carrito`
  );

};

const handleVaciarCarrito = () => {

  vaciarCarrito();

  toast.warning(
    "Carrito vaciado"
  );

};


return (
  <div>


<h1 className="titulo-carrito">
  Mi Carrito <FaShoppingCart className="icono-carrito" />
</h1>

    {carrito.length === 0 ? (
      <p className="carrito-vacio">El carrito está vacío.</p>
    ) : (
      <>
        {carrito.map((producto) => (
          
        <div key={producto.id} className="item-carrito">

          <img
            src={`/img/${producto.imagen}`}
            alt={producto.nombre}
            className="img-carrito"
          />

          <div className="info-carrito">
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>
              Subtotal: $
              {producto.precio * producto.cantidad}
            </p>
          </div>

          <button
            className="btn-eliminar"
            onClick={() =>
              handleEliminar(
                producto.id,
                producto.nombre
              )
            }
          >
            Eliminar
          </button>


        </div>

        ))}

        {/* Total de la compra */}
        <h2>Total: ${totalCompra}</h2>

        <Link to="/checkout">
          <button>
            Finalizar compra
          </button>
        </Link>


        <button onClick={handleVaciarCarrito}>
          Vaciar carrito
        </button>

      </>
    )}
  </div>
);
};


export default Cart;