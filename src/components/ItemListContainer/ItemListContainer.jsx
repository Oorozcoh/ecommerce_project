import { productos } from "../../data/productos";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 500);
    });

    getProductos.then((res) => {
      if (categoria) {
        setItems(res.filter((p) => p.categoria === categoria));
      } else {
        setItems(res);
      }
    });
  }, [categoria]);

  return (
  <div className="contenedor">
    {items.map((producto) => (
      <div key={producto.id} className="card">

        <img 
          src={`/img/${producto.imagen}`} 
          alt={producto.nombre}
          className="img-producto"
        />

        <h3 className="glow">{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>

        <Link to={`/item/${producto.id}`}>
          <button className="btn-detalle">
            Ver detalle
          </button>
        </Link>

      </div>
    ))}
  </div>
);
};

export default ItemListContainer;