import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { CartContext } from "../../context/CartContext.jsx";
import "./ItemDetailContainer.css";
import { toast } from "react-toastify"

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

    const getProduct = async () => {
      try {
        const productRef = doc(db, "products", itemId);
        const productDb = await getDoc(productRef);

        if (productDb.exists()) {
          const data = productDb.data();

          setItem({
            id: productDb.id,
            nombre: data.name,
            categoria: data.category,
            precio: data.price,
            imagen: data.image,
            detalle: data.description,
            stock: data.stock
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

  getProduct();

}, [itemId]);


  const handleAgregar = () => {

    agregarAlCarrito(item, cantidad);

    toast.success(
      `${cantidad} ${item.nombre} agregado al carrito`,
      {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );

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
    <h2 className="titulo-producto">
      {item.nombre}
    </h2>
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