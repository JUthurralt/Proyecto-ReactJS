import { useCartContext } from "../Context/CartContext";
import "../Cart/Cart.css";

const Cart = () => {
  const { cartList, vaciarCarrito } = useCartContext();
  return (
    <div>
      <table className="tabla">
          <tbody>
        <tr>
          <th>Marca</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
            {cartList.map((prod) => (
              <tr>
                  <td>{prod.marca} </td>
                  <td>{prod.nombre} </td>
                  <td>{prod.cantidad} </td>
                  <td>$
                      {prod.precio} </td>
              </tr>
            ))}
            </tbody>
      </table>
      <div className="vaciar">
      <button  onClick={vaciarCarrito}>Vaciar carrito</button>
      </div>
    </div>
  );
};

export default Cart;
