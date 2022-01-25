import { createContext } from "react";
import { useState, useContext } from "react/cjs/react.development";


export const CartContext = createContext([]);
export function useCartContext() {
  return useContext(CartContext);
}

export const CartContextProvider = ({ children }) => {
  const [cartList, setcartList] = useState([]);

  function agregarAlCarrito(items) {
    // setcartList( [...cartList, items] )
    const indice = cartList.findIndex((i) => i.id === items.id);

    if (indice > -1) {
      const cantVieja = cartList[indice].cantidad;
      let cantNueva = cantVieja + items.cantidad;
      cartList[indice].cantidad = cantNueva;
      let arrAux = [...cartList];
      setcartList(arrAux);
    } else {
      setcartList([...cartList, items]);
    }
  }

  function vaciarCarrito() {
    setcartList([]);
  }

  const deleteItem = (id) => {
    setcartList(cartList.filter((prod) => prod.id !== id));
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
