import { useCartContext } from "../Context/CartContext";
import "../Cart/Cart.css";
import { Link } from 'react-router-dom';
import { getDefaultNormalizer } from "@testing-library/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cartList, vaciarCarrito, deleteItem, total } = useCartContext();
  // console.log(cartList)

  const realizarCompra = async() => {
    let orden = {}

    orden.buyer= { nombre: 'Julian', email: 'j@gmail.com', tel: '12345678'}
    orden.total = total();
    orden.items = cartList.map(cartItem  => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad;
      const cantidad = cartItem.cantidad;

      return {id, nombre, precio, cantidad}
        console.log(cartList)
    })

    const db = getFirestore()
    const ordenCollection = collection(db, 'ordenes')
    await addDoc(ordenCollection, orden)
    .then(resp => console.log(resp))

  }
  return (
    <>
    {cartList.length === 0 ? (
      <div className="sinProd">
        <h2>No agregaste ningún producto al carrito.</h2>
        <Link to="/">
          <button className="detail">Ir al catálogo.</button>
        </Link>
      </div>
    ) : (
      <>
    <div>
      <table className="tabla">
          <tbody>
        <tr>
          <th>Marca</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Borrar</th>
          <th>Total</th>
        </tr>
            {cartList.map((prod) => (
              <tr key={prod.key}>
                  <td>{prod.marca} </td>
                  <td>{prod.nombre} </td>
                  <td>{prod.cantidad} </td>
                  <td>$
                      {prod.precio} </td>
                  <td><button onClick={() => deleteItem(prod.id)}>X</button></td>
                  <td>$
                      {total()}</td>
              </tr>
            ))}
            </tbody>
      </table>
      <div className="vaciar">
      <button  onClick={vaciarCarrito}>Vaciar carrito</button>
      <button onClick={realizarCompra}>Finalizar compra</button>
      </div>
    </div>
    </>
)}
    </>
  );
};

export default Cart;
