import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto, cantidad) => {
  const existe = carrito.find(item => item.id === producto.id);

  if (existe) {
    
    const carritoActualizado = carrito.map(item =>
      item.id === producto.id
        ? { ...item, cantidad: item.cantidad + cantidad }
        : item
    );

    setCarrito(carritoActualizado);
  } else {
    
    setCarrito([...carrito, { ...producto, cantidad }]);
  }
};

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};