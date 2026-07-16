import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {

    const existe = carrito.find(
      item => item.id === producto.id
    );

    if (existe) {

      const carritoActualizado = carrito.map(item =>
        item.id === producto.id
          ? {
              ...item,
              cantidad: item.cantidad + cantidad
            }
          : item
      );

      setCarrito(carritoActualizado);

    } else {

      setCarrito([
        ...carrito,
        { ...producto, cantidad }
      ]);

    }

  };

  const eliminarItem = (id) => {
    setCarrito(
      carrito.filter(
        producto => producto.id !== id
      )
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalItems = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  const totalCompra = carrito.reduce(
    (acc, item) =>
      acc + item.precio * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarItem,
        vaciarCarrito,
        totalItems,
        totalCompra
      }}
    >
      {children}
    </CartContext.Provider>
  );
};