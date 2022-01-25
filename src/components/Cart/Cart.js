import { useCartContext } from "../Context/CartContext";
import "../Cart/Cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartList, vaciarCarrito, deleteItem, total } = useCartContext();
  console.log(cartList)
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
              <tr>
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
      <button>Finalizar compra</button>
      </div>
    </div>
    </>
)}
    </>
  );
};

export default Cart;
