import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js"
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [error, setError] = useState(null);

    useEffect(() => {

      const getProducts = async () => {

        try {

          const productsRef = collection(db, "products");

          let consulta;

          if (categoryId) {
            consulta = query(
              productsRef,
              where("category", "==", categoryId),
              where("stock", ">", 0)
            );
          } else {
            consulta = query(
              productsRef,
              where("stock", ">", 0)
            );
          }

          const dataDb = await getDocs(consulta);

          const productsAdapted = dataDb.docs.map((doc) => ({
            id: doc.id,
            nombre: doc.data().name,
            categoria: doc.data().category,
            precio: doc.data().price,
            imagen: doc.data().image,
            stock: doc.data().stock,
            detalle: doc.data().description,
          }));

          setItems(productsAdapted);

        } catch (error) {
          setError(error.message);
        }

      };

      getProducts();

    }, [categoryId]);


    if (error) {
      return <h2>Error: {error}</h2>;
    }

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