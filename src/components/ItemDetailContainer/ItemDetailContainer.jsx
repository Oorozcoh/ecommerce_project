import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { productos } from "../../data/productos";
import { CartContext } from "../../context/CartContext";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  const { itemId } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);

  const handleCantidad = (operacion) => {
    if (operacion === "incrementar" && cantidad < item.stock) {
      setCantidad(cantidad + 1);
    } else if (operacion === "decrementar" && cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  useEffect(() => {
    const getProducto = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(p => p.id === itemId));
      }, 500);
    });

    getProducto.then(res => setItem(res));
  }, [itemId]);


  const handleAgregar = () => {
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="detalle-contenedor">
      {item ? (

<div className="detalle-card">

  <div className="detalle-izquierda">
    {item.imagen && (
      <img
        src={`/img/${item.imagen}`}
        alt={item.nombre}
        className="detalle-img"
      />  
    )}
  </div>

  <div className="detalle-derecha">
    <h2 className="glow">{item.nombre}</h2>
    <div className="separador">
      <hr />
    </div>
    <p>{item.detalle}</p>
        <div className="separador">
      <hr />
    </div>
    <p>Categoría: {item.categoria}</p>
    <p>Precio: ${item.precio}</p>
    <p>Stock: {item.stock}</p>

    <div className="contador">
      <button onClick={() => handleCantidad("decrementar")}>-</button>
      <span>{cantidad}</span>
      <button onClick={() => handleCantidad("incrementar")}>+</button>
    </div>

    <button className="btn-carrito" onClick={handleAgregar}>
      Agregar al carrito
    </button>
  </div>

</div>

      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;