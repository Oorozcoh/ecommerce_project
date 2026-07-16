import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { addDoc, collection, doc, updateDoc, getDoc } from "firebase/firestore";
import db from "../../db/db";
import { toast } from "react-toastify";
import CheckoutForm from "./CheckoutForm.jsx";
import "./Checkout.css";

const Checkout = () => {

  const { carrito, totalCompra, vaciarCarrito } = useContext(CartContext);

const [buyer, setBuyer] = useState({
  nombre: "",
  telefono: "",
  email: "",
  confirmarEmail: ""
});

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => { 

    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });

  };


  
const handleSubmit = async (e) => {

  e.preventDefault();

  if (buyer.email !== buyer.confirmarEmail) {
    toast.error(
      "Los correos electrónicos no coinciden"
    );
    return;
  }

  try {

    // VALIDAMOS EL STOCK REAL DESDE FIREBASE

    for (const producto of carrito) {

      const productRef = doc(
        db,
        "products",
        producto.id
      );

      const productSnapshot =
        await getDoc(productRef);

      const stockActual =
        productSnapshot.data().stock;

      if (producto.cantidad > stockActual) {

        toast.error(
          `Stock insuficiente para ${producto.nombre}`,
          {
            position: "top-center",
            style: {
              background: "#140133",
              color: "#ffffff",
              border: "1px solid #ff00ff"
            }
          }
        );

        return;
      }

    }

    // CREAMOS LA ORDEN

    const orden = {
      buyer,
      items: carrito,
      total: totalCompra,
      fecha: new Date()
    };

    const ordersRef = collection(
      db,
      "orders"
    );

    const ordenGenerada =
      await addDoc(
        ordersRef,
        orden
      );

    // DESCONTAMOS DEL STOCK

    for (const producto of carrito) {

      const productRef = doc(
        db,
        "products",
        producto.id
      );

      const productSnapshot =
        await getDoc(productRef);

      const stockActual =
        productSnapshot.data().stock;

      await updateDoc(
        productRef,
        {
          stock:
            stockActual -
            producto.cantidad
        }
      );

    }

    setOrderId(
      ordenGenerada.id
    );

    toast.success(
      `Compra realizada correctamente`
    );

    vaciarCarrito();

  } catch (error) {

    toast.error(
      error.message
    );

  }

};
 

    if (orderId) {
    return (
        <div>

        <h1>
            ¡Compra realizada con éxito!
        </h1>

        <h2>
            ID de compra:
        </h2>

        <p className="form-control"> {orderId} </p>

        </div>
    );
    }


  return (
    <div className="container mt-4">

      {/* <h1>Finalizar Compra</h1> */}

      <CheckoutForm 
        buyer={buyer} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />

    </div>
  );
};

export default Checkout;