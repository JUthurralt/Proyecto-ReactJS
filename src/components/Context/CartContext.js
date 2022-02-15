import React, { createContext } from "react";
import { useState, useContext } from "react/cjs/react.development";


export const CartContext = createContext([]);
export function useCartContext() {
  return useContext(CartContext);
}

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarAlCarrito = (items, cantidad) => {
    const indice = cartList.findIndex((i) => i.id === items.id);

    if (indice > -1) {
      const cantVieja = cartList[indice].cantidad;
      let cantNueva = cantVieja + items.cantidad;
      cartList[indice].cantidad = cantNueva;
      let arrAux = [...cartList];
      setCartList(arrAux);
    } else {
      setCartList([...cartList, items]);
    }
  }

  function vaciarCarrito() {
    setCartList([]);
  }

  const deleteItem = (id) => {
    const itemFiltrado = cartList.filter((prod) => prod.id !== id)
    setCartList(itemFiltrado)
  }

  const total = () => {
    const totalCarrito = cartList.reduce(
      (prev, curr) => prev + curr.precio * curr.cantidad,
      0
    );
    return totalCarrito;
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        deleteItem,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
